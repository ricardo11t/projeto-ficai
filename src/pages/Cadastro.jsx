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
import { PersonAdd as PersonAddIcon, Visibility, VisibilityOff } from '@mui/icons-material';

const colorPalette = {
  main: '#A04821',
  dark: '#803618',
  light: '#BF6A4A',
  contrast: '#F5E6D8',
  text: '#3E2723',
  alphaMain: (opacity) => `rgba(160, 72, 33, ${opacity})`
};

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const validations = [
      [!formData.nome.trim(), 'Nome completo é obrigatório'],
      [!formData.email.trim(), 'Email é obrigatório'],
      [!formData.password, 'Senha é obrigatória'],
      [!formData.confirmPassword, 'Confirme a senha'],
      [formData.password !== formData.confirmPassword, 'Senhas não coincidem'],
      [formData.password.length < 6, 'Senha deve ter 6+ caracteres'],
      [!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email), 'Email inválido']
    ];

    for (const [condition, message] of validations) {
      if (condition) return message;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.2 ? resolve() : reject(new Error('Erro de conexão'));
        }, 1500);
      });
      
      navigate('/login', {
        state: { registrationSuccess: true }
      });
    } catch {
      setError('Erro ao cadastrar. Tente novamente.');
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
        <PersonAddIcon sx={{
          fontSize: 50,
          color: colorPalette.main,
          mb: 2,
          backgroundColor: colorPalette.alphaMain(0.1),
          p: 1.5,
          borderRadius: '50%',
          border: `2px solid ${colorPalette.main}`
        }} />

        <Typography 
          component="h1" 
          variant="h5" 
          sx={{ 
            fontWeight: 'bold', 
            color: colorPalette.text,
            mb: 1
          }}
        >
          Criar Nova Conta
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
            label="Nome Completo"
            name="nome"
            value={formData.nome}
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
            label="Email"
            name="email"
            type="email"
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
            label="Senha"
            name="password"
            type={showPassword ? 'text' : 'password'}
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

          <TextField
            fullWidth
            label="Confirme a Senha"
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    sx={{ color: colorPalette.main }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
              py: 1.5,
              backgroundColor: colorPalette.main,
              '&:hover': { backgroundColor: colorPalette.dark },
              color: 'white',
              fontWeight: 'bold',
              boxShadow: `0 2px 4px ${colorPalette.alphaMain(0.4)}`
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Cadastrar'}
          </Button>

          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              sx={{ 
                color: colorPalette.main,
                fontWeight: 'bold',
                '&:hover': { 
                  color: colorPalette.dark,
                  textDecoration: 'underline'
                }
              }}
            >
              Já tem conta? Faça login
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Cadastro;