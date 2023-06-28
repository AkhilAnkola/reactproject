import React from "react";
import Products from './Products';
import Search from './Search';

const Product = () => {
    return(
        <React.Fragment>
            <Search/>
            <Products/>
        </React.Fragment>
    );
}
export default Product;