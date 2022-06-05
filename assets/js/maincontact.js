// INitialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC_9Cl3LvQ5mykWRCsJ9dbS3kHghSRF2rQ",
    authDomain: "contact-form-8741e.firebaseapp.com",
    projectId: "contact-form-8741e",
    storageBucket: "contact-form-8741e.appspot.com",
    messagingSenderId: "258645973364",
    appId: "1:258645973364:web:703b4dac96b28cb3b77421",
    measurementId: "G-M49BXSWXHX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);  
     firebase.initializeApp(config);

// Reference Messages collections
var messageRef = firebase.database().ref('message');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    // console.log(name);
    // console.log(email);

    // Save message
    saveMessage(name, email, subject, message);
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
    
    

}