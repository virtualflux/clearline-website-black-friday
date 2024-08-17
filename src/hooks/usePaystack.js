import { usePaystackPayment } from "react-paystack";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const usePaymentGateway=(formik)=>{
    const {values}=formik
    const config={
        reference: (new Date()).getTime().toString(),
        email:values.email,
        plan: values.plan,
        publicKey: 'pk_live_0170f8a3ba9b37497c43d2baeb36a5819b9d1ae6',
        metadata:{
            name:`${values.surname} ${values.otherNames}`,
            phone:values.phoneNumber,
        }
    }
    const onSuccess =async({reference})=>{
        try {
            await emailjs
              .send(
                "contact_service",
                "contact_form",
                {...values, referenceID:reference},
                "OTdU-O6vdb3nS4UFz"
              )
              .then(
                ({ status }) => {
                  if (status === 200) {
                    setIsOpen(false);
                    toast.success("Plan purchase sent successfully!");
                    formik.resetForm()
                 
                  }
                },
                (error) => {
                  toast.error(`Oh no, ${error.text}!`);
                }
              );
          } catch (error) {
            console.log(error);
          }
    }
    const onClose=()=>{
        console.log("Modal closed")
    }

    const initializePayment=usePaystackPayment(config)
    return {initializePayment,onSuccess,onClose}
}
