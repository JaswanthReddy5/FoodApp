import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
        <div className="navbar">
            <div className="image">
                <img src="https://png.pngtree.com/png-clipart/20230321/original/pngtree-food-business-logo-png-image_8998844.png" alt="" />
            </div>
            <div className="elements">
                <p> <Link to='/'>Home</Link></p>
                <p> <Link to='/offers'>offers</Link></p>
                <p>Cart</p>               
            </div>
        </div>
    );
};

export default Navbar;
