import useApi from 'hooks/useApi'

const useTypes = () => {
  const errorMessage = 'There was an error getting filters'
  const [data, loading, error] = useApi('/types', {}, errorMessage)

  return [data?.types || [], loading, error]
}

const useVans = () => {
  const errorMessage = 'There was an error getting the vans'
  const [data, loading, error] = useApi('/vans', {}, errorMessage)

  return [data?.vans || [], loading, error]
}

const useVanById = (id) => {
  const errorMessage = 'There was an error getting the van details'
  const [data, loading, error] = useApi(`/vans/${id}`, {}, errorMessage)

  return [data?.vans || {}, loading, error]
}

const useHostVans = () => {
  const errorMessage = 'There was an error getting the vans'
  const [data, loading, error] = useApi('/host/vans', {}, errorMessage)

  return [data?.vans || [], loading, error]
}

const useHostVanById = (id) => {
  const errorMessage = 'There was an error getting the van details'
  const [data, loading, error] = useApi(`/host/vans/${id}`, {}, errorMessage)

  return [data?.vans || {}, loading, error]
}

export { useTypes, useVans, useVanById, useHostVans, useHostVanById }
