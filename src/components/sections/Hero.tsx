import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start px-6 md:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950/50 z-10" />
        <img 
          src="/images/hero.jpg" 
          alt="Solo Luxury" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-accent-teal font-mono mb-5">달리는토끼 · 런닝레빗</p>

          <h1 className="text-4xl md:text-7xl font-bold text-platinum mb-6 leading-tight">
            강남 달토 <br />
            <span className="text-slate-gray">혼자 룸 가격</span>
          </h1>

          <p className="text-slate-gray text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            강남 달토 혼자 룸 가격, 달리는토끼 1인환영.<br />
            혼자서도 어색하지 않은 완벽한 프라이빗 서비스를 경험하세요.
          </p>

          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-accent-teal text-accent-teal font-mono rounded hover:bg-accent-teal/10 transition-colors"
          >
            예약 문의 &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
