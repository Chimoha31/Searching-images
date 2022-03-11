import React from "react";

function ImageList(props) {
  const images = props.images.map((image) => {
    console.log(image);
    return (
      <a
        href={image.pageURL}
        key={image.id}
        target="_blank"
        rel="noopener noreferrer"
        className="ui midium image"
      >
        <img src={image.webformatURL} alt={image.tags} />
      </a>
    );
  });

  return (
    <div>
      <p>{images}</p>
    </div>
  );
}

export default ImageList;