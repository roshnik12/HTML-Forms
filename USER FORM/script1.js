function getSelectedOptions(sel) {

  let opts = [], opt;
  for (let i=0, len=sel.options.length; i<len; i++) {
      opt = sel.options[i];
      if ( opt.selected ) opts.push(opt);
  }

  if(opts.length < 2) document.getElementById('submitButton').disabled = true;
  else document.getElementById('submitButton').disabled = false;
  chooseOfFood = opts.map(eachOption => eachOption.text);
}

function getGenderValue() { 
  var ele = document.getElementsByName('gender'); 
  for(i = 0; i < ele.length; i++) { 
      if(ele[i].checked) {
        return ele[i].value; 
      }
  } 
} 

function submitForm(){
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let address = document.getElementById('address').value;
  let pincode = document.getElementById('pincode').value;
  let gender = getGenderValue();
  let stateSelectElement = document.getElementById('state');
  let state = stateSelectElement.options[stateSelectElement.options['selectedIndex']].text;
  let countrySelectElement = document.getElementById('country');
  let country = countrySelectElement.options[countrySelectElement.options['selectedIndex']].text;
  populateTable(firstName, lastName, address, pincode, gender, choiceOfFood.join(), state, country);
  event.preventDefault();
}

function populateTable(firstName, lastName, address, pincode, gender, choiceOfFood, state, country){
  document.getElementById('firstNameTable').innerHTML = firstName;
  document.getElementById('lastNameTable').innerHTML = lastName;
  document.getElementById('addressTable').innerHTML = address;
  document.getElementById('pinCodeTable').innerHTML = pincode;
  document.getElementById('genderTable').innerHTML = gender;
  document.getElementById('choiceOfFoodTable').innerHTML = choiceOfFood;
  document.getElementById('stateTable').innerHTML = state;
  document.getElementById('countryTable').innerHTML = country;
} 
 15  DOM-Form/index.html 