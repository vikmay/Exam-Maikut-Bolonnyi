import {
  SET_COLOR_FILTER,
  SET_PRODUCER_FILTER,
  SET_COUNTRY_FILTER,
  CLEAR_FILTERS,
} from "@/store/features/filterActions";

type Action =
  | { type: typeof SET_COLOR_FILTER; payload: string[] }
  | { type: typeof SET_PRODUCER_FILTER; payload: string[] }
  | { type: typeof SET_COUNTRY_FILTER; payload: string[] }
  | { type: typeof CLEAR_FILTERS };

type FilterState = {
  colorFilter: string[];
  producerFilter: string[];
  countryFilter: string[];
};

const initialState: FilterState = {
  colorFilter: [],
  producerFilter: [],
  countryFilter: [],
};

const filterReducer = (state = initialState, action: Action): FilterState => {
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
