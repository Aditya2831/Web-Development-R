import React from 'react'
import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';

export const Icon = ({name}) => {
 
   if(name=="circle")
   {
    return <FaRegCircle/>
   }
   else if(name=="cross")
   {
    return <FaTimes/>
   }
   else
   {
    return <FaPen/>
   }
  
}
