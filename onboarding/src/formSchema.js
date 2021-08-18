import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .trim()
        .email('You must put in a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .trim()
        .required('A password is required')
        .min(6, 'Password must be at least 6 characters'),
    tos: yup
    .boolean()
    //if left as only boolean, it will always submit because the value of true or false are both valid according to boolean. Adding .oneOf means that you add an additional condition that it's true.
    .oneOf([true], 'You must agree to Terms of Service'),
})

export default formSchema;