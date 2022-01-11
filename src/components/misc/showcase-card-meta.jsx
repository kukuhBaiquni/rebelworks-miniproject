/* eslint-disable react/no-array-index-key */
import GENRE from 'constant/genre'
import PropTypes from 'prop-types'
import { Chip } from '../common'

export default function CardMeta({
  genres = [],
  title,
}) {
  return (
    <div className='absolute top-[8.5%] left-2 z-10'>
      <div className='flex flex-col h-[200px] justify-end'>
        <span className='text-white text-sm font-bold group-hover:text-third tracking-wide transition-all'>{title}</span>
        <div className='flex flex-wrap gap-1 mb-1'>
          {genres.map((genre, index) => (
            <Chip key={index} size='sm' text={GENRE[genre]} />
          ))}
        </div>
      </div>
    </div>
  )
}

CardMeta.propTypes = {
  genres: PropTypes.array,
  title: PropTypes.string,
}
