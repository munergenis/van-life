import { useOutletContext } from 'react-router-dom'
import { firstLetterUpp } from 'utils/utils'

const Info = () => {
  const { vanDetails } = useOutletContext()
  return (
    <div className='flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-0'>
      <div className='flex flex-col gap-4 lg:col-span-4'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-black'>Name</h3>
          <p>{vanDetails.name}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-black'>Category</h3>
          <p>{firstLetterUpp(vanDetails.type)}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg font-black'>Visibility</h3>
          <p>...</p>
        </div>
      </div>
      <div className='flex flex-col gap-2 border-t border-t-neutral-300 pt-5 lg:col-span-8 lg:border-l lg:border-t-0 lg:border-l-neutral-300 lg:pl-10 lg:pt-0'>
        <h3 className='text-lg font-black'>Description</h3>
        <p className='text-balance'>{vanDetails.description}</p>
      </div>
    </div>
  )
}
export default Info
