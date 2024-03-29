import React from 'react'
import COLLECTION_ITEM from './collectionItem';
import "../scss/collection.scss"; 

const Collection =({title, items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx)=> idx < 4)
            .map((item)=>(
               <COLLECTION_ITEM key={item.id} item={item}/>
            ))}
        </div>
    </div>
)
export default Collection