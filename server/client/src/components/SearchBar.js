import React, {Component} from 'react';
import { Form, Input, Button } from 'reactstrap';

const SearchBar = () => {
  return (
    <Form inline>
      <Input type="search" className="mr-3" placeholder="Search College Name"></Input>
      <Button type="submit" color="success" outline>Search</Button>
    </Form>
  )
}

export default SearchBar;