import useApi from 'hooks/useApi'

const useTypes = () => {
  const [data, loading] = useApi('/types')

  return [data?.types || [], loading]
}

const useVans = () => {
  const [data, loading] = useApi('/vans')

  return [data?.vans || [], loading]
}

const useVanById = (id) => {
  const [data, loading] = useApi(`/vans/${id}`)

  return [data?.vans || {}, loading]
}

const useHostVans = () => {
  const [data, loading] = useApi('/host/vans')
  return [data?.vans || [], loading]
}

const useHostVanById = (id) => {
  const [data, loading] = useApi(`/host/vans/${id}`)
  console.log(data)
  return [data?.vans || {}, loading]
}

export { useTypes, useVans, useVanById, useHostVans, useHostVanById }
