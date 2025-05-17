import {  } from 'react'
import Navbar from '/projetos/projeto-ficai/src/components/Navbar'


const Header = () => {

  return (
    <>
      <header>
        <div className='flex justify-between bg-(color:--color-primary) p-4'>
            <div className='ml-4 mt-3'>
                <a href="/"><img src="/src/img/ficaiicon.png" alt=""  className='h-10 cursor-pointer'/></a>
            </div>

            <div className='flex space-x-4 gap-40'>
              <div>
                <Navbar />
              </div>
                <ul className='flex space-x-4 mt-3'>
                    <li className='rounded-md'><a href="/Login" className='border-gray-400'><button className='text-white bg-(--color-secondary) rounded-md p-2 cursor-pointer outline-1 hover:bg-[#c87548]'>Entrar</button></a></li>
                    <li className='rounded-md'><a href="/Login" className='border-gray-400'><button className='text-white bg-black rounded-md p-2 cursor-pointer hover:bg-gray-900'>Cadastrar</button></a></li>
                </ul>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header