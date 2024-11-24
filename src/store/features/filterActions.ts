export const SET_COLOR_FILTER = 'SET_COLOR_FILTER';
export const SET_PRODUCER_FILTER = 'SET_PRODUCER_FILTER';
export const SET_COUNTRY_FILTER = 'SET_COUNTRY_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const setColorFilter = (colorFilter: string[]) => ({
    type: SET_COLOR_FILTER,
    payload: colorFilter,
});

export const setProducerFilter = (producerFilter: string[]) => ({
    type: SET_PRODUCER_FILTER,
    payload: producerFilter,
});

export const setCountryFilter = (countryFilter: string[]) => ({
    type: SET_COUNTRY_FILTER,
    payload: countryFilter,
});

export const clearFilters = () => ({
    type: CLEAR_FILTERS,
});
