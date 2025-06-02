import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '../components/ApperIcon'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 via-white to-primary-50 dark:from-surface-900 dark:via-surface-800 dark:to-surface-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-8 flex justify-center"
          animate={{ 
            rotateY: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="p-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl shadow-soft">
            <ApperIcon name="FileX" className="w-16 h-16 text-white" />
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-6xl sm:text-7xl font-bold text-gradient mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl font-semibold text-surface-800 dark:text-surface-200 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Slide Not Found
        </motion.h2>
        
        <motion.p 
          className="text-surface-600 dark:text-surface-400 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          The presentation slide you're looking for seems to have been deleted or moved to another deck.
        </motion.p>
        
        <motion.div
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <ApperIcon name="Home" className="w-5 h-5" />
            <span>Back to Editor</span>
          </Link>
          
          <button className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600 text-surface-800 dark:text-surface-200 rounded-xl font-medium transition-all duration-200 hover:scale-105">
            <ApperIcon name="RefreshCw" className="w-5 h-5" />
            <span>Try Again</span>
          </button>
        </motion.div>
        
        <motion.div 
          className="mt-12 p-4 bg-surface-100 dark:bg-surface-800 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-surface-600 dark:text-surface-400">
            Need help? Contact our support team or check out our presentation templates.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound