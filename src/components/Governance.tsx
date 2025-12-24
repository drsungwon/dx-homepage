import React from 'react';
import { Network, Users, FileText, BarChart } from 'lucide-react';

export function Governance() {
  return (
    <section id="governance" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-gray-900">추진 체계 및 거버넌스</h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            DX 추진단은 대학 전체의 디지털 전환을 조정하고 관리하기 위한 체계적인 거버넌스를 운영합니다. 
            전략 수립부터 실행, 성과 관리까지 전 과정을 체계적으로 관리하며, 
            각 부서 및 외부 전문가와의 협력을 통해 실질적인 DX 성과를 창출합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-[#8B1538]" />
              </div>
              <h3 className="text-lg md:text-xl text-gray-900">DX 종합계획 수립 및 실행</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              대학 전체의 DX 비전과 목표를 설정하고, 중장기 로드맵을 수립합니다. 
              교육·연구·산학·글로벌·행정의 각 영역별 세부 전략과 실행 계획을 마련하며, 연도별 추진 과제를 관리합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#8B1538]" />
              </div>
              <h3 className="text-lg md:text-xl text-gray-900">DX 구축 TF 구성 및 운영</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              대학 각 부서와의 긴밀한 협력을 통해 DX 과제를 발굴하고 조정합니다. 
              정기적인 회의를 통해 추진 현황을 점검하고 이슈를 해결하며, 
              부서 간 협업이 필요한 과업에 대해서, 교내외 업무를 중재합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#8B1538]" />
              </div>
              <h3 className="text-lg md:text-xl text-gray-900">DX 자문위원회 구성 및 운영</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              교내외 전문가로 구성된 자문위원회를 통해 DX 전략과 주요 사업에 대한 전문적인 검토와 자문을 받습니다. 
              산업계, 학계, 연구기관의 최신 동향을 반영하여 대학 DX의 방향성을 설정합니다.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-12 h-12 bg-[#8B1538]/10 rounded-lg flex items-center justify-center">
                <BarChart className="w-6 h-6 text-[#8B1538]" />
              </div>
              <h3 className="text-lg md:text-xl text-gray-900">DX 성과 분석 및 확산</h3>
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 md:mb-4">
              DX 성과를 체계적으로 측정하고 분석합니다. 
              IR센터 들을 통해서 데이터 기반의 성과 지표를 관리하며, 우수 사례를 발굴하여 대학 전체로 확산합니다.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 lg:p-10 border border-gray-200">
          <h3 className="text-lg md:text-xl mb-6 md:mb-8 text-gray-900 text-center md:text-left">추진 프로세스</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B1538] text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg md:text-xl">1</div>
              <div className="mb-2 text-base md:text-lg text-gray-900">전략 수립</div>
              <p className="text-xs md:text-sm text-gray-600">DX 종합계획 및<br />로드맵 설계</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B1538] text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg md:text-xl">2</div>
              <div className="mb-2 text-base md:text-lg text-gray-900">과제 조정</div>
              <p className="text-xs md:text-sm text-gray-600">DX TF 운영 및<br />부서 간 협력</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B1538] text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg md:text-xl">3</div>
              <div className="mb-2 text-base md:text-lg text-gray-900">사업 실행</div>
              <p className="text-xs md:text-sm text-gray-600">핵심 DX 플랫폼<br />확보 및 운영</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#8B1538] text-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 text-lg md:text-xl">4</div>
              <div className="mb-2 text-base md:text-lg text-gray-900">성과 관리</div>
              <p className="text-xs md:text-sm text-gray-600">IR센터 등을 통한<br />평가 및 확산</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}