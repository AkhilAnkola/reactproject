import React, { useContext, useEffect, useState } from "react";
import Product from './Products/Product';

export const apiurl = 'https://dummyjson.com/products';

const AppContext = React.createContext();
const ProdProvider = ({children}) => {
    const[isproducts, setdata] = useState([]); // for include product data
    const[error,setError] = useState( { iserror:false , msg:'Error fetch' } )
    const[query, setquery] = useState("")
    const getProducts = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            if (data !== null){
                setdata(data.products)
            }
            else{
                setError({
                    iserror:'true',
                    msg: data.error
                })
            }
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect( () =>{
        getProducts(`${apiurl}/search?q=${query}`)
    },[query])
    return (
        <AppContext.Provider value={{isproducts,error,query, setquery}}>
            {children}
        </AppContext.Provider>
    );
};

//custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, ProdProvider, useGlobalContext};