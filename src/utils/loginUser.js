import { FetchError } from 'utils/utils'

const loginUser = async (formData) => {
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      let message
      if (res.status === 401) {
        message = 'Incorrect user or password'
      } else {
        message = 'Error while trying to login'
      }

      // message comming from mirage server
      console.log(JSON.parse(res._bodyText).message)

      throw new FetchError(message, res.status, res.statusText)
    }

    const data = await res.json()
    return ({ error: false, data })
  } catch (error) {
    return ({ error: true, data: error.message })
  }
}

export { loginUser }
