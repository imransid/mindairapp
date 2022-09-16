import logo from "./logo.svg";
import "./App.css";

import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";

function App() {
  return (
    <div className="App">
      <a-scene
        mindar-image="imageTargetSrc: https://cdn.glitch.global/3ba75b05-ccf3-4dde-92cc-bcd698f47eb6/targets.mind?v=1663318196241"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <a-asset-item
            id="raccoonModel"
            src="https://raw.githubusercontent.com/imransid/CDN/main/ConfettiAnimation.gltf"
          ></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity id="example-target" mindar-image-target="targetIndex: 0">
          <a-gltf-model
            rotation="90 0 0 "
            position="0  0.25 0"
            scale="0.5 0.5 0.5"
            src="#raccoonModel"
            animation-mixer
          />
        </a-entity>
      </a-scene>
    </div>
  );
}

export default App;
