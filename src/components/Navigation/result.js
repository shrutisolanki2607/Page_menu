import React from 'react'
import window from '../../images/Windows.svg'
import sideBar from '../../images/sideBar.svg'

const Result = ({input,setInput}) => {
    return(
        <div style={{display: "flex" , paddingLeft: "80px" , paddingRight: "80px" ,alignItems: "center" ,justifyContent: "space-between"}}>
            <p style={{fontSize:24,fontWeight:600}}>Found 376 results for <span style={{color:"#4094F7"}}>{input}</span></p>
            <div style={{display: "flex" , alignItems: "center", gap:16}}>
                <div style={{display:"flex", gap: 4,  border: "1px solid #DDE2E4",borderRadius:6,padding: "4px 12px"}}>
                <span style={{color: "#9AA6AC"}}>Sort by </span>
                 <select  style={{fontSize: 14 , border: "none"}}>
                    <option>Featured</option>
                 </select>
                </div>
                <div width={64} height={32}>
                    <img src={window} alt="window" />
                    <img src={sideBar} alt="sideBar" />
                </div>
            </div>
        </div>
    )
}

export default Result;