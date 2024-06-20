import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Todos } from './components/todos'
import { EditTodo } from './components/editTodo'
import { Header } from './components/header'
import { Test } from './components/test'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/:id' element={<EditTodo />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App
