import { useState } from 'react'
import { Checkbox } from 'antd'
import './List.css'

function Item({data: word}: {data: string}) {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    setChecked(!checked)
  }

  return (
    <div 
      className="word" 
      onClick={onChange}
    >
      <span>{word}</span>
      <Checkbox 
        checked={checked} 
        onChange={onChange} 
      />
    </div>
  )
}

export default Item
