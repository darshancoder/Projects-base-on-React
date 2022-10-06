import React, { useEffect, useState } from 'react'

const Covid = () => {
  const [data,setData] = useState([])

    const getCovideData = async () => {
        try{
        const res = await fetch('https://data.covid19india.org/data.json')
        const data = await res.json()
            console.log('data:', data.statewise[0])
            setData(data.statewise[0])
            
    }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() =>{
        getCovideData()


    },[])
  return (
    <div>
      
      <h1>🔴LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
<section>
    <ul>
      <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card_name'><span>OUR</span>COUNTRY</p>
                <p className='card_country'><span>INDIA</span></p>
                <p></p>
            </div>
        </div>
      </li>
    </ul>
    </section>
    <section>
    <ul>
      <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card_name'><span>OUR</span> RECOVERED</p>
                <p className='card_country'><span>{data.recovered}</span></p>
                <p></p>
            </div>
        </div>
      </li>
    </ul>
    </section>
    </div>
  )
}

export default Covid
