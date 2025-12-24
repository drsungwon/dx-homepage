import React from 'react';
import { Mail, Phone, MapPin, Building, User } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-gray-900">협력 및 문의</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            DX 추진단은 대학 내외부의 다양한 이해관계자와 협력하고 있습니다.
            DX 추진단의 사업에 대한 문의나 제안이 있으시면 언제든지 연락 주시기 바랍니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-lg md:text-xl mb-4 md:mb-6 text-gray-900">연락처</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 bg-[#8B1538]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-[#8B1538]" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-600 mb-1">소속</div>
                  <div className="text-sm md:text-base text-gray-900">경희대학교 DX 추진단</div>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 bg-[#8B1538]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#8B1538]" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-600 mb-1">주소</div>
                  <div className="text-sm md:text-base text-gray-900">서울특별시 동대문구 경희대로 26<br />경희대학교 서울캠퍼스</div>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 bg-[#8B1538]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#8B1538]" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-600 mb-1">이메일</div>
                  <a href="mailto:dx@khu.ac.kr" className="text-sm md:text-base text-[#8B1538] hover:underline break-all">dx@khu.ac.kr</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-lg md:text-xl mb-4 md:mb-6 text-gray-900">구성원</h3>
            <div className="space-y-4">
              {[
                '이성원 추진단장',
                '김성환 사무국장',
                '백현숙 부처장',
                '심성원 과장',
                '강인규 계장',
                '홍지운 계장',
                '강지원 선생님',
              ].map((name, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 bg-[#8B1538]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-[#8B1538]" />
                  </div>
                  <div className="text-sm md:text-base text-gray-900">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 bg-gradient-to-br from-[#8B1538] to-[#6B1028] rounded-xl p-6 md:p-8 lg:p-10 text-white">
          <h3 className="text-lg md:text-xl mb-3 md:mb-4">추진단 사무실 현황</h3>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            DX 추진단 사무실은 경희대학교 서울캠퍼스 생활과학대학 6층에 위치할 예정입니다.
            자세한 위치는 추후 공지될 예정이오니 참고 부탁드립니다.
          </p>
        </div>
      </div>
    </section>
  );
}