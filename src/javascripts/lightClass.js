'use strict';
let THREE = require('three');
let CANNON = require('cannon');

exports.MyLight = class MyLight{
    constructor(color, x, y, z){
        this.color = color;
        this.x = x;
        this.y = y;
        this.z =z;
    }

    pointLight(){
        this.light = new THREE.PointLight( this.color, 1, 100 );
        this.light.position.set( this.x, this.y, this.z );
        this.light.castShadow = true;
        return this;
    }

    moveTo(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.light.position.set(this.x, this.y, this.z)
        return this;
    }

    setColor(color){
        this.color = color;
        this.light.color.setHex(color)
        return this;
    }
};