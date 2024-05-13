import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://jyloglvpdokiqgpjxnoi.supabase.co',
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [])

  async function getTodos() {
    const { data } = await supabase.from('todos').select()
    setTodos(data)
  }

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <h1 className='text-2xl font-semibold'>Todo List</h1>
          <ul className='mt-6'>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className='mb-4 p-4 bg-gray-100 rounded-lg shadow'>
                <h2 className='text-xl font-bold'>{todo.title}</h2>
                <p className='mt-2 text-gray-600'>{todo.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
