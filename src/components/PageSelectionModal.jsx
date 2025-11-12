import React, { useState, useEffect } from 'react'
import './PageSelectionModal.css'

const PageSelectionModal = ({ selectedPages, onSelectionChange, onClose }) => {
  const [localSelection, setLocalSelection] = useState(selectedPages)

  useEffect(() => {
    setLocalSelection(selectedPages)
  }, [selectedPages])

  const handleAllPagesChange = (e) => {
    const isChecked = e.target.checked
    const newSelection = {
      allPages: isChecked,
      pages: {
        'Page 1': isChecked,
        'Page 2': isChecked,
        'Page 3': isChecked,
        'Page 4': isChecked,
      }
    }
    setLocalSelection(newSelection)
  }

  const handlePageChange = (pageName, isChecked) => {
    const newSelection = {
      ...localSelection,
      pages: {
        ...localSelection.pages,
        [pageName]: isChecked
      }
    }
    
    // Update "All pages" based on individual selections
    const allPagesSelected = Object.values(newSelection.pages).every(Boolean)
    newSelection.allPages = allPagesSelected
    
    setLocalSelection(newSelection)
  }

  const handleDone = () => {
    onSelectionChange(localSelection)
    onClose()
  }

  const pageNames = ['Page 1', 'Page 2', 'Page 3', 'Page 4']

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-body">
          <label className="option-item all-pages-item">
            <span className="option-text">All pages</span>
            <input
              type="checkbox"
              checked={localSelection.allPages}
              onChange={handleAllPagesChange}
              className="checkbox-input"
            />
            <span className="checkbox-custom"></span>
          </label>
          
          <div className="separator"></div>
          
          {pageNames.map((pageName) => (
            <label key={pageName} className="option-item">
              <span className="option-text">{pageName}</span>
              <input
                type="checkbox"
                checked={localSelection.pages[pageName]}
                onChange={(e) => handlePageChange(pageName, e.target.checked)}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
            </label>
          ))}
        </div>
        
        <button className="done-button" onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  )
}

export default PageSelectionModal

