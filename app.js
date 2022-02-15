// console.log('I am in a separate file')

function updateProductNumber(product, price, isIncreasing) {
    // debugger;

    const productInput = document.getElementById(product + '-number');
    // const caseNumber = caseInput.value;
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        // caseInput.value = parseInt(caseNumber) + 1;
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        // caseInput.value = parseInt(caseNumber) - 1;
        productNumber = parseInt(productNumber) - 1;

    }
    productInput.value = productNumber;
    // update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}

function calculateTotal() {
    // const phoneNumber = document.getElementById('phone-number').value;

    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value); */
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    // console.log(subTotal);

    // document.getElementById('sub-total').innerText=subTotal;
    const subTotalText = document.getElementById('sub-total');
    // subTotal=subTotalText.innerText;
    subTotalText.innerText = subTotal;


    const taxTotal = subTotal / 10;
    document.getElementById('tax-amount').innerText = taxTotal;

    const totalPrice = subTotal + taxTotal;
    document.getElementById('total-price').innerText = totalPrice;
}


// update "phone" increase & decrease===========

document.getElementById('phone-plus').addEventListener('click', function () {

    /*  const phoneInput = document.getElementById('phone-number');
     const phoneNumber = phoneInput.value;
     phoneInput.value = parseInt(phoneNumber) + 1; */

    updateProductNumber('phone', 1219, true);

})

document.getElementById('phone-minus').addEventListener('click', function () {
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = phoneInput.value;
    phoneInput.value = parseInt(phoneNumber) - 1; */

    updateProductNumber('phone', 1219, false);

})



// update "case" increase & decrease=============

document.getElementById('case-plus').addEventListener('click', function () {
    // debugger;

    // console.log('case plus clicked')
    /*  const caseInput = document.getElementById('case-number');
     const caseNumber = caseInput.value;
     // console.log(caseNumber);
     caseInput.value = parseInt(caseNumber) + 1; */
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    // debugger;


    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value; */
    updateProductNumber('case', 59, false);

})