import {BsFillFileEarmarkTextFill, BsFillPenFill, BsFillFilePersonFill, BsFillWalletFill, BsBookHalf } from "react-icons/bs";
import Alert from 'react-bootstrap/Alert'

const appItems = [
 {
   id: 1,
   name: "Client Intake Forms",
   icon: <Alert.Link href='/intake'><BsFillFileEarmarkTextFill /></Alert.Link>
 },
 {
   id: 2, 
   name: "eSignature",
   icon: <BsFillPenFill /> 
 },
 {
   id: 3.,
   name: "Document Management",
   icon: <BsBookHalf />
 },
 {
   id: 4,
   name: "Client Portal",
   icon: <Alert.Link href='/clientPortal' ><BsFillFilePersonFill /></Alert.Link>
 },
 {
   id: 5,
   name: "Billing and Invoicing",
   icon: <BsFillWalletFill  />
 }
]

export default appItems