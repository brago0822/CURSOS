const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertController = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    //console.log('It works!')
    const enteredReason = reasonInput.value;
    const enteredAmount= amountInput.value;

    if (enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0)
    {
        alertController.create({
            header: 'Invalid inputs',
            message: '¡Please enter valid reason and amount!',
            buttons: ['Okay']
        }).then(alertElement => {alertElement.present()});
        return; //Para detener la ejecución
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    expensesList.appendChild(newItem);
    
    totalExpenses += +enteredAmount; //El + antes de enteredAmount hace que se convierta el texto ingresado a número
    totalExpensesOutput.textContent = totalExpenses;
    console.log(enteredReason,enteredAmount);
    clear();
});

cancelBtn.addEventListener('click', clear);