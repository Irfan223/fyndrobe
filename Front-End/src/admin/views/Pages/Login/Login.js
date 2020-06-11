import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from '../../../../axiosConfig';
const InputText = React.lazy(() => import('../../TextFields/InputField'));
class Login extends Component {
  state = {
    adminEmail: '',
    adminPassword: ''
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  login = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.adminEmail,
      password: this.state.adminPassword
    }
    axios.post('adminLogin', data)
      .then(res => {
        if (res.data.code === 1) {
        localStorage.setItem('userStatus', true);
        this.props.history.push('/admin/dashboard');
      } else {
        alert(res.data.message);
      }
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form >
                      <h1 className="text-center">Login</h1>
                      <p className="text-center">Sign In to your account</p>
                      <InputText name="adminEmail" label="Email" onChange={this.onChange} />
                      <InputText name="adminPassword" label="Password" onChange={this.onChange} />
                      <Row className="pt-4">
                        <Col xs="6">
                          <Button color="primary" onClick={this.login}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/admin/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
