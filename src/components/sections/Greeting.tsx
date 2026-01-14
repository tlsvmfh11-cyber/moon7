import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Greeting() {
  const concerns = [
    "누가 진행해주는지 모를 때",
    "설명 없이 그냥 흘러갈 때",
    "초이스에서 방치될 때"
  ];

  return (
    <section className="py-32 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-accent-teal" />
            <span className="text-accent-teal font-mono">01-2. Greeting</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-platinum">
            혼자 오시는 분들한테<br />
            제일 먼저 드리는 말씀
          </h2>

          <div className="space-y-6 text-slate-gray leading-relaxed mb-12">
            <p>
              강남 달토로 혼자 문의 주시는 분들한테 가장 먼저 하는 말이 있습니다.
            </p>
            <blockquote className="border-l-4 border-accent-teal pl-6 py-4 bg-navy-800/50 rounded-r">
              <p className="text-platinum text-xl italic font-medium">
                "혼자 오셔도 전혀 문제 없습니다."
              </p>
            </blockquote>
            <p>
              이건 형식적인 말이 아닙니다.<br />
              실제로 달토에서는 혼자 방문하는 손님이 어색해지지 않도록 진행 자체를 그렇게 가져갑니다.
            </p>
          </div>

          <div className="bg-navy-800 p-8 rounded-lg mb-12">
            <h3 className="text-platinum font-bold mb-6 text-lg">
              혼자 오시는 분들이 불편해지는 이유
            </h3>
            <div className="space-y-4">
              {concerns.map((concern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-accent-teal w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-gray">{concern}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-navy-700 pt-8">
            <p className="text-slate-gray leading-relaxed">
              그래서 강남 달토에서는 <span className="text-platinum font-medium">담당이 처음부터 끝까지 계속 붙는 구조</span>를 유지합니다.
            </p>
            <p className="text-slate-gray leading-relaxed mt-4">
              혼자 오셨다고 해서 대충 넘어가거나 알아서 하라고 두지 않습니다.<br />
              이 차이가 처음 방문하는 분들한테는 생각보다 크게 느껴집니다.
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
