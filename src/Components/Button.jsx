import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchEmoji} from '../Slice/createSlice';
import { useSelector } from 'react-redux';

const Button = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
  return (
    <div>
    <h1>Fetch Emojis Here</h1>
      <button onClick={(e) => dispatch(fetchEmoji())}>Fetch animal-bird</button>
      
      {
        state.slice.data && state.slice.data.map(e => <li>{e.name}</li>)
      }
    </div>
  )
}

export default Button
