import React from 'react';
import { Route } from 'react-router-dom';
import HomeNav from './HomeNav';
import DayPosts from './DayPosts';
import DayForm from './DayForm';
import GigaPetList from './GigaPetList';

class HomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            
                <GigaPetList />
            
        )
    }
}

export default HomeView;
{/* <Route exact path='/gigapets' Component={GigaPetList} /> */}