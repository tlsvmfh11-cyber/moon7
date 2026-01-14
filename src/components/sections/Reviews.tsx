import { motion } from 'framer-motion';

const reviews = [
    {
        user: "Solo Guest 01",
        text: "혼자 가는 거라 걱정했는데 생각보다 편했습니다. 강남 달토가 이런 구조인 줄 몰랐어요. 어색하지 않게 잘 챙겨줘서 고마웠습니다."
    },
    {
        user: "First Visit",
        text: "달리는토끼 처음이었는데 담당이 계속 설명해줘서 부담이 없었습니다. 혼자 술 마시고 싶을 때 종종 올 것 같네요."
    },
    {
        user: "Regular",
        text: "혼자라 초이스가 제한될까 걱정했는데 오히려 선택 폭이 넓었습니다. 역시 사람은 많고 봐야 합니다."
    },
    {
        user: "Revisit",
        text: "가격을 먼저 말해줘서 마음이 편했고, 그래서 다시 올 생각이 들었습니다. 투명해서 좋네요."
    }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
            <p className="text-accent-teal font-mono mb-2">04. Feedback</p>
            <h2 className="text-4xl font-bold text-platinum">Voices from Guests</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-navy-900 p-8 rounded border border-navy-800 hover:border-accent-teal transition-colors"
                >
                    <div className="mb-6 text-accent-teal">
                        ★★★★★
                    </div>
                    <p className="text-slate-gray mb-6 text-sm leading-relaxed min-h-[80px]">
                        "{review.text}"
                    </p>
                    <p className="text-platinum font-mono text-xs uppercase tracking-wider">
                        — {review.user}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
