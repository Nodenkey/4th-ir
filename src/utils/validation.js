//default values
let message = '';
let errorReturn = '';

//create focusable
let focusable = false;

// Error object to be returned
export const errorObject = {
    error: errorReturn,
    message: message,
};

const checkFocus = (field) => {
    if(focusable) {
        field.focus();
    }
}

// valid and invalid decoration

const makeValid = (field, error) => {
    const array = field.classList;
    errorObject.error = error;
    errorObject.message = '';
    array.remove('error-box');
}

const makeInvalid = (field, message, error) => {
    errorObject.error = error;
    errorObject.message = message;
    field.classList.add('error-box');
    checkFocus(field);
}

// UTILS
const validateEmpty = (field, error) => {
    const value = field.value;
    if (value.trim() === '') {
        makeInvalid(field, 'Please do not leave blank', error);
        return false;
    } else {
        makeValid(field, error)
        return true;
    }
}

const containsCharacters = (field, code, error) => {
    let regEx;
    switch (code) {
        case 1:
            //contains letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter", error);
        case 2:
            // contain letters and numbers
            regEx = /(?=.*[a-zA-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one letter and one number", error);
        case 3:
            //contain lower case, uppercase and numbers
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter, one upper case letter and one number", error);
        case 4:
            //contain lowercase, uppercase, numbers and symbols
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
            return matchWithRegEx(field, regEx, "Must contain at least one lower case letter, one upper case letter, one number and one special character", error);
        case 5:
            // for emails
            // eslint-disable-next-line no-useless-escape
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (matchWithRegEx(field, regEx, "Invalid Email", error));
        case 6:
            // check if only numbers
            // eslint-disable-next-line no-useless-escape
            regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
            return matchWithRegEx(field, regEx, "Please enter a valid phone number", error);
        default:
            return false
    }
};

const matchWithRegEx = (field, regEx, message, error) => {
    if (field.value.toLowerCase().match(regEx)) {
        makeValid(field, error);
        return true;
    } else {
        makeInvalid(field, message, error);
        return false;
    }
};

//INDIVIDUAL VAL
export const validateName = (field, error, focusSetter) => {
    focusable = !!focusSetter;
    return validateEmpty(field, error);
}

export const validateEMail = (field, error, focusSetter) => {
    focusable = !!focusSetter;
    if (!containsCharacters(field, 5, error)) {
    } else {
        makeValid(field, error);
        return true;
    }
};

export const validateContact = (field, error, focusSetter) => {
    focusable = !!focusSetter;
    const contact = field.value;
    if (isNaN(contact)) {
        makeInvalid(field, 'Please enter numbers only', error);
        return false;
    } else if (contact.length < 4 || contact.length > 15) {
        makeInvalid(field, 'Phone number should not be less than 4 digits and not more than 15', error);
        return false;
    } else {
        makeValid(field, error);
        return true;
    }

};

const validateRadioButtons = (event, name, error, focusSetter) => {
    focusable = !!focusSetter;
    let item;
    let focusItem;
    let i = 0;
    for (item of event.target) {
        if (item.name === name) {
            focusItem = item;
            if (item.checked) {
                i++;
            }
        }
    }
    if (i > 0) {
        errorObject.error = error;
        errorObject.message = '';
        return true;
    } else {
        errorObject.error = error;
        errorObject.message = 'Please make a selection';
        focusItem.focus();
        return false;
    }
};

//focus setter

const focusSetter = true;

export const validateForm = e => {
    return validateName(e.target[0], e.target[0].name + 'Error', focusSetter) &&
        validateName(e.target[1], e.target[1].name + 'Error', focusSetter) &&
        validateEMail(e.target[2], e.target[2].name + 'Error', focusSetter) &&
        validateName(e.target[3], e.target[3].name + 'Error', focusSetter) &&
        validateContact(e.target[4], e.target[4].name + 'Error', focusSetter)
}

export const validateRegistration = e => {
    return validateName(e.target[0], e.target[0].name + 'Error', focusSetter) &&
        validateName(e.target[1], e.target[1].name + 'Error', focusSetter) &&
        validateEMail(e.target[2], e.target[2].name + 'Error', focusSetter) &&
        validateName(e.target[3], e.target[3].name + 'Error', focusSetter) &&
        validateName(e.target[3], e.target[3].name + 'Error', focusSetter) &&
        validateName(e.target[3], e.target[3].name + 'Error', focusSetter) &&
        validateName(e.target[3], e.target[3].name + 'Error', focusSetter) &&
        validateRadioButtons(e, 'channel', 'channelError', focusSetter) &&
        validateRadioButtons(e, 'colab', 'colabError', focusSetter);
}



