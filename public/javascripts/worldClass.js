'use strict';
let THREE = require('three');
let CANNON = require('cannon');

exports.MyWorld = class MyWorld{
    constructor(){
        this.scene = new THREE.Scene();
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0);
        this.objects = [];

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.shadowMap.enabled = true;
        document.body.appendChild( this.renderer.domElement );
    }

    add(o){
        this.world.add(o.p_obj);
        this.scene.add(o.g_obj);
        this.objects.push(o);
    }

    updatePhysics(){
        this.world.step(1/60);
        for(let i=0;i<this.objects.length;i++){
            this.objects[i].updatePhysics();
        }
    }

    render(){
        this.renderer.render( this.scene, this.camera );
    }

    addCamera(camera){
        this.camera = camera;
    }



};

