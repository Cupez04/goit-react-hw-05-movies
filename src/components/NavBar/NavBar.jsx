import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import styled from "styled-components";
import  PropTypes  from "prop-types";
import { Suspense } from "react";

const StyledLink = styled(NavLink) `
    color: white;
    &.active {
        color: black;
        scale: 1.1:
    }
`;

export const NavBar = ({navLinks}) => {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Box>
                    {navLinks.map((item) => (
                        <Button
                        color="inherit"
                        key={item.title}
                        component={StyledLink}
                        to={item.path}
                        >
                            {item.path}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
        </>
    );
};

NavBar.propTypes = {
    navLinks: PropTypes.array,
}