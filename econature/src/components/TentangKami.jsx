// import React from 'react';

const AboutUs = () => {
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
              <h6 style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                fontWeight: 'bold',
                color: '#000000',
                marginBottom: '1rem'
              }}>
                Yuk Gabung Bersama EcoNature
              </h6>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                fontWeight: 'bold',
                color: '#2E7D32',
                marginBottom: '1rem'
              }}>
                Tentang Kami
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                lineHeight: '1.8',
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Econature adalah platform yang didedikasikan untuk menyatukan komunitas dalam menjaga dan melestarikan lingkungan. Kami percaya bahwa perubahan besar dimulai dari langkah kecil yang dilakukan bersama-sama. Dengan berfokus pada edukasi, partisipasi, dan inovasi, Econature menyediakan informasi, acara, dan program yang mendorong tindakan nyata dalam pelestarian alam. Bersama Econature, mari #PilihLestari untuk masa depan bumi yang lebih hijau dan lestari.
              </p>
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                lineHeight: '1.8',
                color: '#333'
              }}>
                Bergabunglah dengan kami, dukung kampanye lingkungan, dan jadilah bagian dari perubahan positif untuk bumi kita! Bersama kita bisa, mewujudkan masa depan yang hijau untuk generasi bangsa!
              </p>
            </div>

            <div style={{ flex: '1' }}>
              <img 
                src="../src/assets/aboutimg.png" 
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

      <section style={{
    padding: '4rem 0',
    backgroundColor: '#f5f5f5'
}}>
    <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem'
    }}> 
        <div style={{ flex: '1' }}>
            <img 
                src="../src/assets/Group.png" 
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
        
        <div style={{ flex: '1', padding: '1rem' }}>
        <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    color: '#333',
    lineHeight: '1.8'
}}>
    <div style={{
        flex: '1 1 30%',
        fontSize: 'clamp(1rem, 2vw, 1.1rem)',
        marginBottom: '1.5rem'
    }}>
      <h6 style={{
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '1rem'
      }}>
        Visi
      </h6>
        Menjadi inspirasi bagi individu untuk mengurangi plastik sekali pakai, beralih ke alternatif ramah lingkungan, dan menciptakan dampak positif bagi planet melalui pengetahuan, alat, dan komunitas yang mendukung.
    </div>
    <div style={{
        flex: '1 1 30%',
        fontSize: 'clamp(1rem, 2vw, 1.1rem)',
        marginBottom: '1.5rem'
    }}>
      <h6 style={{
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '1rem'
      }}>
        Misi
      </h6>
        Misi Econature adalah mendukung kehidupan bebas plastik sekali pakai dengan menyediakan panduan, komunitas, dan produk ramah lingkungan, serta mendorong kesadaran dan aksi berkelanjutan.
    </div>
    <div style={{
        flex: '1 1 30%',
        fontSize: 'clamp(1rem, 2vw, 1.1rem)',
        marginBottom: '1.5rem'
    }}>
      <h6 style={{
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: '1rem'
      }}>
        Goals
      </h6>
        Goals EcoNature adalah membantu pengurangan sampah plastik dan membangun komunitas yang peduli lingkungan
    </div>
</div>

        </div>
    </div>
</section>

{/* Testimonials Section */}
<section style={{
        padding: '4rem 0',
        backgroundColor: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#2E7D32',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            Testimonials
          </h2>
          <h5 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
          Apa Pendapat Masyarakat Tentang Kami?
          </h5>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                marginBottom: '1rem',
                color: '#333'
              }}>
                Econature benar-benar menginspirasi saya untuk mengurangi plastik sekali pakai. Panduan dan tips yang mereka sediakan sangat membantu dalam menjalani gaya hidup yang lebih ramah lingkungan!
              </p>
              <h5 style={{
                fontWeight: 'bold',
                color: '#2E7D32'
              }}>
                - Sarah A.
              </h5>
            </div>

            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                marginBottom: '1rem',
                color: '#333'
              }}>
                Platform ini bukan hanya memberi informasi, tapi juga membangun komunitas. Saya merasa termotivasi karena bisa berbagi dan bertukar ide dengan orang-orang yang punya visi yang sama.
              </p>
              <h5 style={{
                fontWeight: 'bold',
                color: '#2E7D32'
              }}>
                - John D.
              </h5>
            </div>

            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                marginBottom: '1rem',
                color: '#333'
              }}>
                Terima kasih Econature! Sekarang saya punya sumber daya yang lengkap dan mudah dipahami untuk mulai hidup lebih hijau.
              </p>
              <h5 style={{
                fontWeight: 'bold',
                color: '#2E7D32'
              }}>
                - Lisa K.
              </h5>
            </div>
            <div style={{
              padding: '1.5rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                marginBottom: '1rem',
                color: '#333'
              }}>
                Saya suka edukasi dari Econature! Kontennya menarik dan sangat informatif, membuat saya lebih paham betapa pentingnya peran kita dalam menjaga lingkungan.
              </p>
              <h5 style={{
                fontWeight: 'bold',
                color: '#2E7D32'
              }}>
                - Lisa K.
              </h5>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutUs;
