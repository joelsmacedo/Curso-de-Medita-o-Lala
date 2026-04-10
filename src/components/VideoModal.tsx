"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  // Construct optimized embed URL
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Fechar</span>
                <X className="w-6 h-6" />
              </button>

              {/* Iframe */}
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}