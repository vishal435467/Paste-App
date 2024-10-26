import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes} from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createAt: new Date().toISOString()
        }
        if(pasteId){
            // update
            dispatch(updateToPastes(paste));
        }
        else{
            // create
            dispatch(addToPastes(paste));
        }
        // after creation or update
        setTitle("");
        setValue("");
        setSearchParams({});
    }

  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-2 pl-4 mt-2 rounded-xl cursor-pointer w-[67%]' type="text" placeholder='Enter title here' value={title} onChange={(e)=> setTitle(e.target.value)}/>

        <button 
        onClick={createPaste}
        className='p-2 mt-2 rounded-xl'>{pasteId? "Update Paste" : "Create My Paste"}</button>
     
    </div>
    <div className='mt-8'>
        <textarea 
        className='rounded-xl min-w-[500px] p-4'
        value={value} placeholder='Enter content here...' onChange={(e)=>setValue(e.target.value)} rows={20}/>
    </div>
    </div>
  )
}

export default Home