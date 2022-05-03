import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import "./Signup.css";
class Signup extends Component {
  render() {
    return (
        <Container className="Login">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Card className="login-form-container">
                <Form>

                  <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      Username
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="text" placeholder="Enter Username" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                      Password
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" placeholder="Password" className="password-box" onChange={this.passwordChangeHandler} />
                    </Col>
                  </Form.Group>
                  <button>Signup</button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Signup;
