
import '../css/index.css'
import { Card } from '../components/Card.jsx';

import { useState, useEffect } from 'react';


const ProductoUno = () => {


    const VITE_URL = import.meta.env.VITE_URL

    const [datos, setDatos] = useState({})
   

    useEffect(() => {


        const fetchDatos = async () => {


            try{

                const response = await fetch(`${VITE_URL}/api/v1/productos/67e3c31d3f4444e4e327f496`, {
                    method:'GET',
                    headers: {
                        'Content-Type':'application/json'
                    },

                })

                if(response.ok) {
                    const data = await response.json();
                    setDatos(data);

                } else {
                    throw new Error('No se pudo obtener los datos')
                }


            } catch(e){

                console.error("Ha habido un error :(((")

            }

            fetchDatos()

        }


    },[])


    return ( 

        <>
       <main className="Main">
        <h1>Soy producto 1</h1>
        <Card nombre={datos.nombre} descripcion={datos.descripcion} fabricante={datos.fabricante}/>
        </main>
        </>
     );
}
 
export default ProductoUno;