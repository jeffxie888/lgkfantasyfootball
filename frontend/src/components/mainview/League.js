import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui/Grid';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import Button from 'material-ui/Button';
import InfoIcon from 'material-ui-icons/Info';
import tileData from './Tiledata';
import Squad from './Squads/Squad';
import { Container, Row, Col } from 'react-grid-system';
import { selectUser } from './actions';

const styleSheet = createStyleSheet(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: '900px',
    
  }
}));


class League extends Component {
  render() {
    const classes = this.props.classes;
    let { selectedUser, usersList } = this.props;
    if (selectedUser == null) {
      selectedUser = usersList[0];
    }

    return (
      <div className={classes.container}>
        <Container>
          <Row>
            <Col md={4}> 
              <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" rows={3} cols={2} style={{ height: 'auto' }}>
                  <Subheader>LGK League Standings</Subheader>
                </GridListTile>
                {usersList.map(tile =>
                  <GridListTile key={tile.id}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      subtitle={
                        <span>
                          Record: {tile.record}
                        </span>
                      }
                      actionIcon={
                        <Button fab color="primary" onClick={(event) => {
                            this.props.dispatch(selectUser(tile));
                          }}>
                          {/* <InfoIcon color="rgba(255, 255, 255, 0.54)" /> */}
                          {tile.id}
                        </Button>
                      }
                    />
                  </GridListTile>
                )}
              </GridList>        
            </Col>
            <Col md={8}>
                <b>{selectedUser.title}</b>
                <Squad />
            </Col>
          </Row>
        </Container>
      </div>
    );    
  }

}

League.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {...state.main};
}

let LeagueStyle = withStyles(styleSheet)(League);
export default connect(mapStateToProps, null, null, {withRef: true})(LeagueStyle);