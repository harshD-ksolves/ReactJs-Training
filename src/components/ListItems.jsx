import React from 'react'
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import FlipMove from 'react-flip-move';




function ListItems(props) {
    const items=props.items;
    const listItem=items.map((item)=>{
        return <div className="list" key={item.key}>
            <p>
                {item.text}
                <span>
                    <FontAwesomeIcon className="faicons" onClick={()=>props.deleteItem(item.key)} icon={faTrash} />
                </span>
            </p>
            
            
        </div>
    })
  return (
    <div>
        <FlipMove duration={300} easing="ease-in-out">
            {listItem}
        </FlipMove>
        
        
    </div>
  )
};

export default ListItems;