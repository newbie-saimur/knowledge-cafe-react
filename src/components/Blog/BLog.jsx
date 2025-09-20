import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, last_index , handleBookmark, handleMarkAsDone }) => {
    const {id, img, author, author_img, published_date, reading_time, title, tags} = blog;

    return (
        <div>
            <img className="rounded-xl mb-8 w-full" src={img} alt={title} />
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-6 items-center">
                    <img className="w-[60px] h-[60px]" src={author_img} alt={author} />
                    <div>
                        <h4 className="text-2xl font-bold text-[#111] leading-[38px]">{author}</h4>
                        <p className="text-[rgba(17,17,17,0.60)] text-base font-semibold leading-[26px]">{published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-[rgba(17,17,17,0.60)] text-xl font-medium">{reading_time} min read</p>
                    <button className="w-6 h-6 cursor-pointer" onClick={() => handleBookmark(title)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="max-w-[735px] text-[40px] font-bold text-[#111] leading-16 mb-4">{title}</h2>
            <div className="flex gap-4 mb-7">
                {
                    tags.map((tag, index) => <p key={index} className="text-[rgba(17,17,17,0.60)] text-xl font-medium leading-8">#{tag}</p>)
                }
            </div>
            <button className="text-[#6047EC] text-xl font-semibold underline mb-8 cursor-pointer" onClick={() => handleMarkAsDone(parseInt(reading_time), title)}>Mark as read</button>
            {
                (id !== last_index && <hr className="text-[rgba(17,17,17,0.10)] mb-10"/>)
            }
        </div>
    );
};

export default Blog;