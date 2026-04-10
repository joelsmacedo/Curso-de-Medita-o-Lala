"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  // modestsbranding=1 e rel=0 ajudam a reduzir a marca, mas a logo no canto ainda pode aparecer
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&fs=0&disablekb=1`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop - Click outside to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 group z-10"
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
              allowFullScreen={false}
            />

            {/* Overlay invisível para bloquear o clique na logo do YouTube (canto inferior direito) */}
            <div className="absolute bottom-0 right-0 w-[100px] h-[50px] z-10 cursor-default" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}