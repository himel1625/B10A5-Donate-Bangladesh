'use strict';

const historyButton = document.getElementById('historyButton');
historyButton.addEventListener('click', () => {
  const donationButton = document.getElementById('donationButton');
  const mainContainer = document.getElementById('main-container');
  historyButton.classList.add(
    'bg-primaryColor',
    'hover:bg-primaryHoverColor',
    'text-colors'
  );
  mainContainer.classList.add('hidden');
  donationButton.classList.remove(
    'bg-primaryColor',
    'hover:bg-primaryHoverColor',
    'text-colors'
  );
  donationButton.addEventListener('click', () => {
    donationButton.classList.add('bg-primaryColor');
    historyButton.classList.remove('bg-primaryColor');
    mainContainer.classList.remove('hidden');
    donateHistory.classList.remove('hidden');
  });
});
const donateBtn1 = document.getElementById('donateBtn1');
const donateBtn2 = document.getElementById('donateBtn2');
const donateBtn3 = document.getElementById('donateBtn3');
const inputAmount1 = document.getElementById('input1');
const inputAmount2 = document.getElementById('input2');
const inputAmount3 = document.getElementById('input3');

const mainBalance = document.getElementById('balance');
let finalBalance = parseFloat(mainBalance.innerText);

function myFuc() {
  if (!isNaN(inputValue) || inputValue <= 0 ) {
    alert('Please Enter a valid donation Amount.');
    return;
  }
  if (inputValue > finalBalance) {
    alert('Do-not have Enough money');
    return;
  }
  let Balance = finalBalance - inputValue;
  mainBalance.innerText = Balance.toFixed(2);
  return myFuc();
}

donateBtn1.addEventListener('click', () => {
  const inputValue = parseFloat(inputAmount1.value);
  const displayDonateAmount1 = document.getElementById('displayDonateAmount1');
  displayDonateAmount1.innerText = inputValue.toFixed(2);
  myFuc();
});

donateBtn2.addEventListener('click', () => {
  const inputValue = parseFloat(inputAmount2.value);
  const displayDonateAmount2 = document.getElementById('displayDonateAmount2');
  displayDonateAmount2.innerText = inputValue.toFixed(2);
  myFuc();
});
donateBtn3.addEventListener('click', () => {
  const inputValue = parseFloat(inputAmount3.value);
  const displayDonateAmount3 = document.getElementById('displayDonateAmount3');
  displayDonateAmount3.innerText = inputValue.toFixed(2);
  myFuc();
});

const donateButtons = [donateBtn1, donateBtn2, donateBtn3];
for (const e of donateButtons) {
  e.addEventListener('click', () => {
    successModal.showModal();
  });
}
