"use client";

import styles from "./page.module.css";

export default function Home() {
  const voiceCharacteristics = [
    { label: "Range", value: "Bass to Alto" },
    {
      label: "Accents",
      value: "American Neutral, American Southern, British General",
    },
    { label: "Specialties", value: "Narration, Character, Commercial" },
  ];

  const projectSamples = [
    {
      title: "Audiobook - Adult Sci-fi",
      description: "Sci-fi spy novel narration",
      year: "2025",
    },
    {
      title: "Audiobook - Non-fiction",
      description: "Management skills book narration",
      year: "2025",
    },
    {
      title: "Animation Character Reel",
      description: "Multiple character voices for animated series",
      year: "2023",
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Header Section */}
        <section className={styles.header}>
          <div className={styles.profileContent}>
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>Taylor Wilhite</h1>
              <p className={styles.title}>Professional Voice Actor</p>
              <p className={styles.bio}>
                Experienced voice actor specializing in character voices,
                commercial work, and audiobook narration. Known for versatility
                and ability to bring characters to life with authentic emotion.
              </p>
              <div className={styles.characteristics}>
                {voiceCharacteristics.map((char, idx) => (
                  <div key={idx} className={styles.charItem}>
                    <span className={styles.charLabel}>{char.label}</span>
                    <span className={styles.charValue}>{char.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.profileImage}>
              <div className={styles.imagePlaceholder}>
                <span>Professional Headshot</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className={styles.portfolio}>
          <h2 className={styles.sectionTitle}>Portfolio</h2>
          <div className={styles.projectGrid}>
            {projectSamples.map((project, idx) => (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.projectYear}>{project.year}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
                <button className={styles.playButton}>▶ Listen Sample</button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctas}>
          <a className={styles.primary} href="mailto:taylorwilhite@gmail.com">
            Get in Touch
          </a>
        </section>
      </main>
    </div>
  );
}
