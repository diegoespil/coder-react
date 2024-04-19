import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Store</h3>
            <div>
                <button>Remeras</button>
                <button>Buzos</button>
                <button>Pantalones</button>
            </div>
            <CartWidget />
        </nav>

    )
}

export default NavBar;