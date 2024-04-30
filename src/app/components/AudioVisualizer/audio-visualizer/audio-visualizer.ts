import * as THREE from "three";
import { createScene } from "./renderer/scene";
import { createRenderer, render } from "./renderer/renderer";
import { createBackground, makeRoughGround } from "./renderer/background";
import { createBall } from "./renderer/effects/ball";
import { createLights } from "./renderer/lights";
import { AudioAnalysisResults } from "./model";
import { Utils } from "./renderer/utils";

interface IAdioVisualizer {
  getScene: () => THREE.Scene;
  renderVisualizer: () => void;
}

export class AudioVisualizer implements IAdioVisualizer {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private renederElement: HTMLElement;
  private media: HTMLMediaElement;
  private analyser: AnalyserNode;
  private analysisResults: AudioAnalysisResults;
  private plane?: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshLambertMaterial,
    THREE.Object3DEventMap
  >;

  constructor(media: HTMLMediaElement, renederElement: HTMLDivElement) {
    this.media = media;
    this.renederElement = renederElement;
    this.analyser = Utils.createAudioAnalyzer(media);
    this.analysisResults = Utils.frequencyAnalyser(this.analyser);
    const { scene, camera } = createScene();
    this.scene = scene;
    this.camera = camera;
    this.renderer = createRenderer();
  }

  public initializeVisualizer() {
    const planes = createBackground();
    this.plane = planes[0];
    const ball = createBall();
    const lights = createLights();
    this.scene.add(...planes, ball, ...lights);
    this.camera.lookAt(ball.position);
    this.renederElement.appendChild(this.renderer.domElement);
  }

  public renderVisualizer() {
    this.renderer.render(this.scene, this.camera);
    makeRoughGround(
      this.plane!,
      Utils.modulate(
        this.analysisResults.frequency.properties.upperAvgFr,
        0,
        1,
        0.5,
        4
      )
    );
    requestAnimationFrame(() => this.renderVisualizer());
  }

  public getScene() {
    return this.scene;
  }

  public getRenderer() {
    return this.renderer;
  }
}
