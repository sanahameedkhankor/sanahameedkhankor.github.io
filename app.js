const { useState, useEffect } = React;
const html = htm.bind(React.createElement);

// ─── Icons ───
const LinkedinIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>`;

const MailIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/>
  </svg>`;

const CvIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/>
  </svg>`;

const PinIcon = ({ size = 15 }) => html`
  <svg viewBox="0 0 24 24" width=${size} height=${size} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>`;

const linkIcon = (icon) =>
  icon === 'linkedin' ? html`<${LinkedinIcon} />` :
  icon === 'cv' ? html`<${CvIcon} />` :
  html`<${MailIcon} />`;

// ─── Top navbar ───
const Navbar = ({ active }) => html`
  <header class="navbar">
    <div class="navbar-inner">
      ${NAV.map((n) => html`
        <a key=${n.id} href=${'#' + n.id}
           class=${active === n.id ? 'active' : ''}
           onClick=${(e) => { e.preventDefault(); document.getElementById(n.id).scrollIntoView({ behavior: 'smooth' }); }}>
          ${n.label}
        </a>`)}
    </div>
  </header>`;

// ─── Left profile column ───
const Profile = () => html`
  <aside class="profile">
    <img class="avatar" src=${PROFILE.avatar} alt=${PROFILE.name} />
    <div class="p-name">${PROFILE.name}</div>
    <div class="p-line">${PROFILE.role}</div>
    <div class="p-line">${PROFILE.affiliation}</div>
    <div class="p-line">${PROFILE.university}</div>
    <ul class="p-links">
      <li><${PinIcon} /> ${PROFILE.location}</li>
      ${PROFILE.links.map((l) => html`
        <li key=${l.label}><a href=${l.href} target="_blank" rel="noopener">${linkIcon(l.icon)} ${l.label}</a></li>`)}
    </ul>
  </aside>`;

// ─── Content sections (academic style) ───
const About = () => html`
  <section id="about">
    <h1>🧐 About ${PROFILE.firstName}</h1>
    <p>${ABOUT.intro}</p>
    <p><b>Research Interests</b>: ${PROFILE.firstName} is interested in exploring interdisciplinary research opportunities in:</p>
    <ul>
      ${ABOUT.interests.map((i) => html`<li key=${i.title}><b>${i.title}:</b> ${i.desc}</li>`)}
    </ul>
    <p>🔬 ${ABOUT.extra} Please feel free to contact ${PROFILE.firstName} at <a href="mailto:${PROFILE.email}">${PROFILE.email}</a> for collaboration.</p>
    <div class="work-logos">
      ${WORK_LOGOS.map((l) => html`<img key=${l.name} src=${l.src} alt=${l.name} title=${l.name} />`)}
    </div>
  </section>`;

const EntryHead = ({ title, sub, period }) => html`
  <div class="entry-head">
    <div>
      <span class="entry-title">${title}</span>
      ${sub && html`<span class="entry-sub"> · ${sub}</span>`}
    </div>
    ${period && html`<span class="entry-period">${period}</span>`}
  </div>`;

const Points = ({ items }) => html`
  <ul class="entry-list">
    ${items.map((pt, i) => html`<li key=${i}>${pt}</li>`)}
  </ul>`;

const Education = () => html`
  <section id="education">
    <h1>📖 Education</h1>
    ${EDUCATION.map((e) => html`
      <div class="entry" key=${e.degree}>
        <${EntryHead} title=${e.degree} sub=${e.school} period=${e.period} />
        <div class="entry-sub">${e.place}</div>
        <${Points} items=${e.points} />
      </div>`)}
  </section>`;

const Experience = () => html`
  <section id="experience">
    <h1>🏥 Experience</h1>
    ${EXPERIENCE.map((e) => html`
      <div class="entry" key=${e.org}>
        <${EntryHead} title=${e.role} sub=${e.org} period=${e.period} />
        <div class="entry-sub">${e.place}</div>
        <${Points} items=${e.points} />
        ${e.tags && html`<div class="chips">${e.tags.map((t) => html`<span class="chip" key=${t}>${t}</span>`)}</div>`}
      </div>`)}
  </section>`;

const Projects = () => html`
  <section id="projects">
    <h1>🧫 Projects</h1>
    ${PROJECTS.map((p) => html`
      <div class="entry" key=${p.title}>
        <${EntryHead} title=${p.title} period=${p.period} />
        <${Points} items=${p.points} />
      </div>`)}
  </section>`;

const Skills = () => html`
  <section id="skills">
    <h1>🔬 Laboratory Skills</h1>
    <ul>
      ${SKILLS.map((s) => html`<li key=${s.title}><b>${s.title}:</b> ${s.desc}</li>`)}
    </ul>
  </section>`;

const Honors = () => html`
  <section id="honors">
    <h1>🏆 Awards and Certificates</h1>
    ${HONORS.map((h) => html`
      <div class="entry-row" key=${h.title}>
        <div class="entry-body">
          <div class="entry-title">${h.title}</div>
          <div class="entry-sub">${h.org}</div>
        </div>
      </div>`)}
  </section>`;

const Misc = () => html`
  <section id="misc">
    <h1>🎙 Hobbies</h1>
    <ul>
      ${HOBBIES.map((h) => html`<li key=${h.title}><b>${h.title}:</b> ${h.desc}</li>`)}
    </ul>
  </section>`;

const Footer = () => html`
  <footer class="footer">
    <hr/>
    <p>Last updated on: ${new Date().toLocaleDateString('en-CA')}.</p>
  </footer>`;

// ─── App ───
const App = () => {
  const [active, setActive] = useState('about');
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' });
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return html`
    <${Navbar} active=${active} />
    <div class="container">
      <${Profile} />
      <main class="content">
        <${About} />
        <${Education} />
        <${Experience} />
        <${Projects} />
        <${Skills} />
        <${Honors} />
        <${Misc} />
        <${Footer} />
      </main>
    </div>`;
};

ReactDOM.createRoot(document.getElementById('root')).render(html`<${App} />`);
