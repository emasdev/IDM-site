import { useEffect, useRef, useState } from "react";

const videos = ["/hero.mp4", "/hero2.mp4"];

export default function HeroSection({ onOpenStudy }) {
  const [videoSrc, setVideoSrc] = useState(videos[0]);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setVideoSrc((current) => {
        const nextIndex = (videos.indexOf(current) + 1) % videos.length;
        return videos[nextIndex];
      });
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play().catch(() => {});
  }, [videoSrc]);

  return (
    <header className="hero-header text-secondary text-center">
      <div className="hero-video-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          poster="/assets/img/logo.png"
          src={videoSrc}
        />
        <div className="hero-video-overlay" />
      </div>

      <div className="container hero-shell">
        <div className="hero-grid">
          <div className="hero-branding animate__animated animate__fadeInUp">
            <div className="hero-logo-wrap">
              <img
                src="/assets/img/logo.png"
                alt="IDM logo"
                className="hero-logo"
              />
            </div>

            <div className="hero-brand-copy">
              <span className="hero-kicker">iDM | Beyond Diagnostics</span>
              <h1>Imagen &amp; Diagnóstico Maxilofacial</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
