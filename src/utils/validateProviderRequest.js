export  const validateForm =(values)=>{
    const errors={}
    if(!values.name){
        errors.name="Please enter company name"
    }
    
    if(!values.address){
        errors.address="Please enter your address"
    }
    if(!values.phoneNumber){
        errors.phoneNumber="Please enter phone number"
    }else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        values.phoneNumber)){
            errors.phoneNumber="Invalid phone number"
    }
    if(!values.email){
        errors.email="Please enter your email address"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Invalid email address"
    }

    if(!values.specialty){
        errors.specialty="Please enter your specialty"
    }
    

    return errors
}