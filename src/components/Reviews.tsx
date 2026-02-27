import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      title: "실무와 동일한 환경의 프로젝트",
      content: "실제 클라우드 계정(4대 CSP)으로 진행되는 프로젝트/실습은 실무 흐름을 직접 경험할 수 있어 교육 효과가 매우 좋았습니다."
    },
    {
      title: "현업 멘토의 밀착 피드백",
      content: "현업 멘토님의 피드백과 지원이 학습 방향을 잡고 성장하는 데 큰 도움이 되었습니다."
    },
    {
      title: "교육 운영의 체계성과 신뢰도",
      content: "네임드있는 MSP회사에서 운영하는 것이다보니 교육에 체계가 잡혀있습니다."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white" id="reviews">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-4">배움에서 끝나지 않습니다.</h2>
        <p className="text-xl font-bold text-[#0052cc] mb-12">
          실무로 이어지고, 커리어로 연결되는 여정<br />
          선배들의 리얼 스토리를 영상으로 확인하세요.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-24">
          <a href="https://www.youtube.com/watch?v=zonUwTIaB50" target="_blank" rel="noreferrer" className="block relative rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://picsum.photos/seed/review1/400/225" alt="Review Video 1" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 group-hover:bg-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052cc" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
          </a>
          <a href="https://www.youtube.com/watch?v=GW_dZO2JuZE" target="_blank" rel="noreferrer" className="block relative rounded-2xl overflow-hidden shadow-lg group">
            <img src="https://picsum.photos/seed/review2/400/225" alt="Review Video 2" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 group-hover:bg-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0052cc" stroke="none"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </div>
          </a>
        </div>

        <h3 className="text-2xl font-black mb-12">
          수강생 후기가 말하는, 이 과정의 진짜 가치
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={20} />
                ))}
              </div>
              <h4 className="text-lg font-bold text-[#0052cc] mb-4">"{review.title}"</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
