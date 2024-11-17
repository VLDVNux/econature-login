import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Navbar from './navbar.jsx'
// import Section from './landingpage.jsx'
// import AboutUs from './components/TentangKami.jsx'
// import Complaints from './components/Pengaduan.jsx'
import Footer from './footer.jsx'
import Volunteers from './components/relawan.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* <Section /> */}
    {/* <App /> */}
    {/* <AboutUs /> */}
    <Volunteers />
    {/* <Complaints /> */}
<Footer/>
  </StrictMode>,
)
