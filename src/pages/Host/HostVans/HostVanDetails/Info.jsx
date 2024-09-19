import { useOutletContext } from 'react-router-dom'
import { firstLetterUpp } from 'utils/utils'

const Info = () => {
  const { van } = useOutletContext()
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Name</h3>
        <p>{van.name}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Category</h3>
        <p>{firstLetterUpp(van.type)}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Description</h3>
        <p>{van.description}</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-lg font-black'>Visibility</h3>
        <p>...</p>
      </div>
    </div>
  )
}
export default Info
