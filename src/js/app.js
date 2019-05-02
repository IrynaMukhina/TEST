let newTask = document.getElementById('add-btn');
let dataStr = document.getElementById('add').value.toString();
console.log(dataStr);

let purchaseList = [];
let wrapper = document.getElementById('list-wrapper');
const NewUserPurchase = function(data) {
  return {
    date: data[0],
    items: [{
      amount: data[1],
      currency: data[2],
      productName: data[3]
    }]
  }
}

newTask.addEventListener('click', createPurchase);


function showMessage() {
  return purchaseList.map(el => {
    let purch = document.createElement('li');
    purch.classList.add('user-purch');
    let textTask = document.createElement('p');

    textTask.innerHTML = `${el.date} \n ${el.items.map(el => `${el.productName} ${el.amount} ${el.currency}`)}`;
    wrapper.appendChild(purch);
    purch.appendChild(textTask);
    });
  }
  
function createPurchase(dataStr) {
  
  const dataArr = dataStr.split(' ');
  if(purchaseList.some(el => el.date === dataArr[0])) {
    for(let i = 0; i < purchaseList.length; i++) {
      if(dataArr[0] === purchaseList[i].date) {
        purchaseList[i].items.push({
          amount: dataArr[1],
          currency: dataArr[2],
          productName: dataArr[3]
        })
      }
    }
    return showAll();
  } else {
    purchaseList.push(NewUserPurchase(dataArr));
    
    return showAll();
  }
}

function showAll() {
  const sortCondition = (a, b) => {
    return new Date(a.date) - new Date(b.date);
  };
  purchaseList.sort(sortCondition);

  return showMessage();
}

function clear(date) {
  for(let i = 0; i < purchaseList.length; i++) {
    if(new Date(purchaseList[i].date).getTime() === new Date(date).getTime()) {
      purchaseList.splice(i, 1);
    }
  }

  return showAll();
}


