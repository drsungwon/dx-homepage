import React from "react";
import {
  BarChart3,
  Sparkles,
  Users,
  MessageCircle,
  ExternalLink,
} from "lucide-react";
import chatKHUImage from "figma:asset/43105003bd7d3d18aade62657b58e67a06f2eb66.png";
import { KDXVisual } from "./KDXVisual";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-12 md:py-16 lg:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 text-gray-900">
            주요 추진사업
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            DX 추진단은 대학 구성원의 의사결정과 업무 효율을
            높이는 핵심 플랫폼을 확보하고 있으며, 학생 중심의
            차세대 서비스를 준비하고 있습니다.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* K-DX */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 border border-gray-200">
            <div className="grid lg:grid-cols-[1fr_280px] gap-6 md:gap-8 items-start">
              <div>
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#8B1538] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl text-gray-900">
                        K-DX
                      </h3>
                      <span className="px-2 md:px-3 py-1 bg-green-100 text-green-800 text-xs md:text-sm rounded-full whitespace-nowrap">
                        시험 운영 중
                      </span>
                    </div>
                    <div className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
                      경희대학교 빅데이터 분석 시스템
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                  대학 내 분산된 데이터를 연계·분석하여, 과학적
                  의사결정과 증거 기반 정책 수립을 지원하는
                  빅데이터 분석 시스템입니다. 학생·교육, 연구,
                  산학협력, 국제화, 행정 등 약 140여 개 주제별
                  데이터를 제공하며, 대학 구성원이 필요한 정보를
                  즉시 확인하고 분석할 수 있도록 합니다. 2026년 3월 전체 교직원 대상 정식 오픈을
                  목표로 준비하고 있습니다.
                </p>

                <div className="bg-white rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <div className="text-xl md:text-2xl text-[#8B1538] mb-1">
                        140+
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        주제별 데이터
                      </div>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl text-[#8B1538] mb-1">
                        6개 영역
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        학생·교육·연구·산학·국제화·행정
                      </div>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl text-[#8B1538] mb-1">
                        실시간
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        데이터 연계
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://data.khu.ac.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-base text-[#8B1538] hover:underline"
                >
                  서비스 바로가기
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex justify-center lg:justify-end">
                <KDXVisual />
              </div>
            </div>
          </div>

          {/* ChatKHU */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 border border-gray-200">
            <div className="grid lg:grid-cols-[1fr_200px] gap-6 md:gap-8 items-start">
              <div>
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#8B1538] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl text-gray-900">
                        ChatKHU
                      </h3>
                      <span className="px-2 md:px-3 py-1 bg-green-100 text-green-800 text-xs md:text-sm rounded-full whitespace-nowrap">
                        시험 운영 중
                      </span>
                    </div>
                    <div className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
                      경희대학교 생성형 AI 플랫폼
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                  학습·교육·연구·행정 전반에 생성형 AI를
                  안전하고 유연하게 활용하기 위한 대학 공용
                  플랫폼입니다. 멀티-LLM 아키텍처를 기반으로
                  OpenAI, Google, Anthropic, LLaMA 계열 등
                  다양한 모델을 선택할 수 있으며, 챗봇 및 AI
                  에이전트(RAG) 제작·공유 기능을 지원합니다. 2026년 3월 전체 재학생·교직원 대상 정식 오픈을
                  목표로 준비하고 있습니다.
                </p>

                <div className="bg-white rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <div>
                      <div className="text-base md:text-xl lg:text-2xl text-[#8B1538] mb-1">
                        다중 LLM
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        다양한 AI 모델 지원
                      </div>
                    </div>
                    <div>
                      <div className="text-base md:text-xl lg:text-2xl text-[#8B1538] mb-1">
                        챗봇 개발
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        AI RAG 제작·공유
                      </div>
                    </div>
                    <div>
                      <div className="text-base md:text-xl lg:text-2xl text-[#8B1538] mb-1">
                        안전·보안
                      </div>
                      <div className="text-xs md:text-sm text-gray-600">
                        우리 대학 전용 환경
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://chat.khu.ac.kr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm md:text-base text-[#8B1538] hover:underline"
                >
                  서비스 바로가기
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src={chatKHUImage}
                  alt="ChatKHU"
                  className="w-32 md:w-40 lg:w-48 drop-shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* 학생성장플랫폼 */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 border border-gray-200">
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl text-gray-900">
                    학생성장플랫폼
                  </h3>
                  <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs md:text-sm rounded-full whitespace-nowrap">
                    2026년 2학기 오픈 예정
                  </span>
                </div>
                <div className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
                  학생 중심 대학생활 전주기 지원 플랫폼
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
              학생 역량을 기반으로 대학생활 전 주기를
              지원·관리하는 학생 중심 플랫폼입니다. 전공 선택,
              현장실습, 대외 활동, 진로 탐색을 학생이 주도적으로
              설계·관리할 수 있도록 지원합니다.
              대학 내의 각종 사업단·센터·행사·취창업 공지사항, 그리고 시간표 공유와 식당 메뉴 등 실생활에 유용한 정보를 한 곳에서 확인합니다.
              현재 기초 연구
              및 개발 단계에 있으며, 2026년 2학기 정식 오픈을
              목표로 준비하고 있습니다.
            </p>

            <div className="bg-white rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div>
                  <div className="text-xl md:text-2xl text-gray-700 mb-1">
                    역량 기반
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    학생 맞춤형 설계
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl text-gray-700 mb-1">
                    전주기
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    입학부터 졸업까지
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl text-gray-700 mb-1">
                    학생 주도
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    자기설계형 시스템
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KHUBot */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 border border-gray-200">
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-400 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl text-gray-900">
                    KHUBot
                  </h3>
                  <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs md:text-sm rounded-full whitespace-nowrap">
                    2026년 2학기 오픈 예정
                  </span>
                </div>
                <div className="text-sm md:text-base text-gray-600 mb-2 md:mb-4">
                  경희대학교 공식 AI 에이전트
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
              입시·학사 정보를 안내하는 경희대학교 공식 AI
              에이전트입니다. 반복적인 민원 및 안내 업무의
              디지털 전환을 목표로 개발 중이며, 학생과 교직원이
              필요한 정보를 즉시 확인할 수 있도록 지원합니다.
              2026년 2학기 정식 오픈을 목표로 준비하고 있습니다.
            </p>

            <div className="bg-white rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                <div>
                  <div className="text-xl md:text-2xl text-gray-700 mb-1">
                    24/7
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    연중무휴 안내
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl text-gray-700 mb-1">
                    입시·학사
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    종합 정보 제공
                  </div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl text-gray-700 mb-1">
                    AI 기반
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    자동 응답 시스템
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}