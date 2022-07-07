import React from 'react'
import './LeftPanel.css'
function LeftPanel() {
  return (
    <div className='Leftpanel__main'>
       <div className='Leftpanel__header'>Brand</div>
       <div className="leftSide__brandname">
                <label className="brandname">
                    <input type="checkbox" value="Apple" />Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Samsung" />Samsung
                </label>
                <label className="brandname">
                    <input type="checkbox" value="MI" />Mi
                </label>
            </div>
            </div>
  )
}

export default LeftPanel