

import '../css/footer.css'
import { CgMenuLeftAlt } from "react-icons/cg";





export const Header = () => {
    return ( 

        <>
        
        <header className="Header">
         <nav className="Header-nav">
          <ul className="Header-ul">
            <li className='Header-li logo'>mater</li>
            <li className='Header-li'><CgMenuLeftAlt className='Header-icon'/></li>
        </ul>
       </nav>
        </header>
        
        </>
     );
}