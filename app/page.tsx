'use client'
import { URL_TO_GENERATE_USER } from '@/const/inde'
import { useState, useEffect } from 'react'

export const FetchComponent = ():JSX.Element => {
  const [data, setData ] = useState<any>([])

  const handleFetch = async()=>{
    try{
      const response = await fetch(URL_TO_GENERATE_USER)
      const users = await response.json();
      setData(users?.results)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <>
      <h2>Fetch</h2>
      {data?.map((item: any)=>(
        <div key={item.cell}>
          <p>{item.name.first}</p>
        </div>
      ))}
    </>

  )
}

export default function Home() {
  const [showFetchComponent, setShowFetchComponent] = useState(false)
  return (
    <main className="justify-between p-24  align-center">
      <div className='flex justify-between'>
        <h2>Simulate memory leak</h2>
        <button type="button" onClick={()=>{
          setShowFetchComponent(!showFetchComponent)
        }}>Click here</button>
      </div>
      {showFetchComponent && (<FetchComponent />)}
    </main>
  )
}
