import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="pricing" ref={containerRef} className="py-32 relative overflow-hidden flex items-center min-h-screen">
      
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
             <img src="/images/pricing.jpg" alt="Pricing Mood" className="w-full h-full object-cover opacity-50" />
             <div className="absolute inset-0 bg-navy-950/70" />
          </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 relative z-10 w-full">
        
        <div className="w-full lg:w-1/2">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <p className="text-accent-teal font-mono mb-4">03. Price Policy</p>
                <h2 className="text-4xl md:text-5xl font-bold text-platinum mb-8 leading-tight">
                    가격이 걱정되는<br />
                    이유를 압니다.
                </h2>
                <div className="space-y-6 text-slate-gray text-lg leading-relaxed mix-blend-lighten">
                    <p>
                        혼자 오시는 분들이 가격에 예민한 이유는 비교 대상이 없기 때문입니다.
                        그래서 강남 달토는 혼자 방문하신 분들일수록 가격 구조를 더 명확하게 설명합니다.
                    </p>
                    <ul className="space-y-4 mt-8">
                        {[
                            "사전에 안내한 기준 절대 준수",
                            "달리는토끼 시절부터 유지된 투명한 원칙",
                            "혼자서도 납득 가능한 합리적 구조"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-platinum">
                                <Check size={20} className="text-accent-teal" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
             </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-navy-900/80 backdrop-blur-xl p-10 rounded-lg border border-navy-700 relative shadow-2xl"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent-teal" />
                <h3 className="text-2xl font-bold text-platinum mb-2">Estimate Guide</h3>
                <p className="text-slate-gray mb-8">1인 방문 기준 견적 안내</p>

                <div className="space-y-6 mb-10">
                    <div className="flex justify-between border-b border-navy-700 pb-4">
                        <span className="text-slate-gray">Basic Price</span>
                        <span className="text-platinum font-mono">Inquiry</span>
                    </div>
                    <div className="flex justify-between border-b border-navy-700 pb-4">
                        <span className="text-slate-gray">Room Charge</span>
                        <span className="text-platinum font-mono">Fixed Rate</span>
                    </div>
                    <div className="flex justify-between border-b border-navy-700 pb-4">
                        <span className="text-slate-gray">Service</span>
                        <span className="text-accent-teal font-mono">Full Care</span>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-sm text-slate-gray mb-6">
                        "싸다"는 말보다 "납득할 수 있다"는 확신을 드립니다.
                    </p>
                    <a href="#contact" className="block w-full py-4 bg-accent-teal text-navy-900 font-bold rounded hover:bg-accent-teal/90 transition-colors">
                        정확한 견적 확인하기
                    </a>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}