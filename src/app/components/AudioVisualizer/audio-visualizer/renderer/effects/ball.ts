import * as THREE from "three";

export const createBall = () => {
  const icosahedronGeometry = new THREE.IcosahedronGeometry(10, 4);
  const lambertMaterial = new THREE.MeshLambertMaterial({
    color: 0xff00ee,
    wireframe: false,
  });

  const ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
  ball.position.set(0, 0, 0);
  return ball;
};

export const makeRoughBall = (
  mesh: THREE.Mesh<
    THREE.IcosahedronGeometry,
    THREE.MeshLambertMaterial,
    THREE.Object3DEventMap
  >,
  bassFr: number,
  treFr: number
) => {
  const positionAttribute = mesh.geometry.getAttribute("position");
  // mesh.geometry.vertices.forEach((vertex: any) => {
  //   const offset = mesh.geometry.parameters.radius;
  //   const amp = 7;
  //   const time = window.performance.now();
  //   vertex.normalize();
  //   const rf = 0.00001;
  //   const distance =
  //     offset +
  //     bassFr +
  //     noise3D(
  //       vertex.x + time * rf * 7,
  //       vertex.y + time * rf * 8,
  //       vertex.z + time * rf * 9
  //     ) *
  //       amp *
  //       treFr;
  //   vertex.multiplyScalar(distance);
  // });
  // mesh.geometry.verticesNeedUpdate = true;
  // mesh.geometry.normalsNeedUpdate = true;
  // mesh.geometry.computeVertexNormals();
  // mesh.geometry.computeFaceNormals();
};
