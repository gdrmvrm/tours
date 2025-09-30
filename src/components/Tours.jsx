import React from 'react';

const Tours = ({ tours }) => {
  return (
    <div className="tour">
      {tours.map((tour) => {
        return <Tours key={tour.id} {...tour} />;
      })}
    </div>
  );
};

export default Tours;
