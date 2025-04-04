import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import './Verify.css'

function Verify() {

    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const { url, token } = useContext(StoreContext)
    const navigate = useNavigate()

    const verifyPayment = async () => {
        const response = await axios.post(`${url}/api/order/verify`, { success, orderId })
        console.log(response);

        if (response.data.success) {
            navigate('/myorders')
        }
        else {
            navigate("/")
        }
    }
    useEffect(() => {
        verifyPayment()
    }, [])


    return (
        <div className='verify'>
            <div className="spinner">

            </div>
        </div>
    )
}

export default Verify