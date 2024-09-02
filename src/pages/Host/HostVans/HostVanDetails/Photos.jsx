import { useOutletContext } from 'react-router-dom'

const Photos = () => {
  const { van: { imageUrl, name } } = useOutletContext()

  return (
    <div className='grid grid-cols-4'>
      <img className='rounded' src={imageUrl} alt={`${name} van image`} />
    </div>
  )
}
export default Photos
