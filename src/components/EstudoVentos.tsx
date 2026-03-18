import { useEffect, useRef, useState } from 'react';
import './EstudoVentos.css';

// Declaração mínima para o tipo do player YT
declare global {
  interface Window {
    YT: {
      Player: new (
        el: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (e: { target: YTPlayer }) => void;
            onStateChange?: (e: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayer {
  playVideo(): void;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  getDuration(): number;
  destroy(): void;
}

export default function EstudoVentos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Intersection Observer para reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // YouTube IFrame API: reinicia 1s antes do fim para evitar tela preta
  useEffect(() => {
    const VIDEO_ID = 'np2xeM0Xe6k';

    const startWatchdog = (player: YTPlayer) => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        try {
          const duration = player.getDuration();
          const current = player.getCurrentTime();
          if (duration > 0 && duration - current <= 1.2) {
            player.seekTo(0, true);
          }
        } catch {
          // player pode não estar pronto ainda
        }
      }, 500);
    };

    const initPlayer = () => {
      if (!playerContainerRef.current) return;
      playerRef.current = new window.YT.Player(playerContainerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          playsinline: 1,
        },
        events: {
          onReady: (e) => {
            e.target.playVideo();
          },
          onStateChange: (e) => {
            // 1 = PLAYING
            if (e.data === 1) {
              startWatchdog(e.target);
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      // API já carregada (ex: hot reload)
      initPlayer();
    } else {
      // Injeta o script da API uma única vez
      if (!document.getElementById('yt-api-script')) {
        const tag = document.createElement('script');
        tag.id = 'yt-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      try { playerRef.current?.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="estudo"
      data-reveal-managed="true"
      className={`estudo-section is-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="estudo-container">
        <div className="estudo-media">
          <div className="estudo-video-wrapper">
            {/* Container onde o YT Player vai injetar o iframe */}
            <div ref={playerContainerRef} className="estudo-video-iframe" />
            <div className="estudo-video-touch-overlay" />
            <div className="estudo-video-info">
              <h4>Bernardo Carvalho Wertheim</h4>
              <p>Fundador e CEO Terra Ventos</p>
            </div>
          </div>
        </div>

        <div className="estudo-content">
          <h2 className="estudo-title reveal-title">
            ESTUDO<br />DOS VENTOS
          </h2>

          <p className="estudo-desc">
            Terra Ventos apresenta: Quais locais mais crescem em valorização, onde está menos explorado e com o maior potencial. <strong>Mergulhe em dados e análise potencial do Litoral Cearense.</strong>
          </p>

          <div className="estudo-stats">
            <div className="estudo-stat">
              <span className="stat-value">+15</span>
              <span className="stat-label">Cidades analisadas</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">9 meses</span>
              <span className="stat-label">de ventos constante</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">+20%</span>
              <span className="stat-label">de valorização ao ano</span>
            </div>
            <div className="estudo-stat">
              <span className="stat-value">APAs</span>
              <span className="stat-label">técnico e ambiental</span>
            </div>
          </div>

          <a
            className="estudo-btn"
            href="https://www.canva.com/design/DAG1bAlUIp0/MphbQLRL9vMkqgnCqX7_0w/view?utm_content=DAG1bAlUIp0&utm_campaign=designshare&utm_medium=link&utm_source=viewer"
            target="_blank"
            rel="noreferrer"
          >
            Ver o estudo completo
          </a>
        </div>
      </div>
    </section>
  );
}
