import React from 'react';
import { Orbit, Sparkles, Heart } from 'lucide-react';

export default function Curiosities() {
  const activities = [
    {
      icon: <Orbit size={24} color="var(--accent-coral)" />,
      badge: 'SATELLITE PROGRAM',
      title: '75 Students Satellite Program (AUSAT)',
      description:
        'Selected to be part of the college team working on the development of a CubeSat under the 75 Students Satellite Program, organized by Indian Tech Congress Association & TSC.',
    },
    {
      icon: <Sparkles size={24} color="var(--accent-cyan)" />,
      badge: 'EVENT COORDINATION',
      title: 'Department Coordinator — Daksha',
      description:
        'Served as a department coordinator for Daksha, a flagship event conducted by Anurag University.',
    },
    {
      icon: <Heart size={24} color="#10b981" />,
      badge: 'COMMUNITY SERVICE',
      title: 'Active NSS Member',
      description:
        'Actively involved in social service drives, awareness initiatives, and volunteering activities through the National Service Scheme (NSS).',
    },
  ];

  return (
    <section id="curiosities" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-tag">04 / Curiosity & Explorations</div>
        <h2 className="section-title">Beyond the Daily Codebase</h2>
        <p className="section-subtitle">
          Satellite research, campus leadership, and community service.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
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

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
                  {act.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 0 }}>
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
