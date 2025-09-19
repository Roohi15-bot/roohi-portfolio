<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Portfolio | Mohammad Rahimunissa Begum</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#0f172a; --accent:#06b6d4; --text:#f1f5f9; --card:#1e293b; --muted:#94a3b8;
    }
    *{margin:0;padding:0;box-sizing:border-box;}
    body{font-family:'Poppins',sans-serif;background:var(--bg);color:var(--text);line-height:1.6;}
    .container{max-width:1200px;margin:0 auto;padding:30px;}

    header{display:flex;align-items:center;justify-content:space-between;padding:20px 0;}
    header h1{font-size:26px;color:var(--accent)}

    .grid{display:grid;grid-template-columns:300px 1fr;gap:30px;}
    aside{background:var(--card);padding:20px;border-radius:16px;box-shadow:0 0 20px rgba(0,0,0,.4);text-align:center}
    main{background:var(--card);padding:30px;border-radius:16px;box-shadow:0 0 25px rgba(0,0,0,.5)}

    .photo{width:160px;height:160px;border-radius:50%;background:url('78e00e3c-93ab-41b8-876c-4e783c66d4cc.jpg') center/cover no-repeat;margin:0 auto 18px auto;border:4px solid var(--accent)}
    h2{color:var(--accent);margin-bottom:10px;font-size:18px;border-bottom:1px solid rgba(255,255,255,.1);padding-bottom:4px}
    .info{margin:8px 0;font-size:14px;color:var(--muted)}
    .skills span{display:inline-block;margin:4px;padding:6px 12px;border-radius:20px;background:rgba(6,182,212,.15);color:var(--accent);font-size:13px;font-weight:600}

    .section{margin-bottom:24px}
    .projects{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    .card{background:#0d1b2a;padding:14px;border-radius:12px;transition:.3s}
    .card:hover{transform:translateY(-5px);box-shadow:0 10px 20px rgba(0,0,0,.4)}
    .card h3{color:var(--accent);margin-bottom:6px;font-size:15px}
    .card p{font-size:13px;color:var(--muted)}

    ul{margin:10px 0 0 18px;font-size:14px;text-align:left}
    li{margin:6px 0}

    footer{text-align:center;margin-top:40px;font-size:13px;color:var(--muted)}

    @media(max-width:900px){.grid{grid-template-columns:1fr}}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Mohammad Rahimunissa Begum</h1>
      <span>B.Tech CSE (AI & Data Science)</span>
    </header>

    <div class="grid">
      <aside>
        <div class="photo"></div>
        <h2>Contact</h2>
        <p class="info">📱 +91 9100582239</p>
        <p class="info">✉️ roohimazzu@gmail.com</p>
        <p class="info">📍 Vijayawada, Andhra Pradesh</p>
        <p class="info">🔗 <a href="https://linkedin.com/in/roohi-md-045126315" target="_blank" style="color:var(--accent)">LinkedIn</a></p>
        <p class="info">💻 <a href="https://github.com/Roohi15-bot" target="_blank" style="color:var(--accent)">GitHub</a></p>

        <h2>Technical Skills</h2>
        <div class="skills">
          <span>C</span><span>C++</span><span>Python</span><span>SQL</span><span>Java (Basics)</span>
          <span>HTML</span><span>CSS</span><span>Data Analytics</span><span>Speech Recognition</span>
          <span>MongoDB</span><span>IoT</span><span>Cybersecurity</span>
        </div>

        <h2>Languages</h2>
        <ul>
          <li>Urdu – Native</li>
          <li>English – Proficient</li>
          <li>Hindi – Proficient</li>
          <li>Telugu – Proficient</li>
          <li>Tamil – Understandable</li>
        </ul>
      </aside>

      <main>
        <section class="section">
          <h2>Summary</h2>
          <p>Pursuing undergraduate studies in <b>Computer Science and Engineering</b> with specialization in <b>AI & Data Science</b>. Passionate about <b>AI, Data Analytics, IoT</b> & <b>Web Development</b> with a keen interest in emerging technologies.</p>
        </section>

        <section class="section">
          <h2>Projects</h2>
          <div class="projects">
            <div class="card">
              <h3>Smart Irrigation System</h3>
              <p>Arduino + sensors for efficient water usage.</p>
            </div>
            <div class="card">
              <h3>Multilingual Speech Recognition</h3>
              <p>Developed end-to-end AI model handling multiple languages.</p>
            </div>
            <div class="card">
              <h3>Image Generation</h3>
              <p>Experimented with ML-based image creation algorithms.</p>
            </div>
            <div class="card">
              <h3>AR/VR Exploration</h3>
              <p>Explored concepts & prototypes in academic projects.</p>
            </div>
          </div>
        </section>

        <section class="section">
          <h2>Experience</h2>
          <p><b>Fresher</b> — Actively working on academic and personal projects.</p>
        </section>

        <section class="section">
          <h2>Education</h2>
          <ul>
            <li>Joy University — B.Tech CSE (AI & DS)</li>
            <li>Sri Srinivasa Gravity Junior College — Intermediate</li>
            <li>Ravindra Bharathi EM H S — Secondary School</li>
          </ul>
        </section>

        <section class="section">
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication (written & spoken)</li>
            <li>Teamwork & Collaboration</li>
            <li>Problem-Solving & Critical Thinking</li>
            <li>Adaptability & Time Management</li>
          </ul>
        </section>

        <section class="section">
          <h2>Extracurricular</h2>
          <ul>
            <li>Sports & Athletics (Football, Cricket)</li>
            <li>Volunteering & Social Service</li>
            <li>Technical Clubs & Hackathons</li>
          </ul>
        </section>
      </main>
    </div>

    <footer>©️ 2025 Mohammad Rahimunissa Begum — Portfolio</footer>
  </div>
</body>
</html>
