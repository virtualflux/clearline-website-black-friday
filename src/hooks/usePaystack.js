import { usePaystackPayment } from "react-paystack";


export const usePaymentGateway=(formik)=>{
    const {values:{plan,email, surname, otherNames,phoneNumber}}=formik
    const config={
        reference: (new Date()).getTime().toString(),
        email,
        plan,
        publicKey: 'pk_live_0170f8a3ba9b37497c43d2baeb36a5819b9d1ae6',
        metadata:{
            name:`${surname} ${otherNames}`,
            phone:phoneNumber,
        }
    }
    const onSuccess =(res)=>{
        console.log(res)
    }
    const onClose=()=>{
        console.log("Modal closed")
    }

    const initializePayment=usePaystackPayment(config)
    return {initializePayment,onSuccess,onClose}
}
