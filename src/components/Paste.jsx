import React from 'react';
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

const Paste = () => {
  const pastes = useSelector((state)=> state.paste.pastes);
  console.log(pastes);
  return (
    <div>Paste</div>
  )
}

export default Paste;