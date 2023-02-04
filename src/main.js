import App from './App.svelte';

const app = new App({
	target: document.body,

	//  We dont want our application to pass
	//  any props for now

	//  props: {
	//  	name: 'Samay'
	//  }
});

export default app;