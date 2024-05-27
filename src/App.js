import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Todos } from './components/todos'
import { EditTodo } from './components/editTodo'
import { Header } from './components/header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Todos />} />
        <Route path='/:id' element={<EditTodo />} />
      </Routes>
    </Router>
  )
}

export default App
