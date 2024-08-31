import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import VanCard from 'components/VanCard/VanCard'
import Badge from 'components/Badge/Badge'

import { removeDuplicatesFromArr, firstLetterUpp } from 'utils/utils'

const Vans = () => {
  const [allVans, setAllVans] = useState([])
  const [typesList, setTypesList] = useState([])

  useEffect(() => {
    fetch('/api/vans')
      .then(res => res.json())
      .then(({ vans }) => {
        setTypesList(removeDuplicatesFromArr(vans.map(van => van.type)))
        setAllVans(vans)
      })
  }, [])

  return (
    <div className='flex flex-col gap-6 px-10 py-8'>
      <h2 className='text-2xl font-extrabold'>Explore our van options</h2>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <button className='self-end text-neutral-600 underline underline-offset-2'>Clear filters</button>
          <ul className='flex flex-wrap gap-4'>
            {typesList.map(type => (
              <Badge key={type} className='flex-1'>
                {firstLetterUpp(type)}
              </Badge>
            ))}
          </ul>
        </div>

        <ul className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
          {allVans.map(({ id, name, price, description, imageUrl, type }) => (
            <li key={id}>
              <Link to={`/vans/${id}`}>
                <VanCard
                  title={name}
                  price={price}
                  type={type}
                  img={imageUrl}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Vans
