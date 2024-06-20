import React from 'react'

function input({label,id,value,onChange,placeholder,type}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label><br />
      <input type={type} id={id} value={value} onChange={onChange} className='py-1 px-3 rounded-sm w-full' placeholder={placeholder} /><br />
    </div>
  )
}

export default input