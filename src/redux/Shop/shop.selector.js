import { createSelector } from "reselect";
import  memoize  from "lodash.memoize"


const CATEGORY_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
}

const selectCollection = state => state.shop

export const selectCollectionItems = createSelector(
    [selectCollection],
    shop => shop.collection
)

export const selectCollectionForPreview = createSelector(
    [selectCollectionItems],
    collection => Object.keys(collection).map(key => collection[key])
)

 export const selectCategoryIdParams = memoize((categoryUrlParams) => createSelector(
    [selectCollectionItems],
    collection => collection[categoryUrlParams]
 )
)