import { Outlet, Link } from "react-router-dom"; //Outlet is where children from routes will render
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    // it is very useful when we don't want to render a div, and it is necesary beacause react can only render one parent level
    <Fragment>
      <header>
        <Link to={"/"}>
          <CrownLogo />
        </Link>
        <div className="header--links">
          <Link to={"/shop"}>shop</Link>
          {currentUser ? (
            <span onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link to={"/auth"}>SignIn</Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
