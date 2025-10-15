import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// 프로필 데이터
const profileData = {
  name: "김성재",
  nameEn: "Kim Sungjea",
  title: "Full Stack Developer",
  bio: "안녕하세요! 사용자 경험을 최우선으로 생각하는 풀스택 개발자 김성재입니다. 새로운 기술을 배우는 것을 즐기며, 문제를 창의적으로 해결하는 것에 열정을 가지고 있습니다.",
  email: "sungjea.kim@example.com",
  github: "https://github.com/sungjea",
  linkedin: "https://linkedin.com/in/sungjea-kim",
  location: "서울, 대한민국",

  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Bun", "Express", "REST API", "GraphQL"] },
    { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "SQLite"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Vercel", "Railway"] }
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "Tech Startup Inc.",
      period: "2023.03 - 현재",
      description: "웹 애플리케이션 개발 및 유지보수, RESTful API 설계 및 구현"
    },
    {
      title: "Junior Frontend Developer",
      company: "Digital Agency Co.",
      period: "2022.01 - 2023.02",
      description: "React 기반 웹사이트 개발, UI/UX 개선 작업"
    }
  ],

  projects: [
    {
      name: "E-Commerce Platform",
      description: "온라인 쇼핑몰 플랫폼 개발 (Next.js, PostgreSQL, Stripe 결제 연동)",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "https://github.com/sungjea/ecommerce-platform"
    },
    {
      name: "Task Management App",
      description: "실시간 협업 가능한 할일 관리 애플리케이션 (WebSocket 활용)",
      tech: ["React", "Node.js", "WebSocket", "MongoDB"],
      link: "https://github.com/sungjea/task-manager"
    },
    {
      name: "Weather Dashboard",
      description: "날씨 API를 활용한 실시간 날씨 대시보드",
      tech: ["React", "OpenWeather API", "Chart.js"],
      link: "https://github.com/sungjea/weather-dashboard"
    }
  ]
};

function Portfolio() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="name">{profileData.name}</h1>
          <p className="name-en">{profileData.nameEn}</p>
          <p className="title">{profileData.title}</p>
          <p className="bio">{profileData.bio}</p>

          <div className="contact-links">
            <a href={`mailto:${profileData.email}`} className="contact-link">
              📧 Email
            </a>
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              💻 GitHub
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              💼 LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">🛠️ Skills</h2>
        <div className="skills-grid">
          {profileData.skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skill-group">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2 className="section-title">💼 Experience</h2>
        <div className="timeline">
          {profileData.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-period">{exp.period}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">🚀 Projects</h2>
        <div className="projects-grid">
          {profileData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 {profileData.name}. Built with Bun & React.</p>
        <p className="footer-location">📍 {profileData.location}</p>
      </footer>
    </div>
  );
}

// Mount to DOM
const root = createRoot(document.getElementById("root")!);
root.render(<Portfolio />);
