import PageMain from 'components/PageMain/PageMain'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Badge from '../components/Badge/Badge'
import { firstLetterUpp, getColorFromVanType } from 'utils/utils'

const VanDetails = () => {
  const { id } = useParams()
  const [vanDetails, setVanDetails] = useState({})
  console.log(vanDetails)

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(({ vans: vanDetailsData }) => setVanDetails(vanDetailsData))
  }, [id])

  return (
    <PageMain className='bg-yellow-50 p-10'>
      <div className='flex flex-col gap-10'>
        <Link to='/vans' className='flex items-center gap-2'>
          <ArrowLeft size={20} color='gray' />
          <p className='font-medium underline underline-offset-4'>Back to all vans</p>
        </Link>

        <div className='mx-auto flex max-w-lg flex-col items-center gap-4 lg:max-w-screen-xl lg:flex-row lg:gap-16'>
          <img
            className='rounded-lg lg:max-w-xl'
            src={vanDetails.imageUrl}
            alt={`${vanDetails.name} van image`}
          />

          <div className='flex flex-col gap-4'>
            <Badge
              className='w-fit'
              colorStyle={getColorFromVanType(vanDetails.type)}
            >
              {firstLetterUpp(vanDetails.type)}
            </Badge>

            <h2 className='text-2xl font-bold'>{vanDetails.name}</h2>

            <p className='text-2xl font-bold'>${vanDetails.price}<span className='text-lg font-normal'>/day</span></p>

            <p className='py-6 font-secondary'>{vanDetails.description}</p>

            <button className='rounded-lg bg-orange-400 py-4 text-lg font-bold text-white'>
              Rent this van
            </button>
          </div>
        </div>
      </div>
    </PageMain>
  )
}
export default VanDetails
