const asyncBar = async () => 'Some string!';

async function foo() {
  asyncBar().then(value => console.log(value));
}

export default function res9() {
  foo();
}
