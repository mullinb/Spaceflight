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
    scene.setGravity(new THREE.Vector3(0,-1000,0));

    var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.8, 12600 * 100000)

    camera.position.set( 500, 500, 500 );

    var gun = new THREE.Mesh(
        new THREE.CylinderGeometry (40, 40, 300),
        new THREE.MeshPhongMaterial({ color: 0x97ff03})
    )

    gun.position.z = -250;
    gun.position.x = 120;
    gun.position.y = 90;
    gun.rotateX(Math.PI/2);

    camera.add(gun)

    scene.add(camera);


    var controls = new THREE.FlyControls(camera, container);
    controls.movementSpeed = 9505.3;
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
//     var material = new THREE.MeshBasicMaterial();
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
//     var material = new THREE.MeshBasicMaterial( {color: 0xffed00, side: THREE.BackSide} );
//     var sun = new THREE.Mesh(geometry, material);
//
//     sun.position.set (200, 0, 200);
//     scene.add( sun );
//
//     var geometry = new THREE.SphereGeometry( 4, 32, 32 );
//     var material = new THREE.MeshBasicMaterial();
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

var floorGeometry = new THREE.BoxGeometry( 25000, 250, 25000 );
var floorMaterial = new THREE.MeshBasicMaterial( { side: THREE.BackSide} );
floorMaterial.map = new THREE.TextureLoader().load('/space2.jpg');
var floorMesh = new Physijs.ConvexMesh(floorGeometry, floorMaterial, 0);
floorMesh.position.set( 0, -5000, 0);

floorMesh.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
});

var side1Geometry = new THREE.BoxGeometry( 250, 5000, 25000 );
var side1Material = new THREE.MeshBasicMaterial( { side: THREE.BackSide} );
side1Material.map = new THREE.TextureLoader().load('/space2.jpg');
var side1Mesh = new Physijs.ConvexMesh(side1Geometry, side1Material, 0);
side1Mesh.position.set(12500, -3500, 0);

side1Mesh.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
});

var side2Geometry = new THREE.BoxGeometry( 25000, 5000, 250 );
var side2Material = new THREE.MeshBasicMaterial( { side: THREE.BackSide} );
side2Material.map = new THREE.TextureLoader().load('/space2.jpg');
var side2Mesh = new Physijs.ConvexMesh(side2Geometry, side2Material, 0);
side2Mesh.position.set( 0, -3500, 12500);

side2Mesh.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
});

var side3Geometry = new THREE.BoxGeometry( 250, 5000, 25000 );
var side3Material = new THREE.MeshBasicMaterial( { side: THREE.BackSide} );
side3Material.map = new THREE.TextureLoader().load('/space2.jpg');
var side3Mesh = new Physijs.ConvexMesh(side3Geometry, side3Material, 0);
side3Mesh.position.set( -12500, -3500, 0);

side3Mesh.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
});

var side4Geometry = new THREE.BoxGeometry( 25000, 5000, 250 );
var side4Material = new THREE.MeshBasicMaterial( { side: THREE.BackSide} );
side4Material.map = new THREE.TextureLoader().load('/space2.jpg');
var side4Mesh = new Physijs.ConvexMesh(side4Geometry, side4Material, 0);
side4Mesh.position.set( 0, -3500, -12500);

side4Mesh.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
});


scene.add(floorMesh)
scene.add(side1Mesh)
scene.add(side2Mesh)
scene.add(side3Mesh)
scene.add(side4Mesh)


var box = new Physijs.BoxMesh(
    new THREE.CubeGeometry( 400, 400, 400 ),
    new THREE.MeshPhongMaterial({ color: 0x97ff03}), 1
);

box.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
	generateBoom (box.getWorldPosition(), 12);
    scene.remove(box);
});

box.setCcdMotionThreshold(5);
box.setCcdSweptSphereRadius(1);

scene.add( box );
//
// var position = { x : 0, y: 0 }; var target = { x : 0, y: -5000 };
//
//
//
// var tweenB = new TWEEN.Tween(position).to({x: 0, y: 0, z: 0}, 5000);



//
// tweenA.onUpdate(function(){
//     box.position.x = position.x;
//     box.position.y = position.y;
// });
//
// tweenB.onUpdate(function(){
//     box.position.x = position.x;
//     box.position.y = position.y;
// });
//
//
// tweenA.easing(TWEEN.Easing.Bounce.Out)
//
// tweenB.easing(TWEEN.Easing.Cubic.Out)
//
//
// tweenA.chain(tweenB);
// tweenB.chain(tweenA);

// tweenA.start();


var render = function() {
    var delta = clock.getDelta();
    controls.update(delta);
    scene.simulate();
    // moveCylinders();
    TWEEN.update();

    renderer.render(scene, camera)
    requestAnimationFrame(render)
}


var i = 0;
var cylinder = []
var bulletSpeed = 20000;

var map = {};

var allowed = true;
var timer;

document.addEventListener('keydown', function(e) {
  if (e.repeat != undefined) {
    allowed = !e.repeat;
  }
  if (!allowed) return;
  allowed = false;
  if (e.key === " ") {
      e.preventDefault()
      generateBullet();
      timer = setInterval(generateBullet, 166);
  }
});

document.addEventListener('keyup', function(e) {
    if (e.key === " ") {
        clearInterval(timer);
        allowed = true;
    }
});
// $(document).focus(function(e) {
//   allowed = true;
// });
var BoomX = 0;
var sphere = []
function generateBoom (position, scale) {
	var geometry = new THREE.SphereGeometry( 150, 32, 32 );
	var material = new THREE.MeshLambertMaterial( {color: 0xffff00} );
	sphere[BoomX] = new THREE.Mesh( geometry, material );
	sphere[BoomX].position.set(position.x, position.y, position.z);
	scene.add(sphere[BoomX]);
	var tween = new TWEEN.Tween(sphere[BoomX].scale).to({x: scale, y: scale, z: scale}, 1100);
	tween.easing(TWEEN.Easing.Cubic.Out)
	tween.start();
	let self = sphere[BoomX]
	setTimeout(function() {
		scene.remove( self );
	}, 900)

}


function generateBullet () {
	console.log(gun.getWorldPosition());
    var merged = new THREE.Geometry();
    var cyl = new THREE.CylinderGeometry(30, 30, 210);
    var top = new THREE.CylinderGeometry(30, 20, 50);
    var bot = new THREE.CylinderGeometry(30, 20, 50);
    var matrix2 = new THREE.Matrix4();
    matrix2.makeTranslation(0, 110, 0);
    top.applyMatrix(matrix2);
    var matrix2 = new THREE.Matrix4();
    matrix2.makeTranslation(0, -130, 0);
    bot.applyMatrix(matrix2);
    merged.merge(top);
    merged.merge(bot);
    merged.merge(cyl);
    var material = new THREE.MeshPhongMaterial( {color: 0xff0000} );
    // let d = new THREE.vector3();
    cylinder[i] = new Physijs.CapsuleMesh(merged, material, 1);
    gun.add(cylinder[i]);
    cylinder[i].position.x = gun.getWorldPosition().x;
    cylinder[i].position.y = gun.getWorldPosition().y;
    cylinder[i].position.z = gun.getWorldPosition().z;



    // var quaternion = new THREE.Quaternion();
    // quaternion.setFromAxisAngle(gun.getWorldDirection(), Math.PI/2);

    cylinder[i].setRotationFromEuler(gun.getWorldRotation());
    cylinder[i].translateY(-280);

	cylinder[i].setCcdMotionThreshold(200);
	cylinder[i].setCcdSweptSphereRadius(20);

    cylinder[i].addEventListener('ready', function() {
        let self = cylinder[i];
        setTimeout(function() {
			generateBoom (self.position, 6)
            scene.remove( self );
        }, 3000)
        // this.applyCentralImpulse(new THREE.Vector3(camera.getWorldDirection().x * 100000000000, camera.getWorldDirection().y * 100000000000, camera.getWorldDirection().z * 100000000000));
        var force = new THREE.Vector3((camera.getWorldDirection().x * bulletSpeed), (camera.getWorldDirection().y * bulletSpeed), (camera.getWorldDirection().z * bulletSpeed));
		var randomizer = ((Math.random()-.5) * bulletSpeed/60)
		var randomForce = new THREE.Vector3(randomizer, randomizer, randomizer)
		console.log(force, randomForce)
        cylinder[i].applyCentralImpulse(force);
		cylinder[i].applyCentralImpulse(randomForce);
        i++
    });
    scene.add(cylinder[i]);
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

render();
