import * as THREE from "../../../../three.js/src/constants.js";
import {Options} from "../../../../iogui/build/iogui.js";
function makeOptions(list) {
	const options = [];
	for (let i = 0; i < list.length; i++) {
		options.push({value: THREE[list[i]], label: list[i]});
	}
	return new Options(options);
}

const floatSlider = ['io-number-slider', {min: 0, max: 1, step: 0.001}];

const matrixProp = ['io-properties', {properties: ['elements'], labeled: false, config: {'elements': ['io-matrix']}}];

const propProp = ['io-properties', {config: {'type:object': ['io-item', {class: 'select'}]}}];

const textureFormatOptions = makeOptions([
	'AlphaFormat', 'RGBFormat', 'RGBAFormat', 'LuminanceFormat', 'LuminanceAlphaFormat', 'RGBEFormat', 'DepthFormat', 'DepthStencilFormat', 'RedFormat', 'RGB_ETC1_Format',
	{label: 'DXT Formats', options: makeOptions(['RGB_S3TC_DXT1_Format', 'RGBA_S3TC_DXT1_Format', 'RGBA_S3TC_DXT3_Format', 'RGBA_S3TC_DXT5_Format'])},
	{label: 'PVRTC Formats', options: makeOptions(['RGB_PVRTC_4BPPV1_Format', 'RGB_PVRTC_2BPPV1_Format', 'RGBA_PVRTC_4BPPV1_Format', 'RGBA_PVRTC_2BPPV1_Format'])},
	{label: 'ASTC Formats', options: makeOptions(['RGBA_ASTC_4x4_Format', 'RGBA_ASTC_5x4_Format', 'RGBA_ASTC_5x5_Format', 'RGBA_ASTC_6x5_Format', 'RGBA_ASTC_6x6_Format', 'RGBA_ASTC_8x5_Format', 'RGBA_ASTC_8x6_Format', 'RGBA_ASTC_8x8_Format', 'RGBA_ASTC_10x5_Format', 'RGBA_ASTC_10x6_Format', 'RGBA_ASTC_10x8_Format', 'RGBA_ASTC_10x10_Format', 'RGBA_ASTC_12x10_Format', 'RGBA_ASTC_12x12_Format'])},
]);

export const config = {
	// Basic types
	'type:boolean': ['io-switch'],
	'constructor:Vector2': ['io-vector', {step: 0.00001}],
	'constructor:Vector3': ['io-vector', {step: 0.00001}],
	'constructor:Vector4': ['io-vector', {step: 0.00001}],
	'constructor:Matrix2': matrixProp,
	'constructor:Matrix3': matrixProp,
	'constructor:Matrix4': matrixProp,
	'constructor:Euler': ['three-euler'],
	'constructor:Quaternion': ['io-vector', {step: 0.01}],
	'constructor:Color': ['io-color-vector'],
	'scale': ['io-vector', {linkable: true, step: 0.0001}],
	// Other types
	'constructor:Sphere': propProp, // Temp
	// Object3D
	'Object3D|drawMode': ['io-option-menu', {'options': makeOptions(['TrianglesDrawMode', 'TriangleStripDrawMode', 'TriangleFanDrawMode'])}],
	'Object3D|castShadow': ['io-switch'],
	'Object3D|receiveShadow': ['io-switch'],
	// BufferGeometry
	'BufferGeometry|constructor:Object': propProp,
	'BufferAttribute|constructor:Object': propProp,
	// 'BufferGeometry|index': ['three-attributes'],
	// 'BufferGeometry|attributes': ['three-attributes'],
	// Material
	// 'Material|shininess': ['io-slider', {'min': 0,'max': 100}],
	// 'Material|reflectivity': ['io-slider', {'min': 0,'max': 1}],
	// 'Material|refractionRatio': ['io-slider', {'min': 0,'max': 1}],
	// 'Material|aoMapIntensity': ['io-slider', {'min': 0,'max': 1}],
	// 'Material|lightMapIntensity': ['io-slider', {'min': 0,'max': 1}],
	'Material|opacity': floatSlider,
	'Material|reflectivity': floatSlider,
	'Material|refractionRatio': floatSlider,
	'Material|aoMapIntensity': floatSlider,
	'Material|emissiveIntensity': floatSlider,
	'Material|side': ['io-option-menu', {'options': makeOptions(['FrontSide', 'BackSide', 'DoubleSide'])}],
	'Material|shading': ['io-option-menu', {'options': makeOptions(['FlatShading', 'SmoothShading'])}],
	'Material|vertexColors': ['io-option-menu', {'options': makeOptions(['NoColors', 'FaceColors', 'VertexColors'])}],
	'Material|blending': ['io-option-menu', {'options': makeOptions(['NoBlending', 'NormalBlending', 'AdditiveBlending', 'SubtractiveBlending', 'MultiplyBlending', 'CustomBlending'])}],
	'Material|blendEquation': ['io-option-menu', {'options': makeOptions(['AddEquation', 'SubtractEquation', 'ReverseSubtractEquation', 'MinEquation', 'MaxEquation'])}],
	'Material|blendEquationAlpha': ['io-option-menu', {'options': makeOptions(['AddEquation', 'SubtractEquation', 'ReverseSubtractEquation', 'MinEquation', 'MaxEquation'])}],
	'Material|blendSrc': ['io-option-menu', {'options': makeOptions(['ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor', 'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor', 'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'])}],
	'Material|blendDst': ['io-option-menu', {'options': makeOptions(['ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor', 'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor', 'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'])}],
	'Material|blendSrcAlpha': ['io-option-menu', {'options': makeOptions(['ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor', 'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor', 'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'])}],
	'Material|blendDstAlpha': ['io-option-menu', {'options': makeOptions(['ZeroFactor', 'OneFactor', 'SrcColorFactor', 'OneMinusSrcColorFactor', 'SrcAlphaFactor', 'OneMinusSrcAlphaFactor', 'DstAlphaFactor', 'OneMinusDstAlphaFactor', 'DstColorFactor', 'OneMinusDstColorFactor', 'SrcAlphaSaturateFactor'])}],
	'Material|depthFunc': ['io-option-menu', {'options': makeOptions(['NeverDepth', 'AlwaysDepth', 'LessDepth', 'LessEqualDepth', 'EqualDepth', 'GreaterEqualDepth', 'GreaterDepth', 'NotEqualDepth'])}],
	'Material|combine': ['io-option-menu', {'options': makeOptions(['MultiplyOperation', 'MixOperation', 'AddOperation'])}],
	'Material|shadowSide': ['io-option-menu', {'options': makeOptions(['BackSide', 'FrontSide', 'DoubleSide'])}],
	'Material|stencilFunc': ['io-option-menu', {'options': makeOptions(['NeverStencilFunc', 'LessStencilFunc', 'EqualStencilFunc', 'LessEqualStencilFunc', 'GreaterStencilFunc', 'NotEqualStencilFunc', 'GreaterEqualStencilFunc', 'AlwaysStencilFunc'])}],
	'Material|stencilFail': ['io-option-menu', {'options': makeOptions(['ZeroStencilOp', 'KeepStencilOp', 'ReplaceStencilOp', 'IncrementStencilOp', 'DecrementStencilOp', 'IncrementWrapStencilOp', 'DecrementWrapStencilOp', 'InvertStencilOp'])}],
	'Material|stencilZFail': ['io-option-menu', {'options': makeOptions(['ZeroStencilOp', 'KeepStencilOp', 'ReplaceStencilOp', 'IncrementStencilOp', 'DecrementStencilOp', 'IncrementWrapStencilOp', 'DecrementWrapStencilOp', 'InvertStencilOp'])}],
	'Material|stencilZPass': ['io-option-menu', {'options': makeOptions(['ZeroStencilOp', 'KeepStencilOp', 'ReplaceStencilOp', 'IncrementStencilOp', 'DecrementStencilOp', 'IncrementWrapStencilOp', 'DecrementWrapStencilOp', 'InvertStencilOp'])}],
	'Material|depthPacking': ['io-option-menu', {'options': makeOptions(['BasicDepthPacking', 'RGBADepthPacking'])}],
	'Material|normalMapType': ['io-option-menu', {'options': makeOptions(['TangentSpaceNormalMap', 'ObjectSpaceNormalMap'])}],
	// Texture
	'Texture|mapping': ['io-option-menu', {'options': makeOptions(['UVMapping', 'CubeReflectionMapping', 'CubeRefractionMapping', 'EquirectangularReflectionMapping', 'EquirectangularRefractionMapping', 'SphericalReflectionMapping', 'CubeUVReflectionMapping', 'CubeUVRefractionMapping'])}],
	'Texture|wrapS': ['io-option-menu', {'options': makeOptions(['RepeatWrapping', 'ClampToEdgeWrapping', 'MirroredRepeatWrapping'])}],
	'Texture|wrapT': ['io-option-menu', {'options': makeOptions(['RepeatWrapping', 'ClampToEdgeWrapping', 'MirroredRepeatWrapping'])}],
	'Texture|minFilter': ['io-option-menu', {'options': makeOptions(['NearestFilter', 'NearestMipMapNearestFilter', 'NearestMipMapLinearFilter', 'LinearFilter', 'LinearMipMapNearestFilter', 'LinearMipMapLinearFilter'])}],
	'Texture|magFilter': ['io-option-menu', {'options': makeOptions(['NearestFilter', 'NearestMipMapNearestFilter', 'NearestMipMapLinearFilter', 'LinearFilter', 'LinearMipMapNearestFilter', 'LinearMipMapLinearFilter'])}],
	'Texture|type': ['io-option-menu', {'options': makeOptions(['UnsignedByteType', 'ByteType', 'ShortType', 'UnsignedShortType', 'IntType', 'UnsignedIntType', 'FloatType', 'HalfFloatType', 'UnsignedShort4444Type', 'UnsignedShort5551Type', 'UnsignedShort565Type', 'UnsignedInt248Type'])}],
	'Texture|encoding': ['io-option-menu', {'options': makeOptions(['LinearEncoding', 'sRGBEncoding', 'GammaEncoding', 'RGBEEncoding', 'LogLuvEncoding', 'RGBM7Encoding', 'RGBM16Encoding', 'RGBDEncoding'])}],
	'Texture|format': ['io-option-menu', {'options': textureFormatOptions}],
	'Texture|unpackAlignment': ['io-option-menu', {'options': makeOptions(['1', '2', '4', '8'])}],
	// TODO // FrontFaceDirectionCW, FrontFaceDirectionCCW, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack
	'WebGLRenderer|toneMapping': ['io-option-menu', {'options': makeOptions(['NoToneMapping', 'LinearToneMapping', 'ReinhardToneMapping', 'Uncharted2ToneMapping', 'CineonToneMapping', 'ACESFilmicToneMapping'])}],
	'WebGLShadowMap|type': ['io-option-menu', {'options': makeOptions(['BasicShadowMap', 'PCFShadowMap', 'PCFSoftShadowMap', 'VSMShadowMap'])}],
	// TODO // ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding
	'AnimationAction|loop': ['io-option-menu', {'options': makeOptions(['LoopOnce', 'LoopRepeat', 'LoopPingPong'])}],
	'KeyframeTrack|loop': ['io-option-menu', {'options': makeOptions(['InterpolateDiscrete', 'InterpolateLinear', 'InterpolateSmooth'])}],

	// Camera
	"Camera|fov": ["io-number-slider", {min: 0.001, max: 180, step: 0.1}],
	"Camera|zoom": ["io-number-slider", {min: 0.0001, max: 10, exponent: 3}],
	"Camera|near": ["io-number-slider", {min: 0.0001, max: 100000, step: 0.0001, exponent: 5}],
	"Camera|far": ["io-number-slider", {min: 0.0001, max: 100000, step: 0.0001, exponent: 5}],
};
