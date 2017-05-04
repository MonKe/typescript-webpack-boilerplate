export interface Greetable {
  name: string
  fancy: boolean
}

export const greet = (greetable: Greetable): string =>
  `${greetable.fancy ? 'Good afternoon' : 'Hi'}, ${greetable.name}!`
