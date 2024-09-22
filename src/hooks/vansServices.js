import useApi from 'hooks/useApi'
// import { useState, useEffect } from 'react'

// const API_URL = '/api'

const useTypes = () => {
  const [data, loading] = useApi('/types')

  return [data?.types || [], loading]
}

const useVans = () => {
  const [data, loading] = useApi('/vans')

  return [data?.vans || [], loading]
}

const useGetVanById = (id) => {
  return useApi(`/vans/${id}`)
}

const useGetHostVans = () => {
  return useApi('/host/vans')
}

const useGetHostVanById = (id) => {
  return useApi(`/host/vans/${id}`)
}

export { useTypes, useVans, useGetVanById, useGetHostVans, useGetHostVanById }
