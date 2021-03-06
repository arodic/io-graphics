import {Clock} from "../../../three.js/build/three.module.js";
import {ThreeViewport} from "./viewport.js";
// import {OrbitCameraControls} from "../controls/camera/Orbit.js";

export class ThreePlayer extends ThreeViewport {
	static get Style() {
		return /* css */`
		:host:hover:not([playing])::after {
			color: white !important;
		}
		:host:not([loading]):not([playing])::after {
			content: '▶';
			color: var(--io-theme-link-color);
			display: inline-block;
			position: relative;
			top: 50%;
			left: 50%;
			margin-top: -32px;
			margin-left: -24px;
			font-size: 64px;
		}
		:host[loading]::after {
			content: '';
			display: inline-block;
			position: relative;
			top: 50%;
			left: 50%;
			margin-top: -32px;
			margin-left: -32px;
			width: 64px;
			height: 64px;
			background: var(--io-theme-link-color);
			animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
		}
		@keyframes lds-ripple {
			0% {
				width: 0;
			}
			25% {
				margin-left: -32px;
				width: 64px;
			}
			75% {
				margin-left: -32px;
				width: 64px;
			}
			100% {
				margin-left: 32px;
				width: 0;
			}
		}
		:host > canvas {
			transition: opacity 0.8s;
		}
		:host:hover:not([playing]) > canvas {
			opacity: 1;
		}
		:host:not([playing]) > canvas,
		:host[loading] > canvas {
			opacity: 0.2;
		}
		`;
	}
	static get Properties() {
		return {
			loading: {
				type: Boolean,
				reflect: 1
			},
			playing: {
				type: Boolean,
				reflect: 1
			},
			autoplay: false,
			time: 0,
			// controls: null,
			clock: Clock,
		};
	}
	static get Listeners() {
		return {
			'pointerdown': 'play',
		};
	}
	connectedCallback() {
		if (this.autoplay) this.play();
		super.connectedCallback();
		// this.attachControls(this.controls);
		// this.controls = new OrbitCameraControls();
		// TODO: handle camera change
	}
	disconnectedCallback() {
		this.stop();
		super.disconnectedCallback();
	}
	// controlsChanged(event) {
	//	 if (event.detail.oldValue) event.detail.oldValue.dispose();
	//	 if (this.controls) {
	//		 this.controls.addEventListener('change', this.queueRender);
	//	 }
	// }
	autoplayChanged() {
		if (this.autoplay) this.play();
	}
	play() {
		if (this.playing) return;
		this._oldTime = Date.now() / 1000;
		this.playing = true;
		this.update();
	}
	pause() {
	}
	stop() {
		this.playing = false;
	}
	update() {
		if (this.playing) {
			requestAnimationFrame(this.update);
			this.time = (Date.now() / 1000) - this._oldTime;
			this.queueRender();
		}
	}
	preRender() {
	}
	postRender() {
	}
	dispose() {
		this.renderer.dispose();
		this.scene.traverse(child => {
			if (child.material) child.material.dispose();
			if (child.geometry) child.geometry.dispose();
		});
		super.dispose();
	}
}

ThreePlayer.Register();
