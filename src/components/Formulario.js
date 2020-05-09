import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';


const Formulario = ({setGuardargasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [gcantidad, setGcantidad] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        // Validar

        if(gcantidad < 1 || isNaN(gcantidad) || nombre.trim() ===  '') {
            setError(true);
            return;
        }

        // En caso de que pase la validación

        setError(false);

        // Construir el gasto

        const gasto = {
            nombre,
            gcantidad,
            id: shortid.generate()
        }

        // Pasar al componente principal

        setGuardargasto(gasto);
        setCrearGasto(true);

        // Resetear formulario
        setNombre('')
        setGcantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2 className="p-3">Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/> : null }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="w-100 form-control"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange= {e => setNombre(e.target.value)}
                />
            </div>
            
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="w-100 form-control"
                    placeholder="Ej. 300"
                    value={gcantidad}
                    onChange= {e => setGcantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <button
                    type="submit"
                    className="btn btn-info col-12 font-weight-bold mt-3"
            >Agregar Gasto</button>
         </form>
    );
}

Formulario.propTypes = {
    setGuardargasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}


export default Formulario;