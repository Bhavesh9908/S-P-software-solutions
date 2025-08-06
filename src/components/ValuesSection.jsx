import { motion } from 'framer-motion';

const ValuesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-start to-primary-end text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Core Values</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We push boundaries and explore new technologies to deliver cutting-edge solutions.",
              icon: "💡"
            },
            {
              title: "Excellence",
              description: "We strive for perfection in every line of code and every client interaction.",
              icon: "🏆"
            },
            {
              title: "Integrity",
              description: "We build trust through transparency, honesty, and ethical business practices.",
              icon: "🤝"
            },
            {
              title: "Collaboration",
              description: "We work closely with clients to understand their unique challenges and goals.",
              icon: "👥"
            },
            {
              title: "Agility",
              description: "We adapt quickly to changing requirements and emerging technologies.",
              icon: "⚡"
            },
            {
              title: "Impact",
              description: "We measure success by the tangible value we create for our clients.",
              icon: "📈"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-heading font-semibold mb-2">{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;