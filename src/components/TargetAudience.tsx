import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function TargetAudience() {
  const targets = [
    "실무에서 바로 쓰이는 기술로 IT 커리어를 시작하고 싶은 분",
    "IT전공이 아니지만, IT분야로 커리어를 시작하고 싶은 분",
    "전공자지만 실무 경험이 부족해 고민인 분",
    "자격증과 실무 포트폴리오로 실력을 증명하고 싶은 분",
    "여러 클라우드를 다뤄보며 폭넓은 스킬을 쌓고 싶은 분",
    "클라우드 기반 IT 인프라·자동화 기술을 경험해보고 싶은 분"
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0052cc] font-bold mb-2">Who is this for?</p>
          <h2 className="text-4xl font-black mb-6">이 과정, 특히 이런 분들에게 추천합니다.</h2>
          <p className="text-xl font-bold text-[#0052cc] italic">
            "실무에서 바로 쓰이는 기술로<br />
            IT커리어를 시작하고 싶은 분"
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-6">
            {targets.map((target, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0052cc] shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium leading-relaxed">{target}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-[#0052cc] text-white py-12 px-6 rounded-3xl shadow-2xl">
          <h3 className="text-2xl font-black mb-4">
            국민내일배움카드를 통해<br />
            정부지원으로 수강 가능합니다.
          </h3>
          <p className="text-blue-100 mb-2">
            본 과정은 정부지원 교육으로 수강 가능하며,<br />
            개인별 유형에 따라 일부 자부담이 발생할 수 있습니다.
          </p>
          <p className="text-sm text-blue-200">
            (자세한 지원 금액은 상담을 통해 안내드립니다.)
          </p>
        </div>
      </div>
    </section>
  );
}
