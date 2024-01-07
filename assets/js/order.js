
const firebaseConfig = {
    apiKey: "AIzaSyCo_paGnOg0kOPfNaNfJ_MShuPVknuHkPY",
    authDomain: "hometownflavours-aa286.firebaseapp.com",
    databaseURL: "https://hometownflavours-aa286-default-rtdb.firebaseio.com",
    projectId: "hometownflavours-aa286",
    storageBucket: "hometownflavours-aa286.appspot.com",
    messagingSenderId: "572114300263",
    appId: "1:572114300263:web:d7f362cf9df54cd89a13c2",
    measurementId: "G-3JRY2XX069"
  };



firebase.initializeApp(firebaseConfig);


var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var MobileNumber = getElementVal("MobileNumber");
  var emailid = getElementVal("emailid");
  var ItemID = getElementVal("ItemID");
  var Address = getElementVal("Address");

  saveMessages(name,MobileNumber, emailid, ItemID,Address);
  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
 document.getElementById("contactForm").reset();
}

const saveMessages = (name,MobileNumber, emailid, ItemID,Address) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    MobileNumber:MobileNumber,
    emailid: emailid,
    ItemID: ItemID,
    Address: Address,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};