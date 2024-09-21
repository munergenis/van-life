import useApi from 'hooks/vansServices/useApi'
import { useState, useEffect } from 'react'

const API_URL = '/api'

const useTypes = () => {
  const [types, setTypes] = useState([])

  useEffect(() => {
    const fetchTypes = async () => {
      const res = await fetch(`${API_URL}/types`)
      const data = await res.json()
      setTypes(data.types)
    }
    fetchTypes()
  }, [])

  return [types]
}

const useVans = () => {
  const [allVans, setAllVans] = useState([])

  useEffect(() => {
    const fetchVans = async () => {
      const res = await fetch(`${API_URL}/vans`)
      const data = await res.json()
      setAllVans(data.vans)
    }
    fetchVans()
  }, [])

  return [allVans]
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
