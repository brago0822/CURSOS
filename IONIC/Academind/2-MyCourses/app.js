





const courseNameInput = document.querySelector("#course-name-input");
const courseRatingInput = document.querySelector("#course-rating-input");
const addBtn = document.querySelector("#btn-add");
const calificacionesList = document.querySelector("#calificaciones-list");
const alertController = document.querySelector('ion-alert-controller');

const clear = () => {
    courseNameInput.value = '';
    courseRatingInput.value = '';
};

addBtn.addEventListener('click',()=> {
    const nombreIngresado = courseNameInput.value;
    const ratingIngresado = courseRatingInput.value;
    if (nombreIngresado.trim().length <= 0 ||
        ratingIngresado.trim().length <= 0 ||
        ratingIngresado < 1 ||
        ratingIngresado > 5 
    ){  
        alertController.create({
            header: 'Invalid inputs',
            message: '¡Please enter valid course name and rating!',
            buttons: ['Okay']
        }).then(alertElement => {alertElement.present()});
        
        return;
    }
    const newItem = document.createElement('ion-item');
    //newItem.textContent = nombreIngresado + ' - ' + ratingIngresado + '/5';
    newItem.innerHTML = `<b>${nombreIngresado}</b> - ${ratingIngresado}/5`;
    calificacionesList.appendChild(newItem);
    clear();
});

