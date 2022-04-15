import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  width: calc(100vw - 10px);
  height: 50px;
  padding: 5px;

  background-color: #fff;
`;

const StyledNavLink = styled(NavLink)`
  padding: 10px;
  font-size: 25px;
  color: #000;
  text-decoration: none;
`;

/**
 * To be able to navigate around the website we have these NavLink's (Notice
 * that they are "styled" NavLink's that are now named StyledNavLink)
 * <br>
 * Whenever you add a NavLink here make sure to add a corresponding Route in
 * the Content Component
 * <br>
 * You can add as many Link as you would like here to allow for better navigation
 * <br>
 * Below we have two Links:
 * <li>Home - A link that will change the url of the page to "/"
 * <li>Login - A link that will change the url of the page to "/login"
 */
const NavBar = () => {
    return (
        <StyledNav>
            <StyledNavLink to="/">
                Home
            </StyledNavLink>
            <StyledNavLink to="/login">
                Login
            </StyledNavLink>
        </StyledNav>
    );
}

export default NavBar;
