export  const validateForm =(values)=>{
    const errors={}
    if(!values.surname){
        errors.surname="Please enter surname"
    }
    if(values.surname.includes(" ")){
        errors.surname="Surname must not contain empty space"
    }
    if(!values.otherNames){
        errors.otherNames="Please enter other names"
    }
    if(!values.gender){
        errors.gender="Please select your gender"
    }
    if(!values.title){
        errors.title="Please Select a title"
    } 
    if(!values.phoneNumber){
        errors.phoneNumber="Please enter phone number"
    }else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        values.phoneNumber)){
            errors.phoneNumber="Invalid phone number"
    }
    if(!values.dob){
        errors.dob="Please enter a birth date"
    }
    if(!values.email){
        errors.email="Please enter your email address"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Invalid email address"
    }
    if(!values.state){
        errors.state="Please select a state"
    }
    if(!values.address){
        errors.address="Please Enter your home address"
    }
    if(!values.plan){
        errors.plan="Please select a plan"
    }

    return errors
}