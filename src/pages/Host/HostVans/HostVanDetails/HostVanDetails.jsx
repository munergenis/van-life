import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { ArrowLeft, SquarePen } from 'lucide-react'
import Badge from 'components/Badge/Badge'
import { firstLetterUpp, getColorFromVanType } from 'utils/utils'
import { useHostVanById } from 'hooks/vansServices'
import Error from 'components/Error/Error'

const HostVanDetails = () => {
  const { id } = useParams()
  const [vanDetails, loadingDetails, error] = useHostVanById(id)

  const getNavLinkStyle = ({ isActive }) => `hover:underline underline-offset-4 ${isActive && 'underline font-semibold'}`

  const renderVanDetails = () => {
    if (error) return <Error error={error} />
    if (loadingDetails) return <p>loading details...</p>
    return (
      <article className='flex flex-col gap-8 rounded bg-white p-8 shadow-md'>
        <header className='flex flex-col items-center gap-8 md:items-start'>
          <div className='flex flex-col gap-6 md:flex-row'>
            <img
              className='aspect-square w-60 rounded-lg'
              src={vanDetails.imageUrl}
              alt={`${vanDetails.name} van image`}
            />

            <div className='flex items-start gap-4 md:flex-col md:justify-center'>
              <Badge className='w-fit' colorStyle={getColorFromVanType(vanDetails.type)}>{firstLetterUpp(vanDetails.type)}</Badge>
              <div className='flex flex-col'>
                <h2 className='text-2xl font-bold'>{vanDetails.name}</h2>
                <p className='text-lg font-semibold'>
                  ${vanDetails.price}
                  <span className='text-base font-light'>/day</span>
                </p>
              </div>
            </div>
          </div>

          <div className='flex w-full gap-10'>
            <nav className='w-full border-b pb-3'>
              <ul className='flex gap-4'>
                <li>
                  <NavLink
                    className={getNavLinkStyle}
                    to='.'
                    end
                  >Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={getNavLinkStyle}
                    to='pricing'
                  >Pricing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={getNavLinkStyle}
                    to='photos'
                  >Photos
                  </NavLink>
                </li>
              </ul>
            </nav>

            <SquarePen className='ml-auto text-orange-600' size={24} />
          </div>
        </header>

        <main>
          <Outlet context={{ vanDetails }} />
        </main>
      </article>
    )
  }

  return (
    <div className='flex flex-col gap-8'>
      <Link
        to='..'
        relative='path'
        className='flex items-center gap-2'
      >
        <ArrowLeft size={20} color='gray' />
        <p className='font-medium underline underline-offset-4'>Back to all vans</p>
      </Link>

      {renderVanDetails()}
    </div>
  )
}
export default HostVanDetails
