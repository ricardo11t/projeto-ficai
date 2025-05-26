import { useContext } from 'react';
import {
  Autocomplete,
  Button,
  TextField,
} from '@mui/material'; '@mui/icons-material';
import { CidadesContext } from '../context/CidadesProvider';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { cidadesPesquisar } = useContext(CidadesContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center bg-primary p-4 items-center text-white gap-5 w-full">
      <div>
        <Link to={'/'}>
          <Button variant='contained' sx={{ backgroundColor: '#dc7633' }}>Home</Button>
        </Link>
      </div>
      <div className='flex-1 min-w-[200px]'>
        <Autocomplete
        className='text-white'
          options={cidadesPesquisar}
          size='small'
          onChange={(_, newValue) => {
            if (newValue) {
              navigate(`/${newValue.label}`);
            }
          }}
          sx={{
            width: '100%',
            backgroundColor:'#fff',
            borderRadius:1,
            boxShadow:1,
            input: {color:'black'},
            label: {color: 'black'}
          }}
          renderInput={(params) => <TextField {...params} label="Pesquisar cidade" variant="outlined" />}
        />
      </div>
    </div>
  );
};

export default Navbar;
