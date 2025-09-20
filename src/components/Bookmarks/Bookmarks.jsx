import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, timeSpent }) => {
    return (
        <div className="w-1/3 flex gap-6 flex-col">
            <div className="py-5 px-10 text-center border border-[#6047EC] rounded-xl bg-[rgba(96,71,236,0.10)]">
                <h3 className="text-[#6047EC] font-bold text-2xl leading-[38px]">Spent time on read : {timeSpent.time} min</h3>
            </div>
            <div className="bg-[rgba(17,17,17,0.05)] p-[30px] rounded-xl min-h-[70vh]">
                <div className="flex flex-col gap-4">
                    <h3 className="text-[#111] font-bold text-2xl leading-[38px]">Bookmarked Blogs : {bookmarks.length}</h3>
                    {
                        bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;