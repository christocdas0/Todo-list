let inputitems = document.getElementById("inputitems");
let button = document.getElementById("btn");
let ullist = document.getElementById("ullist");

//    list create*******

function addlistitems() {
  let inputlistitems = inputitems.value;
  let list = document.createElement("li");

  let spanel = document.createElement('span');
  list.appendChild(spanel);
  spanel.innerText=inputlistitems;
 
  

  // list.innerText = inputlistitems;
  ullist.appendChild(list);
  inputitems.value = " ";
  inputitems.focus();
  // ullist.style.css('first');

  let trash = document.createElement("i");
  trash.classList.add("fas", "fa-trash");
  console.log(trash);
  list.appendChild(trash);

  console.log(list);

  let editbtn = document.createElement("i");
  editbtn.classList.add("fas", "fa-edit");
  list.appendChild(editbtn);
}

// remove function******

function remove(aaa) {
  
  if (aaa.target.classList[1] === "fa-trash") {
    let removetheitem = aaa.target.parentElement;

    removetheitem.classList.add("animationside");
    console.log(removetheitem);
    removetheitem.addEventListener("transitionend", function () {
      removetheitem.remove();
    });
  }

  //  remove1.remove();
  // aaa.target.parentElement.remove();
}

//  edit function*****

function editlist(aaa) {
  if (aaa.target.classList[1] === "fa-edit") {
    let edit = prompt("plz enter your new item list");
    let editedvalue = aaa.target.parentElement;
     let spanel=  editedvalue.querySelector('span');
    spanel.innerText=edit;
    
  }
}

ullist.addEventListener("click", remove);
ullist.addEventListener("click", editlist);

button.addEventListener("click", addlistitems);
