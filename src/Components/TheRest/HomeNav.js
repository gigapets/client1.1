

import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DayPosts from './DayPosts';
import DayForm from './DayForm';
import { NavLink, Route } from "react-router-dom";

const Nav = styled.nav`
    padding: 2rem 0 2rem 0;
    display: flex;
    justify-content: flex-end;
    border-bottom: 3px solid black;
    background: white;
    min-width: 100%;

    @media (max-width: 50rem){
        flex-direction: column;
        padding: 0;
        background:rgb(54, 53, 53);
    
    }
`;
const StyledLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: darkslateblue;
    padding-right: 5rem;
    transition: 500ms ease;

    :hover {
        transform: scale(1.02, 1.02);
    }

    @media (max-width: 50rem){
        flex-direction: column;
        padding: 0;
        padding: 1.5rem;
        border-bottom: 1px solid white;
        color: white;
    }
`;

class HomeNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Nav>
                    <StyledLink to exact="/" Component={DayPosts}>GigaPet History</StyledLink>
                    <StyledLink to exact="/DayForm" Component={DayForm}> Record a Day </StyledLink>
                </Nav>
            </div>

        );
    }
}

export default HomeNav;