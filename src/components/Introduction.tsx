import React from 'react';
import { Target, Users, Database, TrendingUp } from 'lucide-react';

export function Introduction() {
  return (
    <section id="introduction" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-gray-900">추진단 소개</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            DX 추진단은 대학 차원의 DX·AX 전략을 수립하고, 추진 체계를 운영하며, 주요 과제·부서를 조율하고, 성과를 확산하는 조직입니다. 
             K-DX 빅데이터 분석 시스템, ChatKHU 생성형 AI 플랫폼, KHUBot 입시·학사 AI 에이전트, 학생성장플랫폼 등 핵심 인프라를 직접 확보하여, 
            대학 구성원이 더 나은 의사결정을 내릴 수 있도록 지원합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#8B1538]" />
            </div>
            <h3 className="text-base md:text-lg mb-2 md:mb-3 text-gray-900">DX 계획 수립·실행</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              대학 DX·AX 종합계획과 중장기 로드맵을 수립하고 실행합니다.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#8B1538]" />
            </div>
            <h3 className="text-base md:text-lg mb-2 md:mb-3 text-gray-900">거버넌스 운영</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              자문위원회와 DX·AX TF를 운영하며 추진 체계를 조정합니다.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-[#8B1538]" />
            </div>
            <h3 className="text-base md:text-lg mb-2 md:mb-3 text-gray-900">핵심 인프라 확보</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              K-DX, ChatKHU 등 대학 핵심 DX·AX 플랫폼을 확보합니다.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
            <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-[#8B1538]" />
            </div>
            <h3 className="text-base md:text-lg mb-2 md:mb-3 text-gray-900">성과 관리·확산</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              가칭)IR센터 등을 통해 성과를 측정하고 우수 사례를 확산합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}