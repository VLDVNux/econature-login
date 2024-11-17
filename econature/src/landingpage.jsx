const Section = () => {
  return (
    <>
      <section style={{
        marginTop: '60px',
        padding: '0',
        minHeight: '100vh',
        width: '100%',
        position: 'relative', 
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url("../src/assets/bg1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll' // Changed from 'fixed' to 'scroll'
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
            marginBottom: '1rem', // Increased from 1.5rem
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Yuk Gabung Bersama
          </h1>

          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem', // Increased from 2.5rem
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            ECONATURE
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            maxWidth: '600px',
            marginBottom: '3rem', // Increased from 2rem
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            kurangi plastik, tambahkan senyuman untuk Bumi kita!
          </p>

          <button style={{
            backgroundColor: '#2E7D32',
            color: '#fff',
            padding: '1rem 5rem',
            border: 'none',
            fontSize: '1.2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Mulai
          </button>
        </div>
      </section>

      <section style={{
        padding: '4rem 0',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', // Responsive font size
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#2E7D32'
          }}>
            Tentang Kami
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive grid
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <img 
                src="../src/assets/bg1.jpg" 
                alt="About Us"
                style={{
                  width: '100%',
                  maxHeight: '500px', // Limit max height
                  objectFit: 'cover', // Maintain aspect ratio
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              />
            </div>
            
            <div style={{
              padding: '1rem' // Add padding for mobile
            }}>
              <h3 style={{
                fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', // Responsive font size
                marginBottom: '1rem',
                color: '#2E7D32'
              }}>
                Misi Kami
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.1rem)', // Responsive font size
                lineHeight: '1.8',
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Selamat datang di Econature!
                Kami percaya perubahan besar dimulai dari hal kecil. Bersama-sama menciptakan dunia yang lebih bersih, mari tingkatkan kesadaran akan dampak plastik sekali pakai dan beralih ke solusi ramah lingkungan.
              </p>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.1rem)', // Responsive font size
                lineHeight: '1.8',
                color: '#333'
              }}>
                Dengan program komunitas yang seru, event menarik, dan seminar yang penuh inspirasi, Anda dapat belajar sambil bersenang-senang! Bergabunglah dengan kami, dukung kampanye lingkungan, dan jadilah bagian dari perubahan positif untuk bumi kita! Bersama kita bisa, mewujudkan masa depan yang hijau untuk generasi bangsa!
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        backgroundColor: '#030202',
        color: '#fff',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>ECONATURE</h3>
            <p style={{lineHeight: '1.6'}}>
              Bersama menciptakan lingkungan yang lebih baik untuk masa depan.
            </p>
          </div>
          
          <div>
            <h4 style={{fontSize: '1.2rem', marginBottom: '1rem'}}>Tautan</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{marginBottom: '0.5rem'}}><a href="/" style={{color: '#fff', textDecoration: 'none'}}>Beranda</a></li>
              <li style={{marginBottom: '0.5rem'}}><a href="/about" style={{color: '#fff', textDecoration: 'none'}}>Tentang Kami</a></li>
              <li style={{marginBottom: '0.5rem'}}><a href="/services" style={{color: '#fff', textDecoration: 'none'}}>Layanan</a></li>
              <li style={{marginBottom: '0.5rem'}}><a href="/contact" style={{color: '#fff', textDecoration: 'none'}}>Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{fontSize: '1.2rem', marginBottom: '1rem'}}>Kontak</h4>
            <p style={{marginBottom: '0.5rem'}}>Email: info@econature.com</p>
            <p style={{marginBottom: '0.5rem'}}>Phone: (021) 1234-5678</p>
            <p>Alamat: Jl. Lingkungan Hijau No. 123, Jakarta</p>
          </div>
          
          <div>
            <h4 style={{fontSize: '1.2rem', marginBottom: '1rem'}}>Media Sosial</h4>
            <div style={{display: 'flex', gap: '1rem'}}>
              <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Facebook</a>
              <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Twitter</a>
              <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Instagram</a>
            </div>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p>&copy; 2024 ECONATURE. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Section
