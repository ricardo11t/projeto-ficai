import { useContext, useState } from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { CidadesContext } from '../context/CidadesProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cidades } = useContext(CidadesContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-center bg-primary p-4 items-center text-white gap-5">
      <div className=''>
        <Link to={'/'}>
          <ListItemButton
            sx={{
              backgroundColor: '#c87548',
              color: 'white',
              '&:hover': { backgroundColor: '#ffba01' },
              borderRadius: 2,
              border: 1,
              borderColor: 'white',
            }}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
      </div>
      {/* Menu de cidades centralizado */}
      <div className="relative">
        <List component="nav">
          <ListItemButton
            onClick={handleClick}
            sx={{
              backgroundColor: '#c87548',
              color: 'white',
              '&:hover': { backgroundColor: '#ffba01' },
              borderRadius: 2,
              border: 1,
              borderColor: 'white',
            }}
          >
            <ListItemText primary="Cidades" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </List>

        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50,
            mt: 1
          }}
        >
          <Paper
            sx={{
              width: 200,
              borderRadius: 2,
              boxShadow: 3,
              overflow: 'hidden',
            }}
          >
          <List component="div" disablePadding>
            {Object.keys(cidades).map((cidade, index) => (
              <Link key={index} to={`/${cidade}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={cidade} />
                </ListItemButton>
              </Link>
            ))}
          </List>
          </Paper>
        </Collapse>
      </div>
    </div>
  );
};

export default Navbar;
