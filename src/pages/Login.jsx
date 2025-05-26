import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { 
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton
} from '@mui/material';
import { Lock as LockIcon, Visibility, VisibilityOff } from '@mui/icons-material';

const colorPalette = {
  main: '#A04821',
  dark: '#803618',
  light: '#BF6A4A',
  contrast: '#F5E6D8',
  text: '#3E2723',
  alphaMain: (opacity) => `rgba(160, 72, 33, ${opacity})`,
  alphaDark: (opacity) => `rgba(128, 54, 24, ${opacity})`
};

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Preencha todos os campos');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Email inválido');
      return;
    }

    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/dashboard');
    } catch {
      setError('Credenciais inválidas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: colorPalette.contrast,
          border: `1px solid ${colorPalette.light}`
        }}
      >
        <LockIcon sx={{ 
          fontSize: 50, 
          color: colorPalette.main,
          mb: 2,
          backgroundColor: colorPalette.alphaMain(0.2),
          p: 1.5,
          borderRadius: '50%',
          border: `2px solid ${colorPalette.main}`
        }} />
        
        <Typography 
          component="h1" 
          variant="h5" 
          sx={{ 
            color: colorPalette.text,
            fontWeight: 'bold',
            mb: 1
          }}
        >
          Acesse sua conta
        </Typography>
        
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            mt: 2, 
            width: '100%',
            '& .MuiTextField-root': { mb: 2 }
          }}
        >
          {error && (
            <Alert severity="error" sx={{ 
              mb: 3,
              backgroundColor: colorPalette.alphaMain(0.15),
              color: colorPalette.text,
              border: `1px solid ${colorPalette.main}`
            }}>
              {error}
            </Alert>
          )}
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: colorPalette.light },
                '&:hover fieldset': { borderColor: colorPalette.main },
                '&.Mui-focused fieldset': { borderColor: colorPalette.dark }
              }
            }}
          />
          
          <TextField
            fullWidth
            name="password"
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: colorPalette.main }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: colorPalette.light },
                '&:hover fieldset': { borderColor: colorPalette.main },
                '&.Mui-focused fieldset': { borderColor: colorPalette.dark }
              }
            }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              mt: 2,
              mb: 2,
              py: 1.5,
              backgroundColor: colorPalette.main,
              '&:hover': { backgroundColor: colorPalette.dark },
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'none',
              boxShadow: `0 2px 4px ${colorPalette.alphaMain(0.4)}`
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
          </Button>
          
          <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
            <Grid item>
              <Link
                component={RouterLink}
                to="/recuperar-senha"
                variant="body2"
                sx={{ 
                  color: colorPalette.main,
                  '&:hover': { 
                    color: colorPalette.dark,
                    textDecoration: 'underline'
                  }
                }}
              >
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/cadastro"
                variant="body2"
                sx={{ 
                  color: colorPalette.text,
                  fontWeight: 'bold',
                  '&:hover': { 
                    color: colorPalette.dark,
                    textDecoration: 'underline'
                  }
                }}
              >
                Criar conta
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;