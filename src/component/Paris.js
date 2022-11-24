import React from 'react'
import img1 from "../img/building.jpg"

const Paris = () => {
  return (
    <div className='Paris-page'>
        <div className='paris-cont'>
            <div className='paris-ph1'>
                <img src={img1} alt="" width="" height="450" />
            </div>
            <div className='paris-text1'>
                <h1>Best Things To Do In Paris</h1>
                <p>
                    -Visit The Louvre<br/>
                    -Visit The Eiffel Tower<br/>
                    -Visit The Sainte-Chapelle Chapel<br/>
                    -Explore The Parks And Gardens Of Paris<br/>
                    -Join A Food Tour In Paris<br/>
                    -Take A Trip To The Château De Versailles<br/>
                    - Visit Montmartre and A Vineyard In Paris
                </p>
            </div>
            

        </div>
    </div>
  )
}

export default Paris
