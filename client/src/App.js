import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import NavegacionLibroAsistencias from './components/NavegacionLibroAsistencias';
import Home from './views/Home';
import NuevoTrabajador from './views/NuevoTrabajador';
import NuevoDia from './views/NuevoDia';
import LibroDeAsistencia from './views/LibroDeAsistencia.jsx';
import PresenteMes from './views/PresenteMes';
import Hoy from './views/Hoy';
import PresenteA from './views/PresenteA';
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
                <Route path='libro-de-asistencias' element={<LibroDeAsistencia/>}>
                    <Route path=':date' element={<Hoy/>}/>
                    <Route path='year/:year' element={<PresenteA/>}/>
                    <Route path='presente-mes/:id' element={<PresenteMes/>}/>
                </Route>
            </Routes>
        </NavegacionLibroAsistencias>
    </div>
  );
}

export default App;
