

import '../css/card.css'

export const Card = ({fabricante, nombre, descripcion}) => {
    return ( 

        <>

        <div className="Card">
        <div className="Texto">

        <div className="Fab-nombre">
            <p className="Fab">{fabricante} Fabricante</p>
            <p className="Nombre">{nombre} Nombre</p>
        </div>

        <p className="Descripcion">{descripcion} Descripcion</p>

        <button className="Button">Product Details</button>

        </div>

        <img className='Imagen'src="." alt="img" />
        </div>
        
        </>
     );
}