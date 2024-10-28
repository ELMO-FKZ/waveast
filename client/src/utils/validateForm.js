
export function validateForm(name, value, errors, setErrors, refName, refEmail, refSubject, refMessage, t ) {

    switch (name) {
        case 'name':
            if(!new RegExp(/^[a-zA-Z\u00C0-\u024F\u0027\u002E\u002D\u1E00-\u1EFF]+( [a-zA-Z\u00C0-\u024F\u0027\u002E\u002D\u1E00-\u1EFF\s]+)+$/).test(value)){
                if (value === '') {
                    setErrors({...errors, name: t(`contact.error.requiredName`)});
                } else {
                    setErrors({...errors, name: t(`contact.error.validName`)});
                }
                refName.current.classList.remove("contact__form-input--valid");
                refName.current.classList.add("contact__form-input--error");
            } else {
                setErrors({});
                refName.current.classList.add("contact__form-input--valid");
                refName.current.classList.remove("contact__form-input--error");
            }
            break;
        case 'email':
            if(!new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/).test(value)){
                if (value === '') {
                    setErrors({...errors, email: t(`contact.error.requiredEmail`)});
                } else {
                    setErrors({...errors, email: t(`contact.error.validEmail`)});
                }
                refEmail.current.classList.remove("contact__form-input--valid");
                refEmail.current.classList.add("contact__form-input--error");
            } else {
                setErrors({});
                refEmail.current.classList.add("contact__form-input--valid");
                refEmail.current.classList.remove("contact__form-input--error");
            }
            break;
        case 'subject':
            if(!new RegExp(/[\S\s]+[\S]+/).test(value)){
                if (value === '') {
                    setErrors({...errors, subject: t(`contact.error.requiredSubject`)});
                } else {
                    setErrors({...errors, subject: t(`contact.error.validSubject`)});
                }
                refSubject.current.classList.remove("contact__form-input--valid");
                refSubject.current.classList.add("contact__form-input--error");
            } else {
                setErrors({});
                refSubject.current.classList.add("contact__form-input--valid");
                refSubject.current.classList.remove("contact__form-input--error");
            }
            break;
        case 'message':
            if(!new RegExp(/[\S\s]+[\S]+/).test(value)){
                if (value === '') {
                    setErrors({...errors, message: t(`contact.error.requiredMessage`)});
                } else {
                    setErrors({...errors, message: t(`contact.error.validMessage`)});
                }
                refMessage.current.classList.remove("contact__form-input--valid");
                refMessage.current.classList.add("contact__form-input--error");
            } else {
                setErrors({});
                refMessage.current.classList.add("contact__form-input--valid");
                refMessage.current.classList.remove("contact__form-input--error");
            }
            break;
        default:
            break;
    }
}