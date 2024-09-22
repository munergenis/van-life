import { useOutletContext } from 'react-router-dom'
import { firstLetterUpp } from 'utils/utils'

const Info = () => {
  const { vanDetails } = useOutletContext()
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Name</h3>
        <p>{vanDetails.name}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Category</h3>
        <p>{firstLetterUpp(vanDetails.type)}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Description</h3>
        <p>{vanDetails.description}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Visibility</h3>
        <p>...</p>
      </div>
    </div>
  )
}
export default Info
