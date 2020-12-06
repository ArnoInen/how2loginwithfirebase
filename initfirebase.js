//Resources 
// - http://adnan-tech.com/tutorial/realtime-web-based-chat-in-firebase

var firebaseConfig = {
	apiKey: "apikeyhere",
	authDomain: "project-id.firebaseapp.com",
	databaseURL: "https://yourdatabase-6401d.firebaseio.com",
	projectId: "yourdatabase-xxxx",
	storageBucket: "yourdatabase-xxxx.appspot.com",
};

// Initialize Firebase with a "default" Firebase project
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
