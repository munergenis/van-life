import { Link, useSearchParams, useLocation } from 'react-router-dom'
import VanCard from 'components/VanCard/VanCard'
import Badge from 'components/Badge/Badge'
import { getColorFromVanType } from 'utils/utils'
import { useVans, useTypes } from 'hooks/vansServices'
import Error from 'components/Error/Error'

import { firstLetterUpp } from 'utils/utils'

const Vans = () => {
  const [allVans, loadingVans, errorVans] = useVans()
  const [typesList, loadingTypes, errorTypes] = useTypes()
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const location = useLocation()

  const filteredVans = typeFilter
    ? allVans.filter(van => van.type === typeFilter)
    : allVans

  const renderTypeFilters = () => {
    if (errorTypes) return <Error error={errorTypes} />
    if (loadingTypes) return <p>loading filters...</p>
    return (
      <ul className='flex flex-wrap gap-4'>
        {typesList.map((type) => (
          <button
            onClick={() => setSearchParams({ type: type.value })}
            key={type.value}
          >
            <Badge
              className='flex-1 hover:opacity-70'
              colorStyle={typeFilter === type.value && getColorFromVanType(type.value)}
            >
              {firstLetterUpp(type.value)}
            </Badge>
          </button>
        ))}
      </ul>
    )
  }

  const renderVans = () => {
    if (errorVans) return <Error error={errorVans} />
    if (loadingVans) return <p>loading vans...</p>
    return (
      <ul className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
        {filteredVans.map(van => (
          <li key={van.id}>
            <Link to={`${van.id}`} state={{ searchState: location.search }}>
              <VanCard
                van={van}
              />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className='flex flex-col gap-6 px-10 py-8'>
      <h2 className='text-2xl font-extrabold'>Explore our van options</h2>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <button
            className='self-end text-neutral-600 underline underline-offset-2'
            onClick={() => setSearchParams({})}
          >
            Clear filters
          </button>
          {renderTypeFilters()}
        </div>

        {renderVans()}
      </div>
    </div>
  )
}
export default Vans
