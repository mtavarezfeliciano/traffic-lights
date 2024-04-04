import React, { useState } from "react";

export const FunctionalTrafficLight: React.FC = () => {

  const [status, setStatus] = useState('red');
  const checkStatus = (color: string) => (status === color ? color: 'black');
  const nextColor = () => {
    // setStatus(status === 'red' ? 'yellow' : status === 'yellow' ? 'green' : 'red');
    if (status === 'red') {setStatus('green')};
    if (status === 'green') {setStatus('yellow')};
    if (status === 'yellow') {setStatus('red')};
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${checkStatus("red")}`}></div>
        <div className={`circle ${checkStatus("yellow")}`}></div>
        <div className={`circle ${checkStatus("green")}`}></div>
      </div>
      <button className="next-state-button" onClick={nextColor}>Next State</button>
    </div>
  );
};



