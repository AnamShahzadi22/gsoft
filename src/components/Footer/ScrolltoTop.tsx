"use client";
import {  ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ScrolltoTop = () => {

    const [isvisible, setVisible] = useState(false);
 
//  show and hide functiionality
 useEffect(() => {

    const toggleVisibiltity =()=> {
        if(window.scrollY > 300){
            setVisible(true);
        }
        else setVisible(false);}


        window.addEventListener('scroll', toggleVisibiltity);

        return ()=> {


        
                window.removeEventListener('scroll', toggleVisibiltity);
        }
    
  
 }, []);

 //scroll functionality 

 const scrolltoTop =()=> {
    window.scrollTo({

 top: 0,
 behavior: "smooth"

    }

       
        
    )
 }



 
    return (
    <div className='  '>
        {isvisible && (
            <button className='bg-cyan cursor-pointer h-12 w-12 rounded-full text-black   focus:outline-none flex items-center justify-center '  onClick={scrolltoTop}>
                <ChevronUp/>
                </button>
        )}
    </div>
  )
}

export default ScrolltoTop