function formValidation() {
  var uname = document.registration.username;
  var passid = document.registration.passid;
  var cpassid = document.registration.cpassid;
    if(allLetter(uname)) {
      if(passid_validation(passid,7,12)){
        if(cpassid_validation(cpassid,7,12)){
  }
}
}
return false;
}



function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters)) {
    return true;
  }
  else {
    alert('Username must have alphabet characters only');
    uname.focus();
    return false;
  }
}


function passid_validation(passid,mx,my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my ||  passid_len < mx) {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    passid.focus();
    return false;
  }
  return true;
}


function cpassid_validation(cpassid,mx,my) {
  var cpassid_len = cpassid.value.length;
  if (cpassid_len == 0 || cpassid_len >= my || cpassid_len < mx) {
    alert("Confirm password should not be empty / length be between "+mx+" to "+my);
    cpassid.focus();
    return false;
  }
  return true;
}


function allLetter(uname) {
  var letters = /^[A-Za-z]+$/;
  if(uname.value.match(letters)) {
    return true;
  }
  else {
    alert('Username must have alphabet characters only');
    uname.focus();
    return false;
  }
}


function passid_validation(passid,mx,my) {
  var passid_len = passid.value.length;
  if (passid_len == 0 || passid_len >= my || passid_len < mx) {
    alert("Password should not be empty / length be between "+mx+" to "+my);
    passid.focus();
    return false;
  }
  return true;
}


function cpassid_validation(cpassid,mx,my) {
  var cpassid_len = cpassid.value.length;
  if (cpassid_len == 0 || cpassid_len >= my || cpassid_len < mx) {
    alert("Confirm password should not be empty / length be between "+mx+" to "+my);
    cpassid.focus();
    return false;
  }
  return true;
}
