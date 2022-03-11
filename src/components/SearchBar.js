import React, {useState} from "react";

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(term);
  }

  return (
    <form className="ui form" onSubmit={submitHandler}>
      <div className="field">
        <label>Image Search</label>
        <input type="text" name="search" placeholder="" value={term} onChange={(e) => {setTerm(e.target.value)}} />
      </div>
    </form>
  );
}

export default SearchBar;
