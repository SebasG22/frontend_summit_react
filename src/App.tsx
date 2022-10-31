import './App.css'
import { Albums } from './components/Albums'
import { SongForm } from './components/SongForm'
import { Songs } from './components/Songs'

function App() {

  return (
    <div className="App">
      <Songs/>
      <Albums/>
      <SongForm/>
    </div>
  )
}

export default App
