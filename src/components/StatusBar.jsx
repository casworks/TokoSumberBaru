import { useEffect, useState } from 'react';

const SHEET_URL = 'https://opensheet.elk.sh/1u0CTfLgHBTxfuKUmJdjJr5VxVTSZmCgoggQnNiOQ1QI/Form Responses 1';
const OPEN_HOUR = 5;
const CLOSE_HOUR = 22;

const defaultState = { state: 'open', label: 'Buka - 05.00-22.00', timestamp: '' };

const timeAgo = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  const diffMs = Date.now() - date.getTime();
  if (diffMs < 0) return '';
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return 'baru saja';
  if (minutes < 60) return `${minutes} menit lalu`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} jam lalu`;
  const days = Math.floor(hours / 24);
  return `${days} hari lalu`;
};

const parseTimestamp = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const isWithinOperational = (ref = new Date()) => {
  const hours = ref.getHours() + ref.getMinutes() / 60;
  return hours >= OPEN_HOUR && hours < CLOSE_HOUR;
};

const deriveState = (row = {}) => {
  const statusRaw =
    row.Status ||
    row.status ||
    row['Status Toko'] ||
    row['Kolom B'] ||
    row['kolom b'] ||
    row['Jawaban 1'] ||
    '';
  const timestampRaw =
    row.Timestamp ||
    row.timestamp ||
    row['Waktu'] ||
    row['Sejak'] ||
    row['Sejak Jam'] ||
    row['Jawaban 2'] ||
    '';

  const tsDate = parseTimestamp(timestampRaw) || new Date();
  const lowered = String(statusRaw).toLowerCase();

  if (lowered.includes('istirahat')) {
    const rel = timeAgo(timestampRaw);
    const detail = rel || timestampRaw ? `- ${rel || timestampRaw}` : '';
    return { state: 'break', label: `Istirahat ${detail}`.trim(), timestamp: timestampRaw };
  }

  const withinHours = isWithinOperational(tsDate);
  if (lowered.includes('tutup') || !withinHours) {
    return { state: 'closed', label: 'Tutup - Buka 05.00', timestamp: timestampRaw };
  }

  if (lowered.includes('buka') && withinHours) {
    return { state: 'open', label: 'Buka - 05.00-22.00', timestamp: timestampRaw };
  }

  return withinHours ? defaultState : { state: 'closed', label: 'Tutup - Buka 05.00', timestamp: '' };
};

const StatusBar = () => {
  const [status, setStatus] = useState(defaultState);

  useEffect(() => {
    let canceled = false;

    const fetchStatus = async () => {
      try {
        const res = await fetch(SHEET_URL, { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        const latest = Array.isArray(data) && data.length ? data[data.length - 1] : null;
        if (!canceled && latest) setStatus(deriveState(latest));
      } catch (_) {
        // silent fallback
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60_000);
    return () => {
      canceled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`status-banner status-banner--${status.state}`}>
      <div className="status-banner__text">{status.label}</div>
      {status.state === 'break' && status.timestamp && (
        <div className="status-banner__meta">Sejak: {status.timestamp}</div>
      )}
    </div>
  );
};

export default StatusBar;
