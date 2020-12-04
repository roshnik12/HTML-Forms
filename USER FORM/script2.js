const container = createEle('div', 'container mt-5');
const row = createEle('div', 'row'); 
const rowCol = createEle('div', 'offset-md-3 col-md-6 col-12');

//Card
const card = createEle('div', 'card card-outline-secondary');
const cardHeader = createEle('div', 'card-header');
const h3 = createEle('h3', 'mb-0');
const h3Text = document.innerHTML='USER FORM';
h3.append(h3Text);
cardHeader.append(h3);
card.append(cardHeader);

const cardBody = createEle('div', 'card-body');

//form
const form = createEle('form', 'form');
form.setAttribute('role', 'form'); 
form.setAttribute('onsubmit', 'submitForm()');

// first name
const divFirstName = createEle('div', 'form-group row');
const fnameLabel = createEle('label', 'col-lg-4 col-form-label form-control-label');
const labelFirstNameText = document.createTextNode('First Name');
fnameLabel.append(labelFirstNameText);
divFirstName.append(fnameLabel);

const inputFirstNameDiv = createEle('div', 'col-lg-8');
const fnameInput = createEle('input', 'form-control', 'firstName');
fnameInput.type = 'text';
fnameInput.required = 'true';
fnameInput.placeholder= 'first name';
inputFirstNameDiv.append(fnameInput);
divFirstName.append(inputFirstNameDiv);
form.append(divFirstName);

// last name
const divLastName = createEle('div', 'form-group row');
const lnameLabel = createEle('label', 'col-lg-4 col-form-label form-control-label');
const labelLastNameText = document.createTextNode('Last Name');
lnameLabel.append(labelLastNameText);
divLastName.append(lnameLabel);

const inputLastNameDiv = createEle('div', 'col-lg-8');
const lnameInput = createEle('input', 'form-control', 'lastName');
lnameInput.type = 'text';
lnameInput.required = 'true';
lnameInput.placeholder= 'last name';
inputLastNameDiv.append(lnameInput);
divLastName.append(inputLastNameDiv);
form.append(divLastName);

// address
const divAddress = createEle('div', 'form-group row');
const addrLabel = createEle('label', 'col-lg-4 col-form-label form-control-label');
const labelAddressText = document.createTextNode('Address');
addrLabel.append(labelAddressText);
divAddress.append(addrLabel);

const inputAddressDiv = createEle('div', 'col-lg-8');
const addrInput = createEle('input', 'form-control', 'address');
addrInput.type= 'text';
addrInput.required = 'true';
addrInput.placeholder='address';
inputAddressDiv.append(addrInput);
divAddress.append(inputAddressDiv);
form.append(divAddress);

// pincode
const divPincode = createEle('div', 'form-group row');
const pinLabel = createEle('label', 'col-lg-4 col-form-label form-control-label');
const labelPincodeText = document.createTextNode('Pincode');
pinLabel.append(labelPincodeText);
divPincode.append(pinLabel);

const inputPincodeDiv = createEle('div', 'col-lg-8');
const pinInput = createEle('input', 'form-control', 'pincode');
pinInput.type = 'number';
pinInput.required = 'true';
pinInput.placeholder = 'pincode';
inputPincodeDiv.append(pinInput);
divPincode.append(inputPincodeDiv);
form.append(divPincode);


//Radio button for gender
const divGender = createEle('div', 'form-group row');
const genderLabel = createEle('label', 'col-lg-4 col-form-label form-control-label');
const labelGenderText = document.createTextNode('Gender');
genderLabel.append(labelGenderText);
divGender.append(genderLabel);
const inputGenderDiv = createEle('div', 'col-lg-8');

const inputGenderDivMale = createEle('div', 'form-check form-check-inline');
const maleLabel = createEle('label','form-check-label');
const labelGenderMaleText = document.createTextNode('Male')

const maleInput = createEle('input', 'form-check-input', 'male');
maleInput.required= 'true';
maleInput.type= 'radio';
maleInput.name= 'gender';
maleInput.value= 'male';
maleLabel.append(maleInput, labelGenderMaleText);
inputGenderDivMale.append(maleLabel);

const inputGenderDivFemale = createEle('div', 'form-check form-check-inline');
const femaleLabel = createEle('label','form-check-label');
const labelGenderFemaleText = document.createTextNode('Female')
const femaleInput = createEle('input', 'form-check-input', 'female');
femaleInput.required = 'true';
femaleInput.type = 'radio';
femaleInput.name = 'gender';
femaleInput.value = 'male';
femaleLabel.append(femaleInput, labelGenderFemaleText);
inputGenderDivFemale.append(femaleLabel);

inputGenderDiv.append(inputGenderDivMale, inputGenderDivFemale);
divGender.append(inputGenderDiv);
form.append(divGender);


//Select Choice of Food
const foodDiv = createEle('div', 'form-group row');
const foodLabel = createEle('label', 'col-lg-4 col-form-label form-control-label');
const foodTxt = document.createTextNode('Food Choice');
foodLabel.append(foodTxt);
foodDiv.append(foodLabel);

const selectBoxfFDiv = createEle('div','col-lg-8');
const fFInput = createEle('select','form-control', 'choiceOfFood');
fFInput.required='true';
fFInput.setAttribute('multiple','true');
fFInput.setAttribute('size','4');
fFInput.setAttribute('onchange','getSelectedOptions(this)');

const optionfF1 = createEle('option');
const optionfF1Text = document.createTextNode('Vada pav');
optionfF1.setAttribute('value', '01');
optionfF1.append(optionfF1Text);

const optionfF2 = createEle('option');
const optionfF2Text = document.createTextNode('Biryani');
optionfF2.setAttribute('value', '02');
optionfF2.append(optionfF2Text);

const optionfF3 = createEle('option');
const optionfF3Text = document.createTextNode('Pizza');
optionfF3.setAttribute('value', '03');
optionfF3.append(optionfF3Text);

const optionfF4 = createEle('option');
const optionfF4Text = document.createTextNode('Chocolate');
optionfF4.setAttribute('value', '04');
optionfF4.append(optionfF4Text);

const optionfF5 = createEle('option');
const optionfF5Text = document.createTextNode('Ice Cream');
optionfF5.setAttribute('value', '05');
optionfF5.append(optionfF5Text);

fFInput.append(optionfF1);
fFInput.append(optionfF2);
fFInput.append(optionfF3);
fFInput.append(optionfF4);
fFInput.append(optionfF5);

selectBoxfFDiv.append(fFInput);

const foodPara = createEle('p','small', 'foodCondition');
const foodParaTxt = document.createTextNode('Must select at least 2 choices*');
foodPara.append(foodParaTxt);
selectBoxfFDiv.append(foodPara);
foodDiv.append(selectBoxfFDiv);
form.append(foodDiv);

//Select State
const divState = createEle('div', 'form-group row');
const labelState = createEle('label', 'col-lg-4 col-form-label form-control-label');
const labelStateText = document.createTextNode('State');
labelState.append(labelStateText);
divState.append(labelState);

const divStateSelectBox = createEle('div', 'col-lg-8');
const stateInput = createEle('select','form-control', 'state');
stateInput.setAttribute('required','true');
stateInput.setAttribute('size','1');

const optionStateEmpty = createEle('option');
const optionStateEmptyText = document.createTextNode('Select State');
optionStateEmpty.setAttribute('value', '');
optionStateEmpty.append(optionStateEmptyText);

const optionState1 = createEle('option');
const optionState1Text = document.createTextNode('Madhya Pradesh');
optionState1.setAttribute('value', '01');
optionState1.append(optionState1Text);

const optionState2 = createEle('option');
const optionState2Text = document.createTextNode('Maharashtra');
optionState2.setAttribute('value', '02');
optionState2.append(optionState2Text);

const optionState3 = createEle('option');
const optionState3Text = document.createTextNode('Delhi');
optionState3.setAttribute('value', '03');
optionState3.append(optionState3Text);

const optionState4 = createEle('option');
const optionState4Text = document.createTextNode('Andhra Pradesh');
optionState4.setAttribute('value', '04');
optionState4.append(optionState4Text);

const optionState5 = createEle('option');
const optionState5Text = document.createTextNode('Arunachal Pradesh');
optionState5.setAttribute('value', '05');
optionState5.append(optionState5Text);

stateInput.append(optionStateEmpty);
stateInput.append(optionState1);
stateInput.append(optionState2);
stateInput.append(optionState3);
stateInput.append(optionState4);
stateInput.append(optionState5);

divStateSelectBox.append(stateInput);
divState.append(divStateSelectBox);
form.append(divState);


//Select Country
const divCountry = createEle('div', 'form-group row');
const labelCountry = createEle('label', 'col-lg-4 col-form-label form-control-label');
const labelCountryText = document.createTextNode('Country');
labelCountry.append(labelCountryText);
divCountry.append(labelCountry);

const divCountrySelectBox = createEle('div', 'col-lg-8');
const selectBoxCountryInput = createEle('select','form-control', 'country');
selectBoxCountryInput.setAttribute('required','true');
selectBoxCountryInput.setAttribute('size','1');

const optionCountryEmpty = createEle('option');
const optionCountryEmptyText = document.createTextNode('Select Country');
optionCountryEmpty.setAttribute('value', '');
optionCountryEmpty.append(optionCountryEmptyText);

const optionCountry1 = createEle('option');
const optionCountry1Text = document.createTextNode('India');
optionCountry1.setAttribute('value', '01');
optionCountry1.append(optionCountry1Text);

selectBoxCountryInput.append(optionCountryEmpty);
selectBoxCountryInput.append(optionCountry1);


divCountrySelectBox.append(selectBoxCountryInput);
divCountry.append(divCountrySelectBox);
form.append(divCountry);


//Submit Button
const btnDiv = createEle('div', 'form-group row');
const btnLabel = createEle('label', 'col-lg-4 col-form-label form-control-label');
const btnInputDiv = createEle('div', 'col-lg-8');
const btnInput = createEle('input', 'btn btn-sm btn-primary', 'submitButton');
btnInput.setAttribute('type', 'submit');
btnInput.setAttribute('value', 'Submit');
btnInputDiv.append(btnInput);
btnDiv.append(btnLabel, btnInputDiv);
form.append(btnDiv);
//form end

cardBody.append(form);
card.append(cardBody);
//Card end

// Create stable
const containerTable = createEle('div', 'container mt-5');
const rowTable = createEle('div', 'row');
const colTable = createEle('div', 'col-md-6 offset-md-3 col-12');
const table = createEle('table', 'table table-striped table-inverse');
const tbody = createEle('tbody');

const tr1 = createEle('tr');
const tr1td1 = createEle('td');
const tr1td1Text = document.createTextNode('First Name');
tr1td1.append(tr1td1Text);
const tr1td2 = createEle('td', '', 'firstNameTable');
tr1.append(tr1td1, tr1td2);

const tr2 = createEle('tr');
const tr2td1 = createEle('td');
const tr2td1Text = document.createTextNode('Last Name');
tr2td1.append(tr2td1Text);
const tr2td2 = createEle('td', '', 'lastNameTable');
tr2.append(tr2td1, tr2td2);

const tr3 = createEle('tr');
const tr3td1 = createEle('td');
const tr3td1Text = document.createTextNode('Address');
tr3td1.append(tr3td1Text);
const tr3td2 = createEle('td', '', 'addressTable');
tr3.append(tr3td1, tr3td2);

const tr4 = createEle('tr');
const tr4td1 = createEle('td');
const tr4td1Text = document.createTextNode('Pincode');
tr4td1.append(tr4td1Text);
const tr4td2 = createEle('td', '', 'pinCodeTable');
tr4.append(tr4td1, tr4td2);

const tr5 = createEle('tr');
const tr5td1 = createEle('td');
const tr5td1Text = document.createTextNode('Gender');
tr5td1.append(tr5td1Text);
const tr5td2 = createEle('td', '', 'genderTable');
tr5.append(tr5td1, tr5td2);

const tr6 = createEle('tr');
const tr6td1 = createEle('td');
const tr6td1Text = document.createTextNode('Food Choice');
tr6td1.append(tr6td1Text);
const tr6td2 = createEle('td', '', 'choiceOfFoodTable');
tr6.append(tr6td1, tr6td2);

const tr7 = createEle('tr');
const tr7td1 = createEle('td');
const tr7td1Text = document.createTextNode('State');
tr7td1.append(tr7td1Text);
const tr7td2 = createEle('td', '', 'stateTable');
tr7.append(tr7td1, tr7td2);

const tr8 = createEle('tr');
const tr8td1 = createEle('td');
const tr8td1Text = document.createTextNode('Country');
tr8td1.append(tr8td1Text);
const tr8td2 = createEle('td', '', 'countryTable');
tr8.append(tr8td1, tr8td2);


tbody.append(tr1);
tbody.append(tr2);
tbody.append(tr3);
tbody.append(tr4);
tbody.append(tr5);
tbody.append(tr6);
tbody.append(tr7);
tbody.append(tr8);

table.append(tbody);
colTable.append(table);
rowTable.append(colTable);
containerTable.append(rowTable);

//table start end
rowCol.append(card);
row.append(rowCol);
container.append(row);
document.body.append(container);
document.body.append(containerTable);

let choicesOfFood = [];
function createEle(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
} 