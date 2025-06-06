import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { htmlBlogPosts, cssBlogPosts } from '../data/blogPosts';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const htmlSliderRef = useRef<HTMLDivElement>(null);
  const cssSliderRef = useRef<HTMLDivElement>(null);

  // Store slider positions in localStorage
  useEffect(() => {
    const savedHtmlPosition = localStorage.getItem('htmlSliderPosition');
    const savedCssPosition = localStorage.getItem('cssSliderPosition');

    if (htmlSliderRef.current && savedHtmlPosition) {
      htmlSliderRef.current.scrollLeft = parseInt(savedHtmlPosition);
    }
    if (cssSliderRef.current && savedCssPosition) {
      cssSliderRef.current.scrollLeft = parseInt(savedCssPosition);
    }

    // Cleanup function to save positions when component unmounts
    return () => {
      if (htmlSliderRef.current) {
        localStorage.setItem('htmlSliderPosition', htmlSliderRef.current.scrollLeft.toString());
      }
      if (cssSliderRef.current) {
        localStorage.setItem('cssSliderPosition', cssSliderRef.current.scrollLeft.toString());
      }
    };
  }, []);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
      // Save position after scrolling
      localStorage.setItem(
        ref === htmlSliderRef ? 'htmlSliderPosition' : 'cssSliderPosition',
        (ref.current.scrollLeft - 300).toString()
      );
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
      // Save position after scrolling
      localStorage.setItem(
        ref === htmlSliderRef ? 'htmlSliderPosition' : 'cssSliderPosition',
        (ref.current.scrollLeft + 300).toString()
      );
    }
  };

  // Handle scroll events to save position
  const handleScroll = (ref: React.RefObject<HTMLDivElement>, type: 'html' | 'css') => {
    if (ref.current) {
      localStorage.setItem(
        `${type}SliderPosition`,
        ref.current.scrollLeft.toString()
      );
    }
  };

  return (
    <section
      id="blog"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Gradient Blobs */}
      <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-blue-300/10 dark:bg-blue-700/10 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-700/10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bài viết
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Chia sẻ kiến thức, hướng dẫn và góc nhìn về phát triển web & công nghệ
          </p>
        </motion.div>

        {/* HTML Blog Posts Slider */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 ml-4">
          Tips & Tricks
          </h3>
          {htmlBlogPosts?.length > 0 ?  <div className="relative">
            <button
              onClick={() => scrollLeft(htmlSliderRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>

            <div
              ref={htmlSliderRef}
              onScroll={() => handleScroll(htmlSliderRef, 'html')}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {htmlBlogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="flex flex-col relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <Link
                      to={`/blog/${post.id}?type=html`}
                      className="block h-48 overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.label}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
                        {post.date}
                      </p>
                      <Link to={`/blog/${post.id}?type=html`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {post.summary}
                      </p>
                      </div>
                      <Link
                        to={`/blog/${post.id}?type=html`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
                      >
                        <span>Đọc thêm</span>
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <button
              onClick={() => scrollRight(htmlSliderRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div> : (<p className="text-xl dark:text-white mx-auto text-center">No Posts</p>)}
         
        </div>

        {/* CSS Blog Posts Slider */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 ml-4">
            Other
          </h3>
          {cssBlogPosts?.length > 0 ? <div className="relative">
            <button
              onClick={() => scrollLeft(cssSliderRef)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>

            <div
              ref={cssSliderRef}
              onScroll={() => handleScroll(cssSliderRef, 'css')}
              className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cssBlogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] snap-start"
                >
                  <div className="flex flex-col relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <Link
                      to={`/blog/${post.id}?type=css`}
                      className="block h-48 overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.label}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
                        {post.date}
                      </p>
                      <Link to={`/blog/${post.id}?type=css`}>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {post.summary}
                      </p>
                      </div>
                      <Link
                        to={`/blog/${post.id}?type=css`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
                      >
                        <span>Đọc thêm</span>
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <button
              onClick={() => scrollRight(cssSliderRef)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>: (<p className="text-xl dark:text-white mx-auto text-center">No Posts</p>)}
        </div>
      </div>
    </section>
  );
};

export default Blog;