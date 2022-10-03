
/**
 * Custom Alert Function 
 */

const setAlert = (msg, type = 'danger') => {
    return `<p class="alert alert-${type} d-flex justify-content-between" role="alert">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}



/**
 * Number Check Function
 */


const CheckNumber = (num) => {
    let numberPattern = /^[0-9]{1,3}$/;

    return numberPattern.test(num);
}




/**
 * sonkha Check Function
 */


const CheckSonkha = (num) => {
    let sPattern = /^[0-9]{1,}$/;

    return sPattern.test(num);
}





/**
 * Currency convator Function
 *
 */

const currencyCheck = (ammount, currency, rate) => {
    let total = ammount * rate;
    return `<span class="spm">You will get <b>BDT = ${total.toFixed(2)}</b> Taka. </span>`;
}