import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Tag,
  ArrowRight,
} from 'lucide-react';
import {
  getHtmlPostById,
  getCssPostById,
  getRelatedHtmlPosts,
  getRelatedCssPosts,
} from '../data/blogData';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const postId = parseInt(id || '0');

  // Try to get post from both HTML and CSS collections
  const htmlPost = getHtmlPostById(postId);
  const cssPost = getCssPostById(postId);
  
  // Determine post type and get the correct post
  const postType = new URLSearchParams(window.location.search).get('type');
  const post = postType === 'css' ? cssPost : htmlPost;
  
  // Get related posts based on post type
  const relatedPosts = post
    ? postType === 'css'
      ? getRelatedCssPosts(postId)
      : getRelatedHtmlPosts(postId)
    : [];
  useEffect(() => {
    if (!post) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="pt-20 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex text-center mb-6"
          >
             <button
        onClick={() => navigate(-1)}
       className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
      >
        <ArrowLeft size={18} className="mr-2" />Quay lại
      </button>

      <span className="text-blue-600 px-2">/</span>
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Trang chủ
            </Link>
          </motion.div>

          {/* Blog Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-64 md:h-96 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {post.title}
                </h1>

                {/* Post Meta Information */}
                <div className="mt-4 flex flex-wrap items-center text-gray-600 dark:text-gray-300 text-sm">
                  <div className="flex items-center mr-4">
                    <User size={16} className="mr-1" /> {post.author}
                  </div>
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" /> {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" /> {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Post Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 prose dark:prose-invert max-w-none"
          >
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}>
            </div>
          </motion.div>

          {/* Tags */}
          {post.tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  <Tag size={14} className="inline mr-1" /> {tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Posts */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Bài viết liên quan
              </h3>
              {relatedPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="flex flex-col relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <Link to={`/blog/${related.id}?type=${postType}`}>
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-40 object-cover"
                      />
                    </Link>
                    <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {related.category}
                    </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div>
                          <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
                          {post.date}
                          </p>
                        <Link to={`/blog/${related.id}?type=${postType}`}>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {related.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {related.excerpt}
                        </p>
                      </div>
                        <Link
                            to={`/blog/${related.id}?type=${postType}`}
                            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
                        >
                          <span>Đọc thêm</span>
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
          ) : (<p className="text-sm dark:text-white mx-auto text-center">No related posts</p>)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;