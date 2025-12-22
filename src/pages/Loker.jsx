import { identity, jobOpenings } from '../data/content.js';

const Loker = () => {
  const applyLink = `${identity.whatsappLink}?text=${encodeURIComponent(
    'Halo, saya ingin melamar posisi Helper Toko (Full Time) shift 07.00–15.00.'
  )}`;

  return (
    <main>
      <section className="section page-heading">
        <p className="eyebrow">Lowongan</p>
        <h1>Bergabung dengan {identity.name}</h1>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Posisi Tersedia</h2>
        </div>
        <div className="grid grid--two">
          {jobOpenings.map((job) => (
            <div key={job.title} className="card card--category card--tall">
              <div className="pill pill--outline">{job.type}</div>
              <h3>{job.title}</h3>
              <p className="muted">{job.schedule}</p>
              <ul className="list">
                {job.requirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
              <p className="muted">{job.note}</p>
              <a className="button button--solid" href={applyLink} target="_blank" rel="noreferrer">
                Lamar via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="cta__content">
          <h2>Kirim CV lewat WhatsApp</h2>
          <a className="button button--solid" href={applyLink} target="_blank" rel="noreferrer">
            Chat HR Toko
          </a>
        </div>
      </section>
    </main>
  );
};

export default Loker;
