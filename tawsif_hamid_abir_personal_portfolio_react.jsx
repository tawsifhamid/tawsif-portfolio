import React from "react";

export default function Portfolio() {
  const NAME = "Mohammad Tawsif Hamid Abir";
  const EMAIL = "tawsifhamid86@gmail.com";

  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/tawsifhamid/" },
    { name: "Chess.com", href: "https://www.chess.com/member/tawsifhamidabir" },
    { name: "Lichess", href: "https://lichess.org/@/TawsifHamidAbir" },
  ];

  const ABOUT = `Driven and disciplined, Mohammad Tawsif Hamid Abir is a Bangladeshi student recognized for excellence across Olympiads, leadership, and communication. Balancing analytical depth with creativity, he has established himself as a standout figure in academics, technology, and debate. Abir’s vision centers on continuous growth, contributing to science, leadership, and education with intellectual curiosity and resilience.`;

  const ACHIEVEMENTS = {
    olympiads: [
      "Bangladesh Math Olympiad (BDMO) — Divisional Winner (2020) & Regional Champion (2023)",
      "Iranian Geometry Olympiad (IGO) — Honorable Mention (2023)",
      "International Earth Science Olympiad (IESO) — TST Camper (2024); National Earth Olympiad (NEO) — National Winner (2024); Divisional Topper (2022, 2023)",
      "Bangladesh Junior Science Olympiad (BDJSO) — Regional Winner (2022)",
      "Bangladesh Biology Olympiad (BDBO) — Regional Runner-up (2023)",
      "Bangladesh Robotics Olympiad (BDRO) — Regional Winner, Quiz Segment (2023)",
      "Bangladesh Astronomy & Astrophysics Olympiad (BDOAA) — Regional Winner",
    ],
    academicAwards: [
      "Creative Talent Hunt (CTH) — Divisional Champion & National Top-10 (Science segment, 2023)",
      "National Scholarship Recipient — PEC Talent-Pool Scholarship (2018); SSC General Scholarship (2024)",
    ],
    tech: [
      "Stanford — Code in Place (Selected) — Python / CS106 (2024)",
      "IBM — IT Experience (Trainee, April 2023 cohort)",
      "Rice University Pre-College — CS & Mathematics (Half Scholarship)",
    ],
    chess: [
      "District Best Player — Marks Active School Chess Championship (7/7 on Board 2)",
      "Sylhet Divisional Runner-up — Bangladesh National Summer Games (Chess)",
    ],
  };

  const EDUCATION = [
    { school: "Saint Joseph Higher Secondary School, Dhaka", period: "Class of 2026 (current)" },
    { school: "Moulvibazar Govt. High School, Sylhet", period: "Class of 2024" },
    { school: "Govt. Muslim High School, Chittagong", period: "Dropout" },
    { school: "CUET Govt. Primary School, Chittagong", period: "Class of 2018" },
    { school: "Khalilur Rahman Shishu Niketon, Chittagong", period: "Left 2016" },
    { school: "Blue Bird School and College, Sylhet", period: "Left 2014" },
  ];

  const CLUBS = [
    { name: "Josephite News Portal (SJCNP)", href: "https://sjcnp.pages.dev/", role: "Founder" },
    { name: "Bangladesh Rural Olympiad Community (ROC)", href: "https://www.facebook.com/people/Rural-Olympiad-Community/61556552873822/", role: "Vice President" },
    { name: "Gonitzoggo", href: "https://gonitzoggo.com/", role: "Academic Member & Problem Setter" },
    { name: "Ongko", href: "https://www.facebook.com/ongko.org/", role: "Academic Coordinator (Science)" },
    { name: "Josephite Math Club (JMC)", href: "https://jmc-sjs.org/#hero_section", role: "Assistant General Secretary" },
    { name: "Bangladesh National Cadet Corps (BNCC)", href: "#", role: "Former Cadet (Batch 2020)" },
    { name: "Moulvibazar Govt. High School Science Club (MGHSSC)", href: "#", role: "Founder" },
    { name: "Roboment", href: "#", role: "Camp Activator & Volunteer" },
    { name: "Josephite Eco and Earth Club (JEEC)", href: "#", role: "Academic Member" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 p-6 md:p-12">
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">{NAME}</h1>
          <p className="mt-2 text-xs text-gray-400">Nationality: Bangladeshi • MBTI: ENTJ-A</p>
        </div>

        <nav className="flex gap-3">
          <a href="#about" className="text-sm font-medium text-gray-300 hover:underline">About</a>
          <a href="#achievements" className="text-sm font-medium text-gray-300 hover:underline">Achievements</a>
          <a href="#clubs" className="text-sm font-medium text-gray-300 hover:underline">Leadership</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="md:col-span-1 bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-800">
          <div>
            <h3 className="font-semibold text-gray-200">Personal Information</h3>
            <ul className="mt-2 text-sm text-gray-300 space-y-1">
              <li><strong>Full name:</strong> {NAME}</li>
              <li><strong>Hometown:</strong> Cumilla, Chittagong</li>
              <li><strong>Height:</strong> 5'9"</li>
              <li><strong>Blood group:</strong> A+</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-200">Education</h3>
            <ul className="mt-2 text-sm text-gray-300 space-y-2">
              {EDUCATION.map(e => (
                <li key={e.school} className="text-sm">
                  <div className="font-medium">{e.school}</div>
                  <div className="text-xs text-gray-500">{e.period}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-gray-200">Social Links</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="text-xs text-sky-300 underline">{s.name}</a>
              ))}
            </div>
          </div>
        </aside>

        <section className="md:col-span-2 space-y-6">
          <article id="about" className="bg-gray-900 rounded-2xl p-6 shadow border border-gray-800">
            <h2 className="text-lg font-bold text-gray-100">About</h2>
            <p className="mt-3 text-sm text-gray-300">{ABOUT}</p>
          </article>

          <article id="achievements" className="bg-gray-900 rounded-2xl p-6 shadow border border-gray-800">
            <h2 className="text-lg font-bold text-gray-100">Achievements</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-200">Olympiads & Competitions</h3>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-300 space-y-2">
                  {ACHIEVEMENTS.olympiads.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-200">Academic & Tech Distinctions</h3>
                <ul className="mt-2 list-disc list-inside text-sm text-gray-300 space-y-2">
                  {ACHIEVEMENTS.academicAwards.map(a => <li key={a}>{a}</li>)}
                  {ACHIEVEMENTS.tech.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-200">Chess</h3>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-300">
                {ACHIEVEMENTS.chess.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </article>

          <article id="clubs" className="bg-gray-900 rounded-2xl p-6 shadow border border-gray-800">
            <h2 className="text-lg font-bold text-gray-100">Leadership & Initiatives</h2>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-300 space-y-2">
              {CLUBS.map(c => (
                <li key={c.name}><strong>{c.role}</strong> — <a href={c.href} target="_blank" rel="noreferrer" className="text-sky-400 underline">{c.name}</a></li>
              ))}
            </ul>
          </article>

          <article className="bg-gray-900 rounded-2xl p-6 shadow border border-gray-800">
            <h2 className="text-lg font-bold text-gray-100">Debate & Communication</h2>
            <p className="mt-3 text-sm text-gray-300">Main team Bangla debater — Josephite Debating Club (TV debate participant, ATN Bangla). Former General Secretary — Moulvibazar Govt. High School Debating Club; won multiple divisional and district debate fests.</p>
          </article>

          <article className="bg-gray-900 rounded-2xl p-6 shadow border border-gray-800">
            <h2 className="text-lg font-bold text-gray-100">For Admissions / Employers</h2>
            <p className="mt-3 text-sm text-gray-300">This profile provides a concise, professional overview of achievements, leadership roles, and intellectual pursuits—tailored for university admissions, internships, and professional outreach. Downloadable resume available below.</p>
            <div className="mt-4 flex gap-3">
              <a className="px-4 py-2 bg-sky-600 text-white rounded-lg" href="/files/Tawsif_Resume.pdf">Download Resume (placeholder)</a>
              <a className="px-4 py-2 border border-gray-700 rounded-lg text-gray-200" href={`mailto:${EMAIL}`}>Contact</a>
            </div>
          </article>
        </section>
      </main>

      <footer id="contact" className="max-w-6xl mx-auto mt-8 text-center text-xs text-gray-500 py-6">
        <div className="mb-2">Made for: {NAME} — Last edited: Oct 5, 2025</div>
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.94 5.5A2.5 2.5 0 015.5 3h9a2.5 2.5 0 012.56 2.5v.25L10 9 2.94 5.75v-.25z"/><path d="M18 8.13v5.37A2.5 2.5 0 0115.5 16H4.5A2.5 2.5 0 012 13.5V8.13l7.11 3.55a1 1 0 00.78 0L18 8.13z"/></svg>
          <a href={`mailto:${EMAIL}`} className="underline text-sky-300">{EMAIL}</a>
        </div>
      </footer>
    </div>
  );
}
