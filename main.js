import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const control = new OrbitControls(camera,rendererReference.domElement);
const loader = new GLTFLoader();