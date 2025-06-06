import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { skills } from "../data/skills";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden bg-white dark:bg-gray-800"
    >
      {/* Gradient Blobs */}
      <div className="absolute rounded-full top-40 right-20 w-72 h-72 bg-yellow-300/20 dark:bg-yellow-700/20 blur-3xl"></div>
      <div className="absolute rounded-full bottom-10 left-20 w-60 h-60 bg-orange-300/20 dark:bg-orange-700/20 blur-3xl"></div>

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Về tôi
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Nhận biết thêm về tôi, nền tảng của tôi và những gì tôi làm.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
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
                src="/images/about-image-1.jpg"
                alt="image-1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-20 right-20 w-64 h-48 rounded-lg overflow-hidden shadow-lg transform translate-x-[100px] translate-y-[50px] -rotate-3 z-20">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Development"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-60 right-10 w-64 h-48 rounded-lg overflow-hidden shadow-lg transform translate-x-[-50px] translate-y-[50px] -rotate-5 z-40">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Mobile Development"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-10 md:w-1/2 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Tôi là ai?
            </h3>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              Lập trình viên Front-End
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Tôi là một lập trình viên Front-End với đam mê xây dựng các trang
              web và ứng dụng web hiện đại. Tôi tập trung vào việc tạo ra giao
              diện trực quan, mượt mà và tối ưu hiệu suất, mang đến trải nghiệm
              tốt nhất cho người dùng trên mọi nền tảng.
            </p>
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Kết nối với tôi
            </h3>
            <div className="flex items-center mb-8 space-x-4">
              <a
                href="https://github.com/nguyenlien1301"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nguyyenvanlien/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-700 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nguyenvanlien130102@gmail.com"
                className="p-3 text-gray-700 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+84978913405"
                className="p-3 text-gray-700 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute rounded-full bottom-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-700/20 blur-3xl"></div>
        {/* Skills Section */}
        <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-blue-300/20 dark:bg-blue-700/20 blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 dark:text-white">
            Kỹ năng
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
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
                  className="flex items-center justify-center w-16 h-16 p-3 mb-3 transition-all duration-300 transform shadow-lg rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}44)`,
                    borderBottom: `3px solid ${skill.color}`,
                    boxShadow: `0 10px 15px -3px ${skill.color}22, 0 4px 6px -4px ${skill.color}44`,
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain w-10 h-10 filter drop-shadow-md"
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
