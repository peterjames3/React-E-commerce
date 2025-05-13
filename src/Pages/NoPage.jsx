import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NoPage() {
  const location = useNavigate();
  const navigateHome = () => {
    setTimeout(() => {
      location("/");
    }, 300);
  };

  return (
    <motion.section
      className="grid h-screen place-content-center bg-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opcaity: 0 }}
    >
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p class="mt-4 text-gray-500">We can't find that page.</p>
        <button
          onClick={navigateHome}
          type="button"
          className="transitiona-all rounded-md border border-orange-600 px-5 py-3 text-xl font-medium delay-300 hover:cursor-pointer hover:bg-orange-700 hover:text-white"
        >
          Go Back Home
        </button>
      </div>
    </motion.section>
  );
}

export default NoPage;
