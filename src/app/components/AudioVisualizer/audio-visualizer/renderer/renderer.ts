import * as THREE from "three";
import { Utils } from "./utils";
import { createBackground, makeRoughGround } from "./background";
import { createBall, makeRoughBall } from "./effects/ball";
import { AudioAnalysisResults } from "../model";

export const createRenderer: () => THREE.WebGLRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
};

type renderProps = {
  scene: THREE.Scene;
  camera: THREE.Camera;
  analysysResults?: AudioAnalysisResults;
};

export const render = ({ analysysResults, scene, camera }: renderProps) => {
  const [plane, plane2] = createBackground();

  // const { analyser, frequency } = analysysResults;
  // const { properties: audioProperties, dataArray } = frequency;

  // makeRoughGround(
  //   plane,
  //   Utils.modulate(audioProperties.upperAvgFr, 0, 1, 0.5, 4)
  // );
  // makeRoughGround(
  //   plane2,
  //   Utils.modulate(audioProperties.lowerMaxFr, 0, 1, 0.5, 4)
  // );

  const ball = createBall();

  // makeRoughBall(
  //   ball,
  //   Utils.modulate(Math.pow(audioProperties.lowerMaxFr, 0.8), 0, 1, 0, 8),
  //   Utils.modulate(audioProperties.upperAvgFr, 0, 1, 0, 4)
  // );
  scene.add(plane, plane2, ball);
  camera.lookAt(ball.position);

  // group.rotation.y += 0.005;
  // renderer.render(scene, camera);
  // requestAnimationFrame(() => render(analyser, dataArray));
};
