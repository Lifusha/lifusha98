const firebaseConfig = {
    apiKey: "AIzaSyCMmXXBPwQkmUT3y9tfPmp4L7qIjjfxEJw",
    authDomain: "fir-webapp-6bd76.firebaseapp.com",
    projectId: "fir-webapp-6bd76",
    storageBucket: "fir-webapp-6bd76.appspot.com",
    messagingSenderId: "462031787552",
    appId: "1:462031787552:web:bc99c0c25a6da5eb910e45",
    measurementId: "G-TCCK4K7786"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  $("#btn-send").click(function()
  {
    var name = $("#name").val();
    var email = $("#email").val();

    // if(name ! = "" && email ! = ""){

    // }
  });