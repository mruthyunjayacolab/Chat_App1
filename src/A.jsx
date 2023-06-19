import React, { useState } from 'react';
import B from './B';

const A = () => {
    const [cendol, setCendol] = useState(2);

    const handleClick = () => {
        setCendol(cendol + 10);
    };

    return (
        <div>
            <h2>Component A</h2>
            <p>Value of cendol: {cendol}</p>
            <B cendol={cendol} handleClick={handleClick} />
        </div>
    );
};

export default A;
