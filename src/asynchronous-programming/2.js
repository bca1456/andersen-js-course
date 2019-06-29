function parseJSON(jsonStr, sucCb, failCb) {
  try {
    const json = JSON.parse(jsonStr);
    sucCb(json);
  } catch (exception) {
    failCb(exception);
  }
}

function successCb(result) {
  console.log('Success parse!');
  console.log(result);
}

function failureCb(error) {
  console.log('Failure parse!');
  console.log(error);
}

export default function res2() {
  parseJSON('{"x": 10}', successCb, failureCb);
  parseJSON('{x}', successCb, failureCb);
}
