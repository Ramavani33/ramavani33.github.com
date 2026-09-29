import React, { useState } from 'react';
import { Server, Smartphone, Cloud, Zap } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: 'mobile-backend',
      tag: 'CURRENT HIGH-PRIORITY PROJECT',
      badgeColor: 'var(--accent-coral)',
      title: 'Mobile Application Backend API Platform',
      role: 'Backend API Engineer',
      shortRole: 'Mobile API (Active)',
      duration: 'Ongoing • Current Active Project',
      techStack: ['Java 17', 'Spring Boot', 'AWS EC2', 'REST APIs', 'PostgreSQL', 'Docker', 'Prod Monitoring'],
      description:
        'Architecting and developing core backend API microservices powering a high-throughput mobile application. Responsible for end-to-end API contracts, AWS EC2 cloud hosting, cross-team syncs, and production debugging.',
      highlights: [
        'Built RESTful API endpoints tuned for low latency mobile payloads and high concurrency request handling.',
        'Provisioned and managed Linux backend environments on AWS EC2 with automated startup scripts and environment configuration.',
        'Led cross-functional collaboration sessions with mobile engineering leads to define payload schemas, error codes, and auth flows.',
        'Active on-call and live production support — diagnosing application stack traces, memory usage, and database query bottlenecks.',
      ],
      metrics: [
        { label: 'AWS Deployment', value: 'EC2 Managed' },
        { label: 'API Latency', value: '< 120ms' },
        { label: 'Team Sync', value: 'Cross-functional' },
      ],
    },
    {
      id: 'microservices-core',
      tag: 'ENTERPRISE SYSTEM',
      badgeColor: 'var(--accent-amber)',
      title: 'High-Scale Java Backend & Microservices Suite',
      role: 'Software Engineer (Backend)',
      shortRole: 'Enterprise Core',
      duration: '2+ Years Total Experience',
      techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Redis', 'JUnit', 'Mockito'],
      description:
        'Designed modular REST APIs and business logic services for enterprise data management. Improved database querying speed and implemented robust exception handling.',
      highlights: [
        'Developed Spring Boot microservices with Spring Data JPA ORM, optimizing SQL queries for high volume data reads.',
        'Implemented Redis caching layer to diminish database read operations during peak user traffic.',
        'Maintained high test coverage (>85%) utilizing JUnit and Mockito to prevent regression bugs in production releases.',
      ],
      metrics: [
        { label: 'Test Coverage', value: '> 85%' },
        { label: 'Database', value: 'MySQL / Redis' },
        { label: 'Architecture', value: 'REST Microservices' },
      ],
    },
    {
      id: 'cloud-infrastructure',
      tag: 'INFRASTRUCTURE & INTEGRATION',
      badgeColor: 'var(--accent-cyan)',
      title: 'Cloud Service Integration & Security Module',
      role: 'Backend Developer',
      shortRole: 'Cloud Integration',
      duration: 'Project Module',
      techStack: ['AWS S3', 'Spring Security', 'JWT', 'REST Services', 'Maven', 'Git'],
      description:
        'Engineered secure document storage and authentication subsystems integrated with cloud storage repositories.',
      highlights: [
        'Integrated AWS S3 SDK with Java backend services for secure file upload, retrieval, and pre-signed URL generation.',
        'Configured JWT-based authentication filter chains using Spring Security to protect internal API endpoints.',
        'Streamlined build configurations and dependency management with Apache Maven.',
      ],
      metrics: [
        { label: 'Storage', value: 'AWS S3 Cloud' },
        { label: 'Security', value: 'JWT / OAuth' },
        { label: 'Build Tool', value: 'Maven' },
      ],
    },
  ];

  const currentProject = projects[activeTab];

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-tag" style={{ marginBottom: '2rem' }}>02 / Experience & Projects</div>

        {/* Tab Navigation Controls */}
        <div
          style={{
            display: 'flex',
            gap: '0.65rem',
            marginBottom: '2.5rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: '0.5rem',
            maxWidth: '100%',
          }}
          className="experience-tabs"
        >
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: '0.65rem 1.2rem',
                borderRadius: 'var(--radius-pill)',
                background: activeTab === idx ? 'var(--accent-coral-glow)' : 'var(--bg-card)',
                border: activeTab === idx ? '1px solid rgba(255, 94, 98, 0.4)' : '1px solid var(--border-subtle)',
                color: activeTab === idx ? '#fff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.25s ease',
              }}
              className="tab-btn"
            >
              {idx === 0 && <Smartphone size={15} color="var(--accent-coral)" />}
              {idx === 1 && <Server size={15} color="var(--accent-amber)" />}
              {idx === 2 && <Cloud size={15} color="var(--accent-cyan)" />}
              <span>{proj.shortRole}</span>
            </button>
          ))}
        </div>

        {/* Active Project Feature Card */}
        <div
          className="glass-card experience-card"
          style={{
            background: 'linear-gradient(145deg, rgba(18, 19, 28, 0.95), rgba(255, 94, 98, 0.04))',
            border: activeTab === 0 ? '1px solid rgba(255, 94, 98, 0.35)' : '1px solid var(--border-subtle)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ flex: '1 1 300px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: currentProject.badgeColor,
                  letterSpacing: '0.08em',
                  marginBottom: '0.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Zap size={13} />
                {currentProject.tag}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '0.25rem',
                  lineHeight: 1.2,
                }}
              >
                {currentProject.title}
              </h3>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{currentProject.duration}</div>
            </div>

            {/* Metrics Chips */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', width: 'auto' }} className="metrics-chips">
              {currentProject.metrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center',
                    minWidth: '95px',
                    flex: '1 1 auto',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{m.label}</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-coral-light)' }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            {currentProject.description}
          </p>

          <h4
            style={{
              fontSize: '0.92rem',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '1rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Key Deliverables & Responsibilities:
          </h4>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
            {currentProject.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-coral)',
                    boxShadow: '0 0 8px var(--accent-coral)',
                    marginTop: '7px',
                    flexShrink: 0,
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Pills */}
          <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>Technologies:</span>
            {currentProject.techStack.map((tech) => (
              <span key={tech} className="badge" style={{ fontSize: '0.78rem', padding: '0.28rem 0.7rem' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
