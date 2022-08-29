import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'


const styles = {
    formStyle: {
        maxWidth: '100%',
        marginLeft: '40%',
        marginTop: '20%',
        marginBottom: '20%'
    },
    inputStyle: {
        width: '300px'
    }
}




export default function Login () {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName ] = useState('')

    function handleInputChange (e) {
       const { target } = e;
       const inputType = target.name;
       const inputValue = target.value;

       if(inputType === "email") {
           setEmail(inputValue)
       } else if (inputType === "name") {
           setName(inputValue)
       } else {
           setPassword(inputValue)
       };
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        setEmail('')
        setPassword('')
        setName('')
    }



    return (
        <Form style={styles.formStyle}>
          
          <Form.Group className="mb-3" controlId="formBasicEmail" style={styles.inputStyle}>
            <Form.Label>Username</Form.Label>
            <Form.Control 
               type="name" 
               name="name"
               placeholder="username"
               value={name}
               onChange={handleInputChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail" style={styles.inputStyle}>
            <Form.Label>Email address</Form.Label>
            <Form.Control 
               type="email" 
               name="email"
               placeholder="Enter email"
               value={email}
               onChange={handleInputChange} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword" style={styles.inputStyle}>
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange} />
          </Form.Group>
          <Button 
             variant="primary" 
             type="button" 
             style={styles.inputStyle}
             onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
      );
}