import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });

  const emailAddress = 'ramavani33@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/rama-vani-80107a206/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (emailForm.name && emailForm.email && emailForm.message) {
      setSubmittedEmail(true);
      setTimeout(() => {
        setSubmittedEmail(false);
        setEmailForm({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        <div className="section-tag">05 / Get In Touch</div>

        <div className="contact-grid">
          {/* Editorial Left Info Column */}
          <div className="contact-info">
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3.8rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#fff',
                marginBottom: '1.25rem',
              }}
            >
              Let's Build Resilient Systems Together.
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Whether you are looking for a dedicated Backend Engineer for high-scale microservices, AWS cloud deployment, or mobile API architecture — reach out directly via Email.
            </p>

            {/* Email Contact Card */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '2rem',
                maxWidth: '480px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 94, 98, 0.12)',
                    border: '1px solid rgba(255, 94, 98, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-coral)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Direct</div>
                  <a
                    href={`mailto:${emailAddress}`}
                    style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', textDecoration: 'none' }}
                    className="contact-link-hover"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                style={{
                  background: copiedEmail ? 'var(--accent-cyan)' : 'var(--accent-coral-glow)',
                  border: '1px solid rgba(255, 94, 98, 0.4)',
                  color: copiedEmail ? '#000' : 'var(--accent-coral-light)',
                  padding: '0.45rem 0.9rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.25s ease',
                }}
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn Profile Badge */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.25s ease',
                }}
                className="social-btn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
                Connect on LinkedIn
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Email Direct Form */}
          <div className="contact-form-col">
            <div className="glass-card contact-glass-card">
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MessageSquare size={20} color="var(--accent-coral)" />
                Send an Email
              </h3>

              {submittedEmail ? (
                <div
                  style={{
                    background: 'rgba(56, 239, 125, 0.1)',
                    border: '1px solid rgba(56, 239, 125, 0.3)',
                    padding: '2rem',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    color: '#fff',
                  }}
                >
                  <Check size={36} color="var(--accent-cyan)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message Sent!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Thank you for reaching out via Email. I'll reply to your inbox soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEmailSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kitty"
                      value={emailForm.name}
                      onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. kitty@company.com"
                      value={emailForm.email}
                      onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your backend project or opportunity..."
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                      className="form-input"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: '0.9rem',
                      borderRadius: 'var(--radius-pill)',
                      background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-amber))',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 18px rgba(255, 94, 98, 0.4)',
                      transition: 'all 0.25s ease',
                    }}
                    className="submit-btn"
                  >
                    <Send size={16} /> Send via Email
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 3rem;
          align-items: flex-start;
        }
        .contact-info {
          grid-column: span 6;
        }
        .contact-form-col {
          grid-column: span 6;
        }
        .contact-glass-card {
          padding: 2.25rem;
        }

        @media (max-width: 992px) {
          .contact-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .contact-info, .contact-form-col {
            width: 100% !important;
          }
          .contact-glass-card {
            padding: 1.35rem 1.15rem !important;
          }
        }
        .form-input:focus {
          border-color: var(--accent-coral) !important;
          box-shadow: 0 0 0 3px var(--accent-coral-glow);
        }
        .contact-link-hover:hover {
          color: var(--accent-coral-light) !important;
        }
        .social-btn:hover {
          color: #fff !important;
          border-color: rgba(255, 94, 98, 0.5) !important;
          background: rgba(255, 94, 98, 0.15) !important;
          box-shadow: 0 4px 20px rgba(255, 94, 98, 0.2);
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 94, 98, 0.6) !important;
        }
        .wa-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5) !important;
        }
      `}</style>
    </section>
  );
}
