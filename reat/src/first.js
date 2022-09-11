import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function First() {
    const [int,setInt]=useState(30)
    const [ext,setExt]=useState(70)
    
    const [mark,setMark]=useState()
    const [emark,setEmark]=useState()

    const [res,setRes]=useState()
    function calc(){
        let x=mark/10*int/10;
        let y=emark/10*ext/10;
        setRes(x+y)
    }
    let navigate=useNavigate();
  return (
    <div>
        <table>
            <table border='2'>
            <tr>
                <th>internal</th>
                <th>external</th>
            </tr>
            <tr>
                <td>{int}</td>
                <td>{ext}</td>
            </tr>
            </table>
            <table>
            <tr>
            <td><text>Adjustment in internal</text></td>
            <td><button onClick={()=>{setInt(int+1);setExt(ext-1)}}>+1</button></td>
            <td><button onClick={()=>{setInt(int-1);setExt(ext+1)}}>-1</button></td>
            </tr>
            <tr>
            <td><text> enter the weights</text></td>
            <td><button onClick={()=>{setInt(30);setExt(70)}}>30/70</button></td>
            <td><button  onClick={()=>{setInt(40);setExt(60)}}>40/60</button></td>
            <td><button  onClick={()=>{setInt(20);setExt(80)}}>20/80</button></td>
            </tr>
            </table>
            <table>
            <tr>
                <td><text> enter your course mark</text></td>
                <td><input type="number"onChange={(e)=>{setMark(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td><text>external mark</text></td>
                <td><input type="number"onChange={(e)=>{setEmark(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td><text>{res}</text></td>
            </tr>
            </table>
            <button onClick={calc}>calc</button>
            <button onClick={()=>{navigate('/sec',{state:{result:res,int:int,ext:ext}})}}>change</button>
        </table>
    </div>
  )
}
