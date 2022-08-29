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
    return (
        <Form style={styles.formStyle}>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={styles.inputStyle}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword" style={styles.inputStyle}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" style={styles.inputStyle}>
            Submit
          </Button>
          <Form.Group>
          <Form.Text className="text-muted">
              Not a member? <Alert.Link href="/signup"> Sign up.</Alert.Link>
          </Form.Text>
          </Form.Group>
        </Form>
      );








}