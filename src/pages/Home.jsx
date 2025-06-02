import React from 'react'
import { motion } from 'framer-motion'
import MainFeature from '../components/MainFeature'
import ApperIcon from '../components/ApperIcon'

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-surface-200 dark:border-surface-700"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="p-2 bg-gradient-to-br from-brand-forge to-secondary-500 rounded-xl shadow-soft">
                <ApperIcon name="Presentation" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">SlideForge</h1>
                <p className="text-xs text-surface-600 dark:text-surface-400 hidden sm:block">Professional Presentations</p>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon 
                  name={darkMode ? "Sun" : "Moon"} 
                  className="w-5 h-5 text-surface-600 dark:text-surface-400" 
                />
              </motion.button>
              
              <motion.button
                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="Save" className="w-4 h-4" />
                <span>Save Project</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-16">
        <MainFeature darkMode={darkMode} />
      </main>

      {/* Footer */}
      <motion.footer 
        className="border-t border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 no-print"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-surface-600 dark:text-surface-400">
              <span>© 2024 SlideForge</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Professional Presentation Builder</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                className="flex items-center space-x-2 text-sm text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <ApperIcon name="HelpCircle" className="w-4 h-4" />
                <span>Help</span>
              </motion.button>
              
              <motion.button
                className="flex items-center space-x-2 text-sm text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <ApperIcon name="MessageSquare" className="w-4 h-4" />
                <span>Feedback</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Home