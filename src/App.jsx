import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// --------FIREBASEIMPORTS START----------
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBrGJSHpZkVfB7bKlbWo3ytSzJ2B4atgjc',
	authDomain: 'lanhamcallreporting-a8088.firebaseapp.com',
	projectId: 'lanhamcallreporting',
	storageBucket: 'lanhamcallreporting.appspot.com',
	messagingSenderId: '438595903730',
	appId: '1:438595903730:web:5924569f88ee1bfa61706b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// --------FIREBASEIMPORTS END----------

function App() {
	function init() {
		document.addEventListener('DOMContentLoaded', function () {
			const loadEl = document.querySelector('#load');
			/* // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
			// The Firebase SDK is initialized and available here!
			firebase.auth().onAuthStateChanged(user => { });
			firebase.database().ref('/path/to/ref').on('value', snapshot => { });
			firebase.firestore().doc('/foo/bar').get().then(() => { });
			firebase.functions().httpsCallable('yourFunction')().then(() => { });
			firebase.messaging().requestPermission().then(() => { });
			firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
			firebase.analytics(); // call to activate
			firebase.analytics().logEvent('tutorial_completed');
			firebase.performance(); // call to activate
			
			// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
			*/
			try {
				//let app = firebase.app();
				let features = [
					'auth',
					'database',
					'firestore',
					'functions',
					'messaging',
					'storage',
					'analytics',
					'remoteConfig',
					'performance',
				].filter((feature) => typeof app[feature] === 'function');
				loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
			} catch (e) {
				console.error(e);
				loadEl.textContent =
					'Error loading the Firebase SDK, check the console.';
			}
		});
	}

	return (
		<>
			<div id="message">
				<h2>Welcome</h2>
				<h1>Firebase Hosting Setup Complete</h1>
				<p>
					You're seeing this because you've successfully setup Firebase Hosting.
					Now it's time to go build something extraordinary!
				</p>
				<a target="_blank" href="https://firebase.google.com/docs/hosting/">
					Open Hosting Documentation
				</a>
			</div>
			<p id="load">Firebase SDK Loading&hellip;</p>

			{init()}
		</>
	);
}

export default App;
