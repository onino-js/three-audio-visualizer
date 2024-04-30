import * as THREE from "three";

export const createLights = () => {
  const ambientLight = new THREE.AmbientLight(0xaaaaaa);
  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.intensity = 0.9;
  spotLight.position.set(-10, 40, 20);
  // spotLight.lookAt(ball);
  spotLight.castShadow = true;
  return [ambientLight, spotLight];
};
