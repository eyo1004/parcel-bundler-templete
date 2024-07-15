//common.js(node.js를 이용해서 불러오는) 방식-런타임 환경이라 common.js방식 사용
const autoprefixer = require('autoprefixer');
const { plugin } = require('postcss');
module.exports = {
  plugins : [
    autoprefixer
    // require('autoprefixer');
  ]
};

//ES6
// import autoprefixer from 'autoprefixer';
// export{
//   plugins : [
//     autoprefixer
//   ]
// };