import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { EditForm } from './editTodoForm'
import { useParams } from 'react-router-dom'

const supabase = createClient(
  'https://jyloglvpdokiqgpjxnoi.supabase.co',
  process.env.REACT_APP_SUPABASE_ANON_KEY
)
export const EditTodo = () => {
  const { id } = useParams()
  const [todo, setTodo] = useState()

  async function getTodos() {
    const { data: todo, error } = await supabase
      .from('todos')
      .select('*')
      .eq('id', id)
      .single()
    setTodo(todo)
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      {todo && <EditForm todo={todo} />}
    </div>
  )
}
