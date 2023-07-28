import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi"
import MenuCard from "./MenuCard";


const Restaurant = () => {
  const[menuData, setMenuData]= useState(Menu)
  const filterItem=(category)=>{
    const updatedlist=Menu.filter((currElem)=>{
      return currElem.category===category;
    });
    setMenuData(updatedlist);
  };
  
  
  return(
    <>
    <nav className='navbar'>
        <div className='tab'>
          <button class='tablinks' onClick={()=>filterItem('breakfast')}>breakfast</button>
          <button class='tablinks' onClick={()=>filterItem('lunch')}>lunch</button>
          <button class='tablinks' onClick={()=>filterItem('evening')}>evening</button>
          <button class='tablinks' onClick={()=>filterItem('dinner')}>dinner</button>
          
        </div>
      </nav>
      
      <MenuCard menuData={menuData} />
      
    
    </>
  )
  
};

export default Restaurant;