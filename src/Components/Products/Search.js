import React, { useContext } from "react";
import {AppContext} from '../context';

import Style from './Products.module.css';

const Search = () => {

    const {query, setquery} = useContext(AppContext);

    const formSubmited = (e) => {
        e.preventDefault()
    }

    return(
        <React.Fragment>
            <div className={Style.searchName}>
                <form onSubmit={formSubmited}>
                    <input type="text" placeholder="Search" value={query} onChange={ (e)=>{setquery(e.target.value)} }/>
                </form>
            </div>
        </React.Fragment>
    );
}
export default Search;