import React from 'react';
import heroImage from 'figma:asset/6543bc6cd4c6e9f5b195c39778fb97165cb25085.png';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] text-white py-12 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
              경희대학교 DX·AX의<br />컨트롤타워
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              DX 추진단은 대학의 DX·AX 전환을 기획하고 조정합니다. 
              대학의 주요 의사결정이 데이터와 디지털·인공지능 기술을 기반으로 이루어지도록 전략과 체계를 설계하며, 
              교육·연구·행정 전반의 혁신을 실행합니다.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                <div className="text-xl md:text-2xl mb-1">문화</div>
                <div className="text-xs md:text-sm text-white/80">DX·AX 내재화</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                <div className="text-xl md:text-2xl mb-1">인프라</div>
                <div className="text-xs md:text-sm text-white/80">DB·플랫폼 확보</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-lg">
                <div className="text-xl md:text-2xl mb-1">프로세스</div>
                <div className="text-xs md:text-sm text-white/80">지속적 운영·활용</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="KHU DX Mascot" 
              className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}