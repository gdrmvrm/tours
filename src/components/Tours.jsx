import React from 'react';

const Tours = ({ tours }) => {
  return (
    <div className="tour">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} />;
      })}
    </div>
  );
};

export default Tours;
