'use strict';
let THREE = require('three');
let CANNON = require('cannon');

exports.MyObject = class MyObject{
    constructor(){
        this.color = new THREE.Color( Math.random(), Math.random(), Math.random() );
    }

    Sphere(r, m){
        let geometry = new THREE.SphereGeometry(r, 25, 25, 0, 2 * Math.PI, 0, 2 * Math.PI);
        let material = new THREE.MeshLambertMaterial( { color: this.color, wireframe: false } );
        this.g_obj = new THREE.Mesh( geometry, material );
        this.g_obj.castShadow = true;
        this.p_obj = new CANNON.Body({
            mass: m,
            position: new CANNON.Vec3(0, 0, 0),
            shape: new CANNON.Sphere(r)
        });

        return this;
    }

    Cube(a, b, c, m){
        let geometry = new THREE.CubeGeometry(a, b, c);
        //MeshLambertMaterial
        let material = new THREE.MeshLambertMaterial( { color: this.color, wireframe: false } );
        this.g_obj = new THREE.Mesh( geometry, material );
        this.g_obj.receiveShadow = true;
        this.g_obj.castShadow = true;
        this.p_obj = new CANNON.Body({
            mass: m,
            position: new CANNON.Vec3(0, 0, 0),
            shape: new CANNON.Box(new CANNON.Vec3(a/2, b/2, c/2))
        });
        return this;
    }

    updatePhysics(){
        this.g_obj.position.copy(this.p_obj.position);
        this.g_obj.quaternion.copy(this.p_obj.quaternion);
    }

    moveTo(x, y, z){
        this.p_obj.position = new CANNON.Vec3(x, y, z);
        return this;
    }

    setSpeed(vx, vy, vz){
        this.p_obj.velocity = new CANNON.Vec3(vx, vy, vz);
        return this;
    }

    setColor(r, g, b){
        this.g_obj.material.color = new THREE.Color(r, g, b);
        return this;
    }

};

