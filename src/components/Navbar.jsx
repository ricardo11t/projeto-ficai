import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-(color:--color-primary) p-4'>
        <div className='ml-4'>
            <a href="/"><img src="/src/img/ficaiicon.png" alt=""  className='h-10 cursor-pointer'/></a>
        </div>
        <div>
            <nav className='mt-2'>
                <ul className='flex justify-center space-x-4 gap-1'>
                    <li><a href="" className='text-white hover:text-black'>Fortaleza</a></li>
                    <li><a href="" className='text-white hover:text-black'>Guaramiranga</a></li>
                    <li><a href="" className='text-white hover:text-black'>Aracati</a></li>
                    <li><a href="" className='text-white hover:text-black'>Jicoca</a></li>
                    <li><a href="" className='text-white hover:text-black'>Aquiraz</a></li>
                </ul>
            </nav>
        </div>
        <div>
            <ul className='flex space-x-4'>
                <li className='rounded-md'><a href="/Login" className='border-gray-400'><button className='text-white bg-orange-300 rounded-md p-2 cursor-pointer outline-1 hover:bg-amber-400 '>Entrar</button></a></li>
                <li className='p-2 bg-black rounded-md'><a href="/Cadastrar" className='text-white'>Cadastrar</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar