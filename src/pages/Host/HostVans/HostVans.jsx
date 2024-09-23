import VanListItem from 'components/VanListItem/VanListItem'
import HostSection from 'components/HostSection/index'
import { useHostVans } from 'hooks/vansServices'
import Error from 'components/Error/Error'

const HostVans = () => {
  const [hostVans, loadingHostVans, error] = useHostVans()

  const renderVans = () => {
    if (error) return <Error error={error} />
    if (loadingHostVans) return <p>loading vans...</p>
    return (
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
