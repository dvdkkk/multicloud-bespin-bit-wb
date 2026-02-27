import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Cloud, Server, Shield, CheckCircle2, ChevronRight, 
  BookOpen, Users, Trophy, Briefcase, GraduationCap, 
  Building2, MonitorPlay, Award, Coffee, ArrowRight,
  Quote, Calendar, MapPin, Target, UserCheck, HelpCircle,
  Code, Terminal, Layers, Cpu, Globe, ChevronDown, ChevronUp,
  Menu, X, MessageCircle
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const isMobile = window.innerWidth < 768;
      const offset = (isMobile && id === 'contact-form') ? -650 : 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-900 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter text-blue-950 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            BESPIN<span className="text-blue-600">GLOBAL</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-3 lg:gap-8 font-semibold text-xs lg:text-sm text-slate-700 items-center">
            <button onClick={() => scrollTo('benefits')} className="hover:text-blue-600 transition-colors whitespace-nowrap">수강혜택</button>
            <button onClick={() => scrollTo('overview')} className="hover:text-blue-600 transition-colors whitespace-nowrap">과정정보</button>
            <button onClick={() => scrollTo('roadmap')} className="hover:text-blue-600 transition-colors whitespace-nowrap">커리큘럼</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-blue-600 transition-colors whitespace-nowrap">실무프로젝트</button>
            <button onClick={() => scrollTo('instructors')} className="hover:text-blue-600 transition-colors whitespace-nowrap">강사진</button>
            <button onClick={() => scrollTo('career')} className="hover:text-blue-600 transition-colors whitespace-nowrap">취업지원</button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-blue-600 transition-colors whitespace-nowrap">수강후기</button>
            <button onClick={() => scrollTo('contact-form')} className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 lg:px-6 lg:py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-1 lg:gap-2 whitespace-nowrap">
              교육문의 <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-6 flex flex-col gap-4">
            <button onClick={() => scrollTo('benefits')} className="text-left font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">수강혜택</button>
            <button onClick={() => scrollTo('overview')} className="text-left font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">과정정보</button>
            <button onClick={() => scrollTo('roadmap')} className="text-left font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">커리큘럼</button>
            <button onClick={() => scrollTo('projects')} className="text-left font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">실무프로젝트</button>
            <button onClick={() => scrollTo('instructors')} className="text-left font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">강사진</button>
            <button onClick={() => scrollTo('career')} className="text-left font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">취업지원</button>
            <button onClick={() => scrollTo('reviews')} className="text-left font-semibold text-slate-700 hover:text-blue-600 py-2 border-b border-slate-50">수강후기</button>
            <button onClick={() => scrollTo('contact-form')} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-center mt-2">
              교육문의
            </button>
          </div>
        )}
      </nav>

      {/* Floating Contact Button */}
      <button 
        onClick={() => scrollTo('contact-form')}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2.5 group translate-y-0 opacity-100"
      >
        <MessageCircle size={28} className="hidden md:block" />
        <span className="font-bold text-lg">문의</span>
      </button>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-50 blur-3xl opacity-70"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-slate-50 blur-3xl opacity-70"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-800 font-bold text-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              베스핀글로벌 신입이라면 이 정도는 알고 와야 한다!
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900">
              기업이 원하는 <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-600">
                멀티클라우드<br/>
                엔지니어
              </span>로<br/>
              성장하세요.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
              베스핀글로벌 현직자 테크리더 그룹이 신입 채용 기준으로 커리큘럼을 설계하고 직접 강의합니다.<br/>
              어떤 전공에서 시작해도 6개월 후 실무형 인재로 거듭납니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-200 w-full max-w-4xl">
              {[
                { icon: <Cloud/>, title: "개인별 4대 클라우드 계정제공", desc: "개인별 실습 환경 제공" },
                { icon: <Users/>, title: "현직자 멘토와 함께 실무프로젝트", desc: "현직자 밀착 실무 프로젝트 진행" },
                { icon: <Briefcase/>, title: "포트폴리오 3종 완성", desc: "취업 경쟁력 완성" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors group flex flex-col items-start text-left">
                  <div className="text-blue-200 group-hover:text-blue-600 transition-colors mb-4">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Cloud Section */}
      <section className="py-24 px-6 bg-slate-50">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">AI 시대의 핵심 인프라,<br/> <span className="text-blue-700">클라우드</span></h2>
            <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
              IT직군에게 클라우드 기술역량은<br/>선택이 아닌 필수입니다.<br/>
              현업에서 바로 쓰는 클라우드 운영 실무,<br/> 
              기업이 원하는 필수 기술을 완성하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud size={40} className="text-blue-600" />,
                title: "멀티클라우드 인프라\n설계·구축·운영 역량",
                desc: "4대 CSP(AWS, Azure, GCP, NCP) 환경에서 인프라를 직접 설계·구축·운영할 수 있습니다."
              },
              {
                icon: <Terminal size={40} className="text-blue-600" />,
                title: "배포·운영·자동화\n역량",
                desc: "IaC, CI/CD, 컨테이너, 쿠버네티스를 활용해 배포·운영·자동화를 구현할 수 있습니다."
              },
              {
                icon: <Layers size={40} className="text-blue-600" />,
                title: "클라우드 네이티브 아키텍처\n설계·구축·운영 역량",
                desc: "최종 실무 프로젝트로 멀티클라우드 기반 재해복구(DR) 전략을 설계하고 구축할 수 있습니다."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 whitespace-pre-line leading-tight">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 px-6 bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3 block">Why this course?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">이 과정이 특별한 이유</h2>
            <p className="text-xl text-slate-300">최적의 교육환경에서 기업이 원하는 실무 역량을 키우세요</p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { 
  icon: <BookOpen/>, 
  title: "인턴십 및 채용 우대", 
  desc: (
    <>
      우수 수료생 베스핀글로벌 인턴 채용<br />
      자사 지원 시 가점 부여
    </>
  )
              },
              { icon: <Users/>, title: "현직자 강사 멘토", desc: (<>베스핀글로벌 현직자가 직접 가르치고<br/>멘토링 (82% 이상 투입)</>) },
              { icon: <Trophy/>, title: "기업주도과정 베네핏", desc: (<>최신 AI, 클라우드 기술변화와 트렌드를<br/>특강으로 빠르게 학습</>) },
              { icon: <MonitorPlay/>, title: "현업 동일 환경 실습", desc: (<>교육기간 중 AWS, Azure, GCP, NCP<br/>클라우드 개인별 계정 사용</>) },
              { icon: <Award/>, title: "매월 훈련지원금", desc: (<>매월 훈련금 지급 최대 90만원<br/>(장려금 30만 + 취업지원 60만)</>) },
              { 
  icon: <BookOpen/>, 
  title: "자격증 응시료 지원", 
  desc: (
    <>
      클라우드 자격증 응시료 $150 지원<br/>
      쪽집게 특강 제공
    </>
  )
             },
              { icon: <Coffee/>, title: "사내 카페테리아", desc: (<>학습에만 전념할 수 있는 환경<br/>사내 카페테리아 자율 이용가능</>) },
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors mb-6 transform group-hover:scale-110 duration-300 origin-left">
                  {React.cloneElement(benefit.icon as React.ReactElement, { size: 32 })}
                </div>
                <div className="text-sm font-black text-slate-600 mb-2">0{i+1}</div>
                <h3 className="text-lg font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
            
            {/* Government Support Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">국민내일배움카드<br/>정부지원 수강</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  본 과정은 정부지원 교육으로 수강 가능하며, 개인별 유형에 따라 일부 자부담이 발생할 수 있습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="overview" className="py-24 px-6">
        <FadeIn className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="text-center lg:text-center">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Course Overview</span>
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">멀티클라우드<br/>엔지니어 부트캠프</h2>
                <p className="text-slate-600 mb-8">
                  비전공자도 참여할 수 있도록 기본 기술 교육부터 시작합니다. 지원동기/학습의지를 중점적으로 평가합니다.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2"><Target size={20}/> 선발절차</h4>
                <ol className="relative border-l border-blue-200 ml-3 space-y-4">
                  {['교육지원서 제출', '1차 상담', '온라인 레벨테스트', '면접', '합격자 발표'].map((step, i) => (
                    <li key={i} className="pl-6 relative">
                      <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
                      <span className="font-semibold text-slate-800">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-8">
                  <div className="flex items-center gap-3 text-slate-500 mb-2"><Calendar size={18}/> <span className="font-semibold text-sm">교육기간</span></div>
                  <div className="font-bold text-lg">2026.04월 ~ 2026.10월</div>
                  <div className="text-slate-500 text-sm mt-1">약 6개월 과정</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 text-slate-500 mb-2"><MapPin size={18}/> <span className="font-semibold text-sm">교육장소</span></div>
                  <div className="font-bold text-lg">비트교육센터</div>
                  <div className="text-slate-500 text-sm mt-1">강남역 도보 5분, 비트빌딩 3층</div>
                </div>
              </div>
              <div className="border-t border-slate-100 p-8">
                <div className="flex items-center gap-3 text-slate-500 mb-2"><Target size={18}/> <span className="font-semibold text-sm">과정목표</span></div>
                <div className="font-bold text-lg">멀티클라우드(AWS, Azure, GCP, NCP)를 다룰 줄 아는 포괄적 기술 역량을 지닌 클라우드 인재양성</div>
              </div>
              <div className="border-t border-slate-100 p-8">
                <div className="flex items-center gap-3 text-slate-500 mb-2"><UserCheck size={18}/> <span className="font-semibold text-sm">교육대상</span></div>
                <div className="font-bold text-lg">(전공무관) 취업준비생, 클라우드 분야로 커리어 전환을 희망하는 분</div>
              </div>
              <div id="contact" className="border-t border-slate-100 p-8 bg-slate-50">
                <div className="flex items-center gap-3 text-slate-500 mb-2"><HelpCircle size={18}/> <span className="font-semibold text-sm">문의</span></div>
                <div className="font-bold text-slate-800">신청 전, 교육이 본인에게 적합한지 궁금하시다면 상담부터 받아보세요.</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <FadeIn className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Target Audience</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">이 과정, 특히 이런 분들에게<br/>추천합니다.</h2>
            <div className="inline-block bg-white border border-blue-100 shadow-sm text-blue-800 font-bold px-8 py-4 rounded-full text-lg">
              "실무에서 바로 쓰이는 기술로 IT 커리어를 시작하고 싶은 분"
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "IT전공이 아니지만, IT분야로 커리어를 시작하고 싶은 분",
              "전공자지만 실무가 부족해 고민인 분",
              "자격증과 실무 포트폴리오로 실력을 증명하고 싶은 분",
              "여러 클라우드를 다뤄보며 폭넓은 스킬을 쌓고 싶은 분",
              "클라우드 기반 IT 인프라·자동화 기술을 경험해보고 싶은 분"
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col items-start text-left w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={28} />
                </div>
                <p className="text-slate-700 font-bold text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Bespin Global Intro */}
      <section className="py-24 px-6 bg-slate-50">
        <FadeIn className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-slate-900">
            <span className="text-[#00A8E8]">K-Digital Training</span> 선도기업'베스핀글로벌'
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                5,000여 고객사가 선택한<br/>
                <span className="text-[#00A8E8]">AI · Data · Cloud 파트너</span>
              </h3>
              <p className="text-xl font-bold text-slate-900 mb-6 leading-relaxed">
                AI·Cloud 도입부터 운영·최적화까지,<br/>
                글로벌 전문가가 이끄는 검증된 전략을<br/>
                제공합니다.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                베스핀 글로벌은 국내외 5,000여개 이상의 고객과 함께하는 AI 클라우드 매니지드 서비스(MSP) 기업입니다.<br/><br/>
                우리는 "Learn, Do, Share"라는 철학을 바탕으로, AI·Data·Cloud분야의 실무형 인재 양성에 집중하고 있으며, 현업 전문가들이 직접 설계하고 강의하는 커리큘럼을 통해 현장에서 즉시 투입 가능한 실전형 교육을 제공합니다.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://postfiles.pstatic.net/MjAyNjAyMjdfMTUx/MDAxNzcyMTU0OTcxMTk5.I8AEmCnuQ_R8Uy_onSMvhcBRfXjnuGRdfDDAHTF1Rtcg.mrx-08SxCtbMu1HfPHxh7yNLx-33K64chYmzdeSp3UYg.JPEG/20260226_185714.jpg?type=w966" 
                alt="Bespin Global Office" 
                className="w-full h-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6 bg-slate-50">
        <FadeIn className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Learning Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">실무 역량 완성을 위한<br/>5단계 빌드업 시스템</h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}

            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "클라우드 학습을 위한 기본기 다지기",
                  items: [
                    "클라우드 및 인프라 엔지니어의 이해", 
                    "네트워크 기본 이해", 
                    "운영체제(윈도우/리눅스) 기초", 
                    "데이터베이스의 이해",
                    "클라우드 인프라 엔지니어 관점의 시스템 구성 요소 이해",
                    "클라우드 인프라 운영을 위한 서버•네트워크•DB 기초 이해"
                  ]
                },
                {
                  step: "02",
                  title: "4대 클라우드 역량 확보",
                  items: [
                    "AWS, Azure, GCP, NCP 클라우드 서비스", 
                    "Project 1. 3-Tier 클라우드 인프라 구축",
                    "주요 CSP 환경에서 인프라 설계•구축 역량",
                    "3-Tier 아키텍처실전 구축 경험 및 네트워크•보안•운영 관점 이해"
                  ]
                },
                {
                  step: "03",
                  title: "컨테이너 환경 구축",
                  items: [
                    "Docker", 
                    "Kubernetes", 
                    "Project 2. MSA 애플리케이션 구축 운영",
                    "확장성과 안정성을 고려한 Kubernetes 클러스터 구성 역량",
                    "컨테이너 기반 애플리케이션을 Kubernetes 환경에서 운영•관리하는 역량"
                  ]
                },
                {
                  step: "04",
                  title: "자동화 및 운영 고도화",
                  items: [
                    "Terraform", 
                    "모니터링", 
                    "CI/CD",
                    "laC를 활용한 인프라 구축 자동화 역량",
                    "DevOps 기반배포•운영실무역량"
                  ]
                },
                {
                  step: "05",
                  title: "클라우드 네이티브 서비스 구성",
                  items: [
                    "Project 3. 클라우드 네이티브 서비스 구성 및 운영",
                    "클라우드 네이티브 아키텍처를 설계하고 운영까지 수행하는 종합 실무 역량",
                    "멀티클라우드 환경에서 재해복구(DR)를 고려한 서비스구축 및 운영 역량"
                  ]
                }
              ].map((phase, i) => (
                <div key={i} className="relative flex gap-4 md:gap-10 items-start group">
                  {/* Node */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-slate-50 rounded-full border-4 border-white shadow-sm group-hover:border-blue-50 transition-colors shrink-0">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-blue-600 rounded-full flex items-center justify-center font-black text-white text-lg md:text-xl shadow-md shadow-blue-600/20">
                      {phase.step}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all w-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-900">STEP {phase.step}. {phase.title}</h3>
                    
                    <ul className="space-y-3">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-sm md:text-base">
                          <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                          <span className={item.startsWith('Project') ? 'text-blue-600 font-bold' : ''}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Program */}
          <div className="mt-24 bg-slate-900 rounded-3xl p-10 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">취업 역량 향상 프로그램</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  { title: "AWS ASO 자격증 응시료 지원/특강", icon: <Award size={24} /> },
                  { title: "베스핀글로벌 프로젝트 모범사례 특강", icon: <Briefcase size={24} /> },
                  { title: "AI·클라우드 최신 기술트렌드 특강", icon: <MonitorPlay size={24} /> },
                  { title: "우수수료생 베스핀글로벌 인턴십 채용", icon: <Users size={24} /> }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all group flex flex-col items-start text-left">
                    <div className="w-14 h-14 bg-blue-900/50 text-blue-400 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="text-slate-200 font-bold text-sm md:text-base leading-relaxed">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Real-World Projects */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">Real-World Projects</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">면접에서도 당황하지 않는<br/>프로젝트 기반 포트폴리오</h2>
          </div>
          <div className="text-center max-w-3xl mx-auto mb-16 -mt-8">
            <p className="text-xl font-bold text-slate-800 mb-4">"중요한 것은 어떠한 환경을 어디까지 구성해 보았나? 입니다."</p>
            <p className="text-slate-600">단순하게 과제 수행만 한다면, 이력서는 돋보이지 않습니다. 실무 프로젝트 연계를 통해 당신을 보다 돋보이게 하겠습니다.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "3-Tier 클라우드인프라구축",
                desc: "네트워크, 서버, 데이터베이스의 역할과 연동 방식을 이해하고 클라우드 환경에서 Web-WAS-DB 구조의 3-Tier 인프라를 직접 설계·구축·운영합니다.",
                outcome: "기업 서비스의 기본 인프라 구조와 운영 흐름 체득"
              },
              {
                num: "2",
                title: "MSA애플리케이션구축 운영",
                desc: "Kubernetes를 활용해 컨테이너 기반 MSA 애플리케이션을 구성하고, 개인별로 Kubernetes 클러스터를 구성하여 배포·확장·운영까지 전 과정을 직접 수행합니다.",
                outcome: "컨테이너 환경에서의 서비스 운영 방식과 확장성 개념 이해"
              },
              {
                num: "3",
                title: "자동화·DR 클라우드 네이티브 서비스 구축",
                desc: "Terraform, CI/CD, 모니터링 도구를 활용해 인프라 구축과 배포 과정을 자동화하고, 멀티클라우드 환경에서 재해복구(DR)와 고가용성을 고려한 클라우드 네이티브 아키텍처를 설계·구축·운영합니다.",
                outcome: "실제 운영 환경을 가정한 종합 실무 프로젝트를 통해 클라우드 운영 역량 완성"
              }
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 text-[120px] font-black text-slate-50 group-hover:text-blue-50 transition-colors leading-none select-none z-0">
                  {project.num}
                </div>
                <div className="relative z-10">
                  <div className="text-blue-600 font-black tracking-wider text-sm mb-4">PROJECT {project.num}</div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed min-h-[120px]">{project.desc}</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-400 mb-1">학습 목표</div>
                    <div className="text-sm font-medium text-slate-800">{project.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Instructors */}
      <section id="instructors" className="py-24 px-6">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">베스핀글로벌 현직자가<br/>직접 가르치고 인턴으로 선발합니다</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-bold">베스핀글로벌 소속 테크리더</span>
              <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-bold">베스핀글로벌 소속 기술전문강사</span>
              <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-bold">베스핀글로벌 인증강사</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "김O철", role: "베스핀글로벌 Google PS팀 팀장" },
              { name: "신O범", role: "베스핀글로벌 Google TS팀/MSP팀 팀장" },
              { name: "김O영", role: "베스핀글로벌 Google MSP팀 부장" },
              { name: "양O현", role: "베스핀글로벌 Developer팀 팀장" },
              { name: "전O진", role: "베스핀글로벌 SRE 2팀 팀장" },
              { name: "김O룡", role: "베스핀글로벌 SRE 4팀 팀장" },
              { name: "유O혁", role: "베스핀글로벌 SRE 4팀 과장" },
              { name: "박O훈", role: "베스핀글로벌 Cloud Infra팀 과장" },
              { name: "류O석", role: "베스핀글로벌 아카데미팀 부장(기술강사)" }
            ].map((instructor, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 font-bold">
                  <UserCheck size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{instructor.name}</div>
                  <div className="text-sm text-slate-500">{instructor.role}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Career Support */}
      <section id="career" className="py-24 px-6 bg-slate-900 text-white">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3 block">End-to-End Career Support</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">포트폴리오부터 면접까지<br/>당신만의 취업 메이트가 지원합니다!</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Target className="text-blue-400"/> 취업준비 지원</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>클라우드 자격증 응시료 지원($150)과 쪽집게 특강</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>베스핀글로벌 현직자와의 기술 모의면접과 피드백</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>프로젝트를 포트폴리오로 전환할 수 있도록 컨설팅</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>취업 전담 멘토의 서류 첨삭과 진로가이드</span></li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Briefcase className="text-blue-400"/> 취업 연계 프로그램</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>우수 수료생 베스핀글로벌 인턴 선발</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>베스핀글로벌 입사 지원 시 서류가점 부여</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>IT기업 인사담당자 커뮤니티 기반 잡매칭 프로그램 운영</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={18}/> <span>취업박람회 및 최신 채용 정보 제공</span></li>
              </ul>
            </div>

            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Award className="text-blue-400"/> 자격증 응시료 지원</h3>
              <p className="text-slate-300 leading-relaxed">
                AWS 자격증 취득 시 응시료($150) 지원은 물론, 자격 취득을 위한 전용 온라인 강의와 특강을 무상 지원합니다.
              </p>
            </div>

            <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Users className="text-blue-400"/> 수료 후에도 사후관리</h3>
              <p className="text-slate-300 leading-relaxed">
                수료 후에도 월 1~2회 유선/메신저 상담을 통해 직장 적응을 돕고, 이직/전직 시 맞춤형 컨설팅을 진행합니다.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6 bg-slate-50">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">배움에서 끝나지 않습니다.</h2>
            <p className="text-slate-600">실무로 이어지고, 커리어로 연결되는 여정<br/>선배들의 리얼스토리를 후기로 확인하세요.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { title: "실무와 동일한 환경의 프로젝트", desc: "실제 클라우드 계정(4대 CSP)으로 진행되는 프로젝트/실습은 실무 흐름을 직접 경험할 수 있어 교육 효과가 매우 좋았습니다." },
              { title: "현업 멘토의 밀착 피드백", desc: "현업 멘토님의 피드백과 지원이 학습방향을 잡고 성장하는 데 큰 도움이 되었습니다." },
              { title: "교육 운영의 체계성과 신뢰도", desc: "네임드있는 MSP회사에서 운영하는 것이다보니 교육에 체계가 잡혀있습니다." }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, j) => <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-3">"{review.title}"</h4>
                <p className="text-slate-600 leading-relaxed">{review.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <FadeIn className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            "현업 엔지니어가 아니면<br/>
             모르는 '진짜 기술'<br/>오직 베스핀글로벌 과정에서만 공개합니다."
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            베스핀글로벌 현직자와 함께하는<br/>
            실무 중심 교육으로<br/>"멀티클라우드 엔지니어 커리어"를<br/>시작하세요!
          </p>
          <button 
            onClick={() => scrollTo('contact-form')}
            className="bg-white text-blue-900 hover:bg-slate-50 px-10 py-5 rounded-full font-black text-xl transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            지금 바로 지원하기 <ArrowRight size={24} />
          </button>
          <p className="mt-8 text-blue-200 font-medium">
            AI MSP 베스핀글로벌의 멀티클라우드(AWS, Azure, GCP, NCP) 엔지니어 부트캠프 4기
          </p>
        </FadeIn>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 px-6 bg-gradient-to-br from-blue-900 to-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-400/10 blur-[100px] rounded-full"></div>
        
        <FadeIn className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                망설이지 마세요.<br/>
                <span className="text-blue-400">클라우드 전문가가</span><br/>
                상세히 안내해드립니다.
              </h2>
              <p className="text-xl text-blue-200 mb-12 leading-relaxed">
                국비지원 자격 여부부터 취업 및 교육과정까지 무료로 상담해드립니다.
              </p>

              <div className="space-y-8">


                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-800/50 rounded-2xl flex items-center justify-center shrink-0 border border-blue-700">
                    <MapPin className="text-blue-300" size={24} />
                  </div>
                  <div>
                    <div className="text-blue-300 font-bold text-sm mb-1">교육방식</div>
                    <div className="text-xl font-bold">100% 오프라인</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 inline-block px-6 py-3 bg-blue-800/30 border border-blue-700/50 rounded-full text-blue-200 font-bold">
                여러분의 꿈을 응원합니다! 🚀
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">상담 신청하기</h3>
                <p className="text-slate-500">빠른 시일 내에 담당자가 연락드리겠습니다.</p>
              </div>

              <form action="https://formspree.io/f/mnjbwddr" method="POST" className="space-y-3 md:space-y-4">
                <input type="hidden" name="_subject" value="베스핀글로벌 부트캠프 상담 신청" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1 md:mb-1.5">이름</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-4 py-2 md:py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1 md:mb-1.5">연락처</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-2 md:py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-bold text-slate-700 mb-1 md:mb-1.5">나이</label>
                    <input 
                      type="number" 
                      id="age" 
                      name="age" 
                      required 
                      className="w-full px-4 py-2 md:py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-bold text-slate-700 mb-1 md:mb-1.5">교육목적</label>
                    <select 
                      id="purpose" 
                      name="purpose" 
                      required
                      defaultValue=""
                      className="w-full px-4 py-2 md:py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                    >
                      <option value="" disabled>선택해주세요</option>
                      <option value="취업준비">취업준비</option>
                      <option value="직무전환">직무전환 (커리어 체인지)</option>
                      <option value="역량강화">현재 직무 역량 강화</option>
                      <option value="기타">기타</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1 md:mb-1.5">문의내용</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={2} 
                    required
                    className="w-full px-4 py-2 md:py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="궁금하신 내용을 상세히 적어주세요."
                  ></textarea>
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex flex-col gap-3 p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center h-5">
                      <input 
                        id="privacy" 
                        name="privacy" 
                        type="checkbox" 
                        required
                        defaultChecked
                        className="w-5 h-5 border border-slate-300 rounded bg-white checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer accent-blue-600"
                      />
                    </div>
                    <div className="text-sm flex-1">
                      <div className="flex items-center justify-between">
                        <label htmlFor="privacy" className="font-medium text-slate-700 cursor-pointer">
                          개인정보 수집 및 이용 동의 (필수)
                        </label>
                        <button 
                          type="button" 
                          onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                          className="text-xs text-slate-500 hover:text-blue-600 flex items-center gap-1 font-medium transition-colors"
                        >
                          자세히 보기 {isPrivacyOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {isPrivacyOpen && (
                    <div className="mt-2 p-4 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 leading-relaxed">
                      <p className="font-bold mb-2 text-slate-800">BESPINGLOBAL x BIT 비트교육센터 실시간온라인문의 신청을 위해 다음과 같이 개인정보를 수집 및 이용합니다.</p>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <span className="font-bold text-slate-700 shrink-0 w-16">수집목적</span>
                          <span>온라인문의</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-slate-700 shrink-0 w-16">수집항목</span>
                          <span>이름, 나이, 연락처, 교육목적, 문의내용</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-slate-700 shrink-0 w-16">보유기간</span>
                          <span>60일</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base md:text-lg py-3.5 md:py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  문의 접수하기 <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 text-slate-400 text-sm text-center border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="font-black text-xl tracking-tighter text-slate-300">
              BESPIN<span className="text-blue-600">GLOBAL</span> <span className="text-slate-600 font-normal text-sm ml-2">x BIT 비트교육센터</span>
            </div>

          </div>
          <p>Copyright © Bespin Global & BIT Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
