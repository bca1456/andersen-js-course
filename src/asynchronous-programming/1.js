function foo(x, cb) {
  if (x > 10) {
    console.log('x > 10');
    if (cb) {
      cb();
    }
  } else {
    console.log('x <= 10');
  }
}

function createCb(srt) {
  return function() {
    console.log(srt);
  };
}

export default function res1() {
  foo(5, createCb('cb'));
  foo(20, createCb('cb'));
}
