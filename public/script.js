'use strict';


	Physijs.scripts.worker = '/libs/physijs_worker.js';
	Physijs.scripts.ammo = `http://chandlerprall.github.io/Physijs/examples/js/ammo.js`;

var container, stats;
var camera, controls, scene, renderer;




var d, dPlanet, dMoon, dMoonVec = new THREE.Vector3();
var clock = new THREE.Clock();

var container = document.body;

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
container.appendChild( renderer.domElement );


    scene = new Physijs.Scene;
    var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.8, 12600 * 100000)

    camera.position.set( 60, 50, 60 );
    camera.lookAt( scene.position );
    scene.add( camera );


    var controls = new THREE.FlyControls(camera, container);
    controls.movementSpeed = 1505.3;
    controls.domElement = container;
    controls.rollSpeed = Math.PI / 6;
    controls.autoForward = false;
    controls.dragToLook = false;

    // renderer.shadowMapEnabled = true;
    // renderer.shadowMapType = THREE.PCFSoftShadowMap;



    var light = new THREE.AmbientLight(0xFFFFFF, .2)

    scene.add(light)

    var light = new THREE.PointLight(0xFFFFFF, 3);
    light.position.set( 100, 0, 100 );
    scene.add(light)
    light.castShadow = true;


//
//     var geometry = new THREE.SphereGeometry( 10, 32, 32 );
//     var material = new THREE.MeshPhongMaterial();
//     material.map = new THREE.TextureLoader().load('/earthmap4k.jpg');
//     var earthMesh = new THREE.Mesh(geometry, material);
//     earthMesh.rotation.y = 0,401426;
//     scene.add(earthMesh);
//
//     var ringGeometry = new THREE.RingGeometry( 15,17 , 40, 40 );
//     var ringMaterial = new THREE.MeshStandardMaterial( {color: 0x9a846c, side: THREE.DoubleSide} );
//     var mesh = new THREE.Mesh( ringGeometry, ringMaterial );
//     scene.add( mesh );
//
//     var geometry = new THREE.SphereGeometry( 40, 32, 32 );
//     var material = new THREE.MeshPhongMaterial( {color: 0xffed00, side: THREE.BackSide} );
//     var sun = new THREE.Mesh(geometry, material);
//
//     sun.position.set (200, 0, 200);
//     scene.add( sun );
//
//     var geometry = new THREE.SphereGeometry( 4, 32, 32 );
//     var material = new THREE.MeshPhongMaterial();
//     material.map = new THREE.TextureLoader().load('/moonmap4k.jpg');
//     var moon = new THREE.Mesh(geometry, material);
//
//     moon.position.set (0, 0, -30);
//
//     pivotPoint = new THREE.Object3D();
//     pivotPoint2 = new THREE.Object3D();
//
// scene.add(moon);
// earthMesh.add(pivotPoint2);
// pivotPoint2.add(sun);
// pivotPoint2.add(light);
//
//     pivotPoint.add(moon);
//     earthMesh.add(pivotPoint);
//
// earthMesh.castShadow = true;
// earthMesh.receiveShadow = true;
// moon.castShadow = true;
// moon.receiveShadow = true;
// mesh.castShadow = true;
// mesh.receiveShadow = true;

var boxGeometry = new THREE.BoxGeometry( 10000, 10000, 10000 );
var boxMaterial = new THREE.MeshPhongMaterial( { side: THREE.BackSide} );
boxMaterial.map = new THREE.TextureLoader().load('/space2.jpg');
var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(boxMesh);
var box = new Physijs.BoxMesh(
    new THREE.CubeGeometry( 150, 150, 150 ),
    new THREE.MeshBasicMaterial({ color: 0x888888 })
);
scene.add( box );

var position = { x : 0, y: 0 }; var target = { x : 2000, y: 2000 };

var tween = new TWEEN.Tween(position).to(target, 2000);

tween.delay(500);

tween.onUpdate(function(){
    box.position.x = position.x;
    box.position.y = position.y;
    console.log(box.position);
});

tween.start();



// function moveCylinders() {
//     for (let x=0; x<cylinder.length; x++) {
//         cylinder[x].translateX(cylinder[x].vectorStore.x * 1);
//         cylinder[x].translateY(cylinder[x].vectorStore.y * 1);
//         cylinder[x].translateZ(cylinder[x].vectorStore.z * 1);
//     }
// }

var render = function() {
    scene.simulate();
    var delta = clock.getDelta();
    controls.update(delta);
    // moveCylinders();
    tween.update(delta);

    renderer.render(scene, camera)
    requestAnimationFrame(render)
}


var i = 0;
var cylinder = []



var map = {};
onkeydown = onkeyup = function(e){
    e = e || event;
    map[e.key] = e.type == 'keydown';
//     if (map["a"]) {
//         e.preventDefault();
//         camera.rotateZ(3 * .0174533);
//     }
//     if (map["w"]) {
//         e.preventDefault();
//         controls.cameraPositionX += 15 * (camera.getWorldDirection().x);
//         controls.cameraPositionY += 15 * (camera.getWorldDirection().y);
//         controls.cameraPositionZ += 15 * (camera.getWorldDirection().z);
//     }
//     if (map["d"]) {
//         e.preventDefault();
//         camera.rotateZ(-3 * .0174533);
//     }
//     if (map["s"]) {
//         e.preventDefault();
//         controls.cameraPositionX -= 15 * (camera.getWorldDirection().x);
//         controls.cameraPositionY -= 15 * (camera.getWorldDirection().y);
//         controls.cameraPositionZ -= 15 * (camera.getWorldDirection().z);
//     }
//     if (map["ArrowLeft"]) {
//         e.preventDefault();
//         camera.rotateY(3 * .0174533)
//
//     }
//     if (map["ArrowUp"]) {
//         e.preventDefault();
//         camera.rotateX(3 * .0174533)
//     }
//     if (map["ArrowRight"]) {
//         e.preventDefault();
//         camera.rotateY(3 * -.0174533)
//     }
//     if (map["ArrowDown"]) {
//         e.preventDefault();
//         camera.rotateX(3 * -.0174533)
//     }
    if (map[" "]) {
        // e.preventDefault()
        // var merged = new THREE.Geometry();
        // var cyl = new THREE.CylinderGeometry(2, 2, 6);
        // var top = new THREE.SphereGeometry(2);
        // var bot = new THREE.SphereGeometry(2);
        // var matrix2 = new THREE.Matrix4();
        // matrix2.makeTranslation(0, 3, 0);
        // top.applyMatrix(matrix2);
        // var matrix2 = new THREE.Matrix4();
        // matrix2.makeTranslation(0, -3, 0);
        // bot.applyMatrix(matrix2);
        // merged.merge(top);
        // merged.merge(bot);
        // merged.merge(cyl);
        // var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
        // // let d = new THREE.vector3();
        // cylinder[i] = new Physijs.Mesh( merged, material );
        // cylinder[i].position.x = camera.position.x;
        // cylinder[i].position.y = camera.position.y;
        // cylinder[i].position.z = camera.position.z;


        camera.lookAt(boxMesh);
        // let tmpQuaternion = new THREE.Quaternion();
        //
        // tmpQuaternion.set( rotationVector.x * rotMult, this.rotationVector.y * rotMult, this.rotationVector.z * rotMult, 1 ).normalize();
        // this.object.quaternion.multiply( this.tmpQuaternion );


        // cylinder[i].rotation.x = camera.rotation.x;
        // cylinder[i].rotation.y = camera.rotation.y;
        // cylinder[i].rotation.z = camera.rotation.z;



        // cylinder[i].vectorStore = {
        //     x: camera.getWorldDirection().x * 10,
        //     y: camera.getWorldDirection().y * 10,
        //     z: camera.getWorldDirection().z * 10,
        // };
        // scene.add(cylinder[i]);
//         console.log("hi");
//         // var renderLaser = function() {
//         //     requestAnimationFrame(render)
//         //     cylinder[i].position.x += 30 * (camera.getWorldDirection().x);
//         //     cylinder[i].position.y += 30 * (camera.getWorldDirection().y);
//         //     cylinder[i].position.z += 30 * (camera.getWorldDirection().z);
//         // }
//         // renderLaser();
        i++
    }
//     // if (map["space"])
//
}

function handleWindowResize() {
    // update height and width of the renderer and the camera
    var HEIGHT = window.innerHeight;
    var WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', handleWindowResize);

window.onresize
render();
