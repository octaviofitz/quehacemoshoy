/* react */
import React  from 'react';
import {Routes, BrowserRouter, Route} from 'react-router-dom';

/* estilos */
import '../AppRouter/appRouter.css'

/* componentes */
import NavBar from '../../NavBar/NavBar';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import HomePage from '../../../Pages/Home/HomePage';
import Nosotros from '../../../Pages/Nosotros/Nosotros';
import HoyContainer from '../../Eventos/Hoy/HoyContainer/HoyContainer';
import SemanaContainer from '../../Eventos/Semana/SemanaContainer/SemanaContainer';
import MesContainer from '../../Eventos/Mes/MesContainer/MesContainer';
import TodosContainer from '../../Eventos/Todos/TodosContainer/TodosContainer';
import Administrador from '../../Administrador/Login/Administrador';
import DetalleEventoContainer from '../../Eventos/DetalleEvento/DetalleEventoContainer';

function AppRouter() {
    return (
        <div>
            
            <BrowserRouter>

            <NavBar />
            <Banner />   
            
             <div className='body'>
           
            <Routes>

                <Route path='/' element={<HomePage />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/hoy' element={<HoyContainer />} />
                <Route path='/semana' element={<SemanaContainer />} />
                <Route path='/mes' element={<MesContainer />} />
                <Route path='/todos' element={<TodosContainer />} />
                <Route path='/evento/:id' element={<DetalleEventoContainer />} />
{/*                 <Route path='/administrador' element={<Administrador />} />
 */}               
                </Routes>

            </div>
            <Footer />
            </BrowserRouter>

        </div>
    );
};

export default AppRouter;