import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols'
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);


// var loader = new THREE.ObjectLoader();

// loader.load(
// 	// resource URL
// 	"models/json/example.json",

// 	// onLoad callback
// 	// Here the loaded data is assumed to be an object
// 	function ( obj ) {
// 		// Add the loaded object to the scene
// 		scene.add( obj );
// 	},

// 	// onProgress callback
// 	function ( xhr ) {
// 		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
// 	},

// 	// onError callback
// 	function ( err ) {
// 		console.error( 'An error happened' );
// 	}
// );

class Scene extends Component {
    constructor(props){
        super(props);
        this.threecanvas = React.createRef();
        this.THREE = THREE;
    }
    componentDidMount(){
        
        var scene = new this.THREE.Scene();
        var camera = new this.THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        camera.position.z = 5;
        var renderer = new this.THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.threecanvas.current.appendChild( renderer.domElement );
        var geometry = new this.THREE.BoxGeometry( 1, 1, 1 );
        var cube;
        var object;
        var controls = new OrbitControls( camera, renderer.domElement );
        controls.target.set( 0, 0, 0 )
        controls.enableDamping = true
        controls.dampingFactor = 0.25
        controls.enableZoom = true

        var loader = new this.THREE.TextureLoader();
        let objLoader = new this.THREE.OBJLoader();
        

        var ship_material = new THREE.MeshBasicMaterial( { color: 0x444444 } );

        // objLoader.setMaterials(materials)
        objLoader.load('/hand.obj', (obj) => {
            object = obj;
            object.traverse( function( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = ship_material;
                }
            } );
            scene.add( object );
        })

        loader.load('/logo.png', function ( texture ) {
                // in this example we create the material when the texture is loaded
                var material = new THREE.MeshBasicMaterial( {
                    map: texture
                 } );

                 cube = new THREE.Mesh( geometry, material );
                 scene.add( cube );
                 animate();
            }
        );


        var animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          object.rotation.y -= 0.2;
          renderer.render( scene, camera );
        };
        
    }
    render(){
        return (
            <div id="three-container" ref={this.threecanvas} />
        )
    }
}

export default Scene;