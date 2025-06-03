import { Link } from 'react-router-dom'; // Importe o Link
import Navbar from './Navbar';
import {
  Button
} from '@mui/material';

const Header = () => {

  return (
    <header>
      <div className="flex justify-between bg-primary p-4 items-center">
        <div className="ml-4 flex gap-4 w-full">
          <Link to="/">
            <img
              src="../../public/img/ficai-logo.png"
              alt="Ficaí Logo"
              className="h-20 cursor-pointer p-0"
            />
          </Link>
          <Navbar />
        </div>
        
        <div className="flex items-center space-x-16">
          <ul className="flex space-x-4">
            <li>
              <Link to="/login"> 
                <Button variant='contained' sx={{ backgroundColor:'#dc7633'}}>Entrar</Button>
              </Link>
            </li>
            <li>
              <Link to="/cadastro"> 
                <Button variant='contained' sx={{ backgroundColor: '#000' }}>Cadastrar</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;