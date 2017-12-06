let THREE = require('three');
let obj = require('./objClass');
let WORLD = require('./worldClass');


function initThree() {
    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
    camera.position.set(0, 5, 25);
    world.addCamera(camera);

    let light = new THREE.PointLight( 0xffffff, 1, 100 );
    light.position.set( 5, 5, 0 );
    light.castShadow = true;
    world.scene.add( light );

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
}, 100);


let world = new WORLD.MyWorld();
initThree();
animate();