import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'

const MainFeature = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedElement, setSelectedElement] = useState(null)
  const [toolbarMode, setToolbarMode] = useState('select')
  const [showAssets, setShowAssets] = useState(false)
  const [showBrandPanel, setShowBrandPanel] = useState(false)
const [presentation, setPresentation] = useState({
    title: "Dreamware's IT Solutions for Novanta",
    slides: [
      {
        id: 1,
        title: "Dreamware's IT Solutions for Novanta",
        content: [
          {
            id: 'title-main',
            type: 'text',
            content: "Dreamware's IT Solutions for Novanta",
            position: { x: 100, y: 80, width: 600, height: 60 },
            style: { fontSize: '32px', fontWeight: 'bold', color: '#1e293b', textAlign: 'center' }
          },
          {
            id: 'subtitle',
            type: 'text',
            content: 'Empowering Innovation and Operational Excellence in Medical, Life Science, and Advanced Industrial OEM',
            position: { x: 50, y: 160, width: 700, height: 80 },
            style: { fontSize: '18px', fontWeight: '500', color: '#475569', textAlign: 'center', lineHeight: '1.4' }
          },
          {
            id: 'logo-dreamware',
            type: 'image',
            content: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop',
            position: { x: 150, y: 280, width: 150, height: 80 },
            style: { borderRadius: '8px', objectFit: 'contain' }
          },
          {
            id: 'logo-novanta',
            type: 'image',
            content: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=80&fit=crop',
            position: { x: 500, y: 280, width: 150, height: 80 },
            style: { borderRadius: '8px', objectFit: 'contain' }
          },
          {
            id: 'presenter-info',
            type: 'text',
            content: 'Presented by: [Your Name/Dreamwares Team]',
            position: { x: 100, y: 400, width: 400, height: 30 },
            style: { fontSize: '16px', fontWeight: '500', color: '#64748b' }
          },
          {
            id: 'date-info',
            type: 'text',
            content: 'Date: June 2, 2025',
            position: { x: 500, y: 400, width: 200, height: 30 },
            style: { fontSize: '16px', fontWeight: '500', color: '#64748b' }
          }
        ],
        background: '#ffffff'
      },
      {
        id: 2,
        title: "About Dreamware: Your Strategic Salesforce and AI Partner",
        content: [
          {
            id: 'slide2-title',
            type: 'text',
            content: 'About Dreamware: Your Strategic Salesforce and AI Partner',
            position: { x: 50, y: 40, width: 700, height: 50 },
            style: { fontSize: '28px', fontWeight: 'bold', color: '#1e293b', textAlign: 'center' }
          },
          {
            id: 'who-we-are-title',
            type: 'text',
            content: 'Who We Are:',
            position: { x: 50, y: 120, width: 300, height: 30 },
            style: { fontSize: '18px', fontWeight: 'bold', color: '#4F46E5' }
          },
          {
            id: 'who-we-are-1',
            type: 'text',
            content: '• An AI-first company with deep roots in Salesforce expertise.',
            position: { x: 70, y: 150, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'who-we-are-2',
            type: 'text',
            content: '• A recognized Salesforce PDO Partner and Consulting Partner (Gold to Platinum).',
            position: { x: 70, y: 175, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'who-we-are-3',
            type: 'text',
            content: '• Over 14 years of experience delivering innovative solutions.',
            position: { x: 70, y: 200, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'who-we-are-4',
            type: 'text',
            content: '• Offices in the US and India, with associates across the globe (US, UK, Australia, Russia, Middle East).',
            position: { x: 70, y: 225, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'mission-title',
            type: 'text',
            content: 'Our Mission:',
            position: { x: 50, y: 270, width: 300, height: 30 },
            style: { fontSize: '18px', fontWeight: 'bold', color: '#4F46E5' }
          },
          {
            id: 'mission-1',
            type: 'text',
            content: '• To revolutionize how businesses operate and interact with their audience by leveraging cutting-edge cloud technology, digital media, and Artificial Intelligence.',
            position: { x: 70, y: 300, width: 650, height: 40 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'mission-2',
            type: 'text',
            content: '• Committed to quality, innovation, and customer satisfaction.',
            position: { x: 70, y: 340, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'expertise-title',
            type: 'text',
            content: 'Our Expertise at a Glance:',
            position: { x: 50, y: 385, width: 300, height: 30 },
            style: { fontSize: '18px', fontWeight: 'bold', color: '#4F46E5' }
          },
          {
            id: 'expertise-1',
            type: 'text',
            content: '• 540+ Projects in Salesforce Lightning, API Integrations, Data Migration, Customization, and Development.',
            position: { x: 70, y: 415, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'expertise-2',
            type: 'text',
            content: '• 400+ AppExchange Apps developed.',
            position: { x: 70, y: 440, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          },
          {
            id: 'expertise-3',
            type: 'text',
            content: '• 100+ Certified Salesforce Developers.',
            position: { x: 70, y: 465, width: 650, height: 25 },
            style: { fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }
          }
        ],
        background: '#ffffff'
      }
    ],
    brandSettings: {
      primaryColor: '#4F46E5',
      secondaryColor: '#EC4899',
      accentColor: '#F59E0B',
      fonts: ['Inter', 'Arial', 'Helvetica']
    }
  })

  const [draggedElement, setDraggedElement] = useState(null)
  const [isDragging, setIsDragging] = useState(false)

  const addSlide = useCallback(() => {
    const newSlide = {
      id: Date.now(),
      title: `Slide ${presentation.slides.length + 1}`,
      content: [],
      background: '#ffffff'
    }
    
    setPresentation(prev => ({
      ...prev,
      slides: [...prev.slides, newSlide]
    }))
    
    setCurrentSlide(presentation.slides.length)
    toast.success('New slide added successfully!')
  }, [presentation.slides.length])

  const duplicateSlide = useCallback(() => {
    const currentSlideData = presentation.slides[currentSlide]
    const duplicatedSlide = {
      ...currentSlideData,
      id: Date.now(),
      title: `${currentSlideData.title} (Copy)`,
      content: currentSlideData.content.map(item => ({
        ...item,
        id: `${item.id}-copy-${Date.now()}`
      }))
    }
    
    const newSlides = [...presentation.slides]
    newSlides.splice(currentSlide + 1, 0, duplicatedSlide)
    
    setPresentation(prev => ({
      ...prev,
      slides: newSlides
    }))
    
    setCurrentSlide(currentSlide + 1)
    toast.success('Slide duplicated successfully!')
  }, [currentSlide, presentation.slides])

  const deleteSlide = useCallback(() => {
    if (presentation.slides.length === 1) {
      toast.error('Cannot delete the last slide')
      return
    }
    
    const newSlides = presentation.slides.filter((_, index) => index !== currentSlide)
    setPresentation(prev => ({
      ...prev,
      slides: newSlides
    }))
    
    if (currentSlide >= newSlides.length) {
      setCurrentSlide(newSlides.length - 1)
    }
    
    toast.success('Slide deleted successfully!')
  }, [currentSlide, presentation.slides])

  const addTextElement = useCallback(() => {
    const newElement = {
      id: `text-${Date.now()}`,
      type: 'text',
      content: 'Click to edit text',
      position: { x: 100, y: 150, width: 300, height: 40 },
      style: { fontSize: '16px', color: '#1e293b' }
    }
    
    const newSlides = [...presentation.slides]
    newSlides[currentSlide].content.push(newElement)
    
    setPresentation(prev => ({
      ...prev,
      slides: newSlides
    }))
    
    setSelectedElement(newElement.id)
    setToolbarMode('select')
  }, [currentSlide, presentation.slides])

  const addImageElement = useCallback(() => {
    const newElement = {
      id: `image-${Date.now()}`,
      type: 'image',
      content: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=400&h=300&fit=crop',
      position: { x: 100, y: 200, width: 200, height: 150 },
      style: { borderRadius: '8px' }
    }
    
    const newSlides = [...presentation.slides]
    newSlides[currentSlide].content.push(newElement)
    
    setPresentation(prev => ({
      ...prev,
      slides: newSlides
    }))
    
    setSelectedElement(newElement.id)
    setToolbarMode('select')
  }, [currentSlide, presentation.slides])

  const handleElementSelect = useCallback((elementId) => {
    setSelectedElement(elementId)
    setToolbarMode('select')
  }, [])

  const handleElementDragStart = useCallback((e, element) => {
    setDraggedElement(element)
    setIsDragging(true)
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  const handleElementDrop = useCallback((e) => {
    e.preventDefault()
    if (!draggedElement) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSlides = [...presentation.slides]
    const contentIndex = newSlides[currentSlide].content.findIndex(
      item => item.id === draggedElement.id
    )
    
    if (contentIndex !== -1) {
      newSlides[currentSlide].content[contentIndex].position = {
        ...draggedElement.position,
        x: Math.max(0, x - draggedElement.position.width / 2),
        y: Math.max(0, y - draggedElement.position.height / 2)
      }
      
      setPresentation(prev => ({
        ...prev,
        slides: newSlides
      }))
    }
    
    setDraggedElement(null)
    setIsDragging(false)
  }, [draggedElement, currentSlide, presentation.slides])

  const currentSlideData = presentation.slides[currentSlide]

  const assetCategories = [
    { name: 'Images', icon: 'Image', items: [
      { id: 1, name: 'Business Team', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=150&fit=crop' },
      { id: 2, name: 'Data Charts', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop' },
      { id: 3, name: 'Office Space', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=150&fit=crop' }
    ]},
    { name: 'Icons', icon: 'Zap', items: [
      { id: 4, name: 'Analytics', icon: 'BarChart3' },
      { id: 5, name: 'Growth', icon: 'TrendingUp' },
      { id: 6, name: 'Target', icon: 'Target' }
    ]},
    { name: 'Shapes', icon: 'Square', items: [
      { id: 7, name: 'Rectangle', type: 'rectangle' },
      { id: 8, name: 'Circle', type: 'circle' },
      { id: 9, name: 'Arrow', type: 'arrow' }
    ]}
  ]

  return (
    <div className="flex h-screen bg-gradient-mesh">
      {/* Left Sidebar - Slide Navigation */}
      <motion.aside 
        className="w-60 lg:w-72 bg-white dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 flex flex-col shadow-soft"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Slide Controls */}
        <div className="p-4 border-b border-surface-200 dark:border-surface-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-surface-800 dark:text-surface-200">Slides</h3>
            <div className="flex space-x-1">
              <motion.button
                onClick={addSlide}
                className="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Add Slide"
              >
                <ApperIcon name="Plus" className="w-4 h-4 text-surface-600 dark:text-surface-400" />
              </motion.button>
              <motion.button
                onClick={duplicateSlide}
                className="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Duplicate Slide"
              >
                <ApperIcon name="Copy" className="w-4 h-4 text-surface-600 dark:text-surface-400" />
              </motion.button>
              <motion.button
                onClick={deleteSlide}
                className="p-2 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Delete Slide"
              >
                <ApperIcon name="Trash2" className="w-4 h-4 text-surface-600 dark:text-surface-400" />
              </motion.button>
            </div>
          </div>
          
          <input
            type="text"
            value={presentation.title}
            onChange={(e) => setPresentation(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-3 py-2 bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Presentation Title"
          />
        </div>

        {/* Slide Thumbnails */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {presentation.slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className={`slide-thumbnail ${index === currentSlide ? 'active' : ''} p-3`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              <div className="aspect-video bg-surface-100 dark:bg-surface-800 rounded-md mb-2 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-surface-500">
                  Slide {index + 1}
                </div>
              </div>
              <p className="text-sm font-medium text-surface-800 dark:text-surface-200 truncate">
                {slide.title}
              </p>
              <p className="text-xs text-surface-500 dark:text-surface-400">
                {slide.content.length} elements
              </p>
            </motion.div>
          ))}
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <motion.div 
          className="bg-white dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700 p-4 shadow-soft"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <motion.button
                className={`toolbar-button ${toolbarMode === 'select' ? 'active' : ''}`}
                onClick={() => setToolbarMode('select')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApperIcon name="MousePointer2" className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="toolbar-button"
                onClick={addTextElement}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Add Text"
              >
                <ApperIcon name="Type" className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="toolbar-button"
                onClick={addImageElement}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Add Image"
              >
                <ApperIcon name="Image" className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="toolbar-button"
                onClick={() => setShowAssets(!showAssets)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Asset Library"
              >
                <ApperIcon name="FolderOpen" className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="toolbar-button"
                onClick={() => setShowBrandPanel(!showBrandPanel)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Brand Settings"
              >
                <ApperIcon name="Palette" className="w-4 h-4" />
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-2">
              <motion.button
                className="toolbar-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Undo"
              >
                <ApperIcon name="Undo2" className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                className="toolbar-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Redo"
              >
                <ApperIcon name="Redo2" className="w-4 h-4" />
              </motion.button>
              
              <div className="h-6 w-px bg-surface-200 dark:bg-surface-700"></div>
              
              <motion.button
                className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toast.success('Presentation saved successfully!')}
              >
                Save
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Canvas Area */}
        <div className="flex-1 flex">
          {/* Main Canvas */}
          <div className="flex-1 p-8 overflow-auto bg-surface-50 dark:bg-surface-800">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-surface-800 dark:text-surface-200">
                  {currentSlideData.title}
                </h2>
                <div className="flex items-center space-x-2 text-sm text-surface-600 dark:text-surface-400">
                  <span>Slide {currentSlide + 1} of {presentation.slides.length}</span>
                </div>
              </div>
              
              {/* Slide Canvas */}
              <motion.div
                className="relative aspect-video bg-white rounded-xl shadow-slide border border-surface-200 dark:border-surface-700 overflow-hidden slide-editor-grid"
                style={{ backgroundColor: currentSlideData.background }}
                onDrop={handleElementDrop}
                onDragOver={(e) => e.preventDefault()}
                layoutId={`slide-${currentSlideData.id}`}
              >
                <AnimatePresence>
                  {currentSlideData.content.map((element) => (
                    <motion.div
                      key={element.id}
                      className={`content-element ${element.type} ${selectedElement === element.id ? 'selected' : ''}`}
                      style={{
                        left: element.position.x,
                        top: element.position.y,
                        width: element.position.width,
                        height: element.position.height,
                        ...element.style
                      }}
                      onClick={() => handleElementSelect(element.id)}
                      draggable
                      onDragStart={(e) => handleElementDragStart(e, element)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {element.type === 'text' && (
                        <div className="w-full h-full flex items-center">
                          <span style={element.style}>{element.content}</span>
                        </div>
                      )}
                      
                      {element.type === 'image' && (
                        <img
                          src={element.content}
                          alt="Slide element"
                          className="w-full h-full object-cover"
                          style={element.style}
                        />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {currentSlideData.content.length === 0 && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-surface-400 dark:text-surface-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-center">
                      <ApperIcon name="Plus" className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Add content to your slide</p>
                      <p className="text-sm">Use the toolbar to add text, images, or shapes</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Panels */}
          <AnimatePresence>
            {(showAssets || showBrandPanel) && (
              <motion.aside
                className="w-80 bg-white dark:bg-surface-900 border-l border-surface-200 dark:border-surface-700 shadow-soft"
                initial={{ x: 320 }}
                animate={{ x: 0 }}
                exit={{ x: 320 }}
                transition={{ duration: 0.3 }}
              >
                {showAssets && (
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-surface-800 dark:text-surface-200">Asset Library</h3>
                      <motion.button
                        onClick={() => setShowAssets(false)}
                        className="p-1 hover:bg-surface-100 dark:hover:bg-surface-800 rounded"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ApperIcon name="X" className="w-4 h-4 text-surface-600 dark:text-surface-400" />
                      </motion.button>
                    </div>
                    
                    <div className="space-y-6">
                      {assetCategories.map((category) => (
                        <div key={category.name}>
                          <h4 className="flex items-center space-x-2 font-medium text-surface-700 dark:text-surface-300 mb-3">
                            <ApperIcon name={category.icon} className="w-4 h-4" />
                            <span>{category.name}</span>
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {category.items.map((item) => (
                              <motion.div
                                key={item.id}
                                className="asset-item"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {item.url ? (
                                  <img
                                    src={item.url}
                                    alt={item.name}
                                    className="w-full h-20 object-cover rounded-lg mb-2"
                                  />
                                ) : (
                                  <div className="w-full h-20 bg-surface-100 dark:bg-surface-800 rounded-lg mb-2 flex items-center justify-center">
                                    <ApperIcon name={item.icon || 'Square'} className="w-8 h-8 text-surface-400" />
                                  </div>
                                )}
                                <p className="text-xs font-medium text-surface-700 dark:text-surface-300 truncate">
                                  {item.name}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {showBrandPanel && (
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-surface-800 dark:text-surface-200">Brand Settings</h3>
                      <motion.button
                        onClick={() => setShowBrandPanel(false)}
                        className="p-1 hover:bg-surface-100 dark:hover:bg-surface-800 rounded"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ApperIcon name="X" className="w-4 h-4 text-surface-600 dark:text-surface-400" />
                      </motion.button>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-surface-700 dark:text-surface-300 mb-3">Colors</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div 
                              className="brand-color-swatch"
                              style={{ backgroundColor: presentation.brandSettings.primaryColor }}
                            ></div>
                            <div className="flex-1">
                              <label className="text-sm font-medium text-surface-600 dark:text-surface-400">Primary</label>
                              <input
                                type="color"
                                value={presentation.brandSettings.primaryColor}
                                onChange={(e) => setPresentation(prev => ({
                                  ...prev,
                                  brandSettings: {
                                    ...prev.brandSettings,
                                    primaryColor: e.target.value
                                  }
                                }))}
                                className="w-full h-8 rounded border border-surface-200 dark:border-surface-700"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <div 
                              className="brand-color-swatch"
                              style={{ backgroundColor: presentation.brandSettings.secondaryColor }}
                            ></div>
                            <div className="flex-1">
                              <label className="text-sm font-medium text-surface-600 dark:text-surface-400">Secondary</label>
                              <input
                                type="color"
                                value={presentation.brandSettings.secondaryColor}
                                onChange={(e) => setPresentation(prev => ({
                                  ...prev,
                                  brandSettings: {
                                    ...prev.brandSettings,
                                    secondaryColor: e.target.value
                                  }
                                }))}
                                className="w-full h-8 rounded border border-surface-200 dark:border-surface-700"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-surface-700 dark:text-surface-300 mb-3">Typography</h4>
                        <select className="w-full px-3 py-2 bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-lg text-sm">
                          {presentation.brandSettings.fonts.map((font) => (
                            <option key={font} value={font}>{font}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-surface-700 dark:text-surface-300 mb-3">Logo Upload</h4>
                        <motion.div 
                          className="border-2 border-dashed border-surface-300 dark:border-surface-600 rounded-lg p-6 text-center cursor-pointer hover:border-primary-400 transition-colors duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ApperIcon name="Upload" className="w-8 h-8 mx-auto mb-2 text-surface-400" />
                          <p className="text-sm text-surface-600 dark:text-surface-400">
                            Drop logo here or click to upload
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default MainFeature