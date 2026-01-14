import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="contact" ref={containerRef} className="py-32 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
             <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <img src="/images/contact.jpg" alt="Contact BG" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-navy-950/70" />
            </motion.div>
        </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <p className="text-accent-teal font-mono mb-6">05. Contact</p>
            <h2 className="text-5xl md:text-6xl font-bold text-platinum mb-8">
                Ready to Start?
            </h2>
            <div className="text-xl text-slate-gray mb-12 max-w-2xl mx-auto space-y-4">
                <p>
                    강남 달토 하이퍼블릭은 여럿이 와야만 어울리는 구조가 아닙니다.
                </p>
                <p>
                    혼자 와도 설명 받고, 선택하고, 불편함 없이 이용할 수 있도록<br />
                    처음부터 그렇게 운영해왔습니다.
                </p>
                <p className="text-platinum font-medium">
                    혼자 오실까 고민 중이면 일단 문의부터 해보셔도 됩니다.<br />
                    그게 제일 정확합니다.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                <a 
                    href="tel:01023033778"
                    className="flex items-center justify-center gap-3 px-8 py-5 bg-navy-900/80 backdrop-blur-md border border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-navy-900 transition-all font-mono rounded text-lg min-w-[200px]"
                >
                    <Phone size={20} /> Call Now
                </a>
                <a
                    href="sms:01023033778"
                    className="flex items-center justify-center gap-3 px-8 py-5 bg-platinum text-navy-900 hover:bg-white transition-all font-mono rounded text-lg min-w-[200px]"
                >
                    <MessageSquare size={20} /> Message
                </a>
                <a
                    href="https://t.me/hscompanyshs"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-8 py-5 bg-[#0088cc] text-white hover:bg-[#0077b3] transition-all font-mono rounded text-lg min-w-[200px]"
                >
                    <Send size={20} /> Telegram
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
                <div className="backdrop-blur-sm bg-navy-900/30 p-4 rounded">
                    <h4 className="text-platinum font-bold mb-2 flex items-center gap-2">
                        <MapPin size={16} className="text-accent-teal" /> Location
                    </h4>
                    <p className="text-slate-gray text-sm">
                        강남구 역삼동 삼정호텔 인근<br />(구) 런닝레빗 / 달리는토끼
                    </p>
                </div>
                <div className="backdrop-blur-sm bg-navy-900/30 p-4 rounded">
                    <h4 className="text-platinum font-bold mb-2">Pick-up</h4>
                    <p className="text-slate-gray text-sm">
                        강남권 픽업 가능<br />
                        예약 시 미리 문의주세요.
                    </p>
                </div>
                <div className="backdrop-blur-sm bg-navy-900/30 p-4 rounded">
                    <h4 className="text-platinum font-bold mb-2">Info Needed</h4>
                    <p className="text-slate-gray text-sm">
                        혼자 방문 여부 / 대략적인 시간<br />
                        이것만 알려주셔도 충분합니다.
                    </p>
                </div>
            </div>

        </motion.div>
      </div>
    </section>
  );
}