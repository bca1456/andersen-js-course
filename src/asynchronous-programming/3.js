function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(100);
    }, ms);
  });
}

export default function res3() {
  delay(1000).then(value => console.log(`Done with ${value}`));
}
