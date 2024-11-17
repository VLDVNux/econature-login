import { useState } from 'react'
// import './navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#2E7D32',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px' // Added margin to move logo right
      }}>
        <a href="/" style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          ECONATURE.
        </a>
        <button onClick={toggleMenu} style={{
          display: 'none',
          '@media (max-width: 768px)': {
            display: 'block'
          }
        }}>
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginRight: '40px' // Added margin to shift menu left
      }}>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '0.5rem',
          margin: 0,
          padding: 0
        }}>
          <li><a href="/" style={{color: '#fff', textDecoration: 'none'}}>HOME</a></li>
          <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
          <li><a href="/about" style={{color: '#fff', textDecoration: 'none'}}>TENTANG KAMI</a></li>
          <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
          <li><a href="/services" style={{color: '#fff', textDecoration: 'none'}}>INFORMASI & BERITA</a></li>
          <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
          <li><a href="/portfolio" style={{color: '#fff', textDecoration: 'none'}}>POINT & REWARD</a></li>
          <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
          <li><a href="/contact" style={{color: '#fff', textDecoration: 'none'}}>FITUR</a></li>
          <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
          <li><a href="/contact" style={{color: '#fff', textDecoration: 'none'}}>MASUK</a></li>
          <li style={{borderLeft: '1px solid #fff', height: '20px', margin: '0 10px'}}></li>
          <li><a href="/daftar" style={{color: '#fff', textDecoration: 'none'}}>DAFTAR</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
