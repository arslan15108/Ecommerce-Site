import React from 'react'
import { FaStar,FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

function Stars({stars,reviews}) {
    const ratingStars = [];
    for (let i = 0; i <= stars; i++) {
        let number = i + 0.5;
        ratingStars.push(stars >= i + 1 ? <FaStar /> : stars >= number ? <FaStarHalfAlt /> : <AiOutlineStar /> );
    }
    
  return (
    <div className='flex items-center gap-1 text-yellow-400'>
        { ratingStars  } <p>({reviews} customer reviews)</p>
    </div>
  )
}

export default Stars