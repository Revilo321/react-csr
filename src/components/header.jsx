import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='bg-gray-200  py-4'>
      <div className='container mx-auto flex justify-between items-center px-6'>
        <h1 className='text-lg font-bold'>
          <Link to='/'>Welcome</Link>
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link to='/' className='hover:text-gray-300'>
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
