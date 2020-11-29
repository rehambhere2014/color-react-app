import React, { useEffect, useState } from 'react';


function SingleColor({rgb,hexColor,weight,type, index}){
    const[alert,setAlert]= useState(false)
    const rgbc= rgb.join(',');
    const hex= `#${hexColor}`;
    useEffect(()=>{
        let timeOut = setTimeout(()=>{
            setAlert(false)
        },1000);
        return(()=>clearTimeout(timeOut))
    },[alert]);
return (
    <article
    className="color"
    style={{backgroundColor:`rgb(${rgbc})`}}
    onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(hex)
    }}
    >
        <p className='percent-value'>{weight}%</p>
          <p className='percent-value'>{hex}</p>
          {alert && <p className='alert'>copied to clipboard</p>}

    </article>
)
}

export default SingleColor