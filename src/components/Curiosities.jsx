import React from 'react';
import { Compass, Sparkles, Lightbulb, Rocket, BookOpen, Orbit } from 'lucide-react';

export default function Curiosities() {
  const activities = [
    {
      icon: <Orbit size={24} color="var(--accent-coral)" />,
      badge: 'EXPLORATION & RESEARCH',
      title: 'Satellite & Space Systems Research Internship',
      description:
        'Driven by deep curiosity for high-reliability systems, participated in satellite data processing and telemetry telemetry research. Analyzed raw sensor payload data and mapped signal parsing pipelines.',
      takeaway: 'Instilled a rigorous mindset toward zero-fault tollerance and data integrity.',
    },
    {
      icon: <Rocket size={24} color="var(--accent-amber)" />,
      badge: 'SYSTEMS DEEP-DIVE',
      title: 'Real-Time Telemetry & Hardware Interfacing',
      description:
        'Explored low-level system communication protocols, parsing micro-controller signals and transmitting structured packets over network sockets to monitoring dashboards.',
      takeaway: 'Deepened appreciation for memory efficiency and raw protocol parsing.',
    },
    {
      icon: <Lightbulb size={24} color="var(--accent-cyan)" />,
      badge: 'COMMUNITY & LEADERSHIP',
      title: 'Technical Mentorship & Open Engineering Initiatives',
      description:
        'Actively organized peer coding workshops, demystifying RESTful APIs, cloud deployment concepts on AWS, and Git collaborative workflows for junior developers.',
      takeaway: 'Belief that explaining complex systems clearly builds stronger engineering intuition.',
    },
  ];

  return (
    <section id="curiosities" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-tag">04 / Curiosity & Explorations</div>
        <h2 className="section-title">Beyond the Daily Codebase</h2>
        <p className="section-subtitle">
          Early internships, research pursuits, and technical curiosities framed as exploratory learning journeys.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {activities.map((act, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {act.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-coral-light)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {act.badge}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: '#fff', marginBottom: '0.85rem' }}>
                  {act.title}
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {act.description}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px dashed var(--border-subtle)',
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  fontStyle: 'italic',
                }}
              >
                <strong style={{ color: 'var(--text-primary)', fontStyle: 'normal' }}>Key Takeaway: </strong>
                {act.takeaway}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
