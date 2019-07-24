# suckless-serverless

some text here

## Composite Applications

these applications with a sigle resposability and can be composed to create a full application and are designed to contain other applications


### React app example
``` javascript
import React from 'react'
import ReactDom from 'react-dom'

// SSApplication
import { ReactMenu } from 'react-menu-ssa'
// Your application
import App from './src/App'

//render SSA
new ReactMenu().run('id')
				//when it finished rendering a <div id={root} /> 
			   .then((root) => {
			   	 //your applications goes HERE
			   	 ReactDom.render(document.getElementById(root), <App />)
			   })
```

There is no need to use a react SSA for you react application, you can use an SSA in any JS tecnology

In fact. you can use the same react SSA in a vue or other JS tecnology.

### Vue app example

``` javascript
import Vue from 'vue'

// SSApplication
import { ReactMenu } from 'react-menu-ssa'
// Your application
import App from './src/App.vue'

//render SSA
new ReactMenu().run('id')
				//when it finished rendering a <div id={root} /> 
			   .then((root) => {
			   	 //your applications goes HERE
			   	 new Vue({
			   	 	...,
			   	 	render: h => h(App)
			   	 }).$mount('#'+root)
			   })
```