import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Navigation = ()=>{
    const [path,setPath] = useState('');
    const navigate = useNavigate();
    const handleNavigation = (path)=>{
        navigate(path);
    }
    const setSearchPath = ()=>{
        navigate(`/search/${path}`)
    }
    return(
        <div className=" h-16 bg-black text-white flex justify-between">
            <h1 className="basis[40%] text-3xl uppercase font-extrabold p-3">Todo Displayer</h1>
            <nav className=" basis-[30%] flex justify-between">
            <span className="text-white uppercase font-bold transition ease-in-out duration-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 p-4 cursor-pointer" onClick={()=>handleNavigation('/')}>Home</span>
            <span className="text-white uppercase font-bold transition ease-in-out duration-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 p-4 cursor-pointer" onClick={()=>handleNavigation('/data')}>Tasks</span>
            <input type="text" name="id" id="id" value={path} onChange={(event)=>setPath(event.target.value)} placeholder="Enter an id" className="h-1/3 mx-3 px-3 mt-5 rounded-sm text-gray-700 cursor-text" />
            <span className="text-white uppercase font-bold transition ease-in-out duration-150 hover:-translate-y-1 hover:scale-110 hover:text-gray-300 p-4 mr-8 pr-3 cursor-pointer" onClick={setSearchPath}>Search</span>
            </nav>
        </div>
    )
}