var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.8, 12600)


var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;


var light = new THREE.AmbientLight(0xFFFFFF, .2)

scene.add(light)

var light = new THREE.PointLight(0xFFFFFF, 3);
light.position.set( 100, 0, 100 );
scene.add(light)
light.castShadow = true;



var geometry = new THREE.SphereGeometry( 10, 32, 32 );
var material = new THREE.MeshPhongMaterial();
material.map = new THREE.TextureLoader().load('/earthmap4k.jpg');
var earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

var ringGeometry = new THREE.RingGeometry( 15,17 , 40, 40 );
var ringMaterial = new THREE.MeshStandardMaterial( {color: 0x9a846c, side: THREE.DoubleSide} );
var mesh = new THREE.Mesh( ringGeometry, ringMaterial );
scene.add( mesh );

var geometry = new THREE.SphereGeometry( 40, 32, 32 );
var material = new THREE.MeshPhongMaterial( {color: 0xffed00, side: THREE.BackSide} );
var sun = new THREE.Mesh(geometry, material);

sun.position.set (200, 0, 200);
scene.add( sun );

var geometry = new THREE.SphereGeometry( 4, 32, 32 );
var material = new THREE.MeshPhongMaterial();
material.map = new THREE.TextureLoader().load('/moonmap4k.jpg');
var moon = new THREE.Mesh(geometry, material);

moon.position.set (0, 0, -30);

pivotPoint = new THREE.Object3D();
pivotPoint2 = new THREE.Object3D();

scene.add( moon );
earthMesh.add(pivotPoint2);
pivotPoint2.add(sun);
pivotPoint2.add(light);

pivotPoint.add(moon);
earthMesh.add(pivotPoint);


earthMesh.castShadow = true;
earthMesh.receiveShadow = true;
moon.castShadow = true;
moon.receiveShadow = true;
mesh.castShadow = true;
mesh.receiveShadow = true;



var controls = new function() {
    this.textColor = 0xffae23
    this.guiRotationY = 0.005
    this.guiRotationX = 0.05
    this.cameraPositionX = 0.005
    this.cameraPositionY = 0.005
    this.cameraPositionZ = 0.005
}

var gui = new dat.GUI()
gui.add(controls, 'guiRotationX', 0, 1)
gui.add(controls, 'guiRotationY', 0, .2)
gui.add(controls, 'cameraPositionX', -200, 200)
gui.add(controls, 'cameraPositionY', -200, 200)
gui.add(controls, 'cameraPositionZ', -200, 200)

gui.addColor(controls, 'textColor').onChange(function (e) {
    textMesh.material.color = new THREE.Color(e)
})

var boxGeometry = new THREE.BoxGeometry( 5000, 5000, 5000 );
var boxMaterial = new THREE.MeshPhongMaterial( { side: THREE.BackSide} );
boxMaterial.map = new THREE.TextureLoader().load('/space2.jpg');
var boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(boxMesh);




var render = function() {
    requestAnimationFrame(render)
    camera.position.x = controls.cameraPositionX
    camera.position.y = controls.cameraPositionY
    camera.position.z = controls.cameraPositionZ
    earthMesh.rotation.y += controls.guiRotationY
    earthMesh.rotation.x = controls.guiRotationX
    mesh.rotation.x += .035
    mesh.rotation.y += .085
    mesh.rotation.z += .135
    sun.rotation.x += .1
    pivotPoint.rotation.y += 0.05;
    pivotPoint2.rotation.y += 0.01;
    renderer.render(scene, camera)
}

var i = 0;
var cylinder = []


var map = {};
onkeydown = onkeyup = function(e){
    e = e || event;
    map[e.key] = e.type == 'keydown';
    if (map["a"]) {
        e.preventDefault();
        camera.rotateZ(3 * .0174533);
    }
    if (map["w"]) {
        e.preventDefault();
        controls.cameraPositionX += 15 * (camera.getWorldDirection().x);
        controls.cameraPositionY += 15 * (camera.getWorldDirection().y);
        controls.cameraPositionZ += 15 * (camera.getWorldDirection().z);
    }
    if (map["d"]) {
        e.preventDefault();
        camera.rotateZ(-3 * .0174533);
    }
    if (map["s"]) {
        e.preventDefault();
        controls.cameraPositionX -= 15 * (camera.getWorldDirection().x);
        controls.cameraPositionY -= 15 * (camera.getWorldDirection().y);
        controls.cameraPositionZ -= 15 * (camera.getWorldDirection().z);
    }
    if (map["ArrowLeft"]) {
        e.preventDefault();
        camera.rotateY(3 * .0174533)

    }
    if (map["ArrowUp"]) {
        e.preventDefault();
        camera.rotateX(3 * .0174533)
    }
    if (map["ArrowRight"]) {
        e.preventDefault();
        camera.rotateY(3 * -.0174533)
    }
    if (map["ArrowDown"]) {
        e.preventDefault();
        camera.rotateX(3 * -.0174533)
    }
    if (map[" "]) {
        e.preventDefault()
        let geometry = new THREE.CylinderGeometry( 2, 2, 34, 32 );
        let material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
        cylinder[i] = new THREE.Mesh( geometry, material );
        cylinder[i].position.x = controls.cameraPositionX;
        cylinder[i].position.y = controls.cameraPositionY;
        cylinder[i].position.z = controls.cameraPositionZ;
        scene.add(cylinder[i]);
        console.log("hi");
        // var renderLaser = function() {
        //     requestAnimationFrame(render)
        //     cylinder[i].position.x += 30 * (camera.getWorldDirection().x);
        //     cylinder[i].position.y += 30 * (camera.getWorldDirection().y);
        //     cylinder[i].position.z += 30 * (camera.getWorldDirection().z);
        // }
        // renderLaser();
        i++
    }
    // if (map["space"])

}

render();
