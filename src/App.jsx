import React, { useState } from 'react'
import PageSelectionModal from './components/PageSelectionModal'
import PageSelectionList from './components/PageSelectionList'
import ButtonSizes from './components/ButtonSizes'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPages, setSelectedPages] = useState({
    allPages: false,
    pages: {
      'Page 1': false,
      'Page 2': false,
      'Page 3': false,
      'Page 4': false,
    }
  })

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSelectionChange = (newSelection) => {
    setSelectedPages(newSelection)
  }

  const getSelectedPagesText = () => {
    if (selectedPages.allPages) {
      return 'All pages'
    }
    const selected = Object.entries(selectedPages.pages)
      .filter(([_, isSelected]) => isSelected)
      .map(([pageName]) => pageName)
    return selected.length > 0 ? selected.join(', ') : 'No pages selected'
  }

  return (
    <div className="app">
      <div className="page-content">
        <header className="page-header">
          <h1>Page Selection Components - All 3 Designs</h1>
        </header>
        
        <main className="page-main">
          {/* Design 1: Modal */}
          <div className="content-section">
            <h2>Design 1: Page Selection Modal</h2>
            <p>Modal dialog with "All pages" option, separator, individual pages, and Done button.</p>
            
            <div className="selection-info">
              <p><strong>Currently Selected:</strong> {getSelectedPagesText()}</p>
            </div>
            
            <button className="open-button" onClick={handleOpenModal}>
              Open Page Selection Modal
            </button>
          </div>

          {/* Design 2: List View */}
          <div className="content-section">
            <h2>Design 2: Page Selection List</h2>
            <p>Two-column layout with checkboxes on the left and "All pages" fields on the right.</p>
            <PageSelectionList />
          </div>

          {/* Design 3: Button Sizes */}
          <div className="content-section">
            <h2>Design 3: Button Size Reference</h2>
            <p>Different button sizes and styles showing the 340 × 40 specification.</p>
            <ButtonSizes />
          </div>
        </main>
      </div>
      
      {isModalOpen && (
        <PageSelectionModal
          selectedPages={selectedPages}
          onSelectionChange={handleSelectionChange}
          onClose={handleCloseModal}
        />
      )}
    </div>
  )
}

export default App

