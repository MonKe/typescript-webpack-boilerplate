import {greet, Greetable} from './components/Hello'

let person: Greetable = {name: 'Jane', fancy: false}

console.log(greet(person))
