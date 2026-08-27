const navItems = ['About', 'Skills', 'Projects', 'Contact']

const highlights = [
  { label: 'Frontend', value: 'React + Vite' },
  { label: 'Focus', value: 'UI & UX' },
  { label: 'Goal', value: 'Full-stack growth' },
]

const skills = [
  { title: 'Languages', text: 'JavaScript, Python, Python, Java' },
  { title: 'Frontend', text: 'React, Tailwind, Responsive Design' },
  { title: 'Backend', text: 'Node.js, REST APIs, Database Design' },
  { title: 'Tools', text: 'Git, GitHub, Vite, Figma, Docker' },
]

const projects = [
  {
    title: 'E-commerce Platform',
    text: 'A polished storefront and admin dashboard with product browsing, cart logic, and a clean mobile-first order flow.',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Healthcare App',
    text: 'A productivity dashboard for students to track assignments, deadlines, and personal learning goals across multiple courses.',
    stack: ['Kotlin', 'Firebase', 'UI/UX'],
  },
  {
    title: 'Analytics Dashboard',
    text: 'A data-focused interface that turns raw metrics into clear insight cards, trend charts, and actionable summaries.',
    stack: ['Vite', 'Charts', 'API'],
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">T</div>
          <span>Trong.IT</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-spacing">
          <div className="hero-copy">
            <p className="eyebrow">IT Student • Front-end Developer</p>
            <h1>Building modern digital experiences.</h1>
            <p className="lead">
              I’m Pham Nguyen Phu Trong, an IT student focused on web development,
              problem solving, and creating clean, user-friendly products.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="stats-grid">
              {highlights.map((item) => (
                <div key={item.label} className="stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-badge">Available for internships</div>
            <div className="avatar-card">
              <div className="avatar-ring">
                <div className="avatar">TP</div>
              </div>
              <div className="panel-text">
                <h2>Pham Nguyen Phu Trong</h2>
                <p>Student developer passionate about technology and innovation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-spacing">
          <div className="section-header">
            <p className="eyebrow">About Me</p>
            <h2>Curious, creative, and always learning.</h2>
          </div>

          <div className="about-grid">
            <div className="photo-card">
              <div className="photo-placeholder">Portfolio</div>
            </div>

            <div className="about-copy">
              <p>
                I’m currently studying Information Technology and enjoying the process of
                turning ideas into practical digital products. My interests include
                frontend development, user experience, and building interfaces that feel
                intuitive on every screen size.
              </p>
              <p>
                Outside of coding, I spend time learning new technologies, experimenting
                with modern workflows, and improving my problem-solving skills through
                hands-on projects and collaboration.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-spacing">
          <div className="section-header">
            <p className="eyebrow">Skills</p>
            <h2>Focused on practical web and software skills.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.title} className="skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-spacing">
          <div className="section-header">
            <p className="eyebrow">Projects</p>
            <h2>Selected work and experiments.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image">
                  <span>Project</span>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>

                  <div className="tag-row">
                    {project.stack.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section-spacing contact-section">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something meaningful.</h2>
          </div>

          <div className="contact-card">
            <p>
              I’m open to internships, collaborations, and new opportunities in software
              development and digital product design.
            </p>

            <div className="contact-row">
              <a href="mailto:phutrong2937@gmail.com">phutrong2937@gmail.com</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Pham Nguyen Phu Trong</p>
      </footer>
    </div>
  )
}

export default App
