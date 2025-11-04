import './App.css'
import Book from './components/Book'
import Navbar from './components/Navbar'

function App() {
  return (<><Navbar />
    <div id='adi'>
      <Book title="Physics" price="600" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGrvivmAtwpuVN7BKchYTp1Ps0WL_ywr2hQ&s"/>
      <Book title="Math" price="600" img="https://img.freepik.com/free-vector/maths-realistic-chalkboard-background_23-2148159115.jpg?semt=ais_hybrid&w=740&q=80"/>
      <Book title="Chemeistry" price="600" img="https://i.ytimg.com/vi/5iTOphGnCtg/maxresdefault.jpg"/>
    </div>
    </>
  )
}

export default App
