const getPromise1 = () => Promise.resolve(2);
const getPromise2 = () => Promise.resolve(3);
const getPromise3 = () => Promise.resolve(7);

async function foo() {
  const value1 = await getPromise1();
  const value2 = await getPromise2();
  const value3 = await getPromise3();

  console.log(value1 * (value2 + value3));
}

export default function res7() {
  foo();
}