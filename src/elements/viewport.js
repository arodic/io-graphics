import {Scene} from "../../../three.js/build/three.module.js";
import {ThreeRenderer} from "./renderer.js";
import {OrbitCameraControls} from "../controls/camera/Orbit.js";
import {SelectionControls} from "../controls/Selection.js";
import {Selection} from "../core/Selection.js";
// import {CombinedTransformControls} from "../controls/transform/Combined.js";

export class ThreeViewport extends ThreeRenderer {
  static get properties() {
    return {
      cameraTool: OrbitCameraControls,
      selectionTool: SelectionControls,
      selection: Selection,
    };
  }
  constructor(props) {
    super(props);
    // this.sceneChanged();
    this.mapProperties({
      cameraTool: {scene: this.scene},
      selectionTool: {scene: this.scene, selection: this.selection},
    })
  }
  connectedCallback() {
    super.connectedCallback();
    this.cameraTool.attachViewport(this, this.camera);
    this.selectionTool.attachViewport(this, this.camera);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cameraTool.detachViewport(this, this.camera);
    this.selectionTool.detachViewport(this, this.camera);
  }
  changed() {
    // console.log('ss');
  }
  // sceneChanged() {
  //   this.selectionTool.scene = this.scene;
  //   this.render();
  // }
  // cameraChanged() {
  //   this.attachCameraTool(this.cameraTool);
  //   this.attachSelectionTool(this.selectionTool);
  //   this.render();
  // }
  selectionToolChanged(event) {
    if (event.detail.oldValue) event.detail.oldValue.detachViewport(this);
    event.detail.value.attachViewport(this, this.camera);
  }
  cameraToolChanged(event) {
    if (event.detail.oldValue) event.detail.oldValue.detachViewport(this);
    event.detail.value.attachViewport(this, this.camera);
  }
  dispose() {
    // TODO
  }
  preRender() {
  }
  postRender() {
    this.renderer.clearDepth();
    if (this.cameraTool.helperScene) this.renderer.render(this.cameraTool.helperScene, this.camera);
    if (this.selectionTool.helperScene) this.renderer.render(this.selectionTool.helperScene, this.camera);
  }
}

ThreeViewport.Register();
