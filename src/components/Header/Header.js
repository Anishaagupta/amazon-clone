import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from '../../StateProvider';
import {auth} from '../../utils/firebase';

const Header = () => {

    const [{cart, user}] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <nav className="header">
         <Link to="/"><img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" /></Link>
            <div className="searchBar">
            <input placeholder="Search" type="text" className="header_searchInput" />
             <SearchIcon className="search_Icon"/>
            </div>
            <div className="header_nav">
             <Link to={!user && "/login"} className="header_link">
                 <div onClick={login} className="header_option">
                 <span className="lOne">Hello {user?.email}</span>
                 <span className="lTwo">{user ? "Sign Out" :"Sign In"}</span>
                 </div>
             </Link>  
             <Link to="/checkout" className="header_link">
                 <div className="header_option">
                 <span className="lOne">Returns</span>
                 <span className="lTwo">& Orders</span>
                 </div>
             </Link> 
             <Link to="/" className="header_link">
                 <div className="header_option">
                 <span className="lOne">Your</span>
                 <span className="lTwo">Prime</span>
                 </div>
             </Link> 
             
             <Link to="/checkout" className="header_link">
                 <div className="header_optionBasket">
                 <ShoppingCartIcon className="cart"/>
                 <span className="lTwo header_BasketCount">{user? (cart?.length): "0"}</span> 
                 </div>
             </Link> 

            </div>
        </nav>
    )
}

export default Header;
