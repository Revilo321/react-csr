import { useState } from 'react'
import { Pagination } from './pagination'
import { Link } from 'react-router-dom'

export const TodoList = ({ todos }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const indexOfLastTodo = currentPage * itemsPerPage
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo)

  return (
    <div className='container mx-auto px-4'>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-2xl font-bold text-gray-700'>Todos</h1>
        <ul className='space-y-4 mt-4'>
          {currentTodos.map((todo) => (
            <li key={todo.id} className='bg-gray-100 p-4 rounded-lg shadow'>
              <h3 className='font-semibold text-lg'>{todo.title}</h3>
              <p className='text-gray-600'>{todo.description}</p>
              <Link to={`/${todo.id}`}>Edit</Link>
            </li>
          ))}
        </ul>
        <Pagination
          totalItems={todos.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
