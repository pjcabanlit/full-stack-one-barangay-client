export default function Validation(values) {
    let errors = {}

    if (!values.firstName.trim()) {
        errors.firstName = "First Name is required!"
    }

    if (!values.lastName.trim()) {
        errors.firstName = "Last Name is required!"
    }

    if (!values.address.trim()) {
        errors.firstName = "Address is required!"
    }

    if (!values.sex.trim()) {
        errors.firstName = "Sex is required!"
    }

    if (!values.nationality.trim()) {
        errors.firstName = "Nationality is required!"
    }

    if (!values.email) {
        errors.email = "Email is Required!"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email Address is invalid!";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Password is required!"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password do not match!";
    }
    return errors;
}