import { useParams } from 'react-router-dom'

const HostVanDetails = () => {
  const { id } = useParams()

  return (
    <div>HostVanDetails of Van {id}</div>
  )
}
export default HostVanDetails
