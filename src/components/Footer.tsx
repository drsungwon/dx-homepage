import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-8 h-8 bg-[#8B1538] rounded flex items-center justify-center">
                <span className="text-white text-xs">DX</span>
              </div>
              <div className="text-white text-sm md:text-base">DX 추진단</div>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-gray-400">
              경희대학교 DX·AX 전환의 중심, <br></br>디지털 혁신을 선도하는 DX 추진단
            </p>
          </div>

          <div>
            <div className="text-white mb-3 md:mb-4 text-sm md:text-base">서비스 바로가기</div>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="https://data.khu.ac.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  K-DX 빅데이터 분석 시스템
                </a>
              </li>
              <li>
                <a href="https://chat.khu.ac.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  ChatKHU 생성형 AI 플랫폼
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-white mb-3 md:mb-4 text-sm md:text-base">연락처</div>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>서울특별시 동대문구 경희대로 26</li>
              <li>경희대학교 서울캠퍼스</li>
              <li>
                <a href="mailto:dx@khu.ac.kr" className="hover:text-white transition-colors break-all">dx@khu.ac.kr</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} 경희대학교 DX 추진단. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}