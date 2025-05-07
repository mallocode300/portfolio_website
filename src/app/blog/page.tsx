'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Healthcare',
    excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and patient care...',
    date: '2024-03-15',
    category: 'Healthcare AI',
    image: '/blog-healthcare-ai.jpg'
  },
  {
    id: 2,
    title: 'Understanding Large Language Models',
    excerpt: 'A deep dive into how LLMs work and their impact on natural language processing...',
    date: '2024-03-10',
    category: 'NLP',
    image: '/blog-llm.jpg'
  },
  {
    id: 3,
    title: 'Ethical Considerations in AI Development',
    excerpt: 'Examining the ethical implications of AI systems and how to build responsible AI...',
    date: '2024-03-05',
    category: 'AI Ethics',
    image: '/blog-ethics.jpg'
  }
]

const categories = [
  'All',
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'Computer Vision',
  'AI Ethics',
  'Healthcare AI'
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  
  // Filter posts based on selected category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)
  
  // For pagination - in a real app, you would fetch specific posts based on page
  // This is a simplified version
  const postsPerPage = 6
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage))
  
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    // Scroll to top of posts section when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-dark mb-4">Blog</h1>
        <p className="text-xl text-text-default">
          Insights and thoughts on artificial intelligence and technology
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              className={`px-5 py-2 rounded-full transition-colors ${
                isActive
                  ? 'bg-accent-dark text-white font-bold shadow-md ring-1 ring-accent' 
                  : 'bg-primary-dark text-text-darker hover:bg-primary-darker font-medium'
              }`}
              onClick={() => {
                setActiveCategory(category)
                setCurrentPage(1) // Reset to first page when changing category
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.id} className="bg-card rounded-lg shadow-sm overflow-hidden group">
            <Link href={`/blog/${post.id}`} className="block">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <button 
                  onClick={() => {
                    setActiveCategory(post.category)
                    setCurrentPage(1)
                  }}
                  className={`text-sm font-medium ${
                    activeCategory === post.category
                      ? 'text-accent-dark font-semibold'
                      : 'text-accent hover:text-accent-dark'
                  }`}
                >
                  {post.category}
                </button>
                <span className="text-sm text-text-light">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
              <Link href={`/blog/${post.id}`} className="block group">
                <h2 className="text-xl font-semibold text-text-dark mb-2 group-hover:text-accent">
                  {post.title}
                </h2>
              </Link>
              <p className="text-text-default mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="text-accent hover:text-accent-dark font-medium"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          <button 
            className="px-4 py-2 rounded-lg bg-primary-dark text-text-dark hover:bg-primary-darker disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button 
              key={page}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-accent text-white hover:bg-accent-dark'
                  : 'bg-primary-dark text-text-dark hover:bg-primary-darker'
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          
          <button 
            className="px-4 py-2 rounded-lg bg-primary-dark text-text-dark hover:bg-primary-darker disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
} 