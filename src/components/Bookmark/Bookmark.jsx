import { RxCross2 } from "react-icons/rx";

const Bookmark = ({ bookmark, handleRemoveFromBookmark }) => {
    return (
        <div className="p-5 bg-white rounded-xl relative">
            <button className="absolute top-3 right-1 -translate-y-2 hover:opacity-60 cursor-pointer" onClick={() => handleRemoveFromBookmark(bookmark)}><RxCross2 /></button>
            <p className="text-[#111] text-[18px] font-semibold leading-7">{bookmark}</p>
        </div>
    );
};

export default Bookmark;