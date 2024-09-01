import VanListItem from 'components/VanListItem/VanListItem'

const HostVans = () => {
  const listItems = Array(4).fill(1).map((item, i) => ({ id: item * (i + 1), name: `Van ${item * (i + 1)}`, price: item * (i + 1) * 17 }))

  return (
    <ul className='flex flex-col gap-8 lg:flex-row lg:flex-wrap'>
      {listItems.map(van => <VanListItem van={van} key={van.id} />)}
    </ul>
  )
}
export default HostVans
