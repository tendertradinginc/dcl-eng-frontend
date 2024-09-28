import { FaBloggerB } from "react-icons/fa";


const TotalConstructionBlogs = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-3 h-36 duration-500 bg-gradient-to-r from-[#16a249]  to-[#fbbf24] text-white">
                <FaBloggerB className="text-6xl text-si-white mb-2" />
               
                <div className="">
                <h1 className=" text-center text-black text-base font-semibold">Blogs</h1>
            <p className="flex justify-center items-center text-center text-white text-base font-semibold">50</p>
            </div>
            </div>
        </div>
    );
};

export default TotalConstructionBlogs;