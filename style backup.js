let getTablePlace = document.querySelector('table');
objModel = {
  people: [],
  addPeople: function(getInputFname, getInputSname, getInputAge) {
    this.people.push({
      getInputFname: getInputFname,
      getInputSname: getInputSname,
      getInputAge: getInputAge
    });
  },
};
  console.log(objModel.people);



formControler ();
function formControler () {
  // Input från användaren
  let getInputFname = document.querySelector('#fname');
  let getInputSname = document.querySelector('#sname');
  let getInputAge = document.querySelector('#age');

  let getFormSubmitBtn = document.querySelector('#formSubmitBtn');
    getFormSubmitBtn.addEventListener('click', function (evt) {
      evt.preventDefault ();

      objModel.addPeople(getInputFname.value, getInputSname.value, getInputAge.value);
      getTbodyView(objModel.people);
    });
  getTheadView();
}

function getTheadView () {
  let createdTr = document.createElement('tr');
  let createdTHead = document.createElement('thead');

  let strTableHead = ['Förnamn', 'Efternamn', 'Ålder'];
  for (let i = 0; i < strTableHead.length; i++) {
    let createdTh = document.createElement('th');
    let incommingStrTableHead = strTableHead[i];
    createdTh.textContent = incommingStrTableHead;
    createdTr.appendChild(createdTh);
  }
  createdTHead.appendChild(createdTr);
  getTablePlace.appendChild(createdTHead);
}

let getCreatedTbody = document.createElement('tbody');
function getTbodyView(people) {

  for (let peoples in people) {
    let createdTr = document.createElement('tr');

    let getAddPeopleStr = people[peoples];
    console.log(getAddPeopleStr);
    for (let getStr in getAddPeopleStr) {
      console.log(getAddPeopleStr[getStr]);
      let createdTd = document.createElement('td');
      createdTd.textContent = getAddPeopleStr[getStr];
      createdTr.appendChild(createdTd);
    }
    getCreatedTbody.appendChild(createdTr);
    getTablePlace.appendChild(getCreatedTbody);
  }
}
