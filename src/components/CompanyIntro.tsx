import React from 'react';

export default function CompanyIntro() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">
          <span className="text-[#0052cc]">K-Digital Training</span> 선도기업 "베스핀글로벌"
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-black mb-6">
              5,000+ 엔터프라이즈가 선택한<br />
              <span className="text-[#0052cc]">AI · Data · Cloud 파트너</span>
            </h3>
            <p className="text-gray-700 font-bold mb-6">
              Al Cloud 도입부터 운영 · 최적화까지,<br />
              글로벌 전문가가 이끄는 검증된 전략을 제공합니다.
            </p>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              베스핀 글로벌은 국내외 5,000여개 이상의 고객과<br />
              함께하는 AI 클라우드 매니지드 서비스(MSP)<br />
              기업입니다.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              우리는 "Learn, Do, Share"라는 철학을<br />
              바탕으로, AI·Data·Cloud분야의 실무형 인재<br />
              양성에 집중하고 있으며, 현업 전문가들이 직접<br />
              설계하고 강의하는 커리큘럼을 통해 현장에서 즉시<br />
              투입 가능한 실전형 교육을 제공합니다.
            </p>
          </div>
          <div className="flex-1">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
              <img src="https://picsum.photos/seed/bespin/800/450" alt="Bespin Global Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-white text-center">
                  <h4 className="text-2xl font-black tracking-widest mb-2">BESPIN GLOBAL</h4>
                  <p className="text-sm tracking-widest opacity-80">AWESOME CLOUD COMPANY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
