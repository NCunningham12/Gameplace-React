import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  DropdownItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { BrowserRouter, Link } from "react-router-dom";
import gameplaceLogo from "../app/assets/img/gameplaceLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar
        dark
        color="secondary"
        sticky="top"
        expand="md"
        className="navbar-nav"
      >
        <NavbarBrand className="ms-5" href="/">
          <img
            src={gameplaceLogo}
            alt="GamePlace Logo"
            className="float-start"
            height={40}
          />
        </NavbarBrand>

        <NavbarToggler
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="flex-nav" navbar>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a" caret>
                Store
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  Games
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a" caret>
                About
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  Placeholder
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a" caret>
                Support
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  PlaceHolder
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle className="nav-link" tag="a" caret>
                Sign-In
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag="a" href="/blah" active>
                  Placeholder
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </BrowserRouter>
  );
};

export default Header;
