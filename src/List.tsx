import { Button } from 'antd'
import Item from './Item'
import './List.css'

const words = Array.from({length: 100}, (_, i) => `String ${i+1}`);

function List() {
  return (
    <div className='container'>
      {words.map((word) => <Item data={word} />)}
      <Button type="default">Submit</Button>
    </div>
  )
}

export default List
