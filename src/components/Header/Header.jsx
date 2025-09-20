const Header = () => {
    return (
        <>
            <div className="flex justify-between items-center mt-4">
                <h1 className="text-[2.5rem] font-bold text-[#111] leading-16">Knowledge Cafe</h1>
                <img className="w-[60px] h-[60px]" src="/images/profile.png" alt="Profile Image" />
            </div>
            <hr className="my-8 text-[rgba(17,17,17,0.15)]"></hr>
        </>
    );
};

export default Header;