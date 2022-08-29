import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';



const styles = {
    getInfo: {
        display: 'inline-flex',
        justifyContent: 'space-between'

    },
    input: {
        borderRadius: '10px',
        padding: '10px',
        marginRight: '10px'
    },
    button: {
        padding: '10px',
    },
}

export default function JumboTron() {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === "email") setEmail(inputValue)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        setEmail('')
    }
   return (
       <div
       style ={{height: 560, clear: 'both', paddingTop: 120, textAlign: 'center'}}
       >
           <h1>Legal Case Management for Unparalleled Productivity</h1>
           <p> The Easiest Way to Manage Your Large Client Case Load </p>
        <div className = 'getmoreInfo' style={styles.getInfo} >  
           <input
              style={styles.input}
              value={email}
              placeholder="youremail@test.com"
              name="email"
              type="email"
              onChange={handleChange}
           />
           <div className="flex-row flex-end">
             <Button variant="primary" style={styles.button}  onClick={handleFormSubmit}>Get More Information</Button>{' '}
           </div>
        </div> 
       </div>
   );
}