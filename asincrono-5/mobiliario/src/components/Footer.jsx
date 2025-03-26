
import { NavLink } from 'react-router';
import '../css/footer.css'



export const Footer = () => {
    return (

        <>

            <footer className="Footer">
                <nav className="Footer-nav">
                    <ul className="Footer-ul">
                        <NavLink to='/producto-1'>
                            <li className="Footer-li">
                                <p className="Footer-p1">01</p>
                                <p className="Footer-p">Shell Dining Chair</p>
                            </li>


                        </NavLink>

                        
                        <NavLink to='/producto-2'>
                            <li className="Footer-li">
                                <p className="Footer-p1">02</p>
                                <p className="Footer-p">Dunes Anthrazite black</p>
                            </li>
                        </NavLink>

                    </ul>
                </nav>
            </footer>

        </>
    );
}