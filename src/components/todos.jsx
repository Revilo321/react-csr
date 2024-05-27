import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { TodoList } from './todoList'

const supabase = createClient(
  'https://jyloglvpdokiqgpjxnoi.supabase.co',
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

export const Todos = () => {
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
      <div className='relative py-3'>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}
