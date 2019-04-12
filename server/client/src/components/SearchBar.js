import React, {Component} from 'react';
import { Form, Input, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import * as actions from "../actions"

class SearchBar extends Component {
  renderField(field){
    return (
      <Input type="text" className="mr-3" placeholder="Search College Name" {...field.input}></Input>
    )
  }

  onSubmit(values){
    this.props.fetchColleges(values)
    this.props.change('collegeName', null)
  }


  render(){
    const { handleSubmit } = this.props;
    return (
      <Form inline onSubmit={handleSubmit(this.onSubmit.bind(this))} >
        <Field 
          name="collegeName"
          component={this.renderField}
        />
        <Button type="submit" color="success" outline>Search</Button>
      </Form>
    )
  }
}

function validate(values){
  const errors = {}

  if(!values.college_name_url){
    errors.topic = "Search a college"
  }

  return errors;
}


export default reduxForm({
  validate,
  form: 'SearchBar'
})(connect(null, actions)(SearchBar));
