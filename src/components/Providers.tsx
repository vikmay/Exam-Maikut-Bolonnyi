import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

interface Props {
    children: ReactNode;
}


export const Providers = (props:Props) => {
  return <Provider store={store}>{props.children}</Provider>;

  
}
export default Providers