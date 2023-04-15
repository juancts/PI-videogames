export const validate=(form)=>{
    const error={};
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.name) ? error.name = "" : error.name="Error in the email";
    
return error;
}