import React from 'react';
import { MousePointerClick, MessageCircle } from 'lucide-react';

export default function CourseOverview() {
  return (
    <section className="py-20 px-4 bg-white" id="overview">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black text-[#0052cc] text-center mb-12">Course Overview</h2>
        
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <tbody>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold w-1/4 whitespace-nowrap">과 정 명</th>
                <td className="py-6 px-8 font-bold text-gray-800">
                  Al MSP 베스핀글로벌의 멀티클라우드(AWS.Azure.GCP.NCP)<br />
                  엔지니어 부트캠프 4기
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold">신청방법</th>
                <td className="py-6 px-8 flex items-center gap-2">
                  <a href="#" className="inline-flex items-center gap-2 bg-[#0052cc] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
                    지금지원하기 <MousePointerClick size={16} />
                  </a>
                  <span className="text-gray-600 font-medium">를 누르고 신청</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold">교육기간</th>
                <td className="py-6 px-8 font-bold text-gray-800">
                  2026.04월 - 2026.10월, 약 6개월
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold">교육장소</th>
                <td className="py-6 px-8 font-bold text-gray-800">
                  비트교육센터 (강남역 도보5분, 비트빌딩 3층)
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold">과정목표</th>
                <td className="py-6 px-8 font-bold text-gray-800">
                  멀티클라우드(AWS, Azure, GCP, NCP)를 다룰 줄 아는<br />
                  포괄적 기술 역량을 지닌 클라우드 인재양성
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold">교육대상</th>
                <td className="py-6 px-8 font-bold text-gray-800">
                  (전공무관)취업준비생, 클라우드 분야로 커리어 전환을 희망하는 분
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold align-top">선발기준</th>
                <td className="py-6 px-8 font-bold text-gray-800">
                  지원동기 및 학습 의지를 중점적으로 평가합니다.<br />
                  비전공자도 참여할 수 있도록 기본 기술 교육부터 시작합니다.
                </td>
              </tr>
              <tr>
                <th className="py-6 px-8 bg-blue-50/50 text-[#0052cc] font-bold align-top">선발절차</th>
                <td className="py-6 px-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-gray-700">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0052cc]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      </div>
                      <span>교육지원서<br/>제출</span>
                    </div>
                    <span className="text-gray-300">▶</span>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0052cc]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      </div>
                      <span>1차 상담</span>
                    </div>
                    <span className="text-gray-300">▶</span>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0052cc]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                      </div>
                      <span>온라인<br/>레벨테스트</span>
                    </div>
                    <span className="text-gray-300">▶</span>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0052cc]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                      </div>
                      <span>면접</span>
                    </div>
                    <span className="text-gray-300">▶</span>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0052cc]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      </div>
                      <span>합격자 발표</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6 flex items-center justify-center gap-4 border border-gray-200">
          <MessageCircle className="text-[#0052cc]" size={24} />
          <p className="text-gray-700 font-bold">
            신청 전, 교육이 본인에게 적합한지 궁금하시다면 상담부터 받아보세요!<br />
            <span className="text-sm font-normal text-gray-500">(카카오톡문의, 전화문의: 02-3486-3456)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
