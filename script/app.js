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

const mainBalanceElement = document.getElementById('balance');
let mainBalance = parseFloat(mainBalanceElement.innerText);

const donation = (inputAmount, displayElement) => {
  const inputValue = parseFloat(inputAmount.value);

  if (isNaN(inputValue) || inputValue <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  } else if (inputValue > mainBalance) {
    alert('Donation amount exceeds the main balance.');
    return;
  }
  
  let final = mainBalance - inputValue;
  mainBalanceElement.innerText = final.toFixed(2);
  displayElement.innerText = inputValue.toFixed(2);
};
donateBtn1.addEventListener('click', () => {
  const displayDonateAmount1 = document.getElementById('displayDonateAmount1');
  donation(inputAmount1, displayDonateAmount1);
});

donateBtn2.addEventListener('click', () => {
  const displayDonateAmount2 = document.getElementById('displayDonateAmount2');
  donation(inputAmount2, displayDonateAmount2);
});

donateBtn3.addEventListener('click', () => {
  const displayDonateAmount3 = document.getElementById('displayDonateAmount3');
  donation(inputAmount3, displayDonateAmount3);
});

const donateButtons = [donateBtn1, donateBtn2, donateBtn3];
for (const e of donateButtons) {
  e.addEventListener('click', () => {
    successModal.showModal();
  });
}
