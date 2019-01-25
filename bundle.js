(function () {
  'use strict';

  var formModel = {
    people: [],
    addPeople: function(getInputFname, getInputSname, getInputAge) {
      this.people.push({
        getInputFname: getInputFname,
        getInputSname: getInputSname,
        getInputAge: getInputAge
      });
    }
  };

  let getTablePlace = document.querySelector('table');

    function getTheadView$1 () {
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

  function getTbodyView(people) {
    let getCreatedTbody = document.createElement('tbody');
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
  let sendViewObj = {
    getTheadView: getTheadView$1,
    getTbodyView: getTbodyView,
    getTablePlace: getTablePlace
  };

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
        sendViewObj.getTbodyView(people);
      });
    getTheadView();
  }

}());
