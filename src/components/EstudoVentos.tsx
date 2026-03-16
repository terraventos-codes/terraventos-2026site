import { useEffect, useRef, useState } from 'react';
import './EstudoVentos.css';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function EstudoVentos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const playerRef = useRef<any>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Carrega a API do YouTube
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
    }

    const DESIRED_QUALITY = 'hd1080';
    let loopIntervalId: ReturnType<typeof setInterval> | undefined;
    let qualityIntervalId: ReturnType<typeof setInterval> | undefined;

    const enforceQuality = () => {
      const player = playerRef.current;
      if (!player || !player.setPlaybackQuality || !player.getPlaybackQuality) return;

      const current = player.getPlaybackQuality();
      if (current !== DESIRED_QUALITY) {
        player.setPlaybackQuality(DESIRED_QUALITY);
      }
    };

    const initPlayer = () => {
      if (playerRef.current) return;
      
      playerRef.current = new window.YT.Player('yt-player', {
        videoId: 'np2xeM0Xe6k',
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: 'np2xeM0Xe6k',
          mute: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          vq: DESIRED_QUALITY,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            event.target.setPlaybackQuality(DESIRED_QUALITY); // best-effort (YouTube may still downshift)
            enforceQuality();
            
            // Verifica constantemente o tempo para recomeçar antes do blackout final do Youtube
            loopIntervalId = setInterval(() => {
              if (playerRef.current && playerRef.current.getCurrentTime) {
                const time = playerRef.current.getCurrentTime();
                const duration = playerRef.current.getDuration();
                // 0.4 segundos antes de acabar, volta pro início
                if (duration > 0 && time >= duration - 0.4) {
                  playerRef.current.seekTo(0);
                }
              }
            }, 100);

            // Reforça 1080p periodicamente (YouTube pode reduzir por rede/dispositivo)
            qualityIntervalId = setInterval(enforceQuality, 1500);
          },
          onStateChange: () => {
            // quando o player muda de estado (buffer/play), revalida a qualidade
            enforceQuality();
          },
          onPlaybackQualityChange: () => {
            enforceQuality();
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      setTimeout(initPlayer, 100);
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (loopIntervalId) clearInterval(loopIntervalId);
      if (qualityIntervalId) clearInterval(qualityIntervalId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="estudo" 
      className={`estudo-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="estudo-container">
        
        {/* Left Video/Image Column */}
        <div className="estudo-media">
          {/* Using placeholder image for Bernardo */}
          <div className="estudo-video-wrapper">
            <div id="yt-player" className="estudo-video-iframe"></div>
            <div className="estudo-video-info">
              <h4>Bernardo Carvalho Wertheim</h4>
              <p>Fundador e CEO Terra Ventos</p>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
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
