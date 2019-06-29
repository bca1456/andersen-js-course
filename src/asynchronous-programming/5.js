/* eslint-disable no-undef */

async function getDataSequence() {
  const response1 = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');
  const data1 = await response1.json();
  const response2 = await fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi');
  const data2 = await response2.json();
  const response3 = await fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm');
  const data3 = await response3.json();
  const response4 = await fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS');
  const data4 = await response4.json();
  const response5 = await fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK');
  const data5 = await response5.json();

  const arr = [data1, data2, data3, data4, data5];
  return arr;
}

async function getDataParallel() {
  const response1 = await fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');
  const response2 = await fetch('http://www.json-generator.com/api/json/get/cguaPsRxAi');
  const response3 = await fetch('http://www.json-generator.com/api/json/get/cfDZdmxnDm');
  const response4 = await fetch('http://www.json-generator.com/api/json/get/cfkrfOjrfS');
  const response5 = await fetch('http://www.json-generator.com/api/json/get/ceQMMKpidK');
  const responseData = [
    response1.json(),
    response2.json(),
    response3.json(),
    response4.json(),
    response5.json(),
  ];
  const [data1, data2, data3, data4, data5] = await Promise.all(responseData);

  const arr = [data1, data2, data3, data4, data5];
  return arr;
}

export default function res5() {
  console.log(getDataSequence());
  console.log(getDataParallel());
}
