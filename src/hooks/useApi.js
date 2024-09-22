import { useState, useEffect } from 'react'

const API_URL = '/api'

const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${endpoint}`, options)
        const result = await res.json()
        setData(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return [data, loading]
}

export default useApi
