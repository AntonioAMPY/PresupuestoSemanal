import React from 'react';

const Gasto = ({gasto}) => ( 
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">${gasto.gcantidad}</span>
        </p>
    </li>
 );

 
export default Gasto;