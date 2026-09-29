import React from 'react';
import { Cpu, Cloud, Users, Bug, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Cpu size={24} color="var(--accent-coral)" />,
      title: 'Backend Microservices Architecture',
      description: 'Designing modular Java & Spring Boot microservices with structured RESTful APIs, optimized data persistence, and clean separation of concerns.',
    },
    {
      icon: <Cloud size={24} color="var(--accent-amber)" />,
      title: 'AWS Cloud Services',
      description: 'Configuring cloud backend environments on AWS, managing microservices deployments, environment configurations, and scalability.',
    },
    {
      icon: <Users size={24} color="var(--accent-coral-light)" />,
      title: 'Cross-Functional Collaboration',
      description: 'Communicating clearly across Android/iOS mobile teams, frontend developers, and product managers to map payload contracts and payload APIs.',
    },
    {
      icon: <Bug size={24} color="var(--accent-cyan)" />,
      title: 'Production Debugging & Support',
      description: 'Investigating live application logs, stack trace failures, network bottlenecks, and database query latency to resolve critical bugs swiftly.',
    },
  ];

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-surface)', position: 'relative' }}>
      <div className="container">
        <div className="section-tag" style={{ marginBottom: '2rem' }}>01 / Profile</div>

        {/* Main Story Editorial Box */}
        <div className="glass-card" style={{ marginBottom: '3.5rem', padding: '2.5rem' }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.9rem',
              fontWeight: 600,
              marginBottom: '1.25rem',
              color: '#fff',
            }}
          >
            Building reliable backends that power modern digital experiences.
          </h3>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            With over <strong style={{ color: '#fff' }}>2+ years of hands-on software engineering experience</strong>, I focus on constructing robust backend infrastructure. My daily work revolves around crafting clean Java REST APIs that power client-facing applications and handle production traffic with high availability.
          </p>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Currently, I am working on a new high-priority project focused on <strong style={{ color: 'var(--accent-coral-light)' }}>backend API development for a mobile application</strong>. This role demands tight alignment across multiple technical teams, cloud deployment, and maintaining active production observability to resolve live issues fast.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            {['Java 17/21', 'Spring Boot', 'REST APIs', 'AWS Cloud', 'PostgreSQL', 'Microservices Architecture'].map((tag) => (
              <span key={tag} className="badge badge-coral">
                <CheckCircle2 size={13} />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass-card">
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {pillar.icon}
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#fff', marginBottom: '0.75rem' }}>
                {pillar.title}
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
