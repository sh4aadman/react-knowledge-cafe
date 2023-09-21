import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import Timespent from './components/TimeSpent/Timespent'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkasRead = (id, time) => {
    setReadingTime(readingTime + time)

    const reaminingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(reaminingBookmarks)
  }

  return (
    <>
      <Header></Header>

      <main className='container mx-auto flex gap-6 mt-8'>

        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkasRead={handleMarkasRead}></Blogs>

        <section className='w-1/3'>

          <Timespent readingTime={readingTime}></Timespent>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>

        </section>

      </main>

    </>
  )
}

export default App
