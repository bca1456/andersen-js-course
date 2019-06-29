/* eslint-disable no-undef */
async function getData() {
  let response = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');
  let data = await response.json();
  if (data.getUsersData === true) {
    response = await fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
    data = await response.json();
    console.log(data);
  }
}

export default function res4() {
  getData();
}
