import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>

      <main className='container mx-auto flex gap-6 mt-8'>

        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>

        <Bookmarks bookmarks={bookmarks}></Bookmarks>

      </main>

    </>
  )
}

export default App
