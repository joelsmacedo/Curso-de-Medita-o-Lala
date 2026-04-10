"use client";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import AffiliateModal from './AffiliateModal';

export default function Footer() {
  const [isAffiliateModalOpen, setIsAffiliateModalOpen] = useState(false);

  return (
    <footer className="border-t border-white/5 py-12 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
        <div className="font-display font-bold text-xl tracking-wider uppercase flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#d4af37]" />
          Espaço Caminho da Luz
        </div>
        <p className="text-white/40 text-sm">
          &copy; 2026 Cursos Esotéricos. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/40">
          <button 
            onClick={() => setIsAffiliateModalOpen(true)}
            className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline decoration-[#d4af37]/40"
          >
            Criado por Afiliado Oficial
          </button>
          <span className="hidden sm:inline">•</span>
          <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
        </div>
      </div>

      <AffiliateModal 
        isOpen={isAffiliateModalOpen} 
        onClose={() => setIsAffiliateModalOpen(false)} 
      />
    </footer>
  );
}