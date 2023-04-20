const elModal = document.querySelector("#modalimg");
const elModalImg = document.querySelector("#modalMinImg");
const elBigImg = document.querySelector("#bigimg");
const elMinImg = document.querySelector("#minimg");
const elImgBox = document.querySelector("#imgbox");
const elRam = document.querySelector("#ram");
const elMem = document.querySelector("#mem");
const elColor = document.querySelector("#color");
const elPrice = document.querySelector("#price");
//Title
let elTram = document.querySelector("#tram");
let elTmem = document.querySelector("#tmem");
let elTcol = document.querySelector("#tcol");
let elBtn = document.querySelector("#tbtn");

elBtn.addEventListener("click", () => {
  elBtn.textContent = "Nusxa olindi";
});

//creatElements
function creatElements(...array) {
  return array.map((e) => {
    return document.createElement(e);
  });
}

//ram va memory qo'shish
function addRamMemBtn(macObj) {
  elRam.innerHTML = "";
  elMem.innerHTML = "";
  elColor.innerHTML = null;
  elBigImg.innerHTML = null;
  elMinImg.innerHTML = null;
  elModal.innerHTML = null;
  elModalImg.innerHTML = null;
  macObj.ram.forEach((element) => {
    let rambtn = document.createElement("button");
    rambtn.className = "mac__rambtn";
    if (element.active) {
      rambtn.className = "mac__rambtn activ";
      elTram.textContent = element.ramSize;

      //memoryni qo'shib ketish qismi
      element.memory.forEach((item) => {
        let membtn = document.createElement("button");
        membtn.className = "mac__rambtn";

        if (item.active) {
          membtn.classList.add("activ");
          elTmem.textContent = item.size;
        }
        membtn.setAttribute("id", item.size);
        membtn.innerHTML = `${item.size}GB`;
        elMem.appendChild(membtn);
      });
    }
    rambtn.setAttribute("id", element.ramSize);
    rambtn.innerHTML = `${element.ramSize}GB`;
    elRam.appendChild(rambtn);
  });

  //Color qo'shish
  macObj.colors.forEach((item) => {
    let [colbtn, colspan, name] = creatElements("button", "span", "span");
    // let colbtn = document.createElement('button');
    colbtn.className = "mac__colbtn";
    colbtn.setAttribute("id", item.id);
    colspan.className = "mac__coltl";
    colspan.setAttribute("id", item.color);
    colspan.style.backgroundColor = item.color;
    name.setAttribute("id", item.name);
    name.textContent = item.name;

    if (item.active) {
      colbtn.className = "mac__colbtn activ";
      elTcol.textContent = item.id;
    }

    colbtn.appendChild(colspan);
    colbtn.appendChild(name);
    elColor.appendChild(colbtn);
  });

  //Rasmlar qo'shish

  macObj.colors.forEach((item) => {
    if (item.active) {
      item.imgs.forEach((element, index) => {
        let [bigli, minli, modalImg, modalMinImg] = creatElements(
          "li",
          "li",
          "li",
          "li"
        );
        minli.className = "mac__imgitem";
        modalMinImg.className = "mac__imgitem";

        bigli.innerHTML = `
          <img class="mac__bigimg" src="${element}">
        `;
        modalImg.innerHTML = `
          <img class="mac__bigimg" src="${element}">
        `;
        if (index == 0) {
          minli.className = "mac__imgitem mac__active";
          modalMinImg.className = "mac__imgitem mac__active";
        }
        minli.innerHTML = `
          <img class="mac__minimg" id="${index}" src="${element}">
        `;
        modalMinImg.innerHTML = `
        <img class="mac__minimg" id="${index}" src="${element}">
      `;

        minli.addEventListener("click", (e) => {
          let li = document.querySelectorAll(".mac__imglist li");
          li.forEach((e) => {
            e.className = "mac__imgitem";
          });
          let id = e.target.id;
          elBigImg.style.transform = `translateX(-${400 * id}px)`;
          minli.className = "mac__imgitem mac__active";
        });

        modalMinImg.addEventListener("click", (e) => {
          let li = document.querySelectorAll("#modalMinImg li");
          li.forEach((e) => {
            e.className = "mac__imgitem";
          });
          let id = e.target.id;
          elModal.style.transform = `translateX(-${400 * id}px)`;
          modalMinImg.className = "mac__imgitem mac__active";
        });

        elModal.appendChild(modalImg);
        elBigImg.appendChild(bigli);
        elMinImg.appendChild(minli);
        elModalImg.appendChild(modalMinImg);
      });
    }
  });
}
addRamMemBtn(macObj);

//Ramga active berish qismi
elRam.addEventListener("click", (e) => {
  let id = e.target.id;
  macObj.ram.forEach((element) => {
    element.active = false;
    if (id == element.ramSize) {
      element.active = true;
    }
  });

  addPrice(macObj);
  memActive(macObj);
  addRamMemBtn(macObj);
});

// Memoryga active berish qismi
function memActive(macObj) {
  elMem.addEventListener("click", (e) => {
    let id = e.target.id;
    macObj.ram.forEach((el) => {
      el.memory.forEach((item) => {
        item.active = false;
        if (id == item.size) {
          item.active = true;
        }
      });
    });
    addPrice(macObj);
    addRamMemBtn(macObj);
  });
}

elColor.addEventListener("click", (e) => {
  let id = e.target.id;
  macObj.colors.forEach((items) => {
    items.active = false;
    if (items.id == id || id == items.color || id == items.name) {
      items.active = true;
    }
  });
  addRamMemBtn(macObj);
});

let count = null;
plus.addEventListener("click", (e) => {
  e.preventDefault();

  input.value = (+input.value + 1).toString();
  elPrice.textContent = +count * +input.value + " So'm";
});

minus.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value == 1) return;

  input.value = (+input.value - 1).toString();
  elPrice.textContent = +count * +input.value + " So'm";
});

function addPrice(macObj) {
  macObj.ram.forEach((item) => {
    if (item.active) {
      item.memory.forEach((el) => {
        if (el.active) {
          elPrice.textContent = `${el.price} So'm`;
          count = el.price;
        }
      });
    }
  });
}
addPrice(macObj);