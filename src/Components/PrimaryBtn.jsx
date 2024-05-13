import { FaArrowRight } from "react-icons/fa6";


const PrimaryBtn = ({text, onClick}) => {

  return (
    <div>
      <button onClick={onClick} className=" bg-orange-600 flex items-center gap-2 text-xl text-white font-semibold rounded-3xl py-3 px-7 cursor-pointer hover:bg-orange-700 transition-all delay-300 "type="button">{text} <FaArrowRight  className="text-xl text-white"/></button>
    </div>
  )
}

export default PrimaryBtn
