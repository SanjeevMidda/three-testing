import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//create scene
const scene = new THREE.Scene();

//Axes helper - helps us place objects in a scene
// const axesHelper = new THREE.AxesHelper(2);
// scene.add(axesHelper);

//create shape and material used for the shape
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "blue" });
const mesh = new THREE.Mesh(geometry, material);

//transforming our object - the posititon of our object in the scene
// mesh.position.x = 1;
// mesh.position.y = 0.1;
// mesh.position.z = 0.1;

// mesh.scale.x = 0.5;
// mesh.scale.y = 2;
// mesh.scale.z = 2;

// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.45;
//adding object to the scene
scene.add(mesh);

//create & add camera to the scene
const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  100
);

camera.position.z = 3;
camera.lookAt(mesh.position);
// camera.lookAt(new THREE.Vector3(1, -1, 0.5));

scene.add(camera);

//Controls
const controls = new OrbitControls(camera, canvas);

//render the scene
const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//creating animation
const clock = new THREE.Clock();

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
  console.log(cursor.x, cursor.y);
});

let tick = () => {
  //1
  //   const elapsedTime = clock.getElapsedTime();
  //   mesh.rotation.z += 0.01;
  //   mesh.rotation.x += 0.01;

  //   mesh.position.x = Math.cos(elapsedTime);
  //   mesh.position.y = Math.sin(elapsedTime);
  //   mesh.rotation.y += 0.01;

  //2
  //   camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  //   camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  //   camera.position.y = cursor.y * 3;

  //   camera.lookAt(mesh.position);

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
