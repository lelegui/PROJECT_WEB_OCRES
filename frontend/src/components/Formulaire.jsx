import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';


class Forms extends Component {
    state = {
        city: ''
    }

    render() {
        return (
            <div>
                <h3 className="py-3">Presidential poll</h3>
                <Form>
                    <FormGroup row>
                        <Label for="formCity" sm={12}>City</Label>
                        <Col xs={12} sm={10} md={8} lg={6}>
                        <Input
                            type="text"
                            name="city"
                            id="formCity"
                            placeholder="City"
                            value={this.state.city}
                            onChange={e => this.setState({ city: e.target.value })} />
                        </Col>
                        </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={12}>Your Age</Label>
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <Input type="select" name="select" id="exampleSelect"  onChange={this.onLevelSelectChange}>
                                <option value="1" >18-25</option>
                                <option value="2" >26-45</option>
                                <option value="3" >46-65</option>
                                <option value="4" >66 et plus</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={12}>Which President</Label>
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <Input type="select" name="select" id="exampleSelect"  onChange={this.onLevelSelectChange}>
                                <option value="1" >President 1</option>
                                <option value="2" >President 2</option>
                                <option value="3" >President 3</option>
                                <option value="4" >President 4</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <div><br></br></div>
                    <Button>Submit</Button>
                    <div><br></br><br></br></div>
                </Form>
            </div>
        );
    }
}

export default Forms;