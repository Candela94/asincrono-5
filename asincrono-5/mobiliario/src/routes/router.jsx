

import {createBrowserRouter} from 'react-router'
import ProductoDos from '../pages/ProductoDos.jsx'
import ProductoUno from '../pages/ProductoUno.jsx'
import App from '../App.jsx'


const router = createBrowserRouter([{


    path:'/',
    element: <App />,
    children: [
        {
            index: true, //ruta por defecto
            element: <ProductoUno /> 

        },
        {
            path:"/producto-1",
            element: <ProductoUno />
        },

        {
            path:"/producto-2",
            element: <ProductoDos />
        },
        

    ]


}])


export default router