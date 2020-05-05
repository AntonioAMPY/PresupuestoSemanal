import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante, setMostrar}) => {

    
    // Definir el state de la cantidad
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    // Funcion que lee el presupuesto

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value, 10))
    }

    // Subumit para definir el presupuesto

    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar - isNan (Si tambien esta vacio)
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return;
        }

        // Si se pasa la validacion
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrar(false);
    }


    return (

        <Fragment>

            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number" 
                    className="col-12 form-control"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                
                <button
                    type="submit"
                    className="btn btn-info col-12 font-weight-bold mt-3"
                >Definir Presupuesto</button>
            </form>
        </Fragment>


      );
}
 
export default Pregunta;