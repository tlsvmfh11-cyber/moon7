import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        
        {/* Image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-4 border-2 border-accent-teal/20 rounded-sm z-0 group-hover:border-accent-teal/50 transition-colors" />
          <div className="relative z-10 overflow-hidden rounded-sm aspect-[4/5]">
            <img 
                src="/images/intro.jpg" 
                alt="Private Room" 
                className="w-full h-full object-cover grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-transparent" />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="h-[1px] w-12 bg-accent-teal" />
                    <span className="text-accent-teal font-mono">01. About Solo</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-platinum">
                    혼자 오는 손님이<br />
                    많은 이유.
                </h2>
                
                <div className="space-y-6 text-slate-gray leading-relaxed">
                    <p>
                        강남 달토를 찾는 분들 중에는 처음부터 여러 명이 모여 오는 경우도 있지만,
                        생각보다 혼자 문의하는 분들이 꽤 많습니다.
                    </p>
                    <p>
                        “혼자 가도 되나?”, “괜히 어색한 거 아니냐?”<br />
                        강남 달토 하이퍼블릭은 이런 걱정을 하는 분들을 기준으로 운영 방식을 잡아온 곳입니다.
                    </p>
                    <div className="bg-navy-800 p-6 rounded border-l-4 border-accent-teal">
                        <p className="text-platinum italic">
                            하루 평균 150~200명의 출근율과 많은 룸 개수는<br />
                            혼자 방문하는 손님에게 오히려 유리하게 작용합니다.
                        </p>
                    </div>
                    <p>
                        선택이 제한되는 소규모 업종과 달리, 
                        달토는 혼자 와도 충분한 선택권을 가질 수 있는 구조입니다.
                    </p>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
