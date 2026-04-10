"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize, Minimize } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import VideoCTAButton from './VideoCTAButton';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

// YouTube Player API type
interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  getCurrentTime: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: {
        videoId: string;
        playerVars?: Record<string, string | number>;
        events?: {
          onReady?: (event: { target: YTPlayer }) => void;
          onStateChange?: (event: { data: number; target: YTPlayer }) => void;
        };
      }) => YTPlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const timeCheckIntervalRef = useRef<number | null>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }, []);

  // Initialize player when modal opens
  useEffect(() => {
    if (isOpen) {
      setShowCTA(false);
      
      const initPlayer = () => {
        if (window.YT && window.YT.Player) {
          playerRef.current = new window.YT.Player('youtube-player', {
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
              controls: 1,
              showinfo: 0,
              disablekb: 0,
              iv_load_policy: 3
            },
            events: {
              onReady: () => {
                // Start time tracking
                if (timeCheckIntervalRef.current) {
                  clearInterval(timeCheckIntervalRef.current);
                }
                timeCheckIntervalRef.current = window.setInterval(() => {
                  if (playerRef.current) {
                    const currentTime = playerRef.current.getCurrentTime();
                    // Show CTA at 8:50 (530 seconds)
                    if (currentTime >= 530 && !showCTA) {
                      setShowCTA(true);
                    }
                  }
                }, 1000);
              },
              onStateChange: (event) => {
                // Clear interval when video ends or is paused for too long
                if (event.data === window.YT.PlayerState.ENDED) {
                  if (timeCheckIntervalRef.current) {
                    clearInterval(timeCheckIntervalRef.current);
                  }
                }
              }
            }
          });
        }
      };

      // Wait for YT API to be ready
      if (window.YT && window.YT.Player) {
        initPlayer();
      } else {
        window.onYouTubeIframeAPIReady = initPlayer;
      }
    }

    return () => {
      if (timeCheckIntervalRef.current) {
        clearInterval(timeCheckIntervalRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isOpen, videoId]);

  // Reset CTA when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowCTA(false);
    }
  }, [isOpen]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Erro ao tentar ativar tela cheia: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
          />
          
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Controles do Modal */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-40">
              <button
                onClick={toggleFullscreen}
                className="text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm"
                title="Tela Cheia"
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="text-white/50 hover:text-white transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm"
                title="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* CTA Button */}
            <VideoCTAButton isVisible={showCTA} />

            {/* YouTube Player Container */}
            <div id="youtube-player" className="w-full h-full" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}