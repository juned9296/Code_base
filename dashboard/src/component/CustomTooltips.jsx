import React from 'react';

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export const CustomLineTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-line-tooltip">
        <p>{`Month: ${payload[0].name}`}</p>
        <p>{`Earnings: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
