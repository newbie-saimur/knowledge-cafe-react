import { useEffect, useState } from "react";
import Blog from "../Blog/BLog";

const Blogs = ({ handleBookmark, handleMarkAsRead, handleMarkAsUnread }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog handleMarkAsUnread={handleMarkAsUnread} handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} key={blog.id} last_index={blogs.at(-1)["id"]} blog={blog} />)
            }
        </div>
    );
};

export default Blogs;