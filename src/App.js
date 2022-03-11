import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import logo from './logoPixabay.png';

function App() {
  const [images, setImages] = useState([]);
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY

  //api通信
  const onSearchSubmit = async(term) => {
    try{
      const params = {
        key: ApiKey,
        q: term
      }
      const response = await axios.get("https://pixabay.com/api/", {params});
      setImages(response.data.hits);
      if(response.data.total===0) {
        window.alert("No images you want to see");
      }
    }catch{
      window.alert("Fail to connect");
    }
  }

  return (
    <div className="ui container medium" style={{marginTop:'20px'}}>
      <img src={logo} alt="pixabay-logo" className="pixabay-logo" />
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
