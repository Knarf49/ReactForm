function RadioGroup({options,selectedValue,onchange,name}) {
  //option มี label เป็น keys กับมี value เป็น value
  return (
    <div className='flex gap-x-6 w-full justify-center'>
      {options.map((option)=>(
        <div key={option.value}>
          <input 
            type="radio"
            name={name} 
            value={option.value} 
            onChange={onchange} 
          />
          {option.label}
        </div>
      ))}
    </div>
  )
}

export default RadioGroup