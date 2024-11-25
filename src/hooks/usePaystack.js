'use client'

import { usePaystackPayment } from "react-paystack";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { planList } from "@/utils/data";

export const usePaymentGateway=(formik)=>{
    const {values}=formik
    const config={
        reference: (new Date()).getTime().toString(),
        email:values.email,
        plan: values.plan,
        // publicKey: 'pk_live_0170f8a3ba9b37497c43d2baeb36a5819b9d1ae6',
        publicKey: 'pk_test_49a679f51903f58db1b50b3f808554c5a4ad3432',
        metadata:{
            name:`${values.surname} ${values.otherNames}`,
            phone:values.phoneNumber,
        }
    }
    const onSuccess =async({reference})=>{
      const plan = planList.find((item) => item.value === values.plan)?.title;
      console.log("Payment success, reference:", reference);
  
      try {
        const response = await emailjs.send(
          "contact_service",
          "contact_form",
          { ...values, referenceID: reference },
          "OTdU-O6vdb3nS4UFz"
        );
  
        if (response.status === 200) {
          console.log("Email sent successfully.");
          toast.success("Plan purchase sent successfully!");
          formik.resetForm();
  
          // Redirect based on the plan
          if (plan === "Clear Value") {
            window.location.href =
              "https://clearlinehmoapp.com/portal/Admin/register/planid=MTUyMg==-2024112111151475540921";
          } else if (plan === "Clear Elite") {
            window.location.href =
              "https://clearlinehmoapp.com/portal/Admin/register/planid=MTUyMg==-2024112111151475540921";
          } else if (plan === "Clear Advantage") {
            window.location.href =
              "https://clearlinehmoapp.com/portal/Admin/register/planid=MTUyMg==-2024112111151475540921";
          } else if (plan === "Kia Kia") {
            window.location.href = "/";
          }
        } else {
          console.error("Email sending failed:", response);
          toast.error("Email sending failed.");
        }
      } catch (error) {
        console.error("Error in onSuccess:", error);
        toast.error("An error occurred while processing your payment.");
      }
    }
    const onClose=()=>{
        console.log("Modal closed")
    }

    const initializePayment = usePaystackPayment(config)
    return {initializePayment,onSuccess,onClose}
}


export const handlePayment = (formik) => {
  const amount = planList.find((item) => item.value === formik.values.plan)?.amount;
  const paystack = window.PaystackPop.setup({
    // key: 'pk_test_49a679f51903f58db1b50b3f808554c5a4ad3432', 
    key: 'pk_live_0170f8a3ba9b37497c43d2baeb36a5819b9d1ae6', 
    email: formik.values.email,
    amount: amount * 100,
    currency: 'NGN',
    ref: `${new Date().getTime()}`,
    metadata: {
      custom_fields: [
        {
          display_name: `${formik.values.surname} ${formik.values.otherNames}`,
          variable_name: 'phone_number',
          value: formik.values.phoneNumber,
        },
      ],
    },
    callback: function (response) {
      toast.success('Payment successful!');
      handlePostPayment(response.reference, formik);
    },
    onClose: function () {
      console.log('Payment window closed');
      toast.info('Payment was not completed.');
    },
  });

  paystack.openIframe();
};

const handlePostPayment = async (reference, formik) => {
  try {
    const plan = planList.find((item) => item.value === formik.values.plan)?.title;

    await emailjs.send(
      'contact_service',
      'contact_form',
      { ...formik.values, referenceID: reference },
      'OTdU-O6vdb3nS4UFz'
    );

    formik.resetForm();

    if (plan === 'Clear Value') {
      window.location.href =
        'https://clearlinehmoapp.com/portal/Admin/register/planid=MTUyMg==-2024112111151475540921';
    } else if (plan === 'Clear Elite') {
      window.location.href =
        'https://clearlinehmoapp.com/portal/Admin/register/planid=MTUyMg==-2024112111151475540921';
    } else if (plan === 'Clear Advantage') {
      window.location.href =
        'https://clearlinehmoapp.com/portal/Admin/register/planid=MTUyMg==-2024112111151475540921';
    } else if (plan === 'Kia Kia') {
      window.location.href = '/';
    }
  } catch (error) {
    console.error('Error during post-payment processing:', error);
    toast.error('An error occurred. Please contact support.');
  }
};
