import React from 'react';
import { useRoutes } from 'react-router-dom';
import HeaderNav from './components/headerNav/headerNav';
import routesTable from './routes/routesTable';


function App() {
    const element = useRoutes(routesTable);
    return (
        <div className='container'>
            <HeaderNav />
            {element}
        </div>
        
     );
}

export default App;