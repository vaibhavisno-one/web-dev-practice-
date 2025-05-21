import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;
// const canvas = document.querySelector('canvas');
// const renderer = new THREE.WebGLRenderer({ canvas });
// renderer.setSize( window.innerWidth, window.innerHeight );


// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();//jab bhi camera ki value change hoti hai to ye function call hota hai to projection matrix update hoga

//     renderer.setSize( window.innerWidth, window.innerHeight );
// });

// function animate() {
//     window.requestAnimationFrame( animate );
//     renderer.render( scene, camera );
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
// }
// animate();

//orbit controls-(controlling with mouse)--------------------------------------------

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "pink", wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );



camera.position.z = 5;
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true; // smooth movement by mouse
controls.dampingFactor = 0.1; // smooth movement by mouse
controls.autoRotate = true; // auto rotation 


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();//jab bhi camera ki value change hoti hai to ye function call hota hai to projection matrix update hoga

    renderer.setSize( window.innerWidth, window.innerHeight );
});

function animate() {
    window.requestAnimationFrame( animate );
    renderer.render( scene, camera );

    controls.update();
}
animate();

