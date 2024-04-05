import React from 'react'

function Cars({nextStep,prevStep} ){
    
    return(
        <form onSubmit={nextStep} >
            <div  id='step2' style={{height:'250px'}}>
                <h3>Car Deatils</h3>
                <label htmlFor="model">Car model :</label><br /><br />
                <input type="text"  id="model" required/><br /><br />
                <label htmlFor="car_price">Price :</label><br /><br />
                <input type="number"  id="car_price" required/><br /><br />
                <button onClick={prevStep} >Previous</button>
                <button style={{marginLeft:'50px'}} type='submit'>Next</button>
            </div>
        </form>
    )
}

export default Cars