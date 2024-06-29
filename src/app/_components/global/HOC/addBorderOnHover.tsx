import { nanoid } from "@reduxjs/toolkit"


export default function addBorderOnHover<T extends object>(WrappedComponent: React.ComponentType<T>){

    return function ComponentWithBorderOnHover(props: T){

        return (
            <div
                className="rounded-lg border-2 border-transparent hover:border-violet p-1" 
                key={nanoid()}
            >
                <WrappedComponent { ...props } />
            </div>
            )
    }

}
