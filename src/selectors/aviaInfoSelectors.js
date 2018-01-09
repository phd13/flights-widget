import {createSelector} from 'reselect';

const getAviaInfoState = (state) => state.aviaInfo;
export const getFlights = createSelector([getAviaInfoState], (state) => state.flights);
export const getSelectedCarrier = createSelector([getAviaInfoState], (state) => state.selectedCarrier);
