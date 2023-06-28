import React, { useContext } from "react";
import {AppContext} from '../context';
import {useGlobalContext} from '../context';
import Style from './Products.module.css';
import { NavLink } from "react-router-dom";


const Products = () => {
    const {isproducts} = useContext(AppContext);
    // console.log(isproducts);
    return(
        <React.Fragment>
            <section className={Style.productPage}>
                <div className={Style.productgrid}>
                    {isproducts.map( (n)=>{
                        const {id, title, thumbnail} = n;
                        return(
                            <NavLink to={`products/${id}`}>
                                <div className={Style.card}>
                                    <img src={n.thumbnail} className={Style.thumbnail}/>
                                    <div className={Style.info}>
                                    <h3 className={Style.prod_title}>{n.title}</h3>
                                    <h4 className={Style.category}>{n.category}</h4>
                                    <h4 className={Style.rating}>{n.rating}</h4>
                                    <h4 className={Style.price}>
                                        <span className={Style.rs}>Rs. </span>{n.price}
                                    </h4>
                                    <h4 className={Style.off}>{Math.trunc(n.discountPercentage)}% off</h4>
                                    </div>
                                </div>
                            </NavLink>
                        );
                    } )}
                </div>
            </section>
        </React.Fragment>
    );
}
export default Products;

