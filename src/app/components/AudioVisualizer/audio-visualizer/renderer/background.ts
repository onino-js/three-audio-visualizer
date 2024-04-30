import * as THREE from "three";
// import { noise2D } from "./renderer";

export const createBackground = () => {
  const planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0x6904ce,
    side: THREE.DoubleSide,
    wireframe: true,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(0, 30, 0);

  const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
  plane2.rotation.x = -0.5 * Math.PI;
  plane2.position.set(0, -30, 0);
  return [plane, plane2];
};

export const makeRoughGround = (
  mesh: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshLambertMaterial,
    THREE.Object3DEventMap
  >,
  distortionFr: number
) => {
  return mesh;
  // mesh.geometry.vertices.forEach((vertex: any) => {
  //   var amp = 2;
  //   var time = Date.now();
  //   var distance =
  //     (noise2D(vertex.x + time * 0.0003, vertex.y + time * 0.0001) + 0) *
  //     distortionFr *
  //     amp;
  //   vertex.z = distance;
  // });
  // mesh.geometry.verticesNeedUpdate = true;
  // mesh.geometry.normalsNeedUpdate = true;
  // mesh.geometry.computeVertexNormals();
  // mesh.geometry.computeFaceNormals();
};
