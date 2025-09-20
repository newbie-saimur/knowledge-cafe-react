const Bookmark = ({ bookmark }) => {
    return (
        <div className="p-5 bg-white rounded-xl">
            <p className="text-[#111] text-[18px] font-semibold leading-7">{bookmark}</p>
        </div>
    );
};

export default Bookmark;