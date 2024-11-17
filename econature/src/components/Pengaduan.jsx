const Complaints = () => {
    return (
        <div className="font-sans bg-gray-50 text-gray-800">
            <main>
            <section style={{
        marginTop: '60px',
        padding: '0',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url("../src/assets/Section.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}>
        {/* Overlay dark */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }} />
        
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          padding: '5rem',
          color: '#fff',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Econature: Bersama untuk Bumi yang Lebih Lestari
          </h1>
          <p style={{
            fontSize: '1.5rem',
            maxWidth: '600px',
            marginBottom: '3rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Econature adalah komunitas yang bertujuan mengurangi penggunaan plastik dan meningkatkan kesadaran tentang lingkungan.
          </p>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-10 mx-auto mt-8 mb-12 max-w-4xl border border-gray-200">
  <h2 className="text-3xl font-semibold text-green-700 mb-6">Laporkan Sampah Menumpuk di Lingkungan Anda</h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input type="text" placeholder="Nama Lengkap" className="border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
    <input type="text" placeholder="Foto atau video (opsional)" className="border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
    <input type="email" placeholder="Alamat Email" className="border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
    <select className="border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600">
      <option>Jenis Sampah</option>
    </select>
    <input type="tel" placeholder="Nomor Handphone" className="border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
    <input type="text" placeholder="Alamat Lengkap" className="border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
    <input type="date" className="border p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
    <textarea placeholder="Deskripsi Singkat Masalah Sampah" className="border p-4 rounded-md md:col-span-2 h-32 focus:outline-none focus:ring-2 focus:ring-green-600"></textarea>
    <div className="md:col-span-2 flex items-center">
      <input type="checkbox" id="terms" className="mr-2 focus:ring-green-600" />
      <label htmlFor="terms" className="text-gray-600">Saya setuju dengan <a href="#" className="text-green-600 underline">Ketentuan Layanan & Kebijakan Privasi</a></label>
    </div>
    <button type="submit" className="bg-green-700 text-white py-3 rounded-md shadow-md hover:bg-green-800 transition duration-300 ease-in-out md:col-span-2">KIRIM LAPORAN</button>
    <button type="button" className="bg-green-700 text-white py-3 rounded-md shadow-md hover:bg-green-800 transition duration-300 ease-in-out md:col-span-2">DAFTAR LAPORAN</button>
  </form>
</section>


            </main>
        </div>
    );
};

export default Complaints;
