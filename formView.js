  let getTablePlace = document.querySelector('table');

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
  getTheadView: getTheadView,
  getTbodyView: getTbodyView,
  getTablePlace: getTablePlace
}

export default sendViewObj;
