import { FaPlay , FaInfoCircle} from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[14%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video mt-10 md:mt-0 ">
      <h1 className=" text-2xl md:text-6xl font-bold mt-14 md:mt-0">{title}</h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>

      <div className="flex items-center my-2 md:m-0 ">
        <button className="bg-white text-black    px-6 md:px-16 text-lg md:text-xl  py-2 md:py-4 rounded-xl mx-2 flex items-center gap-2 hover:opacity-40 cursor-pointer">
          <FaPlay className="text-black" />
          Play 
        </button>

        <button className=" hidden md:inline-block bg-gray-500 text-white p-2 px-16 text-xl opacity-85 rounded-xl mx-2  items-center gap-2 hover:opacity-40 cursor-pointer ">
          <FaInfoCircle className="text-white " />
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
