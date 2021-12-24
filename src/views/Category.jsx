import React from 'react';
import { connect } from 'react-redux';

import COLLECTION_ITEM from '../components/collectionItem';
import { selectCategoryIdParams,  } from '../redux/Shop/shop.selector';
import '../scss/category.scss';

const Category = ({ collection })=>{
    // console.log(collection);
    const { title, items} = collection

    return (
    <div className="category">
        <h2 className="title"> {title} </h2>
        <div className='items'>
            {
                items.map( item =>(
                    <COLLECTION_ITEM key={item.id} item={item}/>
                ))
            }
        </div>
        
    </div>
)}




const mapStateToProps = ( state, ownProps)=>({
    collection: selectCategoryIdParams(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps) (Category)