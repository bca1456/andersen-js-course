function getResolvedPromise(value) {
  return new Promise(resolve => {
    resolve(value);
  });
}

function exec(val) {
  getResolvedPromise(val)
    .then(function(value) {
      if (value > 300) {
        throw 'Ошибка';
      }
    })
    .catch(function(e) {
      console.log(e);
    })
    .finally(function() {
      console.log('This is finally!');
    });
}

export default function res6() {
  exec(500);
}
