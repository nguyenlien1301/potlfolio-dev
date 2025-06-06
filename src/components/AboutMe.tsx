import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { skills } from '../data/skills';

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-yellow-300/20 dark:bg-yellow-700/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-60 h-60 rounded-full bg-orange-300/20 dark:bg-orange-700/20 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Về tôi
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Nhận biết thêm về tôi, nền tảng của tôi và những gì tôi làm.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="relative w-96 h-96"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Overlapping Images */}
            <div className="absolute top-0 right-0 w-64 h-48 rounded-lg overflow-hidden shadow-lg transform translate-x-[-50px]  translate-y-[-50px] rotate-6 z-10">
              <img
                src="/public/images/about-image-1.jpg"
                alt="image-1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-20 right-20 w-64 h-48 rounded-lg overflow-hidden shadow-lg transform translate-x-[100px] translate-y-[50px] -rotate-3 z-20">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-60 right-10 w-64 h-48 rounded-lg overflow-hidden shadow-lg transform translate-x-[-50px] translate-y-[50px] -rotate-5 z-40">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Mobile Development"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tôi là ai?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
            Lập trình viên Front-End
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
            Tôi là một lập trình viên Front-End với đam mê xây dựng các trang web và ứng dụng web hiện đại. Tôi tập trung vào việc tạo ra giao diện trực quan, mượt mà và tối ưu hiệu suất, mang đến trải nghiệm tốt nhất cho người dùng trên mọi nền tảng.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Kết nối với tôi
            </h3>
            <div className="flex items-center space-x-4 mb-8">
              <a
                href="https://github.com/nguyenlien1301"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nguyyenvanlien/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nguyenvanlien130102@gmail.com"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+84978913405"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-300/20 dark:bg-purple-700/20 blur-3xl"></div>
        {/* Skills Section */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300/20 dark:bg-blue-700/20 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Kỹ năng
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-xl p-3 mb-3 shadow-lg transform transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}44)`,
                    borderBottom: `3px solid ${skill.color}`,
                    boxShadow: `0 10px 15px -3px ${skill.color}22, 0 4px 6px -4px ${skill.color}44`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 object-contain filter drop-shadow-md"
                    loading="lazy"
                    width="40"
                    height="40"
                  />
                </div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
