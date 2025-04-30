// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Article from './components/Article.jsx'
import Nav from './components/Nav.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
   <Header />
   <Nav />
   <Article />
   <Footer />
   </div>
  )
}

export default App
