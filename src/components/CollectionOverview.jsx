import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../redux/Shop/shop.selector';
import Collection from './Collection';
import '../scss/collectionOverview.scss';

const CollectionOverview =({ collection })=>(

    <div className='collection-overview'>
           {collection.map(({id, ...otherCollectionProps})=>(
             <Collection key={id} {...otherCollectionProps} />
        ))}
    </div>


)

const mapStateToProps = createStructuredSelector({
    collection: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview)

