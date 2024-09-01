import { Link } from 'react-router-dom'

const VanListItem = ({ van }) => {
  return (
    <li>
      <Link
        className='flex h-24 gap-x-4 rounded-lg bg-white p-4 hover:bg-amber-200/65 lg:h-auto lg:max-w-sm lg:flex-col'
        to={`/host/vans/${van.id}`}
      >
        <img
          className='aspect-square h-full w-auto rounded-lg object-cover'
          src={van.imageUrl}
          alt={`${van.name} van image`}
        />

        <div className='flex grow flex-col justify-between py-2'>
          <p className='text-xl font-bold'>
            {van.name}
          </p>
          <p className='font-light text-neutral-500'>
            <span className='font-bold'>${van.price}</span>
            /day
          </p>
        </div>
      </Link>
    </li>
  )
}
export default VanListItem
