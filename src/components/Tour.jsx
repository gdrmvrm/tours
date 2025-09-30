import React from 'react';

const Tour = ({ image, info, name, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <h5 className="tour-price">{price}</h5>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Tour;
