// import React from 'react';

const Volunteers = () => {
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
  
        <section style={{
          padding: '4rem 0',
          backgroundColor: '#f5f5f5'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem'
          }}>
            
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              gap: '2rem'
            }}>
              <div style={{
                flex: '1',
                padding: '1rem'
              }}>
                <h1 style={{
                  fontSize: 'clamp(1.8rem, 5vw, 1.5rem)',
                  fontWeight: 'bold',
                  color: '#000000',
                  marginBottom: '1rem'
                }}>
                  Ayo Menjadi Relawan!
                </h1>
                <h2 style={{
                  fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                  fontWeight: 'bold',
                  color: '#2E7D32',
                  marginBottom: '1rem'
                }}>
                  Econature
                </h2>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  lineHeight: '1.8',
                  color: '#333',
                  marginBottom: '1.5rem'
                }}>
                  EcoNature mengundang kamu untuk menjadi relawan dan ikut serta dalam kegiatan penghijauan bumi di waktu-waktu tertentu! Setelah berpartisipasi, kamu akan mendapatkan sertifikat penghargaan sebagai bentuk apresiasi atas kontribusi berharga dalam menjaga lingkungan.
                </p>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  lineHeight: '1.8',
                  color: '#333'
                }}>
                  Jadi, jangan lewatkan kesempatan untuk terlibat dalam aksi nyata ini! Pantau terus website kami untuk informasi terbaru mengenai jadwal kegiatan dan cara bergabung. Bersama, kita bisa membuat perubahan positif untuk bumi!
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
                    DAFTAR
                </button>
              </div>
  
              <div style={{ flex: '1' }}>
                <img 
                  src="../src/assets/volunteer.png" 
                  alt="Misi Kami"
                  style={{
                    width: '100%',
                    maxHeight: '500px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                />
              </div>
            </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Volunteers;
  