import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

function NoPage() {
    const location = useNavigate();
    const navigateHome = () => {
      setTimeout(() => {
        location("/")
      }, 300)
    }

  return (
    <motion.section className='h-dvh w-full bg-slate-600 flex items-center justify-center'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opcaity:0}}    >
      <div className=' max-w-6xl  space-y-4 items-center '>
      <h1 className='text-3xl font-bold text-white text-center'>Error 404 :No Page Found</h1>
      <button onClick={navigateHome}type="button" className="text-xl py-2 px-6 font-semibold rounded-md bg-orange-600  hover:bg-orange-700 hover:cursor-pointer">Go Back to Home</button>
      </div>
     
    </motion.section>
  )
}

export default NoPage
