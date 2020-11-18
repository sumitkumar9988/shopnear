import React,{useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import ShippingStep from '../Component/ShippingStep'
import FormController from '../Component/FormContainer'
import { savePaymentMethod } from '../actions/cartAction'

const PaymentScreen = ({history}) => {

  const cart = useSelector(state => state.cart)
  const {shippingAddress}=cart;
   if(!shippingAddress){
        history.push('/shipping');
    }

    const [paymentMethod,setPaymentMethod]=useState('Paypal');

    const dispatch=useDispatch();
    const submitHandler=()=>{
        
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder');
    }
    return (
        <div>
        <FormController>
            <h1>Payment Method</h1>
                <Form  onSubmit={submitHandler}>
                    <ShippingStep step1 step2 step3/>
                        <Form.Group>
                            <Form.Label as='legend'>Select Method</Form.Label>
                        </Form.Group>

                        <Form.Check
                        type='radio'
                        label='PayPal or Credit Card'
                        id='Paypal'
                        name='paymentMeathod'
                        value='PayPal'
                        checked
                        onChange={(e)=>setPaymentMethod(e.target.value)}>

                        </Form.Check>

                        <Form.Check
                        type='radio'
                        label='RazorPay or wallet'
                        id='RazorPay'
                        name='paymentMeathod'
                        value='RazorPay'
                        onChange={(e)=>setPaymentMethod(e.target.value)}>

                        </Form.Check>

                    <Button type='submit' variant='primary'>Continue</Button>
                </Form>
        </FormController>
        </div>
    )
}

export default PaymentScreen
