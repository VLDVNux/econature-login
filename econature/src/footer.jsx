const Footer = () => {
    return (
        <>
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>ECONATURE</h3>
            <p style={{lineHeight: '1.6'}}>
              Bersama menciptakan lingkungan yang lebih baik untuk masa depan.
            </p>
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
};


      
export default Footer;