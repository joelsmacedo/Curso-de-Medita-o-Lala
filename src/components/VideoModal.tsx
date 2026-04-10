"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  // controls=0 remove a barra de progresso e botões do player
  // modestbranding=1 tenta esconder a logo (embora com controls=0 ela mude de comportamento)
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=0&showinfo=0&disablekb=1&iv_load_policy=3`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop - Clicar fora fecha o modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
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
            {/* Botão de Fechar no canto superior */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-30 bg-black/50 p-2 rounded-full backdrop-blur-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Iframe do Vídeo */}
            <iframe
              className="w-full h-full pointer-events-none"
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
            />

            {/* 
              Camada de bloqueio total: 
              Como os controles estão desativados e o vídeo é autoplay, 
              colocamos um div por cima para impedir QUALQUER clique no iframe.
              Isso impede pular o vídeo ou clicar em logos/links.
            */}
            <div className="absolute inset-0 z-20 bg-transparent cursor-default" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}