import React, {useState, Fragment, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'


function App() {

  // Definir el state

  const [presupuesto, setPresupuesto] = useState(0); 
  const [restante, setRestante] = useState(0);
  const [mostrar, setMostrar] = useState(true); // Carga condicional de componentes
  const [gastos, setGastos] = useState([]); // Listado de todos los gastos
  const [gasto, setGuardargasto] = useState({}) 
  const [creargasto, setCrearGasto] = useState(false);


  // UseEfffect que actualiza el restante

  useEffect(() => {
    if(creargasto){

      // Agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);

      // Resta del presupuesto actual

      const presupuestoRestante = restante - gasto.gcantidad;
      setRestante(presupuestoRestante);

        // Resetar a false

        setCrearGasto(false);
    }

  },[gasto, creargasto, gastos, restante])

  const volverBoton = () => {
    setMostrar(true);
    setGastos([]);
  }

  return (

    <Fragment>
      <div className="container">
            <header>
            <h1>Presupuesto semanal</h1>
           
            <div className="contenido-principal contenido" >
              {mostrar ? 
              <Pregunta
                setPresupuesto = {setPresupuesto}
                setRestante = {setRestante}
                setMostrar = {setMostrar}
              />
               
              :
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <Formulario
                        setGuardargasto = {setGuardargasto}
                        setCrearGasto = {setCrearGasto}
                      />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <Listado
                        gastos ={gastos}
                      />

                      <ControlPresupuesto
                        presupuesto = {presupuesto}
                        restante = {restante}
                      />

                      <button
                        className = "btn btn-info w-100 font-weight-bold"
                        onClick = {volverBoton}
                      >Volver</button>
                    </div>
                </div>
              }
          </div>
          </header>
        </div>
    </Fragment>

  );
}

export default App;
