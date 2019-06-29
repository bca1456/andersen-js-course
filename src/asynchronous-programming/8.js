/* eslint-disable no-undef */
const getUsers = url => fetch(url);

async function foo(url) {
  try {
    const response = await getUsers(url);
    const data = await response.json();
    await console.log(data);
  } catch (e) {
    console.log('Error!', e);
  }
}

export default function res8() {
  foo('https://jsonplaceholder.typicode.com/users');
  foo('ht://jsonplaceholder.typicode.com/users');
}
