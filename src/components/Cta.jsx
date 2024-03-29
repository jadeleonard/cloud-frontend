import React from 'react'
import useFetch from './useFetch'
const Cta = () => {
  const apiUrl = import.meta.env.REACT_APP_API_SHOES
  const {data,error,loading} = useFetch(apiUrl);
  if(error){
    return <div>Error</div>





  };

  if(loading){
    <div>Loading...</div>
  }
  return (
    <div>
      <div id="default-carousel" class="relative w-full" data-carousel="slide">



      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        {
          data.map((items) =>(
            <img src={items.image} key={items.id} alt={items.name} className='rounded-t-md object-fit'/>
          ))
        }
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cta
