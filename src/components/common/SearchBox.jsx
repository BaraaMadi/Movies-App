import React from 'react';
import Input from './Input';

const SearchBox = ({ serachMovie, onChange }) => (
  <form className="form-group">
    <Input
      value={serachMovie}
      onChange={onChange}
      placeholder="Search..."
      type="search"
    />
  </form>
);
 
export default SearchBox;
