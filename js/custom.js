console.clear();
console.log('Hi!!');

//미리보기상태라 자바스크립트만 dist가 현재폴더
document.body.style.background = `url(./images/pic-3.jpg)`;

async function test(){
  const promise = Promise.resolve(123);
  console.log(await promise);
}