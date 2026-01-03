"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [playing, setPlaying] = useState<number | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );

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
      audioUrl:
        "https://res.cloudinary.com/dwqfywook/video/upload/v1767400546/Fiction_Audiobook_Sample_u2zwor.mp3",
    },
    {
      title: "Audiobook - Non-fiction",
      description: "Management skills book narration",
      year: "2025",
      audioUrl:
        "https://res.cloudinary.com/dwqfywook/video/upload/v1767400526/Nonfiction_Audiobook_Sample_rppgfp.mp3",
    },
    {
      title: "Animation Character Reel",
      description: "Multiple character voices for animated series",
      year: "2023",
      audioUrl:
        "https://res.cloudinary.com/dwqfywook/video/upload/v1767400564/Animation_Voice_Reel_d0swjx.mp3",
    },
  ];

  const handlePlayPause = (idx: number, audioUrl: string) => {
    if (playing === idx && audioElement) {
      // Stop playing current
      audioElement.pause();
      setPlaying(null);
    } else {
      // Stop previous audio if any
      if (audioElement) {
        audioElement.pause();
      }

      // Play new audio
      const audio = new Audio(audioUrl);
      setAudioElement(audio);
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });

      audio.addEventListener("ended", () => {
        setPlaying(null);
      });

      setPlaying(idx);
    }
  };

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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://res.cloudinary.com/dwqfywook/image/upload/v1767401837/square_headshot_054765.jpg"
                  alt="Professional Headshot"
                  className={styles.profileImage}
                />
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
                <button
                  className={styles.playButton}
                  onClick={() => handlePlayPause(idx, project.audioUrl)}
                >
                  {playing === idx ? "⏸ Stop" : "▶ Listen Sample"}
                </button>
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
