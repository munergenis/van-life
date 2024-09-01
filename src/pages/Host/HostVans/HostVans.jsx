import VanListItem from 'components/VanListItem/VanListItem'
import { useState, useEffect } from 'react'

const HostVans = () => {
  const [hostVans, setHostVans] = useState([])

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(({ vans }) => setHostVans(vans))
  }, [])

  return (
    <ul className='flex flex-col gap-8 lg:flex-row lg:flex-wrap'>
      {hostVans.map(van => <VanListItem van={van} key={van.id} />)}
    </ul>
  )
}
export default HostVans
