import React from 'react';

export default function WhyCourse() {
  const reasons = [
    {
      id: "01",
      title: "인턴십 및 채용 우대",
      desc: "우수 수료생 베스핀글로벌 인턴 채용, 자사 지원 시 가점 부여"
    },
    {
      id: "02",
      title: "현직자 강사 멘토로 82% 이상 투입",
      desc: "베스핀글로벌 현직자가 직접 가르치고 멘토링"
    },
    {
      id: "03",
      title: "현업과 동일한 환경에서 실습",
      desc: "교육기간 중 AWS, Azure, GCP, NCP 클라우드 개인별 계정 사용"
    },
    {
      id: "04",
      title: "기업주도과정의 베네핏",
      desc: "최신 AI, 클라우드 기술변화와 트렌드를 특강으로 빠르게 학습"
    },
    {
      id: "05",
      title: "매월 훈련지원금",
      desc: "매월 훈련금지급 최대 90만원\n단, 훈련장려금 30만원 + 국민취업지원제도 참여시 최대 60만원"
    },
    {
      id: "06",
      title: "클라우드 자격증 응시료 $150지원",
      desc: "자격증 쪽집게 특강과 온라인 컨텐츠 함께 제공"
    },
    {
      id: "07",
      title: "사내 카페테리아 자율 이용가능",
      desc: "학습에만 전념할 수 있는 환경"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0052cc] font-bold mb-2">Why this course?</p>
          <h2 className="text-4xl font-black mb-4">이 과정이 특별한 이유</h2>
          <p className="text-gray-600 font-medium">최적의 교육환경에서<br/>기업이 원하는 실무 역량을 키우세요</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-8">
            {reasons.slice(0, 4).map((reason) => (
              <div key={reason.id} className="flex gap-6 border-b border-gray-100 pb-6">
                <div className="text-4xl font-black text-blue-100">{reason.id}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0052cc] mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-8">
            {reasons.slice(4).map((reason) => (
              <div key={reason.id} className="flex gap-6 border-b border-gray-100 pb-6">
                <div className="text-4xl font-black text-blue-100">{reason.id}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#0052cc] mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">{reason.desc}</p>
                </div>
              </div>
            ))}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <img src="https://picsum.photos/seed/office/600/300" alt="Office Environment" className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
