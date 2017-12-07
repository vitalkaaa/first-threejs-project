let THREE = require('three');
let obj = require('./objClass');
let WORLD = require('./worldClass');
let LIGHT = require('./lightClass');


function initThree() {
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
    camera.position.set(0, 5, 25);
    world.addCamera(camera);

    let light = new LIGHT.MyLight(0xffffff, 5, 15, 0).pointLight();
    world.add(light);


    let sp = new obj.MyObject().Cube(30, 0.1, 30,  0)
        .setColor(1, 1, 1)
        .moveTo(0, -3, 0);
    world.add(sp);
}

function animate() {
    requestAnimationFrame( animate );
    world.updatePhysics();
    world.render();
}


setInterval(function () {
    let r = Math.random();
    let sp = new obj.MyObject().Cube(r, r, r, r*r*r)
        .moveTo(0, 0, 0)
        .setSpeed(4*Math.random()-2, 20*Math.random(), 4*Math.random()-2);
    world.add(sp);
}, 1000);


let world = new WORLD.MyWorld();
initThree();
animate();