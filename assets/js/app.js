
//Get Element

const currency_form = document.querySelector('#currency_form');
const ammount = document.querySelector('input[name="ammount"]');
const currency = document.querySelector('select[name="currency"]');
const msg = document.querySelector('.msg');
const msgT = document.querySelector('.msgT');
const cf = document.querySelector('#cf');

cf.style.display = 'none';
currency_form.onsubmit = (e) =>{
    e.preventDefault();

    
    let rate = 0;
    switch (currency.value){
        case 'USD':
            rate = 101;
        break;
        case 'Pound':
            rate = 112;
        break;
        case 'URO':
            rate = 99.31;
        break;
        case 'Cad':
            rate = 73;
        break;
        case 'Rupee':
            rate = 1.24;
        break;
    }



    if (ammount.value == ''){
        msgT.innerHTML = setAlert('Please Enter you Ammount');
    }
    else if (currency.value == ''){
        msgT.innerHTML = setAlert('Select Your Currency');
    }
    else if ( CheckSonkha(ammount.value) == false ){
        msg.innerHTML = setAlert('Your Amount is invalid');
        
        cf.style.display = 'block';
        msgT.innerHTML = '';
    }
    else {
        msg.innerHTML = setAlert(`${currencyCheck(ammount.value, currency.value, rate)}`, 'success');
        
        cf.style.display = 'block';
        msgT.innerHTML = '';
    }
    
    
}
