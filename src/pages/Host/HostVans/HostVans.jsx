import VanListItem from 'components/VanListItem/VanListItem'
import HostSection from 'components/HostSection/index'
import { useHostVans } from 'hooks/vansServices'

const HostVans = () => {
  const [hostVans, loadingHostVans] = useHostVans()

  const renderVans = () => {
    return loadingHostVans
      ? <div>loading vans...</div>
      : (
        <ul className='flex flex-col gap-6 lg:flex-row lg:flex-wrap'>
          {hostVans.map(van => <VanListItem van={van} key={van.id} />)}
        </ul>
        )
  }

  return (
    <>
      <HostSection>
        <HostSection.Title>Your Vans</HostSection.Title>
        {renderVans()}
      </HostSection>
    </>
  )
}
export default HostVans
