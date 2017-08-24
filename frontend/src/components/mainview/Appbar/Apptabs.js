import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import LeagueIcon from 'material-ui-icons/FormatListNumbered';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ForumIcon from 'material-ui-icons/Forum';
import BuildIcon from 'material-ui-icons/Build';
import { Link } from 'react-router-dom';
import Teams from '../Teams';
import MySquad from '../Squads/MySquad';
import Shittalk from '../Shittalk';
import League from '../League';
import PropTypes from 'prop-types';

const TabContainer = props =>
<div style={{ padding: 24 }}>
    {props.children}
</div>;

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class Apptabs extends Component {
    state = {
        index: 0,
    };

    handleChange = (event, index) => {
        this.setState({ index });
    };

    render() {
        return (
            <div>
                <Paper style={{ width: '100%' }}>
                    <Tabs
                        index={this.state.index}
                        onChange={this.handleChange}
                        fullWidth
                        indicatorColor="accent"
                        textColor="accent"
                        centered
                    >
                        <Tab icon={<LeagueIcon />} label="LEAGUE" />
                        <Tab icon={<FavoriteIcon />} label="MY SQUAD"/>
                        <Tab icon={<ForumIcon />} label="SHIT TALK" />
                        <Tab icon={<BuildIcon />} label="TESTING" />
                    </Tabs>
                </Paper>
                {this.state.index === 0 &&
                    <TabContainer>
                        <League />
                    </TabContainer>}
                {this.state.index === 1 &&
                    <TabContainer>
                        <MySquad /> 
                    </TabContainer>}
                {this.state.index === 2 &&
                    <TabContainer>
                        <Shittalk />
                    </TabContainer>}
                {this.state.index === 3 &&
                    <TabContainer>
                        {/* <Teams /> */}
                        
                    </TabContainer>}
            </div>
        );
    }
}

export default Apptabs;