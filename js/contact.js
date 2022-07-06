// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDA3KWmwYeYF7hNNP8s0cOJsFkPc51aIOQ",
  authDomain: "portfolio-contactform-444c6.firebaseapp.com",
  projectId: "portfolio-contactform-444c6",
  storageBucket: "portfolio-contactform-444c6.appspot.com",
  messagingSenderId: "854685582951",
  appId: "1:854685582951:web:3a092a16758adeac0e36c2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   reference to contactInfo
let contactInfo = firebase.database().ref("infos");

// listen to submit
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  //   console.log("123");

  // get input values
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;
  // console.log(name, email, subject, message);

  saveContactInfo(name, email, subject, message);

  //self contact details
  function sendMail(params) {
    var tempParams = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    emailjs.send("gmail", "template_qzukrn8", tempParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        // reset input fields after submitting
        document.querySelector(".contactForm").reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  }
  return sendMail();
}

// Save infos to the Firebase
function saveContactInfo(name, email, subject, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}
