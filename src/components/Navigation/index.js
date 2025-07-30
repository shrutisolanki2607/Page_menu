import React from 'react'
import chips from "../../images/Chip.svg"
import { IoMdMenu } from "react-icons/io";
import vector from '../../images/Vector.svg'
import cube from '../../images/Cube.svg'
import heart from '../../images/Heart.svg'
import cart from '../../images/shopping_cart.svg'
import location from '../../images/Location_marker.svg'
import Result from './result'


const Index = ({input , setInput}) => {
    return(
       <>
       <div className='w-[100%]' style={{padding : "12px 24px" }}>
          <div style={{display: "flex" , justifyContent: "space-between" , alignItems: "center" }}>
            <div style={{display: "flex" }}>
                <img src={chips} alt="icon"/>
                <p style={{fontSize: 18 , fontWeight: 600}}>What a Market!</p>
            </div>
            <div style={{backgroundColor: "#4094F7" , display: "flex" ,gap: 8 ,alignItems:"center" , color: "white" , paddingLeft: 16 , paddingRight: 16 ,fontSize: 14 , fontWeight: 600 , borderRadius:6}}>
            <IoMdMenu size={24}  />
            <p>Categories</p>
            </div>
            <div style={{position: "relative"}}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='DJI phantom' style={{width: 560, padding : "16px 8px" , borderRadius:6 , border:"1px solid #DDE2E4"}}/>
                <img src={vector} alt='menu' style={{position:"absolute", right:10 , top:16}}/>
            </div>
            <div style={{display: "flex" , gap:8}}>
                <img src={cube} alt="order"/>
                <p style={{fontSize: 14}}>Order</p>
            </div>
            <div style={{display: "flex" , gap:8}}>
                <img src={heart} alt="order"/>
                <p style={{fontSize: 14}}>Favorites</p>
            </div>
            <div style={{position: "relative" ,display: "flex" , gap:8}}>
                 <div style={{position:"absolute" ,left:8, top:4 ,borderRadius: "50%" , height:15,width:15 , backgroundColor: "#F76659" , fontSize: 12 , display: "flex" , alignItems: "center" , justifyContent: "center"}}>3</div>
                <img src={cart} alt="order"/>
                <p style={{fontSize: 14}}>Cart</p>
            </div>

            <button style={{backgroundColor: "white" ,border: "1px solid #DDE2E4" ,padding:  "8px 16px", borderRadius:6}}>Sign In</button>
          </div>
          <div style={{display: "flex" , justifyContent: "space-between" , fontSize:14, paddingLeft: 8  , alignItems: "center" }}>
            <div style={{display: "flex" , gap: 8 , alignItems : "center"}}>
                <img src={location} alt="location"/>
                <p>California</p>
            </div>
           <div style={{display: "flex", alignItems: "center" , gap:16}}>
               <p>Best Sellers</p>
               <p>New Releases</p>
               <p>Books</p>
               <p>Computers</p>
               <p>Fashion</p>
               <p>Health</p>
               <p>Pharmacy</p>
               <p>Toys & Games</p>
           </div>
           <div>
            <p>Become a seller</p>
           </div>
          </div>
       </div>

       <div style={{border: "1px solid #E5E9EB"}}></div>
       <Result input={input} setInput={setInput}/>
       </>
    )
}

export default Index;