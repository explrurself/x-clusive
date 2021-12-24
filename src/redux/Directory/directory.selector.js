import {createSelector} from 'reselect';

const selectDirectory = state => state.directory

export const selectMenuSection = createSelector(
    [selectDirectory],
    directory => directory.menuSection
)