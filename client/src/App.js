import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NavegacionLibroAsistencias from './components/NavegacionLibroAsistencias';
import Home from './views/Home';
import NuevoTrabajador from './views/NuevoTrabajador';
import NuevoDia from './views/NuevoDia';
import LibroDeAsistencia from './views/LibroDeAsistencia';
import TrabajadoresCentral from './views/TrabajadoresCentral';
import Licencias from './views/Licencias';
import RegistroEntrada from './views/RegistroEntrada';
import RegistroSalida from './views/RegistroSalida';
import RegistroAusentes from './views/RegistroAusentes';
import RegistroYear from './views/RegistroYear';
import EditarTrabajador from './views/EditarTrabajador';
import Informe from './views/Informe';


function App() {
  return (
    <div className="App flex font-poppins">
        <Navbar/>
        <NavegacionLibroAsistencias>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='trabajadores' element={<TrabajadoresCentral/>}/>
                <Route path='nuevo-trabajador' element={<NuevoTrabajador/>}/> 
                <Route path='licencia/:rut' element={<Licencias/>}/>
                <Route path='nuevo-dia' element={<NuevoDia/>}/>
                <Route path='libro-de-asistencias/:date' element={<LibroDeAsistencia/>}/>
                <Route path='registro-entrada/:date' element={<RegistroEntrada/>}/>
                <Route path='registro-salida/:date' element={<RegistroSalida/>}/>
                <Route path='registro-ausentes/:date' element={<RegistroAusentes/>}/>
                <Route path='registro-year/:year'element={<RegistroYear/>} />
                <Route path='editar-trabajador/:rut' element={<EditarTrabajador/>}/>
                <Route path='informe/:month' element={<Informe />}/>
            </Routes>
        </NavegacionLibroAsistencias>
    </div>
  );
}

export default App;
