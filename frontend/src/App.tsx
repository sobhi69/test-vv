import { useEffect, useState } from 'react'
import axiosInstance from './api/axiosInstance'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axiosInstance.get('/user')
        setData(response.data)
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <>

      {loading ? "loading..." : (
        <div>
          here's the data
          <h2>{data}</h2>
        </div>
      )}

    </>
  )
}

export default App
