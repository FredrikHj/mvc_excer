import formModel from './formModel.js';
import formView from './formView.js';


formControler ();
function formControler () {
  // Input från användaren
  let getInputFname = document.querySelector('#fname');
  let getInputSname = document.querySelector('#sname');
  let getInputAge = document.querySelector('#age');

  let getFormSubmitBtn = document.querySelector('#formSubmitBtn');
    getFormSubmitBtn.addEventListener('click', function (evt) {
      evt.preventDefault ();

      formModel.addPeople(getInputFname.value, getInputSname.value, getInputAge.value);
      formView.getTbodyView(people);
    });
  getTheadView();
}
