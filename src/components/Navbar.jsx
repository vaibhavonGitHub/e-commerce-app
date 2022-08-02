import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

import { ReactComponent as CartSVG } from '../images/cart.svg';
import { useCart } from '../lib/cart.context';

const LINKS = [{ link: '/', text: 'Home' }];

const Navbar = () => {
  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <BootstrapNavbar color="success" light className=" mt-1 px-5 border-bottom mb-3">
      <Nav className="mr-auto" navbar>
        {LINKS.map(({ link, text }) => (
          <NavItem key={link} >
            <NavLink to={link} tag={Link} className="text-dark font-weight-bolder">
              {text}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <NavbarText>
        <Link
          to="/checkout"
          className="d-flex align-items-center"
          style={{ textDecoration: 'none' }}
        >
          <CartSVG width={25} />
          <div
            className="circle bg-light text-dark rounded-circle d-flex justify-content-center align-items-center mx-2"
            style={{ width: 30, height: 30 }}
          >
            {cartItemsTotal}
          </div>
          <div>₹{cartPriceTotal}</div>
        </Link>
      </NavbarText>
    </BootstrapNavbar>
  );
};

export default Navbar;
