import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/kitty_nobg.png';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        minHeight: '100vh',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow Blobs */}
      <div
        className="animate-pulse-glow"
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-coral-glow) 0%, rgba(255, 94, 98, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 153, 102, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="hero-grid">
          {/* Left Column: Editorial Typography */}
          <div className="hero-text-col">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.9rem',
                borderRadius: 'var(--radius-pill)',
                background: 'rgba(255, 94, 98, 0.08)',
                border: '1px solid rgba(255, 94, 98, 0.25)',
                color: 'var(--accent-coral-light)',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-cyan)',
                  boxShadow: '0 0 8px var(--accent-cyan)',
                }}
              />
              2+ YEARS EXPERIENCE • BACKEND API ENGINEER
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                color: '#fff',
              }}
            >
              Rama Vani
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                fontWeight: 400,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: 1.45,
              }}
            >
              Architecting <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Java Backend APIs</span> for high-scale mobile applications.
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '580px',
              }}
            >
              Specialized in building resilient REST microservices, collaborating across cross-functional engineering teams, and solving complex live production issues under pressure.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }} className="hero-cta-group">
              <a
                href="#experience"
                style={{
                  padding: '0.8rem 1.8rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-amber))',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 6px 24px rgba(255, 94, 98, 0.4)',
                  transition: 'all 0.3s ease',
                }}
                className="hero-primary-btn"
              >
                View Featured Work
                <ArrowRight size={17} />
              </a>

              <a
                href="#contact"
                style={{
                  padding: '0.8rem 1.8rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                }}
                className="hero-secondary-btn"
              >
                Let's Talk
              </a>
            </div>

            {/* Stat Pill Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                maxWidth: '420px',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--accent-coral-light)' }}>
                  2+ Yrs
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Industry Experience
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Java / Spring
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Core Tech Stack
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Photo (Whole Image with Curved Oval Bottom Radial Mask) */}
          <div className="hero-img-col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', position: 'relative' }}>
            {/* Ambient Background Radial Glow */}
            <div
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '85%',
                height: '85%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 94, 98, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />

            <div style={{ position: 'relative', width: '100%', maxWidth: '340px', zIndex: 1 }}>
              <img
                src={heroImg}
                alt="Rama Vani — Backend Engineer"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.75)) brightness(1.02) contrast(1.03)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 3rem;
          align-items: center;
        }
        .hero-text-col {
          grid-column: span 7;
        }
        .hero-img-col {
          grid-column: span 5;
          position: relative;
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 5.5rem !important;
            padding-bottom: 3.5rem !important;
            min-height: auto !important;
          }
          .hero-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2.5rem !important;
          }
          .hero-text-col, .hero-img-col {
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .hero-cta-group {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
        }
        .hero-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 94, 98, 0.6) !important;
        }
        .hero-secondary-btn:hover {
          background: var(--bg-card-hover) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
