import React, { useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

export default function Second() {
    let navigate=useNavigate();
    let location=useLocation();
    const [int,setInt]=useState(location.state.int);
    const [ext,setExt]=useState(location.state.ext);
    const [res,setRes]=useState(location.state.result);
  return (
    
    <div>
    <h1>hi</h1>
    <h1>{int}</h1>
    <h1>{ext}</h1>
    <h1>{res}</h1>
    </div>
  )
}
