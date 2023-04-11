import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NavegacionLibroAsistencias from './components/NavegacionLibroAsistencias';
import Home from './views/Home';
import NuevoTrabajador from './views/NuevoTrabajador';
import NuevoDia from './views/NuevoDia';
import LibroDeAsistencia from './views/LibroDeAsistencia.jsx';
import TrabajadoresCentral from './views/TrabajadoresCentral';
import Licencias from './views/Licencias';


function App() {
  return (
    <div className="App flex font-poppins">
        <Navbar/>
        <NavegacionLibroAsistencias>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='trabajadores' element={<TrabajadoresCentral/>}/>
                <Route path='nuevo-trabajador' element={<NuevoTrabajador/>}/> 
                <Route path='licencia' element={<Licencias/>}/>
                <Route path='nuevo-dia' element={<NuevoDia/>}/>
                <Route path='libro-de-asistencias' element={<LibroDeAsistencia/>}/>
            </Routes>
        </NavegacionLibroAsistencias>
    </div>
  );
}

export default App;
