import React from 'react'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'
function DisplayPage() {
  return (
    <div style={{display:"flex"}}>
        <div style={ {flex:"1.5"}}><LeftPanel/></div>
        <div  style={ {flex:"5"}} ><RightPanel/></div>

    </div>
  )
}

export default DisplayPage