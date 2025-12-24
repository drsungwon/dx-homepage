import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#8B1538] rounded flex items-center justify-center">
              <span className="text-white text-sm">DX</span>
            </div>
            <div>
              <div className="text-gray-900">경희대학교</div>
              <div className="text-sm text-gray-600">DX 추진단</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('introduction')} className="text-gray-700 hover:text-[#8B1538] transition-colors">
              추진단 소개
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#8B1538] transition-colors">
              주요 추진사업
            </button>
            <button onClick={() => scrollToSection('governance')} className="text-gray-700 hover:text-[#8B1538] transition-colors">
              추진 체계
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#8B1538] transition-colors">
              협력 및 문의
            </button>
            <button onClick={() => scrollToSection('chatbot')} className="text-gray-700 hover:text-[#8B1538] transition-colors">
              AI 챗봇
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('introduction')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              사업단 소개
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              주요 추진사업
            </button>
            <button
              onClick={() => scrollToSection('governance')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              추진 체계
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              협력 및 문의
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
