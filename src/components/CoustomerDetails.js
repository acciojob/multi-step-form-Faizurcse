import React from 'react'
function CoustomerDetails({nextStep}){
    return(
        <div id='step1' style={{height:'250px'}}>
            <form onSubmit={nextStep}>
            <h3>Customer Details</h3>
            <label htmlFor='first_name'>First Name :</label><br /><br />
            <input type="text" id="first_name" required/><br /><br />
            <label htmlFor='last_name'>Last Name :</label><br /><br />
            <input type="text" id="last_name" required/><br></br><br />
            <button style={{marginLeft:'70%'}} type='submit'>Next</button>
            </form>
        </div>
    )
}

export default CoustomerDetails