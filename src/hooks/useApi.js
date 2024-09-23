import { useState, useEffect } from 'react'
import { FetchError } from 'utils/utils'

const API_URL = '/api'

const useApi = (endpoint, options = {}, errorMessage) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${endpoint}`, options)
        if (!res.ok) {
          throw new FetchError(errorMessage, res.status, res.statusText)
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
