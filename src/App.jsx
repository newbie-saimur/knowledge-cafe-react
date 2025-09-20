import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [timeSpent, setTimeSpent] = useState({time:0, read:[]});

  const handleBookmark = (title) => {
    if(bookmarks.indexOf(title) == -1) {
      setBookmarks([...bookmarks, title]);
      toast.success("Blog is added to the Bookmark!")
    }
    else {
      toast.error("You have already bookmarked this blog!")
    }
  }

  const handleMarkAsRead = (reading_time, title) => {
    if(!timeSpent.read.find(item => item === title)) { 
      setTimeSpent({
        time: timeSpent.time + reading_time,
        read: [...timeSpent.read, title]
      });
      toast.success("Successfully read this blog!")
    }
    else {
      toast.error("You have already read this blog!")
    }
  }

  const handleMarkAsUnread = (reading_time, title) => {
    if(timeSpent.read.find(item => item === title)) { 
      setTimeSpent({
        time: timeSpent.time - reading_time,
        read: timeSpent.read.filter(item => item !== title)
      });
      toast.success("Marked as unread!")
    }
    else {
      toast.error("You have not read this blog yet!")
    }
  }

  return (
    <>
      <Header />
      <div className='flex gap-6'>
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead} handleMarkAsUnread={handleMarkAsUnread} />
        <Bookmarks bookmarks={bookmarks} timeSpent={timeSpent} />
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
