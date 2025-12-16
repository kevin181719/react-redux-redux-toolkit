import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './component/Card';

const Gallary = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  }

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-1/2 '>loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black h-[1200px] overflow-hidden text-white'>
      <div className='flex flex-wrap gap-4 m-10'>
        {printUserData}
      </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          style={{ opacity: index == 1 ? 0.6 : 1}}
        onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setUserData([])
          }
        }}
          className='bg-amber-400 text-sm active:scale-90 px-5 py-2 rounded  text-black font-semibold cursor-pointer'>
        Prev
      </button>
      <h4>Page {index}</h4>
      <button
        onClick={() => {
          setIndex(index + 1)
          setUserData([])
        }}
        className='bg-amber-400 text-sm active:scale-90 px-5 py-2 rounded  text-black cursor-pointer font-semibold'>
        Next
      </button>
    </div>
    </div >
  )
}

export default Gallary
