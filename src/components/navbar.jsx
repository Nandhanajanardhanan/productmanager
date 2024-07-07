import './Navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar-title">Product Manager</h1>
            <a className="navbar-link" href="/addProduct">Add Product</a>
        </div>
    );
}

export default Navbar;
