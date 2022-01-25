import { useFormik } from 'formik';
import * as yup from 'yup';



//ValidateFrom function to check the vaildation without using Yup
// const validateForm = (values) => {
//   const errors = {};
//   console.log( "validateFrom", values);
//   // email min 5 char
//   if(values.email.length < 5 ) {
//     errors.email = "Invalid Email"
//   }  else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address';
//   }
//   console.log(errors);
  
//   //password must have min 8 char
//   if(values.password.length < 8){
//     errors.password = "Password should conatin Atleast Min 8 Characters";
//   } else if(values.password.length >  12){
//     errors.password = "Please Provide a Shorter Password"
//   }
//   console.log(errors);
//   return errors;
// };


//form validation using yup library

   const formValidateSchema = yup.object({
  email : yup.string().min(5 , "please provide a vaild Email Address").required("Email filed is empty")
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i , "invalid pattern"),
  password : yup.string().min(8).max(12 , "Need a shorter password").required("password filed is empty"),
});

export function BasicForm() {
   const formik = useFormik({
     initialValues : {email : "" , password : ""},
     validationSchema : formValidateSchema,
     //only when no error sumbit,
     onSubmit : (values) => {
       console.log("onSumbit" , values);
     }
   });
   return (
     <form onSubmit = {formik.handleSubmit}>
       <input 
        id = "email"
        name = "email"
        value={formik.values.email}
        onChange = {formik.handleChange}
        onBlur = {formik.handleBlur}
        type = "email"
        placeholder = "Enter your email"
       />
       {formik.errors.email && formik.touched.email && formik.errors.email}
       <input 
        id = "password"
        name = "password"
        value={formik.values.password}
        onChange = {formik.handleChange}
        onBlur = {formik.handleBlur}
        type = "password"
        placeholder = "Enter your password"
       />
       {/* Show error only when the user touches the inputfield */}
       {formik.errors.password && formik.touched.password && formik.errors.password}
       <button type = "submit">Sumbit</button>
     </form>
   )
}
