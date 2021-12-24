import {React, Component} from 'react';
import { Route } from 'react-router-dom';
import collectionItem from '../components/collectionItem';
import CollectionOverview from '../components/CollectionOverview';
import Category from './Category';


// here we are using match as props of Route and other two by default props of routes are location and history
// match works as and object check it on console

const ShopPage = ( {match} )=> {
  // console.log(match);
  return (

            <div className="shop-page">
              {/* <CollectionOverview /> */}
              <Route exact path={`${match.path}`} component={ CollectionOverview } />
              <Route exact path={`${match.path}/:categoryId`} component={Category}/>

            </div>

)}



export default ShopPage