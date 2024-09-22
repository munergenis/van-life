import { useState, useEffect } from 'react'

const API_URL = '/api'

const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${endpoint}`, options)
        if (!res.ok) {
          throw new Error(`Error \n\nMessage: Error fetching data \nStatus: ${res.status} \nStatusText: ${res.statusText}`)
        }
        const result = await res.json()
        setData(result)
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return [data, loading, error]
}

export default useApi
