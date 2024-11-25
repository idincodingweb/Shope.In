import React from 'react';

const InfoWeb = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-4 mb-4">Tentang Web Store Kami</h1>
      
      <h2 className="h4">Fitur-Fitur Utama</h2>
      <ul>
        <li><strong>Autentikasi Pengguna:</strong> Login/Logout, Registrasi, Validasi Email.</li>
        <li><strong>Manajemen Keranjang Belanja:</strong> Tambah ke Keranjang, Hapus dari Keranjang, Notifikasi Login.</li>
        <li><strong>Formulir Pesanan:</strong> Pesan Sekarang, Formulir Pesanan yang dikirim melalui WhatsApp.</li>
        <li><strong>Pagination:</strong> Navigasi Halaman dengan 4 produk per halaman.</li>
      </ul>

      <h2 className="h4">Proses Pengerjaan</h2>
      <p><strong>Perencanaan dan Desain:</strong> Identifikasi Kebutuhan, Desain UI/UX.</p>
      <p><strong>Pengembangan:</strong> Setup Proyek, Komponen Produk, Manajemen State, Autentikasi, Keranjang Belanja, Formulir Pesanan, Pagination.</p>
      <p><strong>Pengujian:</strong> Unit Testing, Integration Testing, User Testing.</p>
      <p><strong>Deployment:</strong> Hosting, Monitoring.</p>

      <h2 className="h4">Developer</h2>
      <p><strong>Nama:</strong> Idin Iskandar</p>
      <p>Idin Iskandar adalah seorang developer web yang berdedikasi untuk menciptakan aplikasi web yang fungsional dan user-friendly. Dengan pengalaman dalam pengembangan front-end dan back-end, Idin berfokus pada solusi yang efisien dan inovatif untuk memenuhi kebutuhan pengguna.</p>
    </div>
  );
};

export default InfoWeb;
