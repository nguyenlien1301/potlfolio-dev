import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, User } from "lucide-react";
import IconCloud from "./IconCloud";

const name = "Nguyễn Văn Liền";

const Home: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (index < name.length) {
            setDisplayedText((prev) => prev + name[index]);
            setIndex(index + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 5000);
          }
        } else {
          if (index > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
            setIndex(index - 1);
          } else {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container relative px-4 mx-auto">
        {/* Gradient Blobs */}
        <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-blue-300/20 dark:bg-blue-700/20 blur-3xl"></div>
        <div className="absolute rounded-full top-10 left-1/2 w-80 h-80 bg-green-300/20 dark:bg-green-700/20 blur-3xl"></div>

        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            className="text-center md:w-1/2 md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-40 h-40 mx-auto mb-8 overflow-hidden transition-all duration-500 border-4 border-blue-500 rounded-full md:mx-0 hover:border-blue-600 dark:border-blue-600 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-900/30">
              <img
                src="/public/images/avatar.jpg"
                alt="avatar"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                loading="eager"
                width="160"
                height="160"
              />
              <div className="absolute inset-0 border-4 border-blue-300 rounded-full opacity-50 dark:border-blue-800"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                <span className="block">Xin chào 👋, tôi là</span>
                <motion.span
                  className="inline-block text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {displayedText}
                  {showCursor && <span className="animate-blink">|</span>}
                </motion.span>
              </h1>
              <h2 className="text-2xl text-gray-700 md:text-3xl dark:text-gray-300">
                Lập trình viên Front-End
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="mb-10 text-xl text-gray-600 dark:text-gray-400">
                Tôi tạo ra những trải nghiệm web đẹp, nhanh nhạy và thân thiện
                với người dùng với các công nghệ hiện đại. Cung cấp trải nghiệm
                người dùng tốt nhất có thể.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12 md:justify-start">
                <motion.a
                  href="#contact"
                  className="px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Liên hệ với tôi
                </motion.a>

                <motion.a
                  href="/public/images/NguyenVanLien.pdf"
                  className="flex items-center px-6 py-3 text-gray-900 transition-colors bg-gray-200 border border-blue-500 rounded-lg dark:bg-gray-800 hover:bg-primary-300 dark:hover:bg-primary-700 dark:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                >
                  <User size={18} className="mr-2" />
                  CV của tôi
                </motion.a>
              </div>

              <motion.a
                href="#about"
                className="inline-flex items-center justify-center w-12 h-12 text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                whileHover={{ y: 5 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
              >
                <ArrowDown size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* 3D Icon Cloud */}
          <motion.div
            className="md:w-1/2 h-[400px] md:h-[500px] mt-10 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IconCloud />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
