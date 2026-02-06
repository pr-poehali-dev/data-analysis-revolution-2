import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

interface Project {
  title: string
  description: string
  icon: string
  color: string
}

const projects: Project[] = [
  {
    title: "Креативные проекты",
    description: "Создаём яркие и запоминающиеся цифровые продукты",
    icon: "Sparkles",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Инновации",
    description: "Внедряем новые технологии и подходы в разработку",
    icon: "Rocket",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Сообщество",
    description: "Объединяем единомышленников и делимся опытом",
    icon: "Users",
    color: "from-orange-500 to-red-500"
  }
]

export default function Projects() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Наши направления
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Команда FunMember работает над разными проектами и делится результатами с сообществом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${project.color} mb-6`}>
                  <Icon name={project.icon} size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
