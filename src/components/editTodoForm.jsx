import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

const supabase = createClient(
  'https://jyloglvpdokiqgpjxnoi.supabase.co',
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

export const EditForm = ({ todo }) => {
  const [title, setTitle] = useState(todo.title)
  const [description, setDescription] = useState(todo.description)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { data, error } = await supabase
      .from('todos')
      .update({ title, description })
      .match({ id: todo.id })

    if (error) {
      console.error('Error updating todo:', error)
    } else {
      console.log('Updated todo')
    }
  }

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      <form
        className='w-full max-w-lg bg-white p-8 shadow-md rounded-lg'
        onSubmit={handleSubmit}>
        <h2 className='text-2xl font-semibold text-gray-700 mb-6'>Edit Todo</h2>

        <div className='mb-4'>
          <label
            htmlFor='title'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Title
          </label>
          <input
            name='title'
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='description'
            className='block text-gray-700 text-sm font-bold mb-2'>
            Description
          </label>
          <textarea
            name='description'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            rows={4}></textarea>
        </div>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Update Todo
        </button>
      </form>
    </div>
  )
}
