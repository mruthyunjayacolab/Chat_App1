import React from 'react';

const B = ({ cendol, handleClick }) => {
    return (
        <div>
            <h2>Component B</h2>
            <p>Value of cendol from A: {cendol}</p>
            <button onClick={handleClick}>Increment by 10</button>
        </div>
    );
};

export default B;
