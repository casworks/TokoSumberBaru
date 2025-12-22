import u1KelengkapanProduk from '../assets/ilustrasi/u1-kelengkapan-produk.png';
import u2HargaStabil from '../assets/ilustrasi/u2-harga-stabil.png';
import u3SiapGrosir from '../assets/ilustrasi/u3-siap-grosir.png';
import u4DekatMudah from '../assets/ilustrasi/u4-dekat-mudah-dijangkau.png';

import k1Sembako from '../assets/ilustrasi/k1-sembako.png';
import k2MakananMinuman from '../assets/ilustrasi/k2-makanan-dan-minuman.png';
import k3PerawatanKesehatan from '../assets/ilustrasi/k3-perawatan-dan-kesehatan.png';
import k4PerlengkapanSekolah from '../assets/ilustrasi/k4-perlengkapan-sekolah.png';
import k5KebersihanRumah from '../assets/ilustrasi/k5-kebersihan-rumah.png';
import k6ProdukBayi from '../assets/ilustrasi/k6-produk-bayi.png';
import k7MakananHewan from '../assets/ilustrasi/k7-makanan-hewan.png';

import l1Ecer from '../assets/ilustrasi/l1-ecer.png';
import l2Grosir from '../assets/ilustrasi/l2-grosir.png';
import l3Reseller from '../assets/ilustrasi/l3-reseller.png';
import l4Wa from '../assets/ilustrasi/l4-wa.png';

export const identity = {
  name: 'Toko Sumber Baru',
  type: 'Toko kebutuhan harian & perlengkapan rumah',
  location: 'Sumberwaru, Banyuputih – Situbondo',
  hours: 'Setiap hari, 05:00 - 22:00',
  hoursFooter: '05.00 – 22.00 WIB',
  hoursShort: '05-22:00',
  foundedYear: 1987,
  footerBlurb: 'Usaha keluarga yang melayani kebutuhan harian warga Sumberwaru dan sekitarnya sejak 1987.',
  whatsapp: '081776340014',
  whatsappLink: 'https://wa.me/6281776340014'
};

export const heroContent = {
  headline: 'Memenuhi Kebutuhan Harian Masyarakat Area Sumberwaru',
  cta: 'Tanya Stok via WhatsApp',
  imageAlt: 'Fasad Toko Sumber Baru'
};

export const highlights = [
  {
    title: 'Kelengkapan Produk',
    desc: 'Sembako, rokok, minuman, snack, kebutuhan rumah tangga',
    icon: u1KelengkapanProduk
  },
  { title: 'Harga Stabil & Bersaing', desc: 'Cocok untuk rumah tangga & warung', icon: u2HargaStabil },
  { title: 'Siap Grosir & Langganan', desc: 'Reseller dan pengecer area sekitar', icon: u3SiapGrosir },
  { title: 'Dekat & Mudah Dijangkau', desc: 'Lokasi strategis di area Sumber waru', icon: u4DekatMudah }
];

export const stats = [
  { label: 'Reseller aktif', value: '8+' },
  { label: 'Pelanggan', value: '1.289' },
  { label: 'Produk tersedia', value: '40+' },
  { label: 'Beroperasi sejak', value: '1987' }
];

export const categoriesHome = [
  { title: 'Sembako', desc: 'Beras, minyak, gula, telur', icon: k1Sembako },
  { title: 'Makanan & Minuman', desc: 'Mie instan, snack, kopi/teh, air mineral', icon: k2MakananMinuman },
  { title: 'Perawatan & Kesehatan', desc: 'Sabun, sampo, pasta gigi, obat ringan', icon: k3PerawatanKesehatan },
  { title: 'Perlengkapan Sekolah', desc: 'ATK, buku tulis, kebutuhan belajar', icon: k4PerlengkapanSekolah },
  { title: 'Kebersihan Rumah', desc: 'Deterjen, sabun cuci, tisu, kantong sampah', icon: k5KebersihanRumah },
  { title: 'Produk Bayi', desc: 'Popok, tisu basah, makanan bayi', icon: k6ProdukBayi },
  { title: 'Makanan Hewan', desc: 'Makanan & camilan hewan peliharaan', icon: k7MakananHewan }
];

export const shoppingSteps = ['Hubungi via WhatsApp', 'Tanyakan stok / harga', 'Ambil di toko / kirim (jika tersedia)'];

export const productCategories = [
  {
    title: 'Sembako',
    items: [
      'Beras',
      'Gula',
      'Minyak goreng',
      'Daging (sapi/ayam)',
      'Telur',
      'Susu',
      'Bawang merah',
      'Bawang putih',
      'Garam',
      'Gas elpiji / minyak tanah'
    ],
    icon: k1Sembako
  },
  {
    title: 'Bumbu Dapur dan Baking',
    items: [
      'Tepung serbaguna',
      'Tepung kanji',
      'Boncabe',
      'Cabai bubuk',
      'Garam',
      'MSG',
      'Baking soda',
      'Baking powder'
    ],
    icon: k1Sembako
  },
  {
    title: 'Camilan',
    items: ['Snack kemasan', 'Keripik', 'Biskuit', 'Makanan ringan harian'],
    icon: k2MakananMinuman
  },
  {
    title: 'Minuman Serbuk',
    items: ['Jasjus', 'Pop Ice', 'Minuman serbuk lainnya'],
    icon: k2MakananMinuman
  },
  {
    title: 'Minuman Botol',
    items: ['Minuman isotonik', 'Kopi botol', 'Minuman bersoda'],
    icon: k2MakananMinuman
  },
  {
    title: 'Air Minum',
    items: ['Air galon', 'Air mineral kemasan'],
    icon: k2MakananMinuman
  },
  {
    title: 'Roti & Kue Kering',
    items: ['Roti sobek', 'Roti tawar', 'Keciput', 'Keripik singkong', 'Kue kering', 'Dan sejenisnya'],
    icon: k2MakananMinuman
  },
  {
    title: 'Perawatan Diri',
    items: ['Sabun mandi', 'Sampo', 'Skincare dasar', 'Sunscreen'],
    icon: k3PerawatanKesehatan
  },
  {
    title: 'Kesehatan',
    items: ['Betadine', 'Salep', 'Plester', 'Obat luar ringan'],
    icon: k3PerawatanKesehatan
  },
  {
    title: 'Alat Sekolah',
    items: ['Buku tulis', 'Kertas kado', 'Pensil', 'Pulpen', 'Penggaris'],
    icon: k4PerlengkapanSekolah
  },
  {
    title: 'Atribut & Aksesoris Sekolah',
    items: ['Topi sekolah', 'Dasi'],
    icon: k4PerlengkapanSekolah
  },
  {
    title: 'Alat Kebersihan',
    items: ['Pel', 'Sapu', 'Tempat sampah', 'Timba'],
    icon: k5KebersihanRumah
  },
  {
    title: 'Produk Kebersihan',
    items: ['Detergen', 'Pewangi pakaian', 'Pembersih lantai'],
    icon: k5KebersihanRumah
  },
  {
    title: 'Produk Bayi',
    items: ['Dot bayi', 'Sabun bayi', 'Perlengkapan mandi bayi'],
    icon: k6ProdukBayi
  },
  {
    title: 'Perlengkapan Bayi',
    items: ['Handuk bayi', 'Pakaian bayi'],
    icon: k6ProdukBayi
  },
  {
    title: 'Pakan Hewan',
    items: ['Pakan kucing', 'Pakan ayam', 'Pakan burung'],
    icon: k7MakananHewan
  }
];

export const featuredProducts = [
  { name: 'Beras premium 5kg', pack: 'Kemasan pabrik', note: 'Ecer & grosir' },
  { name: 'Minyak goreng 2L', pack: 'Botol/pouch', note: 'Ecer & grosir' },
  { name: 'Mie instan', pack: 'Satuan / dus', note: 'Ecer & grosir' },
  { name: 'Galon isi ulang', pack: 'Per galon', note: 'Ecer' },
  { name: 'Detergen cair', pack: 'Refill & botol', note: 'Ecer' }
];

export const servicesList = [
  { title: 'Eceran Harian', desc: 'Belanja cepat kebutuhan rumah tangga', icon: l1Ecer },
  { title: 'Grosir untuk Warung', desc: 'Stok dus untuk pengecer area sekitar', icon: l2Grosir },
  { title: 'Langganan Reseller', desc: 'Pemesanan rutin via WhatsApp', icon: l3Reseller },
  { title: 'Pemesanan WhatsApp', desc: 'Tanya stok & siapkan pesanan sebelum datang', icon: l4Wa }
];

export const serviceAreas = ['Sumberwaru', 'Sumberanyar', 'Banyuputih', 'Sukorejo', 'Karang Tekok', 'Sekitarnya'];

export const storyText =
  'Toko Sumber Baru berdiri sejak tahun 1987 sebagai usaha keluarga di Sumberwaru, Banyuputih, Situbondo. Melayani kebutuhan harian warga dan pelaku usaha sekitar dengan stok stabil, harga wajar, serta layanan kasir yang responsif.';

export const valuesList = [
  'Stok stabil untuk sembako utama',
  'Harga wajar & konsisten',
  'Pelayanan cepat di kasir',
  'Siap dukung ecer & grosir',
  'Respons cepat via WhatsApp'
];

export const contacts = {
  phone: '081776340014',
  direction: 'Sumberwaru, Banyuputih, Situbondo.',
  map: 'Pin Google Maps: Toko Sumberbaru Shovi.',
  mapsLink:
    'https://www.google.com/maps/place/Toko+Sumberbaru+Shovi/@-7.7819402,114.3031418,21z/data=!4m6!3m5!1s0x2dd12858a6ccd101:0x71dcbe42f553f18f!8m2!3d-7.7819282!4d114.3033084!16s%2Fg%2F11f2s7yp87?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'
};

export const navItems = [
  { path: '/', label: 'Beranda' },
  { path: '/produk', label: 'Produk' },
  { path: '/layanan', label: 'Layanan' },
  { path: '/loker', label: 'Loker' }
];

export const jobOpenings = [
  {
    title: 'Helper Toko (Full Time)',
    type: 'Full Time',
    schedule: '07.00-15.00',
    requirements: ['Angkat/atur stok rak & gudang', 'Cek tanggal kadaluarsa', 'Sigap bantu kasir saat ramai'],
    note: 'Domisili dekat Sumberwaru lebih baik'
  }
];
