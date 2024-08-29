import Badge from 'components/Badge/Badge'
import { getColorFromVanType, firstLetterUpp } from 'utils/utils'

const VanCard = ({ img, imgAlt, title, type, price }) => {
  const badgeColor = getColorFromVanType(type)

  return (
    <article>
      <img className='aspect-square w-full rounded-lg' src={img} alt={imgAlt} />
      <div className='flex justify-between px-2 py-4'>
        <div className='flex flex-col items-start gap-2'>
          <h3 className='text-xl font-bold'>{title}</h3>
          <Badge colorStyle={badgeColor}>{firstLetterUpp(type) || ''}</Badge>
        </div>
        <div className='flex flex-col text-right'>
          <p className='text-lg font-bold'>${price}</p>
          <p className='text-sm'>/day</p>
        </div>
      </div>
    </article>
  )
}
export default VanCard
