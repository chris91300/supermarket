import React, {ReactElement} from 'react'
import { Provider } from "react-redux";
import { createStore, } from '@/lib/store'
import { render, RenderOptions } from "@testing-library/react";



const myProvider = ({children}: {children: React.ReactNode}) => {
    const store = createStore();
    return (
    <Provider store={ store } >
        {children}
    </Provider>
    )
  }
  
  const renderWrappedByProvider = (ui: ReactElement , options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, {wrapper: myProvider, ...options})
  
  // re-export everything
  export * from '@testing-library/react'
  
  // override render method
  export {renderWrappedByProvider }