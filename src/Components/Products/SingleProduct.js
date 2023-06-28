import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiurl } from '../context';
import Style from './SingleProduct.module.css'
import { useNavigate} from "react-router-dom";

const SingleProduct = () => {
    let navigate = useNavigate();
    const[isproducts, setdata] = useState(""); // for include product data
    const[error,setError] = useState( { iserror:false , msg:'Error fetch' } ) //set error msg
    const {id} = useParams();
    const getProducts = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            if (data !== null){
                setdata(data)
            }
            else{
                setError({
                    iserror:'true',
                    msg: data.error
                })
            }
        }
        catch{

        }
    }
    useEffect( () =>{
        getProducts(`${apiurl}/${id}`)
    },[id])
    return(
        <div className={Style.prodmain}>
            <div className={Style.images}>
                <img src={isproducts.thumbnail}/>
                <div className={Style.subimages}>
                    {/* {isproducts.images.map( (n) => {
                        return(
                            <img src={n}/>
                        );
                    } )} */}
                </div>
            </div>
            <div className={Style.content}>
                <h2 className={Style.title}>{isproducts.title}</h2>
                <h2 className={Style.rating}>{isproducts.rating}</h2>
                {/* <h2 className={Style.originalprise}>MRP. {isproducts.price * 1} Rs.</h2> */}
                <h2 className={Style.dealofday}>MRP. {isproducts.price} Rs.</h2>
                <h2 className={Style.discount}>{Math.trunc(isproducts.discountPercentage)}% off</h2>
                <p>{isproducts.description}</p>
                <h2 className={Style.sinfo}>Brand: <span>{isproducts.brand}</span></h2>
                <h2 className={Style.sinfo}>Available: <span>{isproducts.stock != null ?'In Stock':'Out of Stock'}</span></h2>
                <button onClick={() => navigate(-1)}>Back</button> 
            </div>
        </div>
    );
}
export default SingleProduct;