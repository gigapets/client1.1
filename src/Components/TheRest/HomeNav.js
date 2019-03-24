

import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DayPosts from './DayPosts';
import DayForm from './DayForm';
import { NavLink, Route } from "react-router-dom";


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