import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
        <div className="navbar">
            <div className="image">
                <img src="https://png.pngtree.com/png-clipart/20230321/original/pngtree-food-business-logo-png-image_8998844.png" alt="" />
            </div>
            <div className="elements">
                <p> <Link to='/'><button className="custom-btn btn-12"><span>Click!</span><span>HOME</span></button></Link></p>
                <p><Link to='/offers'><button className="custom-btn btn-12"><span>Click!</span><span>OFFERS</span></button></Link></p>
                <p><Link to=''><button className="custom-btn btn-12"><span>Click!</span><span>CART</span></button></Link></p>               
            </div>
        </div>
    );
};

export default Navbar;
