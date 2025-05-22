// console.log("i am hacker")
// console.log('every one is hecker')


// setTimeout(() =>{
//   console.log("inside timeout")
// },1000);

// console.log("end")
//calback.......................................ek function bana kar kisi aur function ko de do to wo apne hisaab se use karega
const fn = ()=>{
  console.log("nothing")
}
const callback =(arg)=>{
  console.log(arg)
  fn()
}
const loadScript = (src, callback)=>{
  let sc= document.createElement("script");
  sc.src = src;
  sc.onload = callback("abc");//load hone ke back callback return kar raha hai

}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
