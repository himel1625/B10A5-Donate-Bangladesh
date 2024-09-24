'use strict';
//History btn color changing functionalities
const historyButton = document.getElementById('historyButton');
historyButton.addEventListener('click', () => {
  const donationButton = document.getElementById('donationButton');
  const mainContainer = document.getElementById('main-container');
  document.getElementById('footer').classList.add('hidden');
  const history = document.getElementById('history');
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
  history.classList.remove('hidden');
  donationButton.addEventListener('click', () => {
    history.classList.add('hidden');
    donationButton.classList.add('bg-primaryColor');
    historyButton.classList.remove('bg-primaryColor');
    donateHistory.classList.remove('hidden');
    mainContainer.classList.remove('hidden');
  });
});

// donate History section
const donateTitle1 = document.getElementById('donateTitle1').innerText;
const donateTitle2 = document.getElementById('donateTitle2').innerText;
const donateTitle3 = document.getElementById('donateTitle3').innerText;

//create the function of the history
function donationHistory(donateAmount, donateTitle) {
  const historyContainer = document.getElementById('history-container');
  const card = document.createElement('div');
  card.className =
    '  border border-gey-500 m-auto sm:m-auto w-[95%]  rounded-lg';
  card.innerHTML = `
  <div class="flex items-start justify-center flex-col h-32 mx-4">
  <h1 class="font-extrabold text-xl">${donateAmount} Taka is donate for ${donateTitle}</h1>
  <p class=" pt-4 text-gray-500" >Date:${new Date().toString()}</p>
</div>
  `;
  historyContainer.appendChild(card);
}

//donate and balance calculation functionalities
let donateBtn1 = document.getElementById('donateBtn1');
let donateBtn2 = document.getElementById('donateBtn2');
let donateBtn3 = document.getElementById('donateBtn3');
let inputAmount1 = document.getElementById('input1');
let inputAmount2 = document.getElementById('input2');
let inputAmount3 = document.getElementById('input3');
const displayDonateAmount1 = document.getElementById('displayDonateAmount1');
const displayDonateAmount2 = document.getElementById('displayDonateAmount2');
const displayDonateAmount3 = document.getElementById('displayDonateAmount3');
//main balance

const mainBalanceElement = document.getElementById('balance');
let mainBalance = parseFloat(mainBalanceElement.innerText);
//donation calculation

const donation = (inputAmount, totalDonation, donateBtnId) => {
  const inputValue = parseFloat(inputAmount.value);
  if (isNaN(inputValue) || inputValue <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  } else if (inputValue > mainBalance) {
    alert('Donation amount exceeds the main balance.');
    return;
  } else {
    //main balance
    let finalBalance = mainBalance - inputValue;
    mainBalanceElement.innerText = finalBalance.toFixed(2);
    //total donation
    const previousDonation = parseFloat(totalDonation.innerText);
    totalDonation.innerText = (previousDonation + inputValue).toFixed(2);
    // Donation history function implementation using ternary operator
    const title =
      donateBtnId.id === 'donateBtn1'
        ? donateTitle1
        : donateBtnId.id === 'donateBtn2'
        ? donateTitle2
        : donateBtnId.id === 'donateBtn3'
        ? donateTitle3
        : null;
    if (title) {
      donationHistory(inputValue, title);
    }
    inputAmount.value = '';
    successModal.showModal();
  }
  return;
};

//for donation 1
donateBtn1.addEventListener('click', () => {
  donation(inputAmount1, displayDonateAmount1, donateBtn1);
});
//for donation 2
donateBtn2.addEventListener('click', () => {
  donation(inputAmount2, displayDonateAmount2, donateBtn2);
});
//for donation 3
donateBtn3.addEventListener('click', () => {
  donation(inputAmount3, displayDonateAmount3, donateBtn3);
});
