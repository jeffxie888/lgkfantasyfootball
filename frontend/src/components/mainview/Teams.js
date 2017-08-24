/*  COMPONENT APPEARS UNDER THE TESTING TAB  */


import React, { Component } from 'react';
import { Grid, Thumbnail, Label, } from 'react-bootstrap';
import { Row, Col } from 'react-grid-system';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import { ToolbarGroup, FlatButton} from 'material-ui';
import LGK from '../../lgklogo.png';
import { createStyleSheet, withStyles } from 'material-ui/styles';


const styleSheet = createStyleSheet(theme => ({
    title: {
        marginTop: '50px',
        marginRight: '35px',
        marginBottom: '35px',
        marginLeft: '0px',
        fontSize: '48px'
    },
    imgsize: {
        width: '253px',
        height: '300px'
    }
}));


class Teams extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }
    render() {


        const classes = this.props.classes;
        return (
            <div>
                <Grid style={{marginTop: '50px'}} >
                    <Row>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys">
                                <h3>
                                    <Label bsStyle="success">1</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                    <Button color="accent" raised>Jeffery for Jeffrey</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys">
                                <h3>
                                    <Label bsStyle="success">2</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                    <Button color="accent" raised>MattyMuchacho</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys">
                                <h3>
                                    <Label bsStyle="success">3</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>Brahsil</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys">
                                <h3>
                                    <Label bsStyle="success">4</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>Andythechamp19</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="success">5</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>Oil Mun</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="success">6</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>King of Keef</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="success">7</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>NVO on your HO</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="success">8</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>Stinkner</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="warning">9</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>Seattle's Rainman</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="warning">10</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>AcogIverson</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="warning">11</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>T1LT0N</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="warning">12</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>DChi4Lyfe</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="warning">13</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>Felix the Cat</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col md={3}>
                            <Thumbnail src={LGK} alt="For the boys" >
                                <h3>
                                    <Label bsStyle="warning">14</Label>
                                    <span>     0-0</span>
                                </h3>
                                <p>
                                <Button color="accent" raised>Drewsalem</Button>&nbsp;
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid> 
            </div>
        );        
    }
}

export default withStyles(styleSheet)(Teams);