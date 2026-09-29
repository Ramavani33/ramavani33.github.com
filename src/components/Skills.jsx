import React from 'react';
import { Code2, Cloud, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 size={22} />,
      title: 'Backend',
      badge: 'Core Domain',
      color: 'var(--accent-coral)',
      bgGlow: 'rgba(255, 94, 98, 0.12)',
      borderColor: 'rgba(255, 94, 98, 0.3)',
      skills: ['Java 17/21', 'Spring Boot', 'Spring Data JPA', 'Microservices', 'RESTful API Design', 'OOP & Design Patterns', 'Multithreading'],
    },
    {
      icon: <Cloud size={22} />,
      title: 'Cloud',
      badge: 'Infrastructure',
      color: 'var(--accent-amber)',
      bgGlow: 'rgba(255, 153, 102, 0.12)',
      borderColor: 'rgba(255, 153, 102, 0.3)',
      skills: ['AWS Lambda', 'API Gateway', 'AWS S3 Storage', 'AWS EC2', 'Cloudwatch', 'Docker'],
    },
    {
      icon: <Database size={22} />,
      title: 'Databases & Tools',
      badge: 'DB & Tools',
      color: 'var(--accent-cyan)',
      bgGlow: 'rgba(56, 239, 125, 0.12)',
      borderColor: 'rgba(56, 239, 125, 0.3)',
      skills: ['PostgreSQL', 'MySQL', 'Git & GitHub', 'Apache Maven', 'JUnit 5 & Mockito', 'Postman / Insomnia', 'Swagger / OpenAPI'],
    },
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-tag">03 / Key Skills</div>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Curated set of backend engineering tools, cloud capabilities, and architectural practices.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
          className="skills-grid"
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card skills-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.03) 0%, rgba(18, 19, 28, 0.95) 100%)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: cat.bgGlow,
                      border: `1px solid ${cat.borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: cat.color,
                      flexShrink: 0,
                    }}
                  >
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
                    {cat.title}
                  </h3>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: cat.color,
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    background: cat.bgGlow,
                    border: `1px solid ${cat.borderColor}`,
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {cat.badge}
                </span>
              </div>

              {/* Skill Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                  alignContent: 'flex-start',
                }}
              >
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    style={{
                      padding: '0.5rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '0.86rem',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                    }}
                    className="skill-tag"
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: cat.color,
                        display: 'inline-block',
                      }}
                    />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-tag:hover {
          border-color: rgba(255, 255, 255, 0.25) !important;
          background: rgba(255, 255, 255, 0.08) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
