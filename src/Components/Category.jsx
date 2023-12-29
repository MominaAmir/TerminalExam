import React from 'react'
import { useDispatch ,  useSelector } from 'react-redux';
import { fetchEmoji} from '../Slice/createSlice';

const Category = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <div>
      <h1>All categories for emojis</h1>
      <button onClick={(e) => dispatch(fetchEmoji())}>Fetch Category</button>
      {
        state.slice.data && state.slice.data.map(e => <p>{e.category}</p>)
      }
    </div>
  )
}

export default Category
