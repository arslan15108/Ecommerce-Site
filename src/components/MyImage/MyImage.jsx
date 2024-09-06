import React, { useState } from 'react'

const MyImage = ({images = [{url:""}]}) => {

    const [mainImage,setMainImage] = useState(images[0]);
    // console.log(images);
    
    
  return (
    <div className='grid grid-cols-3 px-10 items-center'>
        <div className=' px-2 '>
            {
                images?.map((img,index)=> (
                    <figure key={index}>
                        <img 
                        className='w-4/5 my-2 cursor-pointer' 
                        src={img.url} 
                        alt={img.filename} 
                        onClick={()=>setMainImage(img)}
                        />
                    </figure>
                    
                ))
            }
        </div>
        <div className='col-span-2'>
            {
                mainImage &&
            <figure>
                <img className='w-full' src={mainImage.url} alt={mainImage.filename} />
            </figure>
            }
        </div>
    </div>
  )
}

export default MyImage