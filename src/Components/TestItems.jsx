import { Link } from "react-router-dom"
import  {useState, useEffect} from  "react"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestItems = ({currentItems}) => {
 const [loading , setLoading] = useState(true)

 useEffect(()=>{
  setTimeout(()=>{
    setLoading(false)
  }, 3000)

  return ()=>clearTimeout(setTimeout)
 }, [])

  return (
    <>
    

   {
      currentItems.map(item =>(
      
       <Link
       key={item.id}
       to={`/product?id=${item.id}`}
              className="flex flex-col rounded-xl h-[35rem] p-2 bg-white"
     >
      {
        loading ? <Skeleton className="w-full h-[22rem]" /> :
        <div className="h-[65%] cursor-pointer">
         <img
           src={item.image}
           loading="lazy"
           alt={item.title}
           className="w-full h-full object-fill hover:scale-105 transition-transform ease-in-out duration-300"
         />
       </div>
      }
       
       <div className="h-[35%] pt-2 py-2">
         <h3 className="text-xl font-semibold text-center hover:text-orange-600 cursor-pointer">
           {item.title}
         </h3>
         <div className="flex flex-col space-y-2 pt-4">
           <p className="text-2xl text-center">
             Rating:{" "}
             <span className="font-semibold text-black">
               {item.rating.rate}
             </span>{" "}
             / 5.0 ({item.rating.count})
           </p>
           <p className="text-2xl font-semibold text-center">
             Price: ${item.price}
           </p>
         </div>
       </div>
     </Link>
     ))   
  }
   
    </>
  )
}

export default TestItems
