import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { ArrowLeft, SquarePen } from 'lucide-react'
import { useState, useEffect, createContext } from 'react'
import Badge from 'components/Badge/Badge'
import { firstLetterUpp, getColorFromVanType } from 'utils/utils'

export const VanDetailsContext = createContext()

const HostVanDetails = () => {
  const { id } = useParams()
  const [van, setVan] = useState({})

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(({ vans }) => setVan(vans[0]))
  }, [])

  const getNavLinkStyle = ({ isActive }) => `hover:underline underline-offset-4 ${isActive && 'underline font-semibold'}`

  return (
    <div className='flex flex-col gap-8'>
      <Link to='/host/vans' className='flex items-center gap-2'>
        <ArrowLeft size={20} color='gray' />
        <p className='font-medium underline underline-offset-4'>Back to all vans</p>
      </Link>

      <article className='flex flex-col gap-8 rounded bg-white p-8 shadow-md'>
        <header className='flex flex-col gap-8'>
          <div className='flex gap-6'>
            <img
              className='aspect-square w-60 rounded-lg'
              src={van.imageUrl}
              alt={`${van.name} van image`}
            />

            <div className='flex flex-col justify-center gap-4'>
              <Badge className='w-fit' colorStyle={getColorFromVanType(van.type)}>{firstLetterUpp(van.type)}</Badge>
              <div className='flex flex-col'>
                <h2 className='text-2xl font-bold'>{van.name}</h2>
                <p className='text-lg font-semibold'>
                  ${van.price}
                  <span className='text-base font-light'>/day</span>
                </p>
              </div>
            </div>
          </div>

          <div className='flex'>
            <nav>
              <ul className='flex gap-4'>
                <li>
                  <NavLink
                    className={getNavLinkStyle}
                    to={`/host/vans/${id}`}
                    end
                  >Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={getNavLinkStyle}
                    to={`/host/vans/${id}/pricing`}
                  >Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={getNavLinkStyle}
                    to={`/host/vans/${id}/photos`}
                  >Photos
                  </NavLink>
                </li>
              </ul>
            </nav>

            <SquarePen className='ml-auto text-neutral-500' size={22} />
          </div>
        </header>

        <main>
          <VanDetailsContext.Provider value={{ van }}>
            <Outlet />
          </VanDetailsContext.Provider>
        </main>
      </article>
    </div>
  )
}
export default HostVanDetails

// description:
// hostId:
// id:
// imageUrl:
// name:
// price:
// type:
