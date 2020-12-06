//global
const textEmail = document.getElementById('textEmail');
const textPassword = document.getElementById('textPassword');
const buttonLogin = document.getElementById('buttonLogin');
const buttonSignup = document.getElementById('buttonSignup');
const buttonLogout = document.getElementById('buttonLogout');


function showError(event){
	console.log(event.message);
}

function logInUser(event){
	
	console.log("hey sexy!");
	
	const email = textEmail.value;
	const passWord = textPassword.value;
	const auth = firebase.auth();
	
	//Sign in
	const promise = auth.signInWithEmailAndPassword(email, passWord);
	promise.catch(showError);  //Booooom!
}

function signUpUser(event){
	
	console.log("hey sexy!");
	//Input check here you naughty boy
	const email = textEmail.value;
	const passWord = textPassword.value;
	const auth = firebase.auth();
	
	//Sign in
	const promise = auth.createUserWithEmailAndPassword(email, passWord);
	promise.catch(showError);  //Booooom!
}

function checkIfLoggedIn(firebaseUser){
	if(firebaseUser){
		console.log(firebaseUser);
	}else{
		console.log('not logged in');
	}
}


//MAIN
//button reactions
buttonLogin.addEventListener('click', logInUser);
buttonSignup.addEventListener('click', signUpUser);

//firebase reactions
firebase.auth().onAuthStateChanged(checkIfLoggedIn);