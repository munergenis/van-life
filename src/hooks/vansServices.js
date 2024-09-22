import useApi from 'hooks/useApi'

const useTypes = () => {
  const [data, loading, error] = useApi('/types')

  return [data?.types || [], loading, error]
}

const useVans = () => {
  const [data, loading, error] = useApi('/vans')

  return [data?.vans || [], loading, error]
}

const useVanById = (id) => {
  const [data, loading, error] = useApi(`/vans/${id}`)

  return [data?.vans || {}, loading, error]
}

const useHostVans = () => {
  const [data, loading, error] = useApi('/host/vans')

  return [data?.vans || [], loading, error]
}

const useHostVanById = (id) => {
  const [data, loading, error] = useApi(`/host/vans/${id}`)

  return [data?.vans || {}, loading, error]
}

export { useTypes, useVans, useVanById, useHostVans, useHostVanById }
