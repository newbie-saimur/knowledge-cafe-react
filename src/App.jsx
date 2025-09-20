import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [timeSpent, setTimeSpent] = useState({time:0, read:[]});

  const handleBookmark = (title) => {
    if(bookmarks.indexOf(title) == -1) setBookmarks([...bookmarks, title]);
  }

  const handleMarkAsDone = (reading_time, title) => {
    if(!timeSpent.read.find(item => item === title)) { 
      setTimeSpent({
        time: timeSpent.time + reading_time,
        read: [...timeSpent.read, title]
      });
    }
  }

  return (
    <>
      <Header />
      <div className='flex gap-6'>
        <Blogs handleBookmark={handleBookmark} handleMarkAsDone={handleMarkAsDone} />
        <Bookmarks bookmarks={bookmarks} timeSpent={timeSpent} />
      </div>
    </>
  )
}

export default App
