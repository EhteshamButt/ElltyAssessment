import React, { useState } from 'react'
import './PageSelectionList.css'

const PageSelectionList = () => {
  const [items, setItems] = useState(
    Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      leftChecked: i >= 3 && i <= 6, // Items 4-7 are checked (blue)
      rightChecked: i >= 3 && i <= 6, // Items 4-7 are checked (blue)
      hasGrayCheck: i === 1 || i === 2, // Items 2-3 have gray checkmarks
    }))
  )

  const handleLeftCheckboxChange = (id, checked) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, leftChecked: checked } : item
    ))
  }

  const handleRightCheckboxChange = (id, checked) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, rightChecked: checked } : item
    ))
  }

  const getCheckboxClass = (item, isLeft) => {
    const isChecked = isLeft ? item.leftChecked : item.rightChecked
    if (isChecked) {
      return 'checkbox-blue'
    }
    if (item.hasGrayCheck) {
      return 'checkbox-gray-check'
    }
    return 'checkbox-empty'
  }
  
  const shouldShowGrayCheck = (item, isLeft) => {
    const isChecked = isLeft ? item.leftChecked : item.rightChecked
    return item.hasGrayCheck && !isChecked
  }

  return (
    <div className="page-selection-list-container">
      <div className="list-header">
        <span className="header-item">
          <span className="diamond-icon">◆</span>
          Deskt...
        </span>
        <span className="header-item">
          <span className="diamond-icon">◆</span>
          Home
        </span>
      </div>
      
      <div className="list-content">
        <div className="list-left-column">
          {items.map((item) => (
            <div key={item.id} className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={item.leftChecked}
                onChange={(e) => handleLeftCheckboxChange(item.id, e.target.checked)}
                className="checkbox-input"
                id={`left-${item.id}`}
              />
              <label 
                htmlFor={`left-${item.id}`}
                className={`checkbox-custom ${getCheckboxClass(item, true)}`}
              >
                {shouldShowGrayCheck(item, true) && (
                  <span className="gray-checkmark">✓</span>
                )}
              </label>
            </div>
          ))}
        </div>
        
        <div className="list-right-column">
          {items.map((item) => (
            <div key={item.id} className="all-pages-row">
              <span className="all-pages-text">All pages</span>
              <input
                type="checkbox"
                checked={item.rightChecked}
                onChange={(e) => handleRightCheckboxChange(item.id, e.target.checked)}
                className="checkbox-input"
                id={`right-${item.id}`}
              />
              <label 
                htmlFor={`right-${item.id}`}
                className={`checkbox-custom ${getCheckboxClass(item, false)}`}
              >
                {shouldShowGrayCheck(item, false) && (
                  <span className="gray-checkmark">✓</span>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageSelectionList

