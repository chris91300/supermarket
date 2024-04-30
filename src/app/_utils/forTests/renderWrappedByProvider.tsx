import React, {ReactElement} from 'react'
import { Provider } from "react-redux";
import { createStore, Store, } from '@/lib/store'
import { render, RenderOptions } from "@testing-library/react";



function getProvider(store: Store){

  const myProvider = ({children}: {children: React.ReactNode}) => {
      //const store = createStore();
      return (
      <Provider store={ store } >
          {children}
      </Provider>
      )
    }
  return myProvider;
}


  const store = createStore();
  const myProvider = getProvider(store);
  
  const renderWrappedByProvider = (ui: ReactElement , options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, {wrapper: myProvider, ...options});

  const getRenderWithStore = ( store: Store ) => {
    const currentProvider = getProvider(store);
    const renderWrappedByProvider = (ui: ReactElement , options?: Omit<RenderOptions, 'wrapper'>) =>
      render(ui, {wrapper: currentProvider, ...options});

    return renderWrappedByProvider

  }
  
  // re-export everything
  export * from '@testing-library/react'
  
  // override render method
  export {renderWrappedByProvider, getRenderWithStore }