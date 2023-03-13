import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NavegacionLibroAsistencias from './components/NavegacionLibroAsistencias';
import Home from './views/Home';
import NuevoTrabajador from './views/NuevoTrabajador';
import NuevoDia from './views/NuevoDia';
import LibroDeAsistencia from './views/LibroDeAsistencia.jsx';
import PresenteMes from './views/PresenteMes';


function App() {
  return (
    <div className="App flex font-poppins">
        <Navbar/>
        <NavegacionLibroAsistencias>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/nuevo-trabajador' element={<NuevoTrabajador/>}/>
                <Route path='/nuevo-dia' element={<NuevoDia/>}/>
                <Route path='/libro-de-asistencias' element={<LibroDeAsistencia/>}/>
                <Route path='/libro-de-asistencias/presente-mes/:id' element={<PresenteMes/>}/>
            </Routes>
        </NavegacionLibroAsistencias>
    </div>
  );
}

export default App;
