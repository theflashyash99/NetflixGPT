import { FaPlay , FaInfoCircle} from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-6xl font-extrabold">{title}</h1>
      <p className=" py-6 text-lg w-1/3">{overview}</p>

      <div className="flex items-center ">
        <button className="bg-white text-black p-4 px-16 text-xl  rounded-xl mx-2 flex items-center gap-2 hover:opacity-40 cursor-pointer">
          <FaPlay className="text-black" />
          Play
        </button>

        <button className="bg-gray-500 text-white p-4 px-16 text-xl opacity-85 rounded-xl mx-2 flex items-center gap-2 hover:opacity-40 cursor-pointer ">
          <FaInfoCircle className="text-white" />
           More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
