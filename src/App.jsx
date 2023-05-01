import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import bg from './assets/wbg.jpg'

function App() {
  

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bg})`,
        
      }}
    >
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
