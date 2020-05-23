import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import routes from "./routes";

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>
                    <Link to="/">Dogs App</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {routes
                            .filter((route) => route.path !== "/")
                            .map((route) => (
                                <NavItem>
                                    <NavLink>
                                        <Link to={route.path}>
                                            {route.title}
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
