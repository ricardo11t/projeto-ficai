import React, { useContext } from 'react'
import { CidadesContext } from '../context/CidadesProvider'

const Footer = () => {
    const { cidades } = useContext(CidadesContext);

  return (
    <footer style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className='container p-6 mx-auto text-white'>
        <div className='grid grid-cols-3'>
          <div className='w-full'>
            <div className='px-6'>
              <a href="/">
                <img className='w-auto h-20' src="../../public/img/ficai-logo.png" alt="" />
              </a>
              <div>
                <p>
                  Seu guia completo para conhecer as belezas do estado do Ceará, no nordeste brasileiro.
                </p>
              </div>
            </div>
          </div>
        <div className=''>
        <div className='flex flex-col'>
            <h5 className='text-lg font-semibold'>Cidades</h5>
            <ul>
            {Object.keys(cidades).map((cidade, index) => (
                <li key={index}>
                    <a className='hover:text-black' href={cidade}>{cidade}</a>
                </li>
            ))}
            </ul>
        </div>
        </div>
          <div className=''>
            <div className='flex flex-col'>
                <h5 className='text-lg font-semibold'>
                    Links Úteis
                </h5>
                <ul>
                    <li ><a className='hover:text-black' href="/Entrar">Entrar</a></li>
                    <li ><a className='hover:text-black' href="/Cadastrar">Cadastrar</a></li>
                    <li ><a className='hover:text-black' href="/">Sobre Nós</a></li>
                    <li ><a className='hover:text-black' href="/">Contato</a></li>
                </ul>
            </div>
          </div>
        </div>
          <hr className='h-px my-6 bg-white'/>
          <div className='text-center'>
                <p>
                    © 2025 Ficaí. Todos os direitos reservados.
                </p>
          </div>
      </div>
    </footer>
  )
}

export default Footer