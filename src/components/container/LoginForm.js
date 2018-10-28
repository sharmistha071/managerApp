import React, { Component }  from 'react';
import { Connect } from 'react-redux';
import { emailChanged } from '../../actions';
import { Card, CardSection, Input, Button } from '../common';

class LoginForm extends Component {
  onEmailChange(text){
    console.log(text);
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
          />
        </CardSection>
        <CardSection>
          <Button btnText="Log in"/>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
