// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// const canvas = document.querySelector("#draw");

// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize( window.innerWidth, window.innerHeight );


// function animate() {
//     window.requestAnimationFrame( animate );
//     renderer.render( scene, camera );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }
// animate();



//Create a Scene
//transformations
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight,0.1,100);
scene.add(camera);
camera.position.z = 5;


const box = new THREE.BoxGeometry(1,1,1);//shape of the object
const material = new THREE.MeshBasicMaterial({color:"red"});
let mesh = new THREE.Mesh(box,material);//main object

// mesh.position.x= 1;//position object on x axis
// mesh.position.y= 1;
// mesh.position.z= -1;

// mesh.rotation.x =1;//rotate the object on x axis
// mesh.rotation.y =1;
// mesh.rotation.z =1;

// mesh.scale.x = 2;//resize the object on x axis
// mesh.scale.y = 2;
// mesh.scale.z = 2;

scene.add(mesh);

const canvas = document.querySelector("#draw");
let renderer =  new THREE.WebGLRenderer({canvas,antialias:true});//canvas ko render karne ke liye
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);


//Animation

let clock = new THREE.Clock();
function animate(){
    window,requestAnimationFrame(animate);//computer ki fps ke jitna chalate raho
    renderer.render(scene,camera);
    mesh.rotation.x += 0.01;//rotation on x axis
    mesh.rotation.y = clock.getElapsedTime();//rotaion same on every pc

}

animate();