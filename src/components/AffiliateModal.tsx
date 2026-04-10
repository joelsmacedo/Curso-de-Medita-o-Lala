"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X, Info } from 'lucide-react';

interface AffiliateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AffiliateModal({ isOpen, onClose }: AffiliateModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-2"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-2">
                <Info className="w-6 h-6 text-[#d4af37]" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-white">Aviso de Afiliado</h3>
              
              <div className="space-y-4 text-white/70 leading-relaxed text-sm md:text-base">
                <p>
                  Este site participa de programas de afiliados e pode receber comissões por indicações realizadas através dos links aqui presentes, sem custo adicional ao usuário.
                </p>
                <p>
                  Recomendamos apenas produtos que consideramos relevantes, mas a decisão de compra é de total responsabilidade do usuário.
                </p>
              </div>

              <button
                onClick={onClose}
                className="mt-6 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-medium transition-colors"
              >
                Entendi
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}