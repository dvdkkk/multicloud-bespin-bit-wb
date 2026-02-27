import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#bce4ff] to-white pt-32 pb-20 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 font-bold mb-4">"베스핀글로벌 신입이라면 이 정도는 알고 와야 한다!"</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#0052cc] mb-6 leading-tight">
          베스핀글로벌 현직자 테크리더그룹이<br />
          신입 채용 기준으로<br />
          커리큘럼을 설계하고 직접 강의합니다.
        </h1>
        <p className="text-xl font-bold mb-8">
          어떤 전공에서 시작해도 6개월 후,<br />
          기업이 원하는 멀티 클라우드 엔지니어로 성장하세요.
        </p>
        <div className="bg-[#0052cc] text-white py-3 px-6 rounded-full inline-block font-bold mb-8">
          AI MSP 베스핀글로벌의 멀티클라우드(AWS·Azure·GCP·NCP) 엔지니어 부트캠프
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-[#0052cc]">
          <span className="bg-white py-2 px-4 rounded-full shadow-sm border border-blue-100">개인별 4대 클라우드 계정 제공</span>
          <span className="bg-white py-2 px-4 rounded-full shadow-sm border border-blue-100">현직자 멘토와 함께 실무 프로젝트</span>
          <span className="bg-white py-2 px-4 rounded-full shadow-sm border border-blue-100">포트폴리오 3종 완성</span>
        </div>
      </div>
    </section>
  );
}
