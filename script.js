let cd = "";

function updateValue() {
  document.querySelector("#display").value = cd;
}

function emtyZero(a, b) {
  if (cd === "" || cd === "0") {
    cd = a;
  } else {
    cd += b;
  }
  updateValue();
}

function equal() {
  if (cd === "") {
    cd = "";
  } else if (cd === eval(cd)) {
    cd = eval(cd);
  } else {
    cd = eval(cd);
  }
  updateValue();
}

function dot() {
  if (cd === "") {
    cd = "0";
  } else if (cd === "0" || cd === "0.") {
    cd = "0.";
  } else {
    cd += ".";
  }
  updateValue();
}

function clearAll() {
  cd = "";
  updateValue();
}

function backspace() {
  cd = cd.slice(0, cd.length - 1);
  updateValue();
}
