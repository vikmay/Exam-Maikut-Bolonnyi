import {
    SET_COLOR_FILTER,
    SET_PRODUCER_FILTER,
    SET_COUNTRY_FILTER,
    CLEAR_FILTERS,
  } from "@/store/features/filterActions";
  
  const initialState = {
    colorFilter: [],
    producerFilter: [], // Add this line
    countryFilter: [],
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COLOR_FILTER:
        return {
          ...state,
          colorFilter: action.payload,
        };
      case SET_PRODUCER_FILTER:
        return {
          ...state,
          producerFilter: action.payload,
        };
      case SET_COUNTRY_FILTER:
        return {
          ...state,
          countryFilter: action.payload,
        };
      case CLEAR_FILTERS:
        return {
          ...state,
          colorFilter: [],
          producerFilter: [],
          countryFilter: [],
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  