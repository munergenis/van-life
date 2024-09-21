import { useState, useEffect } from 'react'

const API_URL = '/api'

const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${API_URL}${endpoint}`, options)
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`)
        }
        const result = await res.json()
        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [endpoint, options])

  return { data, loading, error }
}

export default useApi
