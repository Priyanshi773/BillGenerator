import React from 'react'

export const TotalAmount = ({total}) => {
  return (
    <div className="total">
        <h3>TOTAL AMOUNT:
            {Number(total).toFixed(2)};
        </h3>
    </div>
  );
};
