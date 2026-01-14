import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Inquiry",
    kor: "문의 단계",
    desc: "혼자 방문하신다고 말씀 주시면 그에 맞게 안내부터 달라집니다. 너무 시끄러운 분위기인지, 편하게 술 마실 수 있는지, 초이스를 어떻게 진행하는지 먼저 설명합니다."
  },
  {
    num: "02",
    title: "Arrival",
    kor: "도착 및 입실",
    desc: "도착하면 괜히 홀에서 오래 기다리게 하지 않습니다. 가능하면 바로 룸으로 안내합니다. 혼자 왔을 때 대기 시간이 길어지면 그 자체로 부담이 되기 때문입니다."
  },
  {
    num: "03",
    title: "Briefing",
    kor: "설명 진행",
    desc: "입실 후에는 강남 달토 주대, 이용 시간, 시스템을 먼저 설명합니다. 혼자 방문한 손님일수록 나중에 계산이 애매해지면 불편함이 더 커지기 때문입니다."
  },
  {
    num: "04",
    title: "Choice",
    kor: "초이스",
    desc: "강남 달토 하이퍼블릭의 장점은 출근 인원이 많아 혼자 와도 여러 조를 충분히 볼 수 있다는 점입니다. 담당이 손님 성향에 맞지 않는 조는 걸러주고, 눈치 보게 하지 않도록 진행합니다."
  },
  {
    num: "05",
    title: "Select",
    kor: "이용 후 선택",
    desc: "분위기 괜찮으면 이어가시고, 아니면 정리하셔도 됩니다. 혼자 왔다고 해서 더 권하거나 부담 주지 않습니다."
  }
];

export default function System() {
  return (
    <section id="system" className="py-32 bg-navy-950 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-navy-950/90 z-10" />
             <img src="/images/system.jpg" alt="System" className="w-full h-full object-cover opacity-40 grayscale" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-navy-800 pb-8">
            <div>
                <p className="text-accent-teal font-mono mb-2">02. Process</p>
                <h2 className="text-4xl md:text-5xl font-bold text-platinum">Solo Visitor Flow</h2>
            </div>
            <p className="text-slate-gray mt-4 md:mt-0 text-right max-w-md">
                혼자 와도 어색함 없이.<br />
                입장부터 퇴장까지 완벽하게 설계된 프로세스.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-navy-900/50 backdrop-blur-sm border border-navy-700 p-8 hover:bg-navy-800 hover:border-accent-teal transition-all duration-300 rounded-sm"
                >
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-4xl font-mono font-bold text-navy-800 group-hover:text-accent-teal/20 transition-colors">
                            {step.num}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-navy-700 group-hover:bg-accent-teal transition-colors" />
                    </div>

                    <h3 className="text-2xl font-bold text-platinum mb-1">{step.title}</h3>
                    <p className="text-sm text-accent-teal font-mono mb-4">{step.kor}</p>
                    
                    <p className="text-slate-gray text-sm leading-relaxed group-hover:text-platinum transition-colors">
                        {step.desc}
                    </p>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-teal transition-all duration-300 group-hover:w-full" />
                </motion.div>
            ))}
            
            {/* Last Box for Contact Link */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col justify-center items-center bg-accent-teal/10 border border-accent-teal/30 p-8 rounded-sm hover:bg-accent-teal/20 transition-colors cursor-pointer group"
                onClick={() => window.location.href = '#contact'}
            >
                <p className="text-accent-teal font-mono text-lg mb-2">Ready?</p>
                <h3 className="text-2xl font-bold text-platinum mb-4 group-hover:scale-105 transition-transform">Make a Reservation &rarr;</h3>
            </motion.div>
        </div>
      </div>
    </section>
  );
}