var assert = require('assert');
var Box = require('../src/js/app');

describe('UsersPurchases', function() {

  it('should assept', function() {
    
  })

})

let dataStr = document.getElementById('add').value;
let purch = document.createElement('li');
let textTask = document.createElement('p');
purch.classList.add('user-purch');
textTask.innerHTML = dataStr;
wrapper.appendChild(purch);
purch.appendChild(textTask);