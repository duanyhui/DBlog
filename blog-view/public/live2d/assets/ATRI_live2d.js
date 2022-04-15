(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["live2dLoader"] = factory();
	else
		root["live2dLoader"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../Framework/src/cubismdefaultparameterid.ts":
/*!**********************************************************!*\
  !*** ../../../Framework/src/cubismdefaultparameterid.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismDefaultParameterId = void 0;
exports.CubismDefaultParameterId = Object.freeze({
    HitAreaPrefix: 'HitArea',
    HitAreaHead: 'Head',
    HitAreaBody: 'Body',
    PartsIdCore: 'Parts01Core',
    PartsArmPrefix: 'Parts01Arm_',
    PartsArmLPrefix: 'Parts01ArmL_',
    PartsArmRPrefix: 'Parts01ArmR_',
    ParamAngleX: 'ParamAngleX',
    ParamAngleY: 'ParamAngleY',
    ParamAngleZ: 'ParamAngleZ',
    ParamEyeLOpen: 'ParamEyeLOpen',
    ParamEyeLSmile: 'ParamEyeLSmile',
    ParamEyeROpen: 'ParamEyeROpen',
    ParamEyeRSmile: 'ParamEyeRSmile',
    ParamEyeBallX: 'ParamEyeBallX',
    ParamEyeBallY: 'ParamEyeBallY',
    ParamEyeBallForm: 'ParamEyeBallForm',
    ParamBrowLY: 'ParamBrowLY',
    ParamBrowRY: 'ParamBrowRY',
    ParamBrowLX: 'ParamBrowLX',
    ParamBrowRX: 'ParamBrowRX',
    ParamBrowLAngle: 'ParamBrowLAngle',
    ParamBrowRAngle: 'ParamBrowRAngle',
    ParamBrowLForm: 'ParamBrowLForm',
    ParamBrowRForm: 'ParamBrowRForm',
    ParamMouthForm: 'ParamMouthForm',
    ParamMouthOpenY: 'ParamMouthOpenY',
    ParamCheek: 'ParamCheek',
    ParamBodyAngleX: 'ParamBodyAngleX',
    ParamBodyAngleY: 'ParamBodyAngleY',
    ParamBodyAngleZ: 'ParamBodyAngleZ',
    ParamBreath: 'ParamBreath',
    ParamArmLA: 'ParamArmLA',
    ParamArmRA: 'ParamArmRA',
    ParamArmLB: 'ParamArmLB',
    ParamArmRB: 'ParamArmRB',
    ParamHandL: 'ParamHandL',
    ParamHandR: 'ParamHandR',
    ParamHairFront: 'ParamHairFront',
    ParamHairSide: 'ParamHairSide',
    ParamHairBack: 'ParamHairBack',
    ParamHairFluffy: 'ParamHairFluffy',
    ParamShoulderY: 'ParamShoulderY',
    ParamBustX: 'ParamBustX',
    ParamBustY: 'ParamBustY',
    ParamBaseX: 'ParamBaseX',
    ParamBaseY: 'ParamBaseY',
    ParamNONE: 'NONE:'
});
var $ = __importStar(__webpack_require__(/*! ./cubismdefaultparameterid */ "../../../Framework/src/cubismdefaultparameterid.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.HitAreaBody = $.CubismDefaultParameterId.HitAreaBody;
    Live2DCubismFramework.HitAreaHead = $.CubismDefaultParameterId.HitAreaHead;
    Live2DCubismFramework.HitAreaPrefix = $.CubismDefaultParameterId.HitAreaPrefix;
    Live2DCubismFramework.ParamAngleX = $.CubismDefaultParameterId.ParamAngleX;
    Live2DCubismFramework.ParamAngleY = $.CubismDefaultParameterId.ParamAngleY;
    Live2DCubismFramework.ParamAngleZ = $.CubismDefaultParameterId.ParamAngleZ;
    Live2DCubismFramework.ParamArmLA = $.CubismDefaultParameterId.ParamArmLA;
    Live2DCubismFramework.ParamArmLB = $.CubismDefaultParameterId.ParamArmLB;
    Live2DCubismFramework.ParamArmRA = $.CubismDefaultParameterId.ParamArmRA;
    Live2DCubismFramework.ParamArmRB = $.CubismDefaultParameterId.ParamArmRB;
    Live2DCubismFramework.ParamBaseX = $.CubismDefaultParameterId.ParamBaseX;
    Live2DCubismFramework.ParamBaseY = $.CubismDefaultParameterId.ParamBaseY;
    Live2DCubismFramework.ParamBodyAngleX = $.CubismDefaultParameterId.ParamBodyAngleX;
    Live2DCubismFramework.ParamBodyAngleY = $.CubismDefaultParameterId.ParamBodyAngleY;
    Live2DCubismFramework.ParamBodyAngleZ = $.CubismDefaultParameterId.ParamBodyAngleZ;
    Live2DCubismFramework.ParamBreath = $.CubismDefaultParameterId.ParamBreath;
    Live2DCubismFramework.ParamBrowLAngle = $.CubismDefaultParameterId.ParamBrowLAngle;
    Live2DCubismFramework.ParamBrowLForm = $.CubismDefaultParameterId.ParamBrowLForm;
    Live2DCubismFramework.ParamBrowLX = $.CubismDefaultParameterId.ParamBrowLX;
    Live2DCubismFramework.ParamBrowLY = $.CubismDefaultParameterId.ParamBrowLY;
    Live2DCubismFramework.ParamBrowRAngle = $.CubismDefaultParameterId.ParamBrowRAngle;
    Live2DCubismFramework.ParamBrowRForm = $.CubismDefaultParameterId.ParamBrowRForm;
    Live2DCubismFramework.ParamBrowRX = $.CubismDefaultParameterId.ParamBrowRX;
    Live2DCubismFramework.ParamBrowRY = $.CubismDefaultParameterId.ParamBrowRY;
    Live2DCubismFramework.ParamBustX = $.CubismDefaultParameterId.ParamBustX;
    Live2DCubismFramework.ParamBustY = $.CubismDefaultParameterId.ParamBustY;
    Live2DCubismFramework.ParamCheek = $.CubismDefaultParameterId.ParamCheek;
    Live2DCubismFramework.ParamEyeBallForm = $.CubismDefaultParameterId.ParamEyeBallForm;
    Live2DCubismFramework.ParamEyeBallX = $.CubismDefaultParameterId.ParamEyeBallX;
    Live2DCubismFramework.ParamEyeBallY = $.CubismDefaultParameterId.ParamEyeBallY;
    Live2DCubismFramework.ParamEyeLOpen = $.CubismDefaultParameterId.ParamEyeLOpen;
    Live2DCubismFramework.ParamEyeLSmile = $.CubismDefaultParameterId.ParamEyeLSmile;
    Live2DCubismFramework.ParamEyeROpen = $.CubismDefaultParameterId.ParamEyeROpen;
    Live2DCubismFramework.ParamEyeRSmile = $.CubismDefaultParameterId.ParamEyeRSmile;
    Live2DCubismFramework.ParamHairBack = $.CubismDefaultParameterId.ParamHairBack;
    Live2DCubismFramework.ParamHairFluffy = $.CubismDefaultParameterId.ParamHairFluffy;
    Live2DCubismFramework.ParamHairFront = $.CubismDefaultParameterId.ParamHairFront;
    Live2DCubismFramework.ParamHairSide = $.CubismDefaultParameterId.ParamHairSide;
    Live2DCubismFramework.ParamHandL = $.CubismDefaultParameterId.ParamHandL;
    Live2DCubismFramework.ParamHandR = $.CubismDefaultParameterId.ParamHandR;
    Live2DCubismFramework.ParamMouthForm = $.CubismDefaultParameterId.ParamMouthForm;
    Live2DCubismFramework.ParamMouthOpenY = $.CubismDefaultParameterId.ParamMouthOpenY;
    Live2DCubismFramework.ParamNONE = $.CubismDefaultParameterId.ParamNONE;
    Live2DCubismFramework.ParamShoulderY = $.CubismDefaultParameterId.ParamShoulderY;
    Live2DCubismFramework.PartsArmLPrefix = $.CubismDefaultParameterId.PartsArmLPrefix;
    Live2DCubismFramework.PartsArmPrefix = $.CubismDefaultParameterId.PartsArmPrefix;
    Live2DCubismFramework.PartsArmRPrefix = $.CubismDefaultParameterId.PartsArmRPrefix;
    Live2DCubismFramework.PartsIdCore = $.CubismDefaultParameterId.PartsIdCore;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/cubismframeworkconfig.ts":
/*!*******************************************************!*\
  !*** ../../../Framework/src/cubismframeworkconfig.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CSM_LOG_LEVEL = exports.CSM_LOG_LEVEL_OFF = exports.CSM_LOG_LEVEL_ERROR = exports.CSM_LOG_LEVEL_WARNING = exports.CSM_LOG_LEVEL_INFO = exports.CSM_LOG_LEVEL_DEBUG = exports.CSM_LOG_LEVEL_VERBOSE = void 0;
exports.CSM_LOG_LEVEL_VERBOSE = 0;
exports.CSM_LOG_LEVEL_DEBUG = 1;
exports.CSM_LOG_LEVEL_INFO = 2;
exports.CSM_LOG_LEVEL_WARNING = 3;
exports.CSM_LOG_LEVEL_ERROR = 4;
exports.CSM_LOG_LEVEL_OFF = 5;
exports.CSM_LOG_LEVEL = exports.CSM_LOG_LEVEL_VERBOSE;


/***/ }),

/***/ "../../../Framework/src/cubismmodelsettingjson.ts":
/*!********************************************************!*\
  !*** ../../../Framework/src/cubismmodelsettingjson.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismModelSettingJson = void 0;
var icubismmodelsetting_1 = __webpack_require__(/*! ./icubismmodelsetting */ "../../../Framework/src/icubismmodelsetting.ts");
var live2dcubismframework_1 = __webpack_require__(/*! ./live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var csmvector_1 = __webpack_require__(/*! ./type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismjson_1 = __webpack_require__(/*! ./utils/cubismjson */ "../../../Framework/src/utils/cubismjson.ts");
var Version = 'Version';
var FileReferences = 'FileReferences';
var Groups = 'Groups';
var Layout = 'Layout';
var HitAreas = 'HitAreas';
var Moc = 'Moc';
var Textures = 'Textures';
var Physics = 'Physics';
var Pose = 'Pose';
var Expressions = 'Expressions';
var Motions = 'Motions';
var UserData = 'UserData';
var Name = 'Name';
var FilePath = 'File';
var Id = 'Id';
var Ids = 'Ids';
var Target = 'Target';
var Idle = 'Idle';
var TapBody = 'TapBody';
var PinchIn = 'PinchIn';
var PinchOut = 'PinchOut';
var Shake = 'Shake';
var FlickHead = 'FlickHead';
var Parameter = 'Parameter';
var SoundPath = 'Sound';
var FadeInTime = 'FadeInTime';
var FadeOutTime = 'FadeOutTime';
var CenterX = 'CenterX';
var CenterY = 'CenterY';
var X = 'X';
var Y = 'Y';
var Width = 'Width';
var Height = 'Height';
var LipSync = 'LipSync';
var EyeBlink = 'EyeBlink';
var InitParameter = 'init_param';
var InitPartsVisible = 'init_parts_visible';
var Val = 'val';
var FrequestNode;
(function (FrequestNode) {
    FrequestNode[FrequestNode["FrequestNode_Groups"] = 0] = "FrequestNode_Groups";
    FrequestNode[FrequestNode["FrequestNode_Moc"] = 1] = "FrequestNode_Moc";
    FrequestNode[FrequestNode["FrequestNode_Motions"] = 2] = "FrequestNode_Motions";
    FrequestNode[FrequestNode["FrequestNode_Expressions"] = 3] = "FrequestNode_Expressions";
    FrequestNode[FrequestNode["FrequestNode_Textures"] = 4] = "FrequestNode_Textures";
    FrequestNode[FrequestNode["FrequestNode_Physics"] = 5] = "FrequestNode_Physics";
    FrequestNode[FrequestNode["FrequestNode_Pose"] = 6] = "FrequestNode_Pose";
    FrequestNode[FrequestNode["FrequestNode_HitAreas"] = 7] = "FrequestNode_HitAreas";
})(FrequestNode || (FrequestNode = {}));
var CubismModelSettingJson = (function (_super) {
    __extends(CubismModelSettingJson, _super);
    function CubismModelSettingJson(buffer, size) {
        var _this = _super.call(this) || this;
        _this._json = cubismjson_1.CubismJson.create(buffer, size);
        if (_this._json) {
            _this._jsonValue = new csmvector_1.csmVector();
            _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(Groups));
            _this._jsonValue.pushBack(_this._json
                .getRoot()
                .getValueByString(FileReferences)
                .getValueByString(Moc));
            _this._jsonValue.pushBack(_this._json
                .getRoot()
                .getValueByString(FileReferences)
                .getValueByString(Motions));
            _this._jsonValue.pushBack(_this._json
                .getRoot()
                .getValueByString(FileReferences)
                .getValueByString(Expressions));
            _this._jsonValue.pushBack(_this._json
                .getRoot()
                .getValueByString(FileReferences)
                .getValueByString(Textures));
            _this._jsonValue.pushBack(_this._json
                .getRoot()
                .getValueByString(FileReferences)
                .getValueByString(Physics));
            _this._jsonValue.pushBack(_this._json
                .getRoot()
                .getValueByString(FileReferences)
                .getValueByString(Pose));
            _this._jsonValue.pushBack(_this._json.getRoot().getValueByString(HitAreas));
        }
        return _this;
    }
    CubismModelSettingJson.prototype.release = function () {
        cubismjson_1.CubismJson.delete(this._json);
        this._jsonValue = null;
    };
    CubismModelSettingJson.prototype.GetJson = function () {
        return this._json;
    };
    CubismModelSettingJson.prototype.getModelFileName = function () {
        if (!this.isExistModelFile()) {
            return '';
        }
        return this._jsonValue.at(FrequestNode.FrequestNode_Moc).getRawString();
    };
    CubismModelSettingJson.prototype.getTextureCount = function () {
        if (!this.isExistTextureFiles()) {
            return 0;
        }
        return this._jsonValue.at(FrequestNode.FrequestNode_Textures).getSize();
    };
    CubismModelSettingJson.prototype.getTextureDirectory = function () {
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Textures)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getTextureFileName = function (index) {
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Textures)
            .getValueByIndex(index)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getHitAreasCount = function () {
        if (!this.isExistHitAreas()) {
            return 0;
        }
        return this._jsonValue.at(FrequestNode.FrequestNode_HitAreas).getSize();
    };
    CubismModelSettingJson.prototype.getHitAreaId = function (index) {
        return live2dcubismframework_1.CubismFramework.getIdManager().getId(this._jsonValue
            .at(FrequestNode.FrequestNode_HitAreas)
            .getValueByIndex(index)
            .getValueByString(Id)
            .getRawString());
    };
    CubismModelSettingJson.prototype.getHitAreaName = function (index) {
        return this._jsonValue
            .at(FrequestNode.FrequestNode_HitAreas)
            .getValueByIndex(index)
            .getValueByString(Name)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getPhysicsFileName = function () {
        if (!this.isExistPhysicsFile()) {
            return '';
        }
        return this._jsonValue.at(FrequestNode.FrequestNode_Physics).getRawString();
    };
    CubismModelSettingJson.prototype.getPoseFileName = function () {
        if (!this.isExistPoseFile()) {
            return '';
        }
        return this._jsonValue.at(FrequestNode.FrequestNode_Pose).getRawString();
    };
    CubismModelSettingJson.prototype.getExpressionCount = function () {
        if (!this.isExistExpressionFile()) {
            return 0;
        }
        return this._jsonValue.at(FrequestNode.FrequestNode_Expressions).getSize();
    };
    CubismModelSettingJson.prototype.getExpressionName = function (index) {
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Expressions)
            .getValueByIndex(index)
            .getValueByString(Name)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getExpressionFileName = function (index) {
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Expressions)
            .getValueByIndex(index)
            .getValueByString(FilePath)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getMotionGroupCount = function () {
        if (!this.isExistMotionGroups()) {
            return 0;
        }
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getKeys()
            .getSize();
    };
    CubismModelSettingJson.prototype.getMotionGroupName = function (index) {
        if (!this.isExistMotionGroups()) {
            return null;
        }
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getKeys()
            .at(index);
    };
    CubismModelSettingJson.prototype.getMotionCount = function (groupName) {
        if (!this.isExistMotionGroupName(groupName)) {
            return 0;
        }
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getSize();
    };
    CubismModelSettingJson.prototype.getMotionFileName = function (groupName, index) {
        if (!this.isExistMotionGroupName(groupName)) {
            return '';
        }
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getValueByIndex(index)
            .getValueByString(FilePath)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getMotionSoundFileName = function (groupName, index) {
        if (!this.isExistMotionSoundFile(groupName, index)) {
            return '';
        }
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getValueByIndex(index)
            .getValueByString(SoundPath)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getMotionFadeInTimeValue = function (groupName, index) {
        if (!this.isExistMotionFadeIn(groupName, index)) {
            return -1.0;
        }
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getValueByIndex(index)
            .getValueByString(FadeInTime)
            .toFloat();
    };
    CubismModelSettingJson.prototype.getMotionFadeOutTimeValue = function (groupName, index) {
        if (!this.isExistMotionFadeOut(groupName, index)) {
            return -1.0;
        }
        return this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getValueByIndex(index)
            .getValueByString(FadeOutTime)
            .toFloat();
    };
    CubismModelSettingJson.prototype.getUserDataFile = function () {
        if (!this.isExistUserDataFile()) {
            return '';
        }
        return this._json
            .getRoot()
            .getValueByString(FileReferences)
            .getValueByString(UserData)
            .getRawString();
    };
    CubismModelSettingJson.prototype.getLayoutMap = function (outLayoutMap) {
        var map = this._json
            .getRoot()
            .getValueByString(Layout)
            .getMap();
        if (map == null) {
            return false;
        }
        var ret = false;
        for (var ite = map.begin(); ite.notEqual(map.end()); ite.preIncrement()) {
            outLayoutMap.setValue(ite.ptr().first, ite.ptr().second.toFloat());
            ret = true;
        }
        return ret;
    };
    CubismModelSettingJson.prototype.getEyeBlinkParameterCount = function () {
        if (!this.isExistEyeBlinkParameters()) {
            return 0;
        }
        var num = 0;
        for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
            var refI = this._jsonValue
                .at(FrequestNode.FrequestNode_Groups)
                .getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(Name).getRawString() == EyeBlink) {
                num = refI
                    .getValueByString(Ids)
                    .getVector()
                    .getSize();
                break;
            }
        }
        return num;
    };
    CubismModelSettingJson.prototype.getEyeBlinkParameterId = function (index) {
        if (!this.isExistEyeBlinkParameters()) {
            return null;
        }
        for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
            var refI = this._jsonValue
                .at(FrequestNode.FrequestNode_Groups)
                .getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(Name).getRawString() == EyeBlink) {
                return live2dcubismframework_1.CubismFramework.getIdManager().getId(refI
                    .getValueByString(Ids)
                    .getValueByIndex(index)
                    .getRawString());
            }
        }
        return null;
    };
    CubismModelSettingJson.prototype.getLipSyncParameterCount = function () {
        if (!this.isExistLipSyncParameters()) {
            return 0;
        }
        var num = 0;
        for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
            var refI = this._jsonValue
                .at(FrequestNode.FrequestNode_Groups)
                .getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(Name).getRawString() == LipSync) {
                num = refI
                    .getValueByString(Ids)
                    .getVector()
                    .getSize();
                break;
            }
        }
        return num;
    };
    CubismModelSettingJson.prototype.getLipSyncParameterId = function (index) {
        if (!this.isExistLipSyncParameters()) {
            return null;
        }
        for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); i++) {
            var refI = this._jsonValue
                .at(FrequestNode.FrequestNode_Groups)
                .getValueByIndex(i);
            if (refI.isNull() || refI.isError()) {
                continue;
            }
            if (refI.getValueByString(Name).getRawString() == LipSync) {
                return live2dcubismframework_1.CubismFramework.getIdManager().getId(refI
                    .getValueByString(Ids)
                    .getValueByIndex(index)
                    .getRawString());
            }
        }
        return null;
    };
    CubismModelSettingJson.prototype.isExistModelFile = function () {
        var node = this._jsonValue.at(FrequestNode.FrequestNode_Moc);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistTextureFiles = function () {
        var node = this._jsonValue.at(FrequestNode.FrequestNode_Textures);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistHitAreas = function () {
        var node = this._jsonValue.at(FrequestNode.FrequestNode_HitAreas);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistPhysicsFile = function () {
        var node = this._jsonValue.at(FrequestNode.FrequestNode_Physics);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistPoseFile = function () {
        var node = this._jsonValue.at(FrequestNode.FrequestNode_Pose);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistExpressionFile = function () {
        var node = this._jsonValue.at(FrequestNode.FrequestNode_Expressions);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistMotionGroups = function () {
        var node = this._jsonValue.at(FrequestNode.FrequestNode_Motions);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistMotionGroupName = function (groupName) {
        var node = this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistMotionSoundFile = function (groupName, index) {
        var node = this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getValueByIndex(index)
            .getValueByString(SoundPath);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistMotionFadeIn = function (groupName, index) {
        var node = this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getValueByIndex(index)
            .getValueByString(FadeInTime);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistMotionFadeOut = function (groupName, index) {
        var node = this._jsonValue
            .at(FrequestNode.FrequestNode_Motions)
            .getValueByString(groupName)
            .getValueByIndex(index)
            .getValueByString(FadeOutTime);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistUserDataFile = function () {
        var node = this._json
            .getRoot()
            .getValueByString(FileReferences)
            .getValueByString(UserData);
        return !node.isNull() && !node.isError();
    };
    CubismModelSettingJson.prototype.isExistEyeBlinkParameters = function () {
        if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).isNull() ||
            this._jsonValue.at(FrequestNode.FrequestNode_Groups).isError()) {
            return false;
        }
        for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); ++i) {
            if (this._jsonValue
                .at(FrequestNode.FrequestNode_Groups)
                .getValueByIndex(i)
                .getValueByString(Name)
                .getRawString() == EyeBlink) {
                return true;
            }
        }
        return false;
    };
    CubismModelSettingJson.prototype.isExistLipSyncParameters = function () {
        if (this._jsonValue.at(FrequestNode.FrequestNode_Groups).isNull() ||
            this._jsonValue.at(FrequestNode.FrequestNode_Groups).isError()) {
            return false;
        }
        for (var i = 0; i < this._jsonValue.at(FrequestNode.FrequestNode_Groups).getSize(); ++i) {
            if (this._jsonValue
                .at(FrequestNode.FrequestNode_Groups)
                .getValueByIndex(i)
                .getValueByString(Name)
                .getRawString() == LipSync) {
                return true;
            }
        }
        return false;
    };
    return CubismModelSettingJson;
}(icubismmodelsetting_1.ICubismModelSetting));
exports.CubismModelSettingJson = CubismModelSettingJson;
var $ = __importStar(__webpack_require__(/*! ./cubismmodelsettingjson */ "../../../Framework/src/cubismmodelsettingjson.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelSettingJson = $.CubismModelSettingJson;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/effect/cubismbreath.ts":
/*!*****************************************************!*\
  !*** ../../../Framework/src/effect/cubismbreath.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.BreathParameterData = exports.CubismBreath = void 0;
var CubismBreath = (function () {
    function CubismBreath() {
        this._currentTime = 0.0;
    }
    CubismBreath.create = function () {
        return new CubismBreath();
    };
    CubismBreath.delete = function (instance) {
        if (instance != null) {
            instance = null;
        }
    };
    CubismBreath.prototype.setParameters = function (breathParameters) {
        this._breathParameters = breathParameters;
    };
    CubismBreath.prototype.getParameters = function () {
        return this._breathParameters;
    };
    CubismBreath.prototype.updateParameters = function (model, deltaTimeSeconds) {
        this._currentTime += deltaTimeSeconds;
        var t = this._currentTime * 2.0 * 3.14159;
        for (var i = 0; i < this._breathParameters.getSize(); ++i) {
            var data = this._breathParameters.at(i);
            model.addParameterValueById(data.parameterId, data.offset + data.peak * Math.sin(t / data.cycle), data.weight);
        }
    };
    return CubismBreath;
}());
exports.CubismBreath = CubismBreath;
var BreathParameterData = (function () {
    function BreathParameterData(parameterId, offset, peak, cycle, weight) {
        this.parameterId = parameterId == undefined ? null : parameterId;
        this.offset = offset == undefined ? 0.0 : offset;
        this.peak = peak == undefined ? 0.0 : peak;
        this.cycle = cycle == undefined ? 0.0 : cycle;
        this.weight = weight == undefined ? 0.0 : weight;
    }
    return BreathParameterData;
}());
exports.BreathParameterData = BreathParameterData;
var $ = __importStar(__webpack_require__(/*! ./cubismbreath */ "../../../Framework/src/effect/cubismbreath.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.BreathParameterData = $.BreathParameterData;
    Live2DCubismFramework.CubismBreath = $.CubismBreath;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/effect/cubismeyeblink.ts":
/*!*******************************************************!*\
  !*** ../../../Framework/src/effect/cubismeyeblink.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.EyeState = exports.CubismEyeBlink = void 0;
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var CubismEyeBlink = (function () {
    function CubismEyeBlink(modelSetting) {
        this._blinkingState = EyeState.EyeState_First;
        this._nextBlinkingTime = 0.0;
        this._stateStartTimeSeconds = 0.0;
        this._blinkingIntervalSeconds = 4.0;
        this._closingSeconds = 0.1;
        this._closedSeconds = 0.05;
        this._openingSeconds = 0.15;
        this._userTimeSeconds = 0.0;
        this._parameterIds = new csmvector_1.csmVector();
        if (modelSetting == null) {
            return;
        }
        for (var i = 0; i < modelSetting.getEyeBlinkParameterCount(); ++i) {
            this._parameterIds.pushBack(modelSetting.getEyeBlinkParameterId(i));
        }
    }
    CubismEyeBlink.create = function (modelSetting) {
        if (modelSetting === void 0) { modelSetting = null; }
        return new CubismEyeBlink(modelSetting);
    };
    CubismEyeBlink.delete = function (eyeBlink) {
        if (eyeBlink != null) {
            eyeBlink = null;
        }
    };
    CubismEyeBlink.prototype.setBlinkingInterval = function (blinkingInterval) {
        this._blinkingIntervalSeconds = blinkingInterval;
    };
    CubismEyeBlink.prototype.setBlinkingSetting = function (closing, closed, opening) {
        this._closingSeconds = closing;
        this._closedSeconds = closed;
        this._openingSeconds = opening;
    };
    CubismEyeBlink.prototype.setParameterIds = function (parameterIds) {
        this._parameterIds = parameterIds;
    };
    CubismEyeBlink.prototype.getParameterIds = function () {
        return this._parameterIds;
    };
    CubismEyeBlink.prototype.updateParameters = function (model, deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        var parameterValue;
        var t = 0.0;
        switch (this._blinkingState) {
            case EyeState.EyeState_Closing:
                t =
                    (this._userTimeSeconds - this._stateStartTimeSeconds) /
                        this._closingSeconds;
                if (t >= 1.0) {
                    t = 1.0;
                    this._blinkingState = EyeState.EyeState_Closed;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 1.0 - t;
                break;
            case EyeState.EyeState_Closed:
                t =
                    (this._userTimeSeconds - this._stateStartTimeSeconds) /
                        this._closedSeconds;
                if (t >= 1.0) {
                    this._blinkingState = EyeState.EyeState_Opening;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 0.0;
                break;
            case EyeState.EyeState_Opening:
                t =
                    (this._userTimeSeconds - this._stateStartTimeSeconds) /
                        this._openingSeconds;
                if (t >= 1.0) {
                    t = 1.0;
                    this._blinkingState = EyeState.EyeState_Interval;
                    this._nextBlinkingTime = this.determinNextBlinkingTiming();
                }
                parameterValue = t;
                break;
            case EyeState.EyeState_Interval:
                if (this._nextBlinkingTime < this._userTimeSeconds) {
                    this._blinkingState = EyeState.EyeState_Closing;
                    this._stateStartTimeSeconds = this._userTimeSeconds;
                }
                parameterValue = 1.0;
                break;
            case EyeState.EyeState_First:
            default:
                this._blinkingState = EyeState.EyeState_Interval;
                this._nextBlinkingTime = this.determinNextBlinkingTiming();
                parameterValue = 1.0;
                break;
        }
        if (!CubismEyeBlink.CloseIfZero) {
            parameterValue = -parameterValue;
        }
        for (var i = 0; i < this._parameterIds.getSize(); ++i) {
            model.setParameterValueById(this._parameterIds.at(i), parameterValue);
        }
    };
    CubismEyeBlink.prototype.determinNextBlinkingTiming = function () {
        var r = Math.random();
        return (this._userTimeSeconds + r * (2.0 * this._blinkingIntervalSeconds - 1.0));
    };
    CubismEyeBlink.CloseIfZero = true;
    return CubismEyeBlink;
}());
exports.CubismEyeBlink = CubismEyeBlink;
var EyeState;
(function (EyeState) {
    EyeState[EyeState["EyeState_First"] = 0] = "EyeState_First";
    EyeState[EyeState["EyeState_Interval"] = 1] = "EyeState_Interval";
    EyeState[EyeState["EyeState_Closing"] = 2] = "EyeState_Closing";
    EyeState[EyeState["EyeState_Closed"] = 3] = "EyeState_Closed";
    EyeState[EyeState["EyeState_Opening"] = 4] = "EyeState_Opening";
})(EyeState = exports.EyeState || (exports.EyeState = {}));
var $ = __importStar(__webpack_require__(/*! ./cubismeyeblink */ "../../../Framework/src/effect/cubismeyeblink.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismEyeBlink = $.CubismEyeBlink;
    Live2DCubismFramework.EyeState = $.EyeState;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/effect/cubismpose.ts":
/*!***************************************************!*\
  !*** ../../../Framework/src/effect/cubismpose.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.PartData = exports.CubismPose = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismjson_1 = __webpack_require__(/*! ../utils/cubismjson */ "../../../Framework/src/utils/cubismjson.ts");
var Epsilon = 0.001;
var DefaultFadeInSeconds = 0.5;
var FadeIn = 'FadeInTime';
var Link = 'Link';
var Groups = 'Groups';
var Id = 'Id';
var CubismPose = (function () {
    function CubismPose() {
        this._fadeTimeSeconds = DefaultFadeInSeconds;
        this._lastModel = null;
        this._partGroups = new csmvector_1.csmVector();
        this._partGroupCounts = new csmvector_1.csmVector();
    }
    CubismPose.create = function (pose3json, size) {
        var ret = new CubismPose();
        var json = cubismjson_1.CubismJson.create(pose3json, size);
        var root = json.getRoot();
        if (!root.getValueByString(FadeIn).isNull()) {
            ret._fadeTimeSeconds = root
                .getValueByString(FadeIn)
                .toFloat(DefaultFadeInSeconds);
            if (ret._fadeTimeSeconds <= 0.0) {
                ret._fadeTimeSeconds = DefaultFadeInSeconds;
            }
        }
        var poseListInfo = root.getValueByString(Groups);
        var poseCount = poseListInfo.getSize();
        for (var poseIndex = 0; poseIndex < poseCount; ++poseIndex) {
            var idListInfo = poseListInfo.getValueByIndex(poseIndex);
            var idCount = idListInfo.getSize();
            var groupCount = 0;
            for (var groupIndex = 0; groupIndex < idCount; ++groupIndex) {
                var partInfo = idListInfo.getValueByIndex(groupIndex);
                var partData = new PartData();
                var parameterId = live2dcubismframework_1.CubismFramework.getIdManager().getId(partInfo.getValueByString(Id).getRawString());
                partData.partId = parameterId;
                if (!partInfo.getValueByString(Link).isNull()) {
                    var linkListInfo = partInfo.getValueByString(Link);
                    var linkCount = linkListInfo.getSize();
                    for (var linkIndex = 0; linkIndex < linkCount; ++linkIndex) {
                        var linkPart = new PartData();
                        var linkId = live2dcubismframework_1.CubismFramework.getIdManager().getId(linkListInfo.getValueByIndex(linkIndex).getString());
                        linkPart.partId = linkId;
                        partData.link.pushBack(linkPart);
                    }
                }
                ret._partGroups.pushBack(partData.clone());
                ++groupCount;
            }
            ret._partGroupCounts.pushBack(groupCount);
        }
        cubismjson_1.CubismJson.delete(json);
        return ret;
    };
    CubismPose.delete = function (pose) {
        if (pose != null) {
            pose = null;
        }
    };
    CubismPose.prototype.updateParameters = function (model, deltaTimeSeconds) {
        if (model != this._lastModel) {
            this.reset(model);
        }
        this._lastModel = model;
        if (deltaTimeSeconds < 0.0) {
            deltaTimeSeconds = 0.0;
        }
        var beginIndex = 0;
        for (var i = 0; i < this._partGroupCounts.getSize(); i++) {
            var partGroupCount = this._partGroupCounts.at(i);
            this.doFade(model, deltaTimeSeconds, beginIndex, partGroupCount);
            beginIndex += partGroupCount;
        }
        this.copyPartOpacities(model);
    };
    CubismPose.prototype.reset = function (model) {
        var beginIndex = 0;
        for (var i = 0; i < this._partGroupCounts.getSize(); ++i) {
            var groupCount = this._partGroupCounts.at(i);
            for (var j = beginIndex; j < beginIndex + groupCount; ++j) {
                this._partGroups.at(j).initialize(model);
                var partsIndex = this._partGroups.at(j).partIndex;
                var paramIndex = this._partGroups.at(j).parameterIndex;
                if (partsIndex < 0) {
                    continue;
                }
                model.setPartOpacityByIndex(partsIndex, j == beginIndex ? 1.0 : 0.0);
                model.setParameterValueByIndex(paramIndex, j == beginIndex ? 1.0 : 0.0);
                for (var k = 0; k < this._partGroups.at(j).link.getSize(); ++k) {
                    this._partGroups
                        .at(j)
                        .link.at(k)
                        .initialize(model);
                }
            }
            beginIndex += groupCount;
        }
    };
    CubismPose.prototype.copyPartOpacities = function (model) {
        for (var groupIndex = 0; groupIndex < this._partGroups.getSize(); ++groupIndex) {
            var partData = this._partGroups.at(groupIndex);
            if (partData.link.getSize() == 0) {
                continue;
            }
            var partIndex = this._partGroups.at(groupIndex).partIndex;
            var opacity = model.getPartOpacityByIndex(partIndex);
            for (var linkIndex = 0; linkIndex < partData.link.getSize(); ++linkIndex) {
                var linkPart = partData.link.at(linkIndex);
                var linkPartIndex = linkPart.partIndex;
                if (linkPartIndex < 0) {
                    continue;
                }
                model.setPartOpacityByIndex(linkPartIndex, opacity);
            }
        }
    };
    CubismPose.prototype.doFade = function (model, deltaTimeSeconds, beginIndex, partGroupCount) {
        var visiblePartIndex = -1;
        var newOpacity = 1.0;
        var phi = 0.5;
        var backOpacityThreshold = 0.15;
        for (var i = beginIndex; i < beginIndex + partGroupCount; ++i) {
            var partIndex = this._partGroups.at(i).partIndex;
            var paramIndex = this._partGroups.at(i).parameterIndex;
            if (model.getParameterValueByIndex(paramIndex) > Epsilon) {
                if (visiblePartIndex >= 0) {
                    break;
                }
                visiblePartIndex = i;
                newOpacity = model.getPartOpacityByIndex(partIndex);
                newOpacity += deltaTimeSeconds / this._fadeTimeSeconds;
                if (newOpacity > 1.0) {
                    newOpacity = 1.0;
                }
            }
        }
        if (visiblePartIndex < 0) {
            visiblePartIndex = 0;
            newOpacity = 1.0;
        }
        for (var i = beginIndex; i < beginIndex + partGroupCount; ++i) {
            var partsIndex = this._partGroups.at(i).partIndex;
            if (visiblePartIndex == i) {
                model.setPartOpacityByIndex(partsIndex, newOpacity);
            }
            else {
                var opacity = model.getPartOpacityByIndex(partsIndex);
                var a1 = void 0;
                if (newOpacity < phi) {
                    a1 = (newOpacity * (phi - 1)) / phi + 1.0;
                }
                else {
                    a1 = ((1 - newOpacity) * phi) / (1.0 - phi);
                }
                var backOpacity = (1.0 - a1) * (1.0 - newOpacity);
                if (backOpacity > backOpacityThreshold) {
                    a1 = 1.0 - backOpacityThreshold / (1.0 - newOpacity);
                }
                if (opacity > a1) {
                    opacity = a1;
                }
                model.setPartOpacityByIndex(partsIndex, opacity);
            }
        }
    };
    return CubismPose;
}());
exports.CubismPose = CubismPose;
var PartData = (function () {
    function PartData(v) {
        this.parameterIndex = 0;
        this.partIndex = 0;
        this.link = new csmvector_1.csmVector();
        if (v != undefined) {
            this.partId = v.partId;
            for (var ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()) {
                this.link.pushBack(ite.ptr().clone());
            }
        }
    }
    PartData.prototype.assignment = function (v) {
        this.partId = v.partId;
        for (var ite = v.link.begin(); ite.notEqual(v.link.end()); ite.preIncrement()) {
            this.link.pushBack(ite.ptr().clone());
        }
        return this;
    };
    PartData.prototype.initialize = function (model) {
        this.parameterIndex = model.getParameterIndex(this.partId);
        this.partIndex = model.getPartIndex(this.partId);
        model.setParameterValueByIndex(this.parameterIndex, 1);
    };
    PartData.prototype.clone = function () {
        var clonePartData = new PartData();
        clonePartData.partId = this.partId;
        clonePartData.parameterIndex = this.parameterIndex;
        clonePartData.partIndex = this.partIndex;
        clonePartData.link = new csmvector_1.csmVector();
        for (var ite = this.link.begin(); ite.notEqual(this.link.end()); ite.increment()) {
            clonePartData.link.pushBack(ite.ptr().clone());
        }
        return clonePartData;
    };
    return PartData;
}());
exports.PartData = PartData;
var $ = __importStar(__webpack_require__(/*! ./cubismpose */ "../../../Framework/src/effect/cubismpose.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismPose = $.CubismPose;
    Live2DCubismFramework.PartData = $.PartData;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/icubismmodelsetting.ts":
/*!*****************************************************!*\
  !*** ../../../Framework/src/icubismmodelsetting.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.ICubismModelSetting = void 0;
var ICubismModelSetting = (function () {
    function ICubismModelSetting() {
    }
    return ICubismModelSetting;
}());
exports.ICubismModelSetting = ICubismModelSetting;
var $ = __importStar(__webpack_require__(/*! ./icubismmodelsetting */ "../../../Framework/src/icubismmodelsetting.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.ICubismModelSetting = $.ICubismModelSetting;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/id/cubismid.ts":
/*!*********************************************!*\
  !*** ../../../Framework/src/id/cubismid.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismId = void 0;
var csmstring_1 = __webpack_require__(/*! ../type/csmstring */ "../../../Framework/src/type/csmstring.ts");
var CubismId = (function () {
    function CubismId(id) {
        if (typeof id === 'string') {
            this._id = new csmstring_1.csmString(id);
            return;
        }
        this._id = id;
    }
    CubismId.prototype.getString = function () {
        return this._id;
    };
    CubismId.prototype.isEqual = function (c) {
        if (typeof c === 'string') {
            return this._id.isEqual(c);
        }
        else if (c instanceof csmstring_1.csmString) {
            return this._id.isEqual(c.s);
        }
        else if (c instanceof CubismId) {
            return this._id.isEqual(c._id.s);
        }
        return false;
    };
    CubismId.prototype.isNotEqual = function (c) {
        if (typeof c == 'string') {
            return !this._id.isEqual(c);
        }
        else if (c instanceof csmstring_1.csmString) {
            return !this._id.isEqual(c.s);
        }
        else if (c instanceof CubismId) {
            return !this._id.isEqual(c._id.s);
        }
        return false;
    };
    return CubismId;
}());
exports.CubismId = CubismId;
var $ = __importStar(__webpack_require__(/*! ./cubismid */ "../../../Framework/src/id/cubismid.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismId = $.CubismId;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/id/cubismidmanager.ts":
/*!****************************************************!*\
  !*** ../../../Framework/src/id/cubismidmanager.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismIdManager = void 0;
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismid_1 = __webpack_require__(/*! ./cubismid */ "../../../Framework/src/id/cubismid.ts");
var CubismIdManager = (function () {
    function CubismIdManager() {
        this._ids = new csmvector_1.csmVector();
    }
    CubismIdManager.prototype.release = function () {
        for (var i = 0; i < this._ids.getSize(); ++i) {
            this._ids.set(i, void 0);
        }
        this._ids = null;
    };
    CubismIdManager.prototype.registerIds = function (ids) {
        for (var i = 0; i < ids.length; i++) {
            this.registerId(ids[i]);
        }
    };
    CubismIdManager.prototype.registerId = function (id) {
        var result = null;
        if ('string' == typeof id) {
            if ((result = this.findId(id)) != null) {
                return result;
            }
            result = new cubismid_1.CubismId(id);
            this._ids.pushBack(result);
        }
        else {
            return this.registerId(id.s);
        }
        return result;
    };
    CubismIdManager.prototype.getId = function (id) {
        return this.registerId(id);
    };
    CubismIdManager.prototype.isExist = function (id) {
        if ('string' == typeof id) {
            return this.findId(id) != null;
        }
        return this.isExist(id.s);
    };
    CubismIdManager.prototype.findId = function (id) {
        for (var i = 0; i < this._ids.getSize(); ++i) {
            if (this._ids
                .at(i)
                .getString()
                .isEqual(id)) {
                return this._ids.at(i);
            }
        }
        return null;
    };
    return CubismIdManager;
}());
exports.CubismIdManager = CubismIdManager;
var $ = __importStar(__webpack_require__(/*! ./cubismidmanager */ "../../../Framework/src/id/cubismidmanager.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismIdManager = $.CubismIdManager;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/live2dcubismframework.ts":
/*!*******************************************************!*\
  !*** ../../../Framework/src/live2dcubismframework.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.LogLevel = exports.Option = exports.CubismFramework = exports.csmDelete = exports.Constant = exports.strtod = void 0;
var cubismidmanager_1 = __webpack_require__(/*! ./id/cubismidmanager */ "../../../Framework/src/id/cubismidmanager.ts");
var cubismrenderer_1 = __webpack_require__(/*! ./rendering/cubismrenderer */ "../../../Framework/src/rendering/cubismrenderer.ts");
var cubismdebug_1 = __webpack_require__(/*! ./utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var cubismjson_1 = __webpack_require__(/*! ./utils/cubismjson */ "../../../Framework/src/utils/cubismjson.ts");
function strtod(s, endPtr) {
    var index = 0;
    for (var i = 1;; i++) {
        var testC = s.slice(i - 1, i);
        if (testC == 'e' || testC == '-' || testC == 'E') {
            continue;
        }
        var test = s.substring(0, i);
        var number = Number(test);
        if (isNaN(number)) {
            break;
        }
        index = i;
    }
    var d = parseFloat(s);
    if (isNaN(d)) {
        d = NaN;
    }
    endPtr[0] = s.slice(index);
    return d;
}
exports.strtod = strtod;
var s_isStarted = false;
var s_isInitialized = false;
var s_option = null;
var s_cubismIdManager = null;
exports.Constant = Object.freeze({
    vertexOffset: 0,
    vertexStep: 2
});
function csmDelete(address) {
    if (!address) {
        return;
    }
    address = void 0;
}
exports.csmDelete = csmDelete;
var CubismFramework = (function () {
    function CubismFramework() {
    }
    CubismFramework.startUp = function (option) {
        if (option === void 0) { option = null; }
        if (s_isStarted) {
            (0, cubismdebug_1.CubismLogInfo)('CubismFramework.startUp() is already done.');
            return s_isStarted;
        }
        s_option = option;
        if (s_option != null) {
            Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
        }
        s_isStarted = true;
        if (s_isStarted) {
            var version = Live2DCubismCore.Version.csmGetVersion();
            var major = (version & 0xff000000) >> 24;
            var minor = (version & 0x00ff0000) >> 16;
            var patch = version & 0x0000ffff;
            var versionNumber = version;
            (0, cubismdebug_1.CubismLogInfo)("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
        }
        (0, cubismdebug_1.CubismLogInfo)('CubismFramework.startUp() is complete.');
        return s_isStarted;
    };
    CubismFramework.cleanUp = function () {
        s_isStarted = false;
        s_isInitialized = false;
        s_option = null;
        s_cubismIdManager = null;
    };
    CubismFramework.initialize = function () {
        (0, cubismdebug_1.CSM_ASSERT)(s_isStarted);
        if (!s_isStarted) {
            (0, cubismdebug_1.CubismLogWarning)('CubismFramework is not started.');
            return;
        }
        if (s_isInitialized) {
            (0, cubismdebug_1.CubismLogWarning)('CubismFramework.initialize() skipped, already initialized.');
            return;
        }
        cubismjson_1.Value.staticInitializeNotForClientCall();
        s_cubismIdManager = new cubismidmanager_1.CubismIdManager();
        s_isInitialized = true;
        (0, cubismdebug_1.CubismLogInfo)('CubismFramework.initialize() is complete.');
    };
    CubismFramework.dispose = function () {
        (0, cubismdebug_1.CSM_ASSERT)(s_isStarted);
        if (!s_isStarted) {
            (0, cubismdebug_1.CubismLogWarning)('CubismFramework is not started.');
            return;
        }
        if (!s_isInitialized) {
            (0, cubismdebug_1.CubismLogWarning)('CubismFramework.dispose() skipped, not initialized.');
            return;
        }
        cubismjson_1.Value.staticReleaseNotForClientCall();
        s_cubismIdManager.release();
        s_cubismIdManager = null;
        cubismrenderer_1.CubismRenderer.staticRelease();
        s_isInitialized = false;
        (0, cubismdebug_1.CubismLogInfo)('CubismFramework.dispose() is complete.');
    };
    CubismFramework.isStarted = function () {
        return s_isStarted;
    };
    CubismFramework.isInitialized = function () {
        return s_isInitialized;
    };
    CubismFramework.coreLogFunction = function (message) {
        if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
            return;
        }
        Live2DCubismCore.Logging.csmGetLogFunction()(message);
    };
    CubismFramework.getLoggingLevel = function () {
        if (s_option != null) {
            return s_option.loggingLevel;
        }
        return LogLevel.LogLevel_Off;
    };
    CubismFramework.getIdManager = function () {
        return s_cubismIdManager;
    };
    return CubismFramework;
}());
exports.CubismFramework = CubismFramework;
var Option = (function () {
    function Option() {
    }
    return Option;
}());
exports.Option = Option;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var $ = __importStar(__webpack_require__(/*! ./live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.Constant = $.Constant;
    Live2DCubismFramework.csmDelete = $.csmDelete;
    Live2DCubismFramework.CubismFramework = $.CubismFramework;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/math/cubismmath.ts":
/*!*************************************************!*\
  !*** ../../../Framework/src/math/cubismmath.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMath = void 0;
var cubismvector2_1 = __webpack_require__(/*! ./cubismvector2 */ "../../../Framework/src/math/cubismvector2.ts");
var CubismMath = (function () {
    function CubismMath() {
    }
    CubismMath.range = function (value, min, max) {
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    };
    CubismMath.sin = function (x) {
        return Math.sin(x);
    };
    CubismMath.cos = function (x) {
        return Math.cos(x);
    };
    CubismMath.abs = function (x) {
        return Math.abs(x);
    };
    CubismMath.sqrt = function (x) {
        return Math.sqrt(x);
    };
    CubismMath.cbrt = function (x) {
        if (x === 0) {
            return x;
        }
        var cx = x;
        var isNegativeNumber = cx < 0;
        if (isNegativeNumber) {
            cx = -cx;
        }
        var ret;
        if (cx === Infinity) {
            ret = Infinity;
        }
        else {
            ret = Math.exp(Math.log(cx) / 3);
            ret = (cx / (ret * ret) + 2 * ret) / 3;
        }
        return isNegativeNumber ? -ret : ret;
    };
    CubismMath.getEasingSine = function (value) {
        if (value < 0.0) {
            return 0.0;
        }
        else if (value > 1.0) {
            return 1.0;
        }
        return 0.5 - 0.5 * this.cos(value * Math.PI);
    };
    CubismMath.max = function (left, right) {
        return left > right ? left : right;
    };
    CubismMath.min = function (left, right) {
        return left > right ? right : left;
    };
    CubismMath.degreesToRadian = function (degrees) {
        return (degrees / 180.0) * Math.PI;
    };
    CubismMath.radianToDegrees = function (radian) {
        return (radian * 180.0) / Math.PI;
    };
    CubismMath.directionToRadian = function (from, to) {
        var q1 = Math.atan2(to.y, to.x);
        var q2 = Math.atan2(from.y, from.x);
        var ret = q1 - q2;
        while (ret < -Math.PI) {
            ret += Math.PI * 2.0;
        }
        while (ret > Math.PI) {
            ret -= Math.PI * 2.0;
        }
        return ret;
    };
    CubismMath.directionToDegrees = function (from, to) {
        var radian = this.directionToRadian(from, to);
        var degree = this.radianToDegrees(radian);
        if (to.x - from.x > 0.0) {
            degree = -degree;
        }
        return degree;
    };
    CubismMath.radianToDirection = function (totalAngle) {
        var ret = new cubismvector2_1.CubismVector2();
        ret.x = this.sin(totalAngle);
        ret.y = this.cos(totalAngle);
        return ret;
    };
    CubismMath.quadraticEquation = function (a, b, c) {
        if (this.abs(a) < CubismMath.Epsilon) {
            if (this.abs(b) < CubismMath.Epsilon) {
                return -c;
            }
            return -c / b;
        }
        return -(b + this.sqrt(b * b - 4.0 * a * c)) / (2.0 * a);
    };
    CubismMath.cardanoAlgorithmForBezier = function (a, b, c, d) {
        if (this.sqrt(a) < CubismMath.Epsilon) {
            return this.range(this.quadraticEquation(b, c, d), 0.0, 1.0);
        }
        var ba = b / a;
        var ca = c / a;
        var da = d / a;
        var p = (3.0 * ca - ba * ba) / 3.0;
        var p3 = p / 3.0;
        var q = (2.0 * ba * ba * ba - 9.0 * ba * ca + 27.0 * da) / 27.0;
        var q2 = q / 2.0;
        var discriminant = q2 * q2 + p3 * p3 * p3;
        var center = 0.5;
        var threshold = center + 0.01;
        if (discriminant < 0.0) {
            var mp3 = -p / 3.0;
            var mp33 = mp3 * mp3 * mp3;
            var r = this.sqrt(mp33);
            var t = -q / (2.0 * r);
            var cosphi = this.range(t, -1.0, 1.0);
            var phi = Math.acos(cosphi);
            var crtr = this.cbrt(r);
            var t1 = 2.0 * crtr;
            var root1_1 = t1 * this.cos(phi / 3.0) - ba / 3.0;
            if (this.abs(root1_1 - center) < threshold) {
                return this.range(root1_1, 0.0, 1.0);
            }
            var root2 = t1 * this.cos((phi + 2.0 * Math.PI) / 3.0) - ba / 3.0;
            if (this.abs(root2 - center) < threshold) {
                return this.range(root2, 0.0, 1.0);
            }
            var root3 = t1 * this.cos((phi + 4.0 * Math.PI) / 3.0) - ba / 3.0;
            return this.range(root3, 0.0, 1.0);
        }
        if (discriminant == 0.0) {
            var u1_1;
            if (q2 < 0.0) {
                u1_1 = this.cbrt(-q2);
            }
            else {
                u1_1 = -this.cbrt(q2);
            }
            var root1_2 = 2.0 * u1_1 - ba / 3.0;
            if (this.abs(root1_2 - center) < threshold) {
                return this.range(root1_2, 0.0, 1.0);
            }
            var root2 = -u1_1 - ba / 3.0;
            return this.range(root2, 0.0, 1.0);
        }
        var sd = this.sqrt(discriminant);
        var u1 = this.cbrt(sd - q2);
        var v1 = this.cbrt(sd + q2);
        var root1 = u1 - v1 - ba / 3.0;
        return this.range(root1, 0.0, 1.0);
    };
    CubismMath.Epsilon = 0.00001;
    return CubismMath;
}());
exports.CubismMath = CubismMath;
var $ = __importStar(__webpack_require__(/*! ./cubismmath */ "../../../Framework/src/math/cubismmath.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMath = $.CubismMath;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/math/cubismmatrix44.ts":
/*!*****************************************************!*\
  !*** ../../../Framework/src/math/cubismmatrix44.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMatrix44 = void 0;
var CubismMatrix44 = (function () {
    function CubismMatrix44() {
        this._tr = new Float32Array(16);
        this.loadIdentity();
    }
    CubismMatrix44.multiply = function (a, b, dst) {
        var c = new Float32Array([
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0,
            0.0
        ]);
        var n = 4;
        for (var i = 0; i < n; ++i) {
            for (var j = 0; j < n; ++j) {
                for (var k = 0; k < n; ++k) {
                    c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                }
            }
        }
        for (var i = 0; i < 16; ++i) {
            dst[i] = c[i];
        }
    };
    CubismMatrix44.prototype.loadIdentity = function () {
        var c = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0
        ]);
        this.setMatrix(c);
    };
    CubismMatrix44.prototype.setMatrix = function (tr) {
        for (var i = 0; i < 16; ++i) {
            this._tr[i] = tr[i];
        }
    };
    CubismMatrix44.prototype.getArray = function () {
        return this._tr;
    };
    CubismMatrix44.prototype.getScaleX = function () {
        return this._tr[0];
    };
    CubismMatrix44.prototype.getScaleY = function () {
        return this._tr[5];
    };
    CubismMatrix44.prototype.getTranslateX = function () {
        return this._tr[12];
    };
    CubismMatrix44.prototype.getTranslateY = function () {
        return this._tr[13];
    };
    CubismMatrix44.prototype.transformX = function (src) {
        return this._tr[0] * src + this._tr[12];
    };
    CubismMatrix44.prototype.transformY = function (src) {
        return this._tr[5] * src + this._tr[13];
    };
    CubismMatrix44.prototype.invertTransformX = function (src) {
        return (src - this._tr[12]) / this._tr[0];
    };
    CubismMatrix44.prototype.invertTransformY = function (src) {
        return (src - this._tr[13]) / this._tr[5];
    };
    CubismMatrix44.prototype.translateRelative = function (x, y) {
        var tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            x,
            y,
            0.0,
            1.0
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    };
    CubismMatrix44.prototype.translate = function (x, y) {
        this._tr[12] = x;
        this._tr[13] = y;
    };
    CubismMatrix44.prototype.translateX = function (x) {
        this._tr[12] = x;
    };
    CubismMatrix44.prototype.translateY = function (y) {
        this._tr[13] = y;
    };
    CubismMatrix44.prototype.scaleRelative = function (x, y) {
        var tr1 = new Float32Array([
            x,
            0.0,
            0.0,
            0.0,
            0.0,
            y,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0
        ]);
        CubismMatrix44.multiply(tr1, this._tr, this._tr);
    };
    CubismMatrix44.prototype.scale = function (x, y) {
        this._tr[0] = x;
        this._tr[5] = y;
    };
    CubismMatrix44.prototype.multiplyByMatrix = function (m) {
        CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
    };
    CubismMatrix44.prototype.clone = function () {
        var cloneMatrix = new CubismMatrix44();
        for (var i = 0; i < this._tr.length; i++) {
            cloneMatrix._tr[i] = this._tr[i];
        }
        return cloneMatrix;
    };
    return CubismMatrix44;
}());
exports.CubismMatrix44 = CubismMatrix44;
var $ = __importStar(__webpack_require__(/*! ./cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMatrix44 = $.CubismMatrix44;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/math/cubismmodelmatrix.ts":
/*!********************************************************!*\
  !*** ../../../Framework/src/math/cubismmodelmatrix.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismModelMatrix = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! ./cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var lappdefine_1 = __webpack_require__(/*! ../../../Samples/TypeScript/Demo/src/lappdefine */ "./src/lappdefine.ts");
var CubismModelMatrix = (function (_super) {
    __extends(CubismModelMatrix, _super);
    function CubismModelMatrix(w, h) {
        var _this = _super.call(this) || this;
        _this._width = w !== undefined ? w : 0.0;
        _this._height = h !== undefined ? h : 0.0;
        var consumer_sacle = lappdefine_1.resourcesConfig.getModelScale();
        _this.scale(consumer_sacle, consumer_sacle);
        _this.setCenterPosition(consumer_sacle * w * lappdefine_1.resourcesConfig.getXscale() / 2, consumer_sacle * h * lappdefine_1.resourcesConfig.getYscale() / 2);
        return _this;
    }
    CubismModelMatrix.prototype.setWidth = function (w) {
        var scaleX = w / this._width;
        var scaleY = scaleX;
        this.scale(scaleX, scaleY);
    };
    CubismModelMatrix.prototype.setHeight = function (h) {
        var scaleX = h / this._height;
        var scaleY = scaleX;
        this.scale(scaleX, scaleY);
    };
    CubismModelMatrix.prototype.setPosition = function (x, y) {
        this.translate(x, y);
    };
    CubismModelMatrix.prototype.setCenterPosition = function (x, y) {
        this.centerX(x);
        this.centerY(y);
    };
    CubismModelMatrix.prototype.top = function (y) {
        this.setY(y);
    };
    CubismModelMatrix.prototype.bottom = function (y) {
        var h = this._height * this.getScaleY();
        this.translateY(y - h);
    };
    CubismModelMatrix.prototype.left = function (x) {
        this.setX(x);
    };
    CubismModelMatrix.prototype.right = function (x) {
        var w = this._width * this.getScaleX();
        this.translateX(x - w);
    };
    CubismModelMatrix.prototype.centerX = function (x) {
        var w = this._width * this.getScaleX();
        this.translateX(x - w / 2.0);
    };
    CubismModelMatrix.prototype.setX = function (x) {
        this.translateX(x);
    };
    CubismModelMatrix.prototype.centerY = function (y) {
        var h = this._height * this.getScaleY();
        this.translateY(y - h / 2.0);
    };
    CubismModelMatrix.prototype.setY = function (y) {
        this.translateY(y);
    };
    CubismModelMatrix.prototype.setupFromLayout = function (layout) {
        var keyWidth = 'width';
        var keyHeight = 'height';
        var keyX = 'x';
        var keyY = 'y';
        var keyCenterX = 'center_x';
        var keyCenterY = 'center_y';
        var keyTop = 'top';
        var keyBottom = 'bottom';
        var keyLeft = 'left';
        var keyRight = 'right';
        for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
            var key = ite.ptr().first;
            var value = ite.ptr().second;
            if (key == keyWidth) {
                this.setWidth(value);
            }
            else if (key == keyHeight) {
                this.setHeight(value);
            }
        }
        for (var ite = layout.begin(); ite.notEqual(layout.end()); ite.preIncrement()) {
            var key = ite.ptr().first;
            var value = ite.ptr().second;
            if (key == keyX) {
                this.setX(value);
            }
            else if (key == keyY) {
                this.setY(value);
            }
            else if (key == keyCenterX) {
                this.centerX(value);
            }
            else if (key == keyCenterY) {
                this.centerY(value);
            }
            else if (key == keyTop) {
                this.top(value);
            }
            else if (key == keyBottom) {
                this.bottom(value);
            }
            else if (key == keyLeft) {
                this.left(value);
            }
            else if (key == keyRight) {
                this.right(value);
            }
        }
    };
    CubismModelMatrix.prototype.getWidth = function () { return this._width; };
    CubismModelMatrix.prototype.getHeight = function () { return this._height; };
    return CubismModelMatrix;
}(cubismmatrix44_1.CubismMatrix44));
exports.CubismModelMatrix = CubismModelMatrix;
var $ = __importStar(__webpack_require__(/*! ./cubismmodelmatrix */ "../../../Framework/src/math/cubismmodelmatrix.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelMatrix = $.CubismModelMatrix;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/math/cubismtargetpoint.ts":
/*!********************************************************!*\
  !*** ../../../Framework/src/math/cubismtargetpoint.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismTargetPoint = void 0;
var cubismmath_1 = __webpack_require__(/*! ./cubismmath */ "../../../Framework/src/math/cubismmath.ts");
var FrameRate = 30;
var Epsilon = 0.01;
var CubismTargetPoint = (function () {
    function CubismTargetPoint() {
        this._faceTargetX = 0.0;
        this._faceTargetY = 0.0;
        this._faceX = 0.0;
        this._faceY = 0.0;
        this._faceVX = 0.0;
        this._faceVY = 0.0;
        this._lastTimeSeconds = 0.0;
        this._userTimeSeconds = 0.0;
    }
    CubismTargetPoint.prototype.update = function (deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        var faceParamMaxV = 40.0 / 10.0;
        var maxV = (faceParamMaxV * 1.0) / FrameRate;
        if (this._lastTimeSeconds == 0.0) {
            this._lastTimeSeconds = this._userTimeSeconds;
            return;
        }
        var deltaTimeWeight = (this._userTimeSeconds - this._lastTimeSeconds) * FrameRate;
        this._lastTimeSeconds = this._userTimeSeconds;
        var timeToMaxSpeed = 0.15;
        var frameToMaxSpeed = timeToMaxSpeed * FrameRate;
        var maxA = (deltaTimeWeight * maxV) / frameToMaxSpeed;
        var dx = this._faceTargetX - this._faceX;
        var dy = this._faceTargetY - this._faceY;
        if (cubismmath_1.CubismMath.abs(dx) <= Epsilon && cubismmath_1.CubismMath.abs(dy) <= Epsilon) {
            return;
        }
        var d = cubismmath_1.CubismMath.sqrt(dx * dx + dy * dy);
        var vx = (maxV * dx) / d;
        var vy = (maxV * dy) / d;
        var ax = vx - this._faceVX;
        var ay = vy - this._faceVY;
        var a = cubismmath_1.CubismMath.sqrt(ax * ax + ay * ay);
        if (a < -maxA || a > maxA) {
            ax *= maxA / a;
            ay *= maxA / a;
        }
        this._faceVX += ax;
        this._faceVY += ay;
        {
            var maxV_1 = 0.5 *
                (cubismmath_1.CubismMath.sqrt(maxA * maxA + 16.0 * maxA * d - 8.0 * maxA * d) -
                    maxA);
            var curV = cubismmath_1.CubismMath.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
            if (curV > maxV_1) {
                this._faceVX *= maxV_1 / curV;
                this._faceVY *= maxV_1 / curV;
            }
        }
        this._faceX += this._faceVX;
        this._faceY += this._faceVY;
    };
    CubismTargetPoint.prototype.getX = function () {
        return this._faceX;
    };
    CubismTargetPoint.prototype.getY = function () {
        return this._faceY;
    };
    CubismTargetPoint.prototype.set = function (x, y) {
        this._faceTargetX = x;
        this._faceTargetY = y;
    };
    return CubismTargetPoint;
}());
exports.CubismTargetPoint = CubismTargetPoint;
var $ = __importStar(__webpack_require__(/*! ./cubismtargetpoint */ "../../../Framework/src/math/cubismtargetpoint.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismTargetPoint = $.CubismTargetPoint;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/math/cubismvector2.ts":
/*!****************************************************!*\
  !*** ../../../Framework/src/math/cubismvector2.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismVector2 = void 0;
var CubismVector2 = (function () {
    function CubismVector2(x, y) {
        this.x = x;
        this.y = y;
        this.x = x == undefined ? 0.0 : x;
        this.y = y == undefined ? 0.0 : y;
    }
    CubismVector2.prototype.add = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x + vector2.x;
        ret.y = this.y + vector2.y;
        return ret;
    };
    CubismVector2.prototype.substract = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x - vector2.x;
        ret.y = this.y - vector2.y;
        return ret;
    };
    CubismVector2.prototype.multiply = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x * vector2.x;
        ret.y = this.y * vector2.y;
        return ret;
    };
    CubismVector2.prototype.multiplyByScaler = function (scalar) {
        return this.multiply(new CubismVector2(scalar, scalar));
    };
    CubismVector2.prototype.division = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x / vector2.x;
        ret.y = this.y / vector2.y;
        return ret;
    };
    CubismVector2.prototype.divisionByScalar = function (scalar) {
        return this.division(new CubismVector2(scalar, scalar));
    };
    CubismVector2.prototype.getLength = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    CubismVector2.prototype.getDistanceWith = function (a) {
        return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    };
    CubismVector2.prototype.dot = function (a) {
        return this.x * a.x + this.y * a.y;
    };
    CubismVector2.prototype.normalize = function () {
        var length = Math.pow(this.x * this.x + this.y * this.y, 0.5);
        this.x = this.x / length;
        this.y = this.y / length;
    };
    CubismVector2.prototype.isEqual = function (rhs) {
        return this.x == rhs.x && this.y == rhs.y;
    };
    CubismVector2.prototype.isNotEqual = function (rhs) {
        return !this.isEqual(rhs);
    };
    return CubismVector2;
}());
exports.CubismVector2 = CubismVector2;
var $ = __importStar(__webpack_require__(/*! ./cubismvector2 */ "../../../Framework/src/math/cubismvector2.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismVector2 = $.CubismVector2;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/math/cubismviewmatrix.ts":
/*!*******************************************************!*\
  !*** ../../../Framework/src/math/cubismviewmatrix.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismViewMatrix = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! ./cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var CubismViewMatrix = (function (_super) {
    __extends(CubismViewMatrix, _super);
    function CubismViewMatrix() {
        var _this = _super.call(this) || this;
        _this._screenLeft = 0.0;
        _this._screenRight = 0.0;
        _this._screenTop = 0.0;
        _this._screenBottom = 0.0;
        _this._maxLeft = 0.0;
        _this._maxRight = 0.0;
        _this._maxTop = 0.0;
        _this._maxBottom = 0.0;
        _this._maxScale = 0.0;
        _this._minScale = 0.0;
        return _this;
    }
    CubismViewMatrix.prototype.adjustTranslate = function (x, y) {
        if (this._tr[0] * this._maxLeft + (this._tr[12] + x) > this._screenLeft) {
            x = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12];
        }
        if (this._tr[0] * this._maxRight + (this._tr[12] + x) < this._screenRight) {
            x = this._screenRight - this._tr[0] * this._maxRight - this._tr[12];
        }
        if (this._tr[5] * this._maxTop + (this._tr[13] + y) < this._screenTop) {
            y = this._screenTop - this._tr[5] * this._maxTop - this._tr[13];
        }
        if (this._tr[5] * this._maxBottom + (this._tr[13] + y) >
            this._screenBottom) {
            y = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13];
        }
        var tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            x,
            y,
            0.0,
            1.0
        ]);
        cubismmatrix44_1.CubismMatrix44.multiply(tr1, this._tr, this._tr);
    };
    CubismViewMatrix.prototype.adjustScale = function (cx, cy, scale) {
        var maxScale = this.getMaxScale();
        var minScale = this.getMinScale();
        var targetScale = scale * this._tr[0];
        if (targetScale < minScale) {
            if (this._tr[0] > 0.0) {
                scale = minScale / this._tr[0];
            }
        }
        else if (targetScale > maxScale) {
            if (this._tr[0] > 0.0) {
                scale = maxScale / this._tr[0];
            }
        }
        var tr1 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            cx,
            cy,
            0.0,
            1.0
        ]);
        var tr2 = new Float32Array([
            scale,
            0.0,
            0.0,
            0.0,
            0.0,
            scale,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0
        ]);
        var tr3 = new Float32Array([
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            -cx,
            -cy,
            0.0,
            1.0
        ]);
        cubismmatrix44_1.CubismMatrix44.multiply(tr3, this._tr, this._tr);
        cubismmatrix44_1.CubismMatrix44.multiply(tr2, this._tr, this._tr);
        cubismmatrix44_1.CubismMatrix44.multiply(tr1, this._tr, this._tr);
    };
    CubismViewMatrix.prototype.setScreenRect = function (left, right, bottom, top) {
        this._screenLeft = left;
        this._screenRight = right;
        this._screenBottom = bottom;
        this._screenTop = top;
    };
    CubismViewMatrix.prototype.setMaxScreenRect = function (left, right, bottom, top) {
        this._maxLeft = left;
        this._maxRight = right;
        this._maxTop = top;
        this._maxBottom = bottom;
    };
    CubismViewMatrix.prototype.setMaxScale = function (maxScale) {
        this._maxScale = maxScale;
    };
    CubismViewMatrix.prototype.setMinScale = function (minScale) {
        this._minScale = minScale;
    };
    CubismViewMatrix.prototype.getMaxScale = function () {
        return this._maxScale;
    };
    CubismViewMatrix.prototype.getMinScale = function () {
        return this._minScale;
    };
    CubismViewMatrix.prototype.isMaxScale = function () {
        return this.getScaleX() >= this._maxScale;
    };
    CubismViewMatrix.prototype.isMinScale = function () {
        return this.getScaleX() <= this._minScale;
    };
    CubismViewMatrix.prototype.getScreenLeft = function () {
        return this._screenLeft;
    };
    CubismViewMatrix.prototype.getScreenRight = function () {
        return this._screenRight;
    };
    CubismViewMatrix.prototype.getScreenBottom = function () {
        return this._screenBottom;
    };
    CubismViewMatrix.prototype.getScreenTop = function () {
        return this._screenTop;
    };
    CubismViewMatrix.prototype.getMaxLeft = function () {
        return this._maxLeft;
    };
    CubismViewMatrix.prototype.getMaxRight = function () {
        return this._maxRight;
    };
    CubismViewMatrix.prototype.getMaxBottom = function () {
        return this._maxBottom;
    };
    CubismViewMatrix.prototype.getMaxTop = function () {
        return this._maxTop;
    };
    return CubismViewMatrix;
}(cubismmatrix44_1.CubismMatrix44));
exports.CubismViewMatrix = CubismViewMatrix;
var $ = __importStar(__webpack_require__(/*! ./cubismviewmatrix */ "../../../Framework/src/math/cubismviewmatrix.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismViewMatrix = $.CubismViewMatrix;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/model/cubismmoc.ts":
/*!*************************************************!*\
  !*** ../../../Framework/src/model/cubismmoc.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMoc = void 0;
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var cubismmodel_1 = __webpack_require__(/*! ./cubismmodel */ "../../../Framework/src/model/cubismmodel.ts");
var CubismMoc = (function () {
    function CubismMoc(moc) {
        this._moc = moc;
        this._modelCount = 0;
    }
    CubismMoc.create = function (mocBytes) {
        var cubismMoc = null;
        var moc = Live2DCubismCore.Moc.fromArrayBuffer(mocBytes);
        if (moc) {
            cubismMoc = new CubismMoc(moc);
        }
        return cubismMoc;
    };
    CubismMoc.delete = function (moc) {
        moc._moc._release();
        moc._moc = null;
        moc = null;
    };
    CubismMoc.prototype.createModel = function () {
        var cubismModel = null;
        var model = Live2DCubismCore.Model.fromMoc(this._moc);
        if (model) {
            cubismModel = new cubismmodel_1.CubismModel(model);
            cubismModel.initialize();
            ++this._modelCount;
        }
        return cubismModel;
    };
    CubismMoc.prototype.deleteModel = function (model) {
        if (model != null) {
            model.release();
            model = null;
            --this._modelCount;
        }
    };
    CubismMoc.prototype.release = function () {
        (0, cubismdebug_1.CSM_ASSERT)(this._modelCount == 0);
        this._moc._release();
        this._moc = null;
    };
    return CubismMoc;
}());
exports.CubismMoc = CubismMoc;
var $ = __importStar(__webpack_require__(/*! ./cubismmoc */ "../../../Framework/src/model/cubismmoc.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMoc = $.CubismMoc;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/model/cubismmodel.ts":
/*!***************************************************!*\
  !*** ../../../Framework/src/model/cubismmodel.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismModel = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismrenderer_1 = __webpack_require__(/*! ../rendering/cubismrenderer */ "../../../Framework/src/rendering/cubismrenderer.ts");
var csmmap_1 = __webpack_require__(/*! ../type/csmmap */ "../../../Framework/src/type/csmmap.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var CubismModel = (function () {
    function CubismModel(model) {
        this._model = model;
        this._parameterValues = null;
        this._parameterMaximumValues = null;
        this._parameterMinimumValues = null;
        this._partOpacities = null;
        this._savedParameters = new csmvector_1.csmVector();
        this._parameterIds = new csmvector_1.csmVector();
        this._drawableIds = new csmvector_1.csmVector();
        this._partIds = new csmvector_1.csmVector();
        this._notExistPartId = new csmmap_1.csmMap();
        this._notExistParameterId = new csmmap_1.csmMap();
        this._notExistParameterValues = new csmmap_1.csmMap();
        this._notExistPartOpacities = new csmmap_1.csmMap();
    }
    CubismModel.prototype.update = function () {
        this._model.update();
        this._model.drawables.resetDynamicFlags();
    };
    CubismModel.prototype.getCanvasWidth = function () {
        if (this._model == null) {
            return 0.0;
        }
        return (this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit);
    };
    CubismModel.prototype.getCanvasHeight = function () {
        if (this._model == null) {
            return 0.0;
        }
        console.log("canvas高度为：" + this._model.canvasinfo.PixelsPerUnit);
        return (this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit);
    };
    CubismModel.prototype.saveParameters = function () {
        var parameterCount = this._model.parameters.count;
        var savedParameterCount = this._savedParameters.getSize();
        for (var i = 0; i < parameterCount; ++i) {
            if (i < savedParameterCount) {
                this._savedParameters.set(i, this._parameterValues[i]);
            }
            else {
                this._savedParameters.pushBack(this._parameterValues[i]);
            }
        }
    };
    CubismModel.prototype.getModel = function () {
        return this._model;
    };
    CubismModel.prototype.getPartIndex = function (partId) {
        var partIndex;
        var partCount = this._model.parts.count;
        for (partIndex = 0; partIndex < partCount; ++partIndex) {
            if (partId == this._partIds.at(partIndex)) {
                return partIndex;
            }
        }
        if (this._notExistPartId.isExist(partId)) {
            return this._notExistPartId.getValue(partId);
        }
        partIndex = partCount + this._notExistPartId.getSize();
        this._notExistPartId.setValue(partId, partIndex);
        this._notExistPartOpacities.appendKey(partIndex);
        return partIndex;
    };
    CubismModel.prototype.getPartCount = function () {
        var partCount = this._model.parts.count;
        return partCount;
    };
    CubismModel.prototype.setPartOpacityByIndex = function (partIndex, opacity) {
        if (this._notExistPartOpacities.isExist(partIndex)) {
            this._notExistPartOpacities.setValue(partIndex, opacity);
            return;
        }
        (0, cubismdebug_1.CSM_ASSERT)(0 <= partIndex && partIndex < this.getPartCount());
        this._partOpacities[partIndex] = opacity;
    };
    CubismModel.prototype.setPartOpacityById = function (partId, opacity) {
        var index = this.getPartIndex(partId);
        if (index < 0) {
            return;
        }
        this.setPartOpacityByIndex(index, opacity);
    };
    CubismModel.prototype.getPartOpacityByIndex = function (partIndex) {
        if (this._notExistPartOpacities.isExist(partIndex)) {
            return this._notExistPartOpacities.getValue(partIndex);
        }
        (0, cubismdebug_1.CSM_ASSERT)(0 <= partIndex && partIndex < this.getPartCount());
        return this._partOpacities[partIndex];
    };
    CubismModel.prototype.getPartOpacityById = function (partId) {
        var index = this.getPartIndex(partId);
        if (index < 0) {
            return 0;
        }
        return this.getPartOpacityByIndex(index);
    };
    CubismModel.prototype.getParameterIndex = function (parameterId) {
        var parameterIndex;
        var idCount = this._model.parameters.count;
        for (parameterIndex = 0; parameterIndex < idCount; ++parameterIndex) {
            if (parameterId != this._parameterIds.at(parameterIndex)) {
                continue;
            }
            return parameterIndex;
        }
        if (this._notExistParameterId.isExist(parameterId)) {
            return this._notExistParameterId.getValue(parameterId);
        }
        parameterIndex =
            this._model.parameters.count + this._notExistParameterId.getSize();
        this._notExistParameterId.setValue(parameterId, parameterIndex);
        this._notExistParameterValues.appendKey(parameterIndex);
        return parameterIndex;
    };
    CubismModel.prototype.getParameterCount = function () {
        return this._model.parameters.count;
    };
    CubismModel.prototype.getParameterMaximumValue = function (parameterIndex) {
        return this._model.parameters.maximumValues[parameterIndex];
    };
    CubismModel.prototype.getParameterMinimumValue = function (parameterIndex) {
        return this._model.parameters.minimumValues[parameterIndex];
    };
    CubismModel.prototype.getParameterDefaultValue = function (parameterIndex) {
        return this._model.parameters.defaultValues[parameterIndex];
    };
    CubismModel.prototype.getParameterValueByIndex = function (parameterIndex) {
        if (this._notExistParameterValues.isExist(parameterIndex)) {
            return this._notExistParameterValues.getValue(parameterIndex);
        }
        (0, cubismdebug_1.CSM_ASSERT)(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        return this._parameterValues[parameterIndex];
    };
    CubismModel.prototype.getParameterValueById = function (parameterId) {
        var parameterIndex = this.getParameterIndex(parameterId);
        return this.getParameterValueByIndex(parameterIndex);
    };
    CubismModel.prototype.setParameterValueByIndex = function (parameterIndex, value, weight) {
        if (weight === void 0) { weight = 1.0; }
        if (this._notExistParameterValues.isExist(parameterIndex)) {
            this._notExistParameterValues.setValue(parameterIndex, weight == 1
                ? value
                : this._notExistParameterValues.getValue(parameterIndex) *
                    (1 - weight) +
                    value * weight);
            return;
        }
        (0, cubismdebug_1.CSM_ASSERT)(0 <= parameterIndex && parameterIndex < this.getParameterCount());
        if (this._model.parameters.maximumValues[parameterIndex] < value) {
            value = this._model.parameters.maximumValues[parameterIndex];
        }
        if (this._model.parameters.minimumValues[parameterIndex] > value) {
            value = this._model.parameters.minimumValues[parameterIndex];
        }
        this._parameterValues[parameterIndex] =
            weight == 1
                ? value
                : (this._parameterValues[parameterIndex] =
                    this._parameterValues[parameterIndex] * (1 - weight) +
                        value * weight);
    };
    CubismModel.prototype.setParameterValueById = function (parameterId, value, weight) {
        if (weight === void 0) { weight = 1.0; }
        var index = this.getParameterIndex(parameterId);
        this.setParameterValueByIndex(index, value, weight);
    };
    CubismModel.prototype.addParameterValueByIndex = function (parameterIndex, value, weight) {
        if (weight === void 0) { weight = 1.0; }
        this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) + value * weight);
    };
    CubismModel.prototype.addParameterValueById = function (parameterId, value, weight) {
        if (weight === void 0) { weight = 1.0; }
        var index = this.getParameterIndex(parameterId);
        this.addParameterValueByIndex(index, value, weight);
    };
    CubismModel.prototype.multiplyParameterValueById = function (parameterId, value, weight) {
        if (weight === void 0) { weight = 1.0; }
        var index = this.getParameterIndex(parameterId);
        this.multiplyParameterValueByIndex(index, value, weight);
    };
    CubismModel.prototype.multiplyParameterValueByIndex = function (parameterIndex, value, weight) {
        if (weight === void 0) { weight = 1.0; }
        this.setParameterValueByIndex(parameterIndex, this.getParameterValueByIndex(parameterIndex) *
            (1.0 + (value - 1.0) * weight));
    };
    CubismModel.prototype.getDrawableIndex = function (drawableId) {
        var drawableCount = this._model.drawables.count;
        for (var drawableIndex = 0; drawableIndex < drawableCount; ++drawableIndex) {
            if (this._drawableIds.at(drawableIndex) == drawableId) {
                return drawableIndex;
            }
        }
        return -1;
    };
    CubismModel.prototype.getDrawableCount = function () {
        var drawableCount = this._model.drawables.count;
        return drawableCount;
    };
    CubismModel.prototype.getDrawableId = function (drawableIndex) {
        var parameterIds = this._model.drawables.ids;
        return live2dcubismframework_1.CubismFramework.getIdManager().getId(parameterIds[drawableIndex]);
    };
    CubismModel.prototype.getDrawableRenderOrders = function () {
        var renderOrders = this._model.drawables.renderOrders;
        return renderOrders;
    };
    CubismModel.prototype.getDrawableTextureIndices = function (drawableIndex) {
        var textureIndices = this._model.drawables.textureIndices;
        return textureIndices[drawableIndex];
    };
    CubismModel.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function (drawableIndex) {
        var dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(dynamicFlags[drawableIndex]);
    };
    CubismModel.prototype.getDrawableVertexIndexCount = function (drawableIndex) {
        var indexCounts = this._model.drawables.indexCounts;
        return indexCounts[drawableIndex];
    };
    CubismModel.prototype.getDrawableVertexCount = function (drawableIndex) {
        var vertexCounts = this._model.drawables.vertexCounts;
        return vertexCounts[drawableIndex];
    };
    CubismModel.prototype.getDrawableVertices = function (drawableIndex) {
        return this.getDrawableVertexPositions(drawableIndex);
    };
    CubismModel.prototype.getDrawableVertexIndices = function (drawableIndex) {
        var indicesArray = this._model.drawables.indices;
        return indicesArray[drawableIndex];
    };
    CubismModel.prototype.getDrawableVertexPositions = function (drawableIndex) {
        var verticesArray = this._model.drawables.vertexPositions;
        return verticesArray[drawableIndex];
    };
    CubismModel.prototype.getDrawableVertexUvs = function (drawableIndex) {
        var uvsArray = this._model.drawables.vertexUvs;
        return uvsArray[drawableIndex];
    };
    CubismModel.prototype.getDrawableOpacity = function (drawableIndex) {
        var opacities = this._model.drawables.opacities;
        return opacities[drawableIndex];
    };
    CubismModel.prototype.getDrawableCulling = function (drawableIndex) {
        var constantFlags = this._model.drawables.constantFlags;
        return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(constantFlags[drawableIndex]);
    };
    CubismModel.prototype.getDrawableBlendMode = function (drawableIndex) {
        var constantFlags = this._model.drawables.constantFlags;
        return Live2DCubismCore.Utils.hasBlendAdditiveBit(constantFlags[drawableIndex])
            ? cubismrenderer_1.CubismBlendMode.CubismBlendMode_Additive
            : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(constantFlags[drawableIndex])
                ? cubismrenderer_1.CubismBlendMode.CubismBlendMode_Multiplicative
                : cubismrenderer_1.CubismBlendMode.CubismBlendMode_Normal;
    };
    CubismModel.prototype.getDrawableInvertedMaskBit = function (drawableIndex) {
        var constantFlags = this._model.drawables.constantFlags;
        return Live2DCubismCore.Utils.hasIsInvertedMaskBit(constantFlags[drawableIndex]);
    };
    CubismModel.prototype.getDrawableMasks = function () {
        var masks = this._model.drawables.masks;
        return masks;
    };
    CubismModel.prototype.getDrawableMaskCounts = function () {
        var maskCounts = this._model.drawables.maskCounts;
        return maskCounts;
    };
    CubismModel.prototype.isUsingMasking = function () {
        for (var d = 0; d < this._model.drawables.count; ++d) {
            if (this._model.drawables.maskCounts[d] <= 0) {
                continue;
            }
            return true;
        }
        return false;
    };
    CubismModel.prototype.getDrawableDynamicFlagIsVisible = function (drawableIndex) {
        var dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasIsVisibleBit(dynamicFlags[drawableIndex]);
    };
    CubismModel.prototype.getDrawableDynamicFlagVisibilityDidChange = function (drawableIndex) {
        var dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(dynamicFlags[drawableIndex]);
    };
    CubismModel.prototype.getDrawableDynamicFlagOpacityDidChange = function (drawableIndex) {
        var dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasOpacityDidChangeBit(dynamicFlags[drawableIndex]);
    };
    CubismModel.prototype.getDrawableDynamicFlagRenderOrderDidChange = function (drawableIndex) {
        var dynamicFlags = this._model.drawables.dynamicFlags;
        return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(dynamicFlags[drawableIndex]);
    };
    CubismModel.prototype.loadParameters = function () {
        var parameterCount = this._model.parameters.count;
        var savedParameterCount = this._savedParameters.getSize();
        if (parameterCount > savedParameterCount) {
            parameterCount = savedParameterCount;
        }
        for (var i = 0; i < parameterCount; ++i) {
            this._parameterValues[i] = this._savedParameters.at(i);
        }
    };
    CubismModel.prototype.initialize = function () {
        (0, cubismdebug_1.CSM_ASSERT)(this._model);
        this._parameterValues = this._model.parameters.values;
        this._partOpacities = this._model.parts.opacities;
        this._parameterMaximumValues = this._model.parameters.maximumValues;
        this._parameterMinimumValues = this._model.parameters.minimumValues;
        {
            var parameterIds = this._model.parameters.ids;
            var parameterCount = this._model.parameters.count;
            this._parameterIds.prepareCapacity(parameterCount);
            for (var i = 0; i < parameterCount; ++i) {
                this._parameterIds.pushBack(live2dcubismframework_1.CubismFramework.getIdManager().getId(parameterIds[i]));
            }
        }
        {
            var partIds = this._model.parts.ids;
            var partCount = this._model.parts.count;
            this._partIds.prepareCapacity(partCount);
            for (var i = 0; i < partCount; ++i) {
                this._partIds.pushBack(live2dcubismframework_1.CubismFramework.getIdManager().getId(partIds[i]));
            }
        }
        {
            var drawableIds = this._model.drawables.ids;
            var drawableCount = this._model.drawables.count;
            this._drawableIds.prepareCapacity(drawableCount);
            for (var i = 0; i < drawableCount; ++i) {
                this._drawableIds.pushBack(live2dcubismframework_1.CubismFramework.getIdManager().getId(drawableIds[i]));
            }
        }
    };
    CubismModel.prototype.release = function () {
        this._model.release();
        this._model = null;
    };
    return CubismModel;
}());
exports.CubismModel = CubismModel;
var $ = __importStar(__webpack_require__(/*! ./cubismmodel */ "../../../Framework/src/model/cubismmodel.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismModel = $.CubismModel;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/model/cubismmodeluserdata.ts":
/*!***********************************************************!*\
  !*** ../../../Framework/src/model/cubismmodeluserdata.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismModelUserData = exports.CubismModelUserDataNode = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var csmstring_1 = __webpack_require__(/*! ../type/csmstring */ "../../../Framework/src/type/csmstring.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismmodeluserdatajson_1 = __webpack_require__(/*! ./cubismmodeluserdatajson */ "../../../Framework/src/model/cubismmodeluserdatajson.ts");
var ArtMesh = 'ArtMesh';
var CubismModelUserDataNode = (function () {
    function CubismModelUserDataNode() {
    }
    return CubismModelUserDataNode;
}());
exports.CubismModelUserDataNode = CubismModelUserDataNode;
var CubismModelUserData = (function () {
    function CubismModelUserData() {
        this._userDataNodes = new csmvector_1.csmVector();
        this._artMeshUserDataNode = new csmvector_1.csmVector();
    }
    CubismModelUserData.create = function (buffer, size) {
        var ret = new CubismModelUserData();
        ret.parseUserData(buffer, size);
        return ret;
    };
    CubismModelUserData.delete = function (modelUserData) {
        if (modelUserData != null) {
            modelUserData.release();
            modelUserData = null;
        }
    };
    CubismModelUserData.prototype.getArtMeshUserDatas = function () {
        return this._artMeshUserDataNode;
    };
    CubismModelUserData.prototype.parseUserData = function (buffer, size) {
        var json = new cubismmodeluserdatajson_1.CubismModelUserDataJson(buffer, size);
        var typeOfArtMesh = live2dcubismframework_1.CubismFramework.getIdManager().getId(ArtMesh);
        var nodeCount = json.getUserDataCount();
        for (var i = 0; i < nodeCount; i++) {
            var addNode = new CubismModelUserDataNode();
            addNode.targetId = json.getUserDataId(i);
            addNode.targetType = live2dcubismframework_1.CubismFramework.getIdManager().getId(json.getUserDataTargetType(i));
            addNode.value = new csmstring_1.csmString(json.getUserDataValue(i));
            this._userDataNodes.pushBack(addNode);
            if (addNode.targetType == typeOfArtMesh) {
                this._artMeshUserDataNode.pushBack(addNode);
            }
        }
        json.release();
        json = void 0;
    };
    CubismModelUserData.prototype.release = function () {
        for (var i = 0; i < this._userDataNodes.getSize(); ++i) {
            this._userDataNodes.set(i, null);
        }
        this._userDataNodes = null;
    };
    return CubismModelUserData;
}());
exports.CubismModelUserData = CubismModelUserData;
var $ = __importStar(__webpack_require__(/*! ./cubismmodeluserdata */ "../../../Framework/src/model/cubismmodeluserdata.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelUserData = $.CubismModelUserData;
    Live2DCubismFramework.CubismModelUserDataNode = $.CubismModelUserDataNode;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/model/cubismmodeluserdatajson.ts":
/*!***************************************************************!*\
  !*** ../../../Framework/src/model/cubismmodeluserdatajson.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismModelUserDataJson = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismjson_1 = __webpack_require__(/*! ../utils/cubismjson */ "../../../Framework/src/utils/cubismjson.ts");
var Meta = 'Meta';
var UserDataCount = 'UserDataCount';
var TotalUserDataSize = 'TotalUserDataSize';
var UserData = 'UserData';
var Target = 'Target';
var Id = 'Id';
var Value = 'Value';
var CubismModelUserDataJson = (function () {
    function CubismModelUserDataJson(buffer, size) {
        this._json = cubismjson_1.CubismJson.create(buffer, size);
    }
    CubismModelUserDataJson.prototype.release = function () {
        cubismjson_1.CubismJson.delete(this._json);
    };
    CubismModelUserDataJson.prototype.getUserDataCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(UserDataCount)
            .toInt();
    };
    CubismModelUserDataJson.prototype.getTotalUserDataSize = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(TotalUserDataSize)
            .toInt();
    };
    CubismModelUserDataJson.prototype.getUserDataTargetType = function (i) {
        return this._json
            .getRoot()
            .getValueByString(UserData)
            .getValueByIndex(i)
            .getValueByString(Target)
            .getRawString();
    };
    CubismModelUserDataJson.prototype.getUserDataId = function (i) {
        return live2dcubismframework_1.CubismFramework.getIdManager().getId(this._json
            .getRoot()
            .getValueByString(UserData)
            .getValueByIndex(i)
            .getValueByString(Id)
            .getRawString());
    };
    CubismModelUserDataJson.prototype.getUserDataValue = function (i) {
        return this._json
            .getRoot()
            .getValueByString(UserData)
            .getValueByIndex(i)
            .getValueByString(Value)
            .getRawString();
    };
    return CubismModelUserDataJson;
}());
exports.CubismModelUserDataJson = CubismModelUserDataJson;
var $ = __importStar(__webpack_require__(/*! ./cubismmodeluserdatajson */ "../../../Framework/src/model/cubismmodeluserdatajson.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelUserDataJson = $.CubismModelUserDataJson;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/model/cubismusermodel.ts":
/*!*******************************************************!*\
  !*** ../../../Framework/src/model/cubismusermodel.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismUserModel = void 0;
var cubismbreath_1 = __webpack_require__(/*! ../effect/cubismbreath */ "../../../Framework/src/effect/cubismbreath.ts");
var cubismeyeblink_1 = __webpack_require__(/*! ../effect/cubismeyeblink */ "../../../Framework/src/effect/cubismeyeblink.ts");
var cubismpose_1 = __webpack_require__(/*! ../effect/cubismpose */ "../../../Framework/src/effect/cubismpose.ts");
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismmodelmatrix_1 = __webpack_require__(/*! ../math/cubismmodelmatrix */ "../../../Framework/src/math/cubismmodelmatrix.ts");
var cubismtargetpoint_1 = __webpack_require__(/*! ../math/cubismtargetpoint */ "../../../Framework/src/math/cubismtargetpoint.ts");
var cubismexpressionmotion_1 = __webpack_require__(/*! ../motion/cubismexpressionmotion */ "../../../Framework/src/motion/cubismexpressionmotion.ts");
var cubismmotion_1 = __webpack_require__(/*! ../motion/cubismmotion */ "../../../Framework/src/motion/cubismmotion.ts");
var cubismmotionmanager_1 = __webpack_require__(/*! ../motion/cubismmotionmanager */ "../../../Framework/src/motion/cubismmotionmanager.ts");
var cubismphysics_1 = __webpack_require__(/*! ../physics/cubismphysics */ "../../../Framework/src/physics/cubismphysics.ts");
var cubismrenderer_webgl_1 = __webpack_require__(/*! ../rendering/cubismrenderer_webgl */ "../../../Framework/src/rendering/cubismrenderer_webgl.ts");
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var cubismmoc_1 = __webpack_require__(/*! ./cubismmoc */ "../../../Framework/src/model/cubismmoc.ts");
var cubismmodeluserdata_1 = __webpack_require__(/*! ./cubismmodeluserdata */ "../../../Framework/src/model/cubismmodeluserdata.ts");
var CubismUserModel = (function () {
    function CubismUserModel() {
        this.loadMotion = function (buffer, size, name, onFinishedMotionHandler) { return cubismmotion_1.CubismMotion.create(buffer, size, onFinishedMotionHandler); };
        this._moc = null;
        this._model = null;
        this._motionManager = null;
        this._expressionManager = null;
        this._eyeBlink = null;
        this._breath = null;
        this._modelMatrix = null;
        this._pose = null;
        this._dragManager = null;
        this._physics = null;
        this._modelUserData = null;
        this._initialized = false;
        this._updating = false;
        this._opacity = 1.0;
        this._lipsync = true;
        this._lastLipSyncValue = 0.0;
        this._dragX = 0.0;
        this._dragY = 0.0;
        this._accelerationX = 0.0;
        this._accelerationY = 0.0;
        this._accelerationZ = 0.0;
        this._debugMode = false;
        this._renderer = null;
        this._motionManager = new cubismmotionmanager_1.CubismMotionManager();
        this._motionManager.setEventCallback(CubismUserModel.cubismDefaultMotionEventCallback, this);
        this._expressionManager = new cubismmotionmanager_1.CubismMotionManager();
        this._dragManager = new cubismtargetpoint_1.CubismTargetPoint();
    }
    CubismUserModel.prototype.isInitialized = function () {
        return this._initialized;
    };
    CubismUserModel.prototype.setInitialized = function (v) {
        this._initialized = v;
    };
    CubismUserModel.prototype.isUpdating = function () {
        return this._updating;
    };
    CubismUserModel.prototype.setUpdating = function (v) {
        this._updating = v;
    };
    CubismUserModel.prototype.setDragging = function (x, y) {
        this._dragManager.set(x, y);
    };
    CubismUserModel.prototype.setAcceleration = function (x, y, z) {
        this._accelerationX = x;
        this._accelerationY = y;
        this._accelerationZ = z;
    };
    CubismUserModel.prototype.getModelMatrix = function () {
        return this._modelMatrix;
    };
    CubismUserModel.prototype.setOpacity = function (a) {
        this._opacity = a;
    };
    CubismUserModel.prototype.getOpacity = function () {
        return this._opacity;
    };
    CubismUserModel.prototype.loadModel = function (buffer) {
        this._moc = cubismmoc_1.CubismMoc.create(buffer);
        this._model = this._moc.createModel();
        this._model.saveParameters();
        if (this._moc == null || this._model == null) {
            (0, cubismdebug_1.CubismLogError)('Failed to CreateModel().');
            return;
        }
        this._modelMatrix = new cubismmodelmatrix_1.CubismModelMatrix(this._model.getCanvasWidth(), this._model.getCanvasHeight());
    };
    CubismUserModel.prototype.loadExpression = function (buffer, size, name) {
        return cubismexpressionmotion_1.CubismExpressionMotion.create(buffer, size);
    };
    CubismUserModel.prototype.loadPose = function (buffer, size) {
        this._pose = cubismpose_1.CubismPose.create(buffer, size);
    };
    CubismUserModel.prototype.loadUserData = function (buffer, size) {
        this._modelUserData = cubismmodeluserdata_1.CubismModelUserData.create(buffer, size);
    };
    CubismUserModel.prototype.loadPhysics = function (buffer, size) {
        this._physics = cubismphysics_1.CubismPhysics.create(buffer, size);
    };
    CubismUserModel.prototype.isHit = function (drawableId, pointX, pointY) {
        var drawIndex = this._model.getDrawableIndex(drawableId);
        if (drawIndex < 0) {
            return false;
        }
        var count = this._model.getDrawableVertexCount(drawIndex);
        var vertices = this._model.getDrawableVertices(drawIndex);
        var left = vertices[0];
        var right = vertices[0];
        var top = vertices[1];
        var bottom = vertices[1];
        for (var j = 1; j < count; ++j) {
            var x = vertices[live2dcubismframework_1.Constant.vertexOffset + j * live2dcubismframework_1.Constant.vertexStep];
            var y = vertices[live2dcubismframework_1.Constant.vertexOffset + j * live2dcubismframework_1.Constant.vertexStep + 1];
            if (x < left) {
                left = x;
            }
            if (x > right) {
                right = x;
            }
            if (y < top) {
                top = y;
            }
            if (y > bottom) {
                bottom = y;
            }
        }
        var tx = this._modelMatrix.invertTransformX(pointX);
        var ty = this._modelMatrix.invertTransformY(pointY);
        return left <= tx && tx <= right && top <= ty && ty <= bottom;
    };
    CubismUserModel.prototype.getModel = function () {
        return this._model;
    };
    CubismUserModel.prototype.getRenderer = function () {
        return this._renderer;
    };
    CubismUserModel.prototype.createRenderer = function () {
        if (this._renderer) {
            this.deleteRenderer();
        }
        this._renderer = new cubismrenderer_webgl_1.CubismRenderer_WebGL();
        this._renderer.initialize(this._model);
    };
    CubismUserModel.prototype.deleteRenderer = function () {
        if (this._renderer != null) {
            this._renderer.release();
            this._renderer = null;
        }
    };
    CubismUserModel.prototype.motionEventFired = function (eventValue) {
        (0, cubismdebug_1.CubismLogInfo)('{0}', eventValue.s);
    };
    CubismUserModel.cubismDefaultMotionEventCallback = function (caller, eventValue, customData) {
        var model = customData;
        if (model != null) {
            model.motionEventFired(eventValue);
        }
    };
    CubismUserModel.prototype.release = function () {
        if (this._motionManager != null) {
            this._motionManager.release();
            this._motionManager = null;
        }
        if (this._expressionManager != null) {
            this._expressionManager.release();
            this._expressionManager = null;
        }
        if (this._moc != null) {
            this._moc.deleteModel(this._model);
            this._moc.release();
            this._moc = null;
        }
        this._modelMatrix = null;
        cubismpose_1.CubismPose.delete(this._pose);
        cubismeyeblink_1.CubismEyeBlink.delete(this._eyeBlink);
        cubismbreath_1.CubismBreath.delete(this._breath);
        this._dragManager = null;
        cubismphysics_1.CubismPhysics.delete(this._physics);
        cubismmodeluserdata_1.CubismModelUserData.delete(this._modelUserData);
        this.deleteRenderer();
    };
    return CubismUserModel;
}());
exports.CubismUserModel = CubismUserModel;
var $ = __importStar(__webpack_require__(/*! ./cubismusermodel */ "../../../Framework/src/model/cubismusermodel.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismUserModel = $.CubismUserModel;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/acubismmotion.ts":
/*!******************************************************!*\
  !*** ../../../Framework/src/motion/acubismmotion.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.ACubismMotion = void 0;
var cubismmath_1 = __webpack_require__(/*! ../math/cubismmath */ "../../../Framework/src/math/cubismmath.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var ACubismMotion = (function () {
    function ACubismMotion() {
        var _this = this;
        this.setFinishedMotionHandler = function (onFinishedMotionHandler) { return (_this._onFinishedMotion = onFinishedMotionHandler); };
        this.getFinishedMotionHandler = function () { return _this._onFinishedMotion; };
        this._fadeInSeconds = -1.0;
        this._fadeOutSeconds = -1.0;
        this._weight = 1.0;
        this._offsetSeconds = 0.0;
        this._firedEventValues = new csmvector_1.csmVector();
    }
    ACubismMotion.delete = function (motion) {
        motion.release();
        motion = void 0;
        motion = null;
    };
    ACubismMotion.prototype.release = function () {
        this._weight = 0.0;
    };
    ACubismMotion.prototype.updateParameters = function (model, motionQueueEntry, userTimeSeconds) {
        if (!motionQueueEntry.isAvailable() || motionQueueEntry.isFinished()) {
            return;
        }
        if (!motionQueueEntry.isStarted()) {
            motionQueueEntry.setIsStarted(true);
            motionQueueEntry.setStartTime(userTimeSeconds - this._offsetSeconds);
            motionQueueEntry.setFadeInStartTime(userTimeSeconds);
            var duration = this.getDuration();
            if (motionQueueEntry.getEndTime() < 0) {
                motionQueueEntry.setEndTime(duration <= 0 ? -1 : motionQueueEntry.getStartTime() + duration);
            }
        }
        var fadeWeight = this._weight;
        var fadeIn = this._fadeInSeconds == 0.0
            ? 1.0
            : cubismmath_1.CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
                this._fadeInSeconds);
        var fadeOut = this._fadeOutSeconds == 0.0 || motionQueueEntry.getEndTime() < 0.0
            ? 1.0
            : cubismmath_1.CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
                this._fadeOutSeconds);
        fadeWeight = fadeWeight * fadeIn * fadeOut;
        motionQueueEntry.setState(userTimeSeconds, fadeWeight);
        (0, cubismdebug_1.CSM_ASSERT)(0.0 <= fadeWeight && fadeWeight <= 1.0);
        this.doUpdateParameters(model, userTimeSeconds, fadeWeight, motionQueueEntry);
        if (motionQueueEntry.getEndTime() > 0 &&
            motionQueueEntry.getEndTime() < userTimeSeconds) {
            motionQueueEntry.setIsFinished(true);
        }
    };
    ACubismMotion.prototype.setFadeInTime = function (fadeInSeconds) {
        this._fadeInSeconds = fadeInSeconds;
    };
    ACubismMotion.prototype.setFadeOutTime = function (fadeOutSeconds) {
        this._fadeOutSeconds = fadeOutSeconds;
    };
    ACubismMotion.prototype.getFadeOutTime = function () {
        return this._fadeOutSeconds;
    };
    ACubismMotion.prototype.getFadeInTime = function () {
        return this._fadeInSeconds;
    };
    ACubismMotion.prototype.setWeight = function (weight) {
        this._weight = weight;
    };
    ACubismMotion.prototype.getWeight = function () {
        return this._weight;
    };
    ACubismMotion.prototype.getDuration = function () {
        return -1.0;
    };
    ACubismMotion.prototype.getLoopDuration = function () {
        return -1.0;
    };
    ACubismMotion.prototype.setOffsetTime = function (offsetSeconds) {
        this._offsetSeconds = offsetSeconds;
    };
    ACubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
        return this._firedEventValues;
    };
    return ACubismMotion;
}());
exports.ACubismMotion = ACubismMotion;
var $ = __importStar(__webpack_require__(/*! ./acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.ACubismMotion = $.ACubismMotion;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/cubismexpressionmotion.ts":
/*!***************************************************************!*\
  !*** ../../../Framework/src/motion/cubismexpressionmotion.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.ExpressionParameter = exports.ExpressionBlendType = exports.CubismExpressionMotion = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismjson_1 = __webpack_require__(/*! ../utils/cubismjson */ "../../../Framework/src/utils/cubismjson.ts");
var acubismmotion_1 = __webpack_require__(/*! ./acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts");
var ExpressionKeyFadeIn = 'FadeInTime';
var ExpressionKeyFadeOut = 'FadeOutTime';
var ExpressionKeyParameters = 'Parameters';
var ExpressionKeyId = 'Id';
var ExpressionKeyValue = 'Value';
var ExpressionKeyBlend = 'Blend';
var BlendValueAdd = 'Add';
var BlendValueMultiply = 'Multiply';
var BlendValueOverwrite = 'Overwrite';
var DefaultFadeTime = 1.0;
var CubismExpressionMotion = (function (_super) {
    __extends(CubismExpressionMotion, _super);
    function CubismExpressionMotion() {
        var _this = _super.call(this) || this;
        _this._parameters = new csmvector_1.csmVector();
        return _this;
    }
    CubismExpressionMotion.create = function (buffer, size) {
        var expression = new CubismExpressionMotion();
        var json = cubismjson_1.CubismJson.create(buffer, size);
        var root = json.getRoot();
        expression.setFadeInTime(root.getValueByString(ExpressionKeyFadeIn).toFloat(DefaultFadeTime));
        expression.setFadeOutTime(root.getValueByString(ExpressionKeyFadeOut).toFloat(DefaultFadeTime));
        var parameterCount = root
            .getValueByString(ExpressionKeyParameters)
            .getSize();
        expression._parameters.prepareCapacity(parameterCount);
        for (var i = 0; i < parameterCount; ++i) {
            var param = root
                .getValueByString(ExpressionKeyParameters)
                .getValueByIndex(i);
            var parameterId = live2dcubismframework_1.CubismFramework.getIdManager().getId(param.getValueByString(ExpressionKeyId).getRawString());
            var value = param
                .getValueByString(ExpressionKeyValue)
                .toFloat();
            var blendType = void 0;
            if (param.getValueByString(ExpressionKeyBlend).isNull() ||
                param.getValueByString(ExpressionKeyBlend).getString() == BlendValueAdd) {
                blendType = ExpressionBlendType.ExpressionBlendType_Add;
            }
            else if (param.getValueByString(ExpressionKeyBlend).getString() ==
                BlendValueMultiply) {
                blendType = ExpressionBlendType.ExpressionBlendType_Multiply;
            }
            else if (param.getValueByString(ExpressionKeyBlend).getString() ==
                BlendValueOverwrite) {
                blendType = ExpressionBlendType.ExpressionBlendType_Overwrite;
            }
            else {
                blendType = ExpressionBlendType.ExpressionBlendType_Add;
            }
            var item = new ExpressionParameter();
            item.parameterId = parameterId;
            item.blendType = blendType;
            item.value = value;
            expression._parameters.pushBack(item);
        }
        cubismjson_1.CubismJson.delete(json);
        return expression;
    };
    CubismExpressionMotion.prototype.doUpdateParameters = function (model, userTimeSeconds, weight, motionQueueEntry) {
        for (var i = 0; i < this._parameters.getSize(); ++i) {
            var parameter = this._parameters.at(i);
            switch (parameter.blendType) {
                case ExpressionBlendType.ExpressionBlendType_Add: {
                    model.addParameterValueById(parameter.parameterId, parameter.value, weight);
                    break;
                }
                case ExpressionBlendType.ExpressionBlendType_Multiply: {
                    model.multiplyParameterValueById(parameter.parameterId, parameter.value, weight);
                    break;
                }
                case ExpressionBlendType.ExpressionBlendType_Overwrite: {
                    model.setParameterValueById(parameter.parameterId, parameter.value, weight);
                    break;
                }
                default:
                    break;
            }
        }
    };
    return CubismExpressionMotion;
}(acubismmotion_1.ACubismMotion));
exports.CubismExpressionMotion = CubismExpressionMotion;
var ExpressionBlendType;
(function (ExpressionBlendType) {
    ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Add"] = 0] = "ExpressionBlendType_Add";
    ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Multiply"] = 1] = "ExpressionBlendType_Multiply";
    ExpressionBlendType[ExpressionBlendType["ExpressionBlendType_Overwrite"] = 2] = "ExpressionBlendType_Overwrite";
})(ExpressionBlendType = exports.ExpressionBlendType || (exports.ExpressionBlendType = {}));
var ExpressionParameter = (function () {
    function ExpressionParameter() {
    }
    return ExpressionParameter;
}());
exports.ExpressionParameter = ExpressionParameter;
var $ = __importStar(__webpack_require__(/*! ./cubismexpressionmotion */ "../../../Framework/src/motion/cubismexpressionmotion.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismExpressionMotion = $.CubismExpressionMotion;
    Live2DCubismFramework.ExpressionBlendType = $.ExpressionBlendType;
    Live2DCubismFramework.ExpressionParameter = $.ExpressionParameter;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/cubismmotion.ts":
/*!*****************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotion.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMotion = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismmath_1 = __webpack_require__(/*! ../math/cubismmath */ "../../../Framework/src/math/cubismmath.ts");
var csmstring_1 = __webpack_require__(/*! ../type/csmstring */ "../../../Framework/src/type/csmstring.ts");
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var acubismmotion_1 = __webpack_require__(/*! ./acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts");
var cubismmotioninternal_1 = __webpack_require__(/*! ./cubismmotioninternal */ "../../../Framework/src/motion/cubismmotioninternal.ts");
var cubismmotionjson_1 = __webpack_require__(/*! ./cubismmotionjson */ "../../../Framework/src/motion/cubismmotionjson.ts");
var EffectNameEyeBlink = 'EyeBlink';
var EffectNameLipSync = 'LipSync';
var TargetNameModel = 'Model';
var TargetNameParameter = 'Parameter';
var TargetNamePartOpacity = 'PartOpacity';
var UseOldBeziersCurveMotion = false;
function lerpPoints(a, b, t) {
    var result = new cubismmotioninternal_1.CubismMotionPoint();
    result.time = a.time + (b.time - a.time) * t;
    result.value = a.value + (b.value - a.value) * t;
    return result;
}
function linearEvaluate(points, time) {
    var t = (time - points[0].time) / (points[1].time - points[0].time);
    if (t < 0.0) {
        t = 0.0;
    }
    return points[0].value + (points[1].value - points[0].value) * t;
}
function bezierEvaluate(points, time) {
    var t = (time - points[0].time) / (points[3].time - points[0].time);
    if (t < 0.0) {
        t = 0.0;
    }
    var p01 = lerpPoints(points[0], points[1], t);
    var p12 = lerpPoints(points[1], points[2], t);
    var p23 = lerpPoints(points[2], points[3], t);
    var p012 = lerpPoints(p01, p12, t);
    var p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
}
function bezierEvaluateBinarySearch(points, time) {
    var x_error = 0.01;
    var x = time;
    var x1 = points[0].time;
    var x2 = points[3].time;
    var cx1 = points[1].time;
    var cx2 = points[2].time;
    var ta = 0.0;
    var tb = 1.0;
    var t = 0.0;
    var i = 0;
    for (var var33 = true; i < 20; ++i) {
        if (x < x1 + x_error) {
            t = ta;
            break;
        }
        if (x2 - x_error < x) {
            t = tb;
            break;
        }
        var centerx = (cx1 + cx2) * 0.5;
        cx1 = (x1 + cx1) * 0.5;
        cx2 = (x2 + cx2) * 0.5;
        var ctrlx12 = (cx1 + centerx) * 0.5;
        var ctrlx21 = (cx2 + centerx) * 0.5;
        centerx = (ctrlx12 + ctrlx21) * 0.5;
        if (x < centerx) {
            tb = (ta + tb) * 0.5;
            if (centerx - x_error < x) {
                t = tb;
                break;
            }
            x2 = centerx;
            cx2 = ctrlx12;
        }
        else {
            ta = (ta + tb) * 0.5;
            if (x < centerx + x_error) {
                t = ta;
                break;
            }
            x1 = centerx;
            cx1 = ctrlx21;
        }
    }
    if (i == 20) {
        t = (ta + tb) * 0.5;
    }
    if (t < 0.0) {
        t = 0.0;
    }
    if (t > 1.0) {
        t = 1.0;
    }
    var p01 = lerpPoints(points[0], points[1], t);
    var p12 = lerpPoints(points[1], points[2], t);
    var p23 = lerpPoints(points[2], points[3], t);
    var p012 = lerpPoints(p01, p12, t);
    var p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
}
function bezierEvaluateCardanoInterpretation(points, time) {
    var x = time;
    var x1 = points[0].time;
    var x2 = points[3].time;
    var cx1 = points[1].time;
    var cx2 = points[2].time;
    var a = x2 - 3.0 * cx2 + 3.0 * cx1 - x1;
    var b = 3.0 * cx2 - 6.0 * cx1 + 3.0 * x1;
    var c = 3.0 * cx1 - 3.0 * x1;
    var d = x1 - x;
    var t = cubismmath_1.CubismMath.cardanoAlgorithmForBezier(a, b, c, d);
    var p01 = lerpPoints(points[0], points[1], t);
    var p12 = lerpPoints(points[1], points[2], t);
    var p23 = lerpPoints(points[2], points[3], t);
    var p012 = lerpPoints(p01, p12, t);
    var p123 = lerpPoints(p12, p23, t);
    return lerpPoints(p012, p123, t).value;
}
function steppedEvaluate(points, time) {
    return points[0].value;
}
function inverseSteppedEvaluate(points, time) {
    return points[1].value;
}
function evaluateCurve(motionData, index, time) {
    var curve = motionData.curves.at(index);
    var target = -1;
    var totalSegmentCount = curve.baseSegmentIndex + curve.segmentCount;
    var pointPosition = 0;
    for (var i = curve.baseSegmentIndex; i < totalSegmentCount; ++i) {
        pointPosition =
            motionData.segments.at(i).basePointIndex +
                (motionData.segments.at(i).segmentType ==
                    cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_Bezier
                    ? 3
                    : 1);
        if (motionData.points.at(pointPosition).time > time) {
            target = i;
            break;
        }
    }
    if (target == -1) {
        return motionData.points.at(pointPosition).value;
    }
    var segment = motionData.segments.at(target);
    return segment.evaluate(motionData.points.get(segment.basePointIndex), time);
}
var CubismMotion = (function (_super) {
    __extends(CubismMotion, _super);
    function CubismMotion() {
        var _this = _super.call(this) || this;
        _this._sourceFrameRate = 30.0;
        _this._loopDurationSeconds = -1.0;
        _this._isLoop = false;
        _this._isLoopFadeIn = true;
        _this._lastWeight = 0.0;
        _this._motionData = null;
        _this._modelCurveIdEyeBlink = null;
        _this._modelCurveIdLipSync = null;
        _this._eyeBlinkParameterIds = null;
        _this._lipSyncParameterIds = null;
        return _this;
    }
    CubismMotion.create = function (buffer, size, onFinishedMotionHandler) {
        var ret = new CubismMotion();
        ret.parse(buffer, size);
        ret._sourceFrameRate = ret._motionData.fps;
        ret._loopDurationSeconds = ret._motionData.duration;
        ret._onFinishedMotion = onFinishedMotionHandler;
        return ret;
    };
    CubismMotion.prototype.doUpdateParameters = function (model, userTimeSeconds, fadeWeight, motionQueueEntry) {
        if (this._modelCurveIdEyeBlink == null) {
            this._modelCurveIdEyeBlink = live2dcubismframework_1.CubismFramework.getIdManager().getId(EffectNameEyeBlink);
        }
        if (this._modelCurveIdLipSync == null) {
            this._modelCurveIdLipSync = live2dcubismframework_1.CubismFramework.getIdManager().getId(EffectNameLipSync);
        }
        var timeOffsetSeconds = userTimeSeconds - motionQueueEntry.getStartTime();
        if (timeOffsetSeconds < 0.0) {
            timeOffsetSeconds = 0.0;
        }
        var lipSyncValue = Number.MAX_VALUE;
        var eyeBlinkValue = Number.MAX_VALUE;
        var MaxTargetSize = 64;
        var lipSyncFlags = 0;
        var eyeBlinkFlags = 0;
        if (this._eyeBlinkParameterIds.getSize() > MaxTargetSize) {
            (0, cubismdebug_1.CubismLogDebug)('too many eye blink targets : {0}', this._eyeBlinkParameterIds.getSize());
        }
        if (this._lipSyncParameterIds.getSize() > MaxTargetSize) {
            (0, cubismdebug_1.CubismLogDebug)('too many lip sync targets : {0}', this._lipSyncParameterIds.getSize());
        }
        var tmpFadeIn = this._fadeInSeconds <= 0.0
            ? 1.0
            : cubismmath_1.CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
                this._fadeInSeconds);
        var tmpFadeOut = this._fadeOutSeconds <= 0.0 || motionQueueEntry.getEndTime() < 0.0
            ? 1.0
            : cubismmath_1.CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
                this._fadeOutSeconds);
        var value;
        var c, parameterIndex;
        var time = timeOffsetSeconds;
        if (this._isLoop) {
            while (time > this._motionData.duration) {
                time -= this._motionData.duration;
            }
        }
        var curves = this._motionData.curves;
        for (c = 0; c < this._motionData.curveCount &&
            curves.at(c).type ==
                cubismmotioninternal_1.CubismMotionCurveTarget.CubismMotionCurveTarget_Model; ++c) {
            value = evaluateCurve(this._motionData, c, time);
            if (curves.at(c).id == this._modelCurveIdEyeBlink) {
                eyeBlinkValue = value;
            }
            else if (curves.at(c).id == this._modelCurveIdLipSync) {
                lipSyncValue = value;
            }
        }
        var parameterMotionCurveCount = 0;
        for (; c < this._motionData.curveCount &&
            curves.at(c).type ==
                cubismmotioninternal_1.CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter; ++c) {
            parameterMotionCurveCount++;
            parameterIndex = model.getParameterIndex(curves.at(c).id);
            if (parameterIndex == -1) {
                continue;
            }
            var sourceValue = model.getParameterValueByIndex(parameterIndex);
            value = evaluateCurve(this._motionData, c, time);
            if (eyeBlinkValue != Number.MAX_VALUE) {
                for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
                    if (this._eyeBlinkParameterIds.at(i) == curves.at(c).id) {
                        value *= eyeBlinkValue;
                        eyeBlinkFlags |= 1 << i;
                        break;
                    }
                }
            }
            if (lipSyncValue != Number.MAX_VALUE) {
                for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
                    if (this._lipSyncParameterIds.at(i) == curves.at(c).id) {
                        value += lipSyncValue;
                        lipSyncFlags |= 1 << i;
                        break;
                    }
                }
            }
            var v = void 0;
            if (curves.at(c).fadeInTime < 0.0 && curves.at(c).fadeOutTime < 0.0) {
                v = sourceValue + (value - sourceValue) * fadeWeight;
            }
            else {
                var fin = void 0;
                var fout = void 0;
                if (curves.at(c).fadeInTime < 0.0) {
                    fin = tmpFadeIn;
                }
                else {
                    fin =
                        curves.at(c).fadeInTime == 0.0
                            ? 1.0
                            : cubismmath_1.CubismMath.getEasingSine((userTimeSeconds - motionQueueEntry.getFadeInStartTime()) /
                                curves.at(c).fadeInTime);
                }
                if (curves.at(c).fadeOutTime < 0.0) {
                    fout = tmpFadeOut;
                }
                else {
                    fout =
                        curves.at(c).fadeOutTime == 0.0 ||
                            motionQueueEntry.getEndTime() < 0.0
                            ? 1.0
                            : cubismmath_1.CubismMath.getEasingSine((motionQueueEntry.getEndTime() - userTimeSeconds) /
                                curves.at(c).fadeOutTime);
                }
                var paramWeight = this._weight * fin * fout;
                v = sourceValue + (value - sourceValue) * paramWeight;
            }
            model.setParameterValueByIndex(parameterIndex, v, 1.0);
        }
        {
            if (eyeBlinkValue != Number.MAX_VALUE) {
                for (var i = 0; i < this._eyeBlinkParameterIds.getSize() && i < MaxTargetSize; ++i) {
                    var sourceValue = model.getParameterValueById(this._eyeBlinkParameterIds.at(i));
                    if ((eyeBlinkFlags >> i) & 0x01) {
                        continue;
                    }
                    var v = sourceValue + (eyeBlinkValue - sourceValue) * fadeWeight;
                    model.setParameterValueById(this._eyeBlinkParameterIds.at(i), v);
                }
            }
            if (lipSyncValue != Number.MAX_VALUE) {
                for (var i = 0; i < this._lipSyncParameterIds.getSize() && i < MaxTargetSize; ++i) {
                    var sourceValue = model.getParameterValueById(this._lipSyncParameterIds.at(i));
                    if ((lipSyncFlags >> i) & 0x01) {
                        continue;
                    }
                    var v = sourceValue + (lipSyncValue - sourceValue) * fadeWeight;
                    model.setParameterValueById(this._lipSyncParameterIds.at(i), v);
                }
            }
        }
        for (; c < this._motionData.curveCount &&
            curves.at(c).type ==
                cubismmotioninternal_1.CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity; ++c) {
            parameterIndex = model.getParameterIndex(curves.at(c).id);
            if (parameterIndex == -1) {
                continue;
            }
            value = evaluateCurve(this._motionData, c, time);
            model.setParameterValueByIndex(parameterIndex, value);
        }
        if (timeOffsetSeconds >= this._motionData.duration) {
            if (this._isLoop) {
                motionQueueEntry.setStartTime(userTimeSeconds);
                if (this._isLoopFadeIn) {
                    motionQueueEntry.setFadeInStartTime(userTimeSeconds);
                }
            }
            else {
                if (this._onFinishedMotion) {
                    this._onFinishedMotion(this);
                }
                motionQueueEntry.setIsFinished(true);
            }
        }
        this._lastWeight = fadeWeight;
    };
    CubismMotion.prototype.setIsLoop = function (loop) {
        this._isLoop = loop;
    };
    CubismMotion.prototype.isLoop = function () {
        return this._isLoop;
    };
    CubismMotion.prototype.setIsLoopFadeIn = function (loopFadeIn) {
        this._isLoopFadeIn = loopFadeIn;
    };
    CubismMotion.prototype.isLoopFadeIn = function () {
        return this._isLoopFadeIn;
    };
    CubismMotion.prototype.getDuration = function () {
        return this._isLoop ? -1.0 : this._loopDurationSeconds;
    };
    CubismMotion.prototype.getLoopDuration = function () {
        return this._loopDurationSeconds;
    };
    CubismMotion.prototype.setParameterFadeInTime = function (parameterId, value) {
        var curves = this._motionData.curves;
        for (var i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves.at(i).id) {
                curves.at(i).fadeInTime = value;
                return;
            }
        }
    };
    CubismMotion.prototype.setParameterFadeOutTime = function (parameterId, value) {
        var curves = this._motionData.curves;
        for (var i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves.at(i).id) {
                curves.at(i).fadeOutTime = value;
                return;
            }
        }
    };
    CubismMotion.prototype.getParameterFadeInTime = function (parameterId) {
        var curves = this._motionData.curves;
        for (var i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves.at(i).id) {
                return curves.at(i).fadeInTime;
            }
        }
        return -1;
    };
    CubismMotion.prototype.getParameterFadeOutTime = function (parameterId) {
        var curves = this._motionData.curves;
        for (var i = 0; i < this._motionData.curveCount; ++i) {
            if (parameterId == curves.at(i).id) {
                return curves.at(i).fadeOutTime;
            }
        }
        return -1;
    };
    CubismMotion.prototype.setEffectIds = function (eyeBlinkParameterIds, lipSyncParameterIds) {
        this._eyeBlinkParameterIds = eyeBlinkParameterIds;
        this._lipSyncParameterIds = lipSyncParameterIds;
    };
    CubismMotion.prototype.release = function () {
        this._motionData = void 0;
        this._motionData = null;
    };
    CubismMotion.prototype.parse = function (motionJson, size) {
        this._motionData = new cubismmotioninternal_1.CubismMotionData();
        var json = new cubismmotionjson_1.CubismMotionJson(motionJson, size);
        this._motionData.duration = json.getMotionDuration();
        this._motionData.loop = json.isMotionLoop();
        this._motionData.curveCount = json.getMotionCurveCount();
        this._motionData.fps = json.getMotionFps();
        this._motionData.eventCount = json.getEventCount();
        var areBeziersRestructed = json.getEvaluationOptionFlag(cubismmotionjson_1.EvaluationOptionFlag.EvaluationOptionFlag_AreBeziersRistricted);
        if (json.isExistMotionFadeInTime()) {
            this._fadeInSeconds =
                json.getMotionFadeInTime() < 0.0 ? 1.0 : json.getMotionFadeInTime();
        }
        else {
            this._fadeInSeconds = 1.0;
        }
        if (json.isExistMotionFadeOutTime()) {
            this._fadeOutSeconds =
                json.getMotionFadeOutTime() < 0.0 ? 1.0 : json.getMotionFadeOutTime();
        }
        else {
            this._fadeOutSeconds = 1.0;
        }
        this._motionData.curves.updateSize(this._motionData.curveCount, cubismmotioninternal_1.CubismMotionCurve, true);
        this._motionData.segments.updateSize(json.getMotionTotalSegmentCount(), cubismmotioninternal_1.CubismMotionSegment, true);
        this._motionData.points.updateSize(json.getMotionTotalPointCount(), cubismmotioninternal_1.CubismMotionPoint, true);
        this._motionData.events.updateSize(this._motionData.eventCount, cubismmotioninternal_1.CubismMotionEvent, true);
        var totalPointCount = 0;
        var totalSegmentCount = 0;
        for (var curveCount = 0; curveCount < this._motionData.curveCount; ++curveCount) {
            if (json.getMotionCurveTarget(curveCount) == TargetNameModel) {
                this._motionData.curves.at(curveCount).type =
                    cubismmotioninternal_1.CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
            }
            else if (json.getMotionCurveTarget(curveCount) == TargetNameParameter) {
                this._motionData.curves.at(curveCount).type =
                    cubismmotioninternal_1.CubismMotionCurveTarget.CubismMotionCurveTarget_Parameter;
            }
            else if (json.getMotionCurveTarget(curveCount) == TargetNamePartOpacity) {
                this._motionData.curves.at(curveCount).type =
                    cubismmotioninternal_1.CubismMotionCurveTarget.CubismMotionCurveTarget_PartOpacity;
            }
            this._motionData.curves.at(curveCount).id = json.getMotionCurveId(curveCount);
            this._motionData.curves.at(curveCount).baseSegmentIndex = totalSegmentCount;
            this._motionData.curves.at(curveCount).fadeInTime = json.isExistMotionCurveFadeInTime(curveCount)
                ? json.getMotionCurveFadeInTime(curveCount)
                : -1.0;
            this._motionData.curves.at(curveCount).fadeOutTime = json.isExistMotionCurveFadeOutTime(curveCount)
                ? json.getMotionCurveFadeOutTime(curveCount)
                : -1.0;
            for (var segmentPosition = 0; segmentPosition < json.getMotionCurveSegmentCount(curveCount);) {
                if (segmentPosition == 0) {
                    this._motionData.segments.at(totalSegmentCount).basePointIndex = totalPointCount;
                    this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition);
                    this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                    totalPointCount += 1;
                    segmentPosition += 2;
                }
                else {
                    this._motionData.segments.at(totalSegmentCount).basePointIndex =
                        totalPointCount - 1;
                }
                var segment = json.getMotionCurveSegment(curveCount, segmentPosition);
                switch (segment) {
                    case cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_Linear: {
                        this._motionData.segments.at(totalSegmentCount).segmentType =
                            cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_Linear;
                        this._motionData.segments.at(totalSegmentCount).evaluate = linearEvaluate;
                        this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                        this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                        totalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    }
                    case cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_Bezier: {
                        this._motionData.segments.at(totalSegmentCount).segmentType =
                            cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_Bezier;
                        if (areBeziersRestructed || UseOldBeziersCurveMotion) {
                            this._motionData.segments.at(totalSegmentCount).evaluate = bezierEvaluate;
                        }
                        else {
                            this._motionData.segments.at(totalSegmentCount).evaluate = bezierEvaluateCardanoInterpretation;
                        }
                        this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                        this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                        this._motionData.points.at(totalPointCount + 1).time = json.getMotionCurveSegment(curveCount, segmentPosition + 3);
                        this._motionData.points.at(totalPointCount + 1).value = json.getMotionCurveSegment(curveCount, segmentPosition + 4);
                        this._motionData.points.at(totalPointCount + 2).time = json.getMotionCurveSegment(curveCount, segmentPosition + 5);
                        this._motionData.points.at(totalPointCount + 2).value = json.getMotionCurveSegment(curveCount, segmentPosition + 6);
                        totalPointCount += 3;
                        segmentPosition += 7;
                        break;
                    }
                    case cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_Stepped: {
                        this._motionData.segments.at(totalSegmentCount).segmentType =
                            cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_Stepped;
                        this._motionData.segments.at(totalSegmentCount).evaluate = steppedEvaluate;
                        this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                        this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                        totalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    }
                    case cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped: {
                        this._motionData.segments.at(totalSegmentCount).segmentType =
                            cubismmotioninternal_1.CubismMotionSegmentType.CubismMotionSegmentType_InverseStepped;
                        this._motionData.segments.at(totalSegmentCount).evaluate = inverseSteppedEvaluate;
                        this._motionData.points.at(totalPointCount).time = json.getMotionCurveSegment(curveCount, segmentPosition + 1);
                        this._motionData.points.at(totalPointCount).value = json.getMotionCurveSegment(curveCount, segmentPosition + 2);
                        totalPointCount += 1;
                        segmentPosition += 3;
                        break;
                    }
                    default: {
                        (0, cubismdebug_1.CSM_ASSERT)(0);
                        break;
                    }
                }
                ++this._motionData.curves.at(curveCount).segmentCount;
                ++totalSegmentCount;
            }
        }
        for (var userdatacount = 0; userdatacount < json.getEventCount(); ++userdatacount) {
            this._motionData.events.at(userdatacount).fireTime = json.getEventTime(userdatacount);
            this._motionData.events.at(userdatacount).value = json.getEventValue(userdatacount);
        }
        json.release();
        json = void 0;
        json = null;
    };
    CubismMotion.prototype.getFiredEvent = function (beforeCheckTimeSeconds, motionTimeSeconds) {
        this._firedEventValues.updateSize(0);
        for (var u = 0; u < this._motionData.eventCount; ++u) {
            if (this._motionData.events.at(u).fireTime > beforeCheckTimeSeconds &&
                this._motionData.events.at(u).fireTime <= motionTimeSeconds) {
                this._firedEventValues.pushBack(new csmstring_1.csmString(this._motionData.events.at(u).value.s));
            }
        }
        return this._firedEventValues;
    };
    return CubismMotion;
}(acubismmotion_1.ACubismMotion));
exports.CubismMotion = CubismMotion;
var $ = __importStar(__webpack_require__(/*! ./cubismmotion */ "../../../Framework/src/motion/cubismmotion.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotion = $.CubismMotion;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/cubismmotioninternal.ts":
/*!*************************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotioninternal.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMotionData = exports.CubismMotionEvent = exports.CubismMotionCurve = exports.CubismMotionSegment = exports.CubismMotionPoint = exports.CubismMotionSegmentType = exports.CubismMotionCurveTarget = void 0;
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var CubismMotionCurveTarget;
(function (CubismMotionCurveTarget) {
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Model"] = 0] = "CubismMotionCurveTarget_Model";
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_Parameter"] = 1] = "CubismMotionCurveTarget_Parameter";
    CubismMotionCurveTarget[CubismMotionCurveTarget["CubismMotionCurveTarget_PartOpacity"] = 2] = "CubismMotionCurveTarget_PartOpacity";
})(CubismMotionCurveTarget = exports.CubismMotionCurveTarget || (exports.CubismMotionCurveTarget = {}));
var CubismMotionSegmentType;
(function (CubismMotionSegmentType) {
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Linear"] = 0] = "CubismMotionSegmentType_Linear";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Bezier"] = 1] = "CubismMotionSegmentType_Bezier";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_Stepped"] = 2] = "CubismMotionSegmentType_Stepped";
    CubismMotionSegmentType[CubismMotionSegmentType["CubismMotionSegmentType_InverseStepped"] = 3] = "CubismMotionSegmentType_InverseStepped";
})(CubismMotionSegmentType = exports.CubismMotionSegmentType || (exports.CubismMotionSegmentType = {}));
var CubismMotionPoint = (function () {
    function CubismMotionPoint() {
        this.time = 0.0;
        this.value = 0.0;
    }
    return CubismMotionPoint;
}());
exports.CubismMotionPoint = CubismMotionPoint;
var CubismMotionSegment = (function () {
    function CubismMotionSegment() {
        this.evaluate = null;
        this.basePointIndex = 0;
        this.segmentType = 0;
    }
    return CubismMotionSegment;
}());
exports.CubismMotionSegment = CubismMotionSegment;
var CubismMotionCurve = (function () {
    function CubismMotionCurve() {
        this.type = CubismMotionCurveTarget.CubismMotionCurveTarget_Model;
        this.segmentCount = 0;
        this.baseSegmentIndex = 0;
        this.fadeInTime = 0.0;
        this.fadeOutTime = 0.0;
    }
    return CubismMotionCurve;
}());
exports.CubismMotionCurve = CubismMotionCurve;
var CubismMotionEvent = (function () {
    function CubismMotionEvent() {
        this.fireTime = 0.0;
    }
    return CubismMotionEvent;
}());
exports.CubismMotionEvent = CubismMotionEvent;
var CubismMotionData = (function () {
    function CubismMotionData() {
        this.duration = 0.0;
        this.loop = false;
        this.curveCount = 0;
        this.eventCount = 0;
        this.fps = 0.0;
        this.curves = new csmvector_1.csmVector();
        this.segments = new csmvector_1.csmVector();
        this.points = new csmvector_1.csmVector();
        this.events = new csmvector_1.csmVector();
    }
    return CubismMotionData;
}());
exports.CubismMotionData = CubismMotionData;
var $ = __importStar(__webpack_require__(/*! ./cubismmotioninternal */ "../../../Framework/src/motion/cubismmotioninternal.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionCurve = $.CubismMotionCurve;
    Live2DCubismFramework.CubismMotionCurveTarget = $.CubismMotionCurveTarget;
    Live2DCubismFramework.CubismMotionData = $.CubismMotionData;
    Live2DCubismFramework.CubismMotionEvent = $.CubismMotionEvent;
    Live2DCubismFramework.CubismMotionPoint = $.CubismMotionPoint;
    Live2DCubismFramework.CubismMotionSegment = $.CubismMotionSegment;
    Live2DCubismFramework.CubismMotionSegmentType = $.CubismMotionSegmentType;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/cubismmotionjson.ts":
/*!*********************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotionjson.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.EvaluationOptionFlag = exports.CubismMotionJson = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var csmstring_1 = __webpack_require__(/*! ../type/csmstring */ "../../../Framework/src/type/csmstring.ts");
var cubismjson_1 = __webpack_require__(/*! ../utils/cubismjson */ "../../../Framework/src/utils/cubismjson.ts");
var Meta = 'Meta';
var Duration = 'Duration';
var Loop = 'Loop';
var AreBeziersRestricted = 'AreBeziersRestricted';
var CurveCount = 'CurveCount';
var Fps = 'Fps';
var TotalSegmentCount = 'TotalSegmentCount';
var TotalPointCount = 'TotalPointCount';
var Curves = 'Curves';
var Target = 'Target';
var Id = 'Id';
var FadeInTime = 'FadeInTime';
var FadeOutTime = 'FadeOutTime';
var Segments = 'Segments';
var UserData = 'UserData';
var UserDataCount = 'UserDataCount';
var TotalUserDataSize = 'TotalUserDataSize';
var Time = 'Time';
var Value = 'Value';
var CubismMotionJson = (function () {
    function CubismMotionJson(buffer, size) {
        this._json = cubismjson_1.CubismJson.create(buffer, size);
    }
    CubismMotionJson.prototype.release = function () {
        cubismjson_1.CubismJson.delete(this._json);
    };
    CubismMotionJson.prototype.getMotionDuration = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(Duration)
            .toFloat();
    };
    CubismMotionJson.prototype.isMotionLoop = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(Loop)
            .toBoolean();
    };
    CubismMotionJson.prototype.getEvaluationOptionFlag = function (flagType) {
        if (EvaluationOptionFlag.EvaluationOptionFlag_AreBeziersRistricted == flagType) {
            return this._json
                .getRoot()
                .getValueByString(Meta)
                .getValueByString(AreBeziersRestricted)
                .toBoolean();
        }
        return false;
    };
    CubismMotionJson.prototype.getMotionCurveCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(CurveCount)
            .toInt();
    };
    CubismMotionJson.prototype.getMotionFps = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(Fps)
            .toFloat();
    };
    CubismMotionJson.prototype.getMotionTotalSegmentCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(TotalSegmentCount)
            .toInt();
    };
    CubismMotionJson.prototype.getMotionTotalPointCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(TotalPointCount)
            .toInt();
    };
    CubismMotionJson.prototype.isExistMotionFadeInTime = function () {
        return !this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(FadeInTime)
            .isNull();
    };
    CubismMotionJson.prototype.isExistMotionFadeOutTime = function () {
        return !this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(FadeOutTime)
            .isNull();
    };
    CubismMotionJson.prototype.getMotionFadeInTime = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(FadeInTime)
            .toFloat();
    };
    CubismMotionJson.prototype.getMotionFadeOutTime = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(FadeOutTime)
            .toFloat();
    };
    CubismMotionJson.prototype.getMotionCurveTarget = function (curveIndex) {
        return this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(Target)
            .getRawString();
    };
    CubismMotionJson.prototype.getMotionCurveId = function (curveIndex) {
        return live2dcubismframework_1.CubismFramework.getIdManager().getId(this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(Id)
            .getRawString());
    };
    CubismMotionJson.prototype.isExistMotionCurveFadeInTime = function (curveIndex) {
        return !this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(FadeInTime)
            .isNull();
    };
    CubismMotionJson.prototype.isExistMotionCurveFadeOutTime = function (curveIndex) {
        return !this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(FadeOutTime)
            .isNull();
    };
    CubismMotionJson.prototype.getMotionCurveFadeInTime = function (curveIndex) {
        return this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(FadeInTime)
            .toFloat();
    };
    CubismMotionJson.prototype.getMotionCurveFadeOutTime = function (curveIndex) {
        return this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(FadeOutTime)
            .toFloat();
    };
    CubismMotionJson.prototype.getMotionCurveSegmentCount = function (curveIndex) {
        return this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(Segments)
            .getVector()
            .getSize();
    };
    CubismMotionJson.prototype.getMotionCurveSegment = function (curveIndex, segmentIndex) {
        return this._json
            .getRoot()
            .getValueByString(Curves)
            .getValueByIndex(curveIndex)
            .getValueByString(Segments)
            .getValueByIndex(segmentIndex)
            .toFloat();
    };
    CubismMotionJson.prototype.getEventCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(UserDataCount)
            .toInt();
    };
    CubismMotionJson.prototype.getTotalEventValueSize = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(TotalUserDataSize)
            .toInt();
    };
    CubismMotionJson.prototype.getEventTime = function (userDataIndex) {
        return this._json
            .getRoot()
            .getValueByString(UserData)
            .getValueByIndex(userDataIndex)
            .getValueByString(Time)
            .toFloat();
    };
    CubismMotionJson.prototype.getEventValue = function (userDataIndex) {
        return new csmstring_1.csmString(this._json
            .getRoot()
            .getValueByString(UserData)
            .getValueByIndex(userDataIndex)
            .getValueByString(Value)
            .getRawString());
    };
    return CubismMotionJson;
}());
exports.CubismMotionJson = CubismMotionJson;
var EvaluationOptionFlag;
(function (EvaluationOptionFlag) {
    EvaluationOptionFlag[EvaluationOptionFlag["EvaluationOptionFlag_AreBeziersRistricted"] = 0] = "EvaluationOptionFlag_AreBeziersRistricted";
})(EvaluationOptionFlag = exports.EvaluationOptionFlag || (exports.EvaluationOptionFlag = {}));
var $ = __importStar(__webpack_require__(/*! ./cubismmotionjson */ "../../../Framework/src/motion/cubismmotionjson.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionJson = $.CubismMotionJson;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/cubismmotionmanager.ts":
/*!************************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotionmanager.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMotionManager = void 0;
var cubismmotionqueuemanager_1 = __webpack_require__(/*! ./cubismmotionqueuemanager */ "../../../Framework/src/motion/cubismmotionqueuemanager.ts");
var CubismMotionManager = (function (_super) {
    __extends(CubismMotionManager, _super);
    function CubismMotionManager() {
        var _this = _super.call(this) || this;
        _this._currentPriority = 0;
        _this._reservePriority = 0;
        return _this;
    }
    CubismMotionManager.prototype.getCurrentPriority = function () {
        return this._currentPriority;
    };
    CubismMotionManager.prototype.getReservePriority = function () {
        return this._reservePriority;
    };
    CubismMotionManager.prototype.setReservePriority = function (val) {
        this._reservePriority = val;
    };
    CubismMotionManager.prototype.startMotionPriority = function (motion, autoDelete, priority) {
        if (priority == this._reservePriority) {
            this._reservePriority = 0;
        }
        this._currentPriority = priority;
        return _super.prototype.startMotion.call(this, motion, autoDelete, this._userTimeSeconds);
    };
    CubismMotionManager.prototype.updateMotion = function (model, deltaTimeSeconds) {
        this._userTimeSeconds += deltaTimeSeconds;
        var updated = _super.prototype.doUpdateMotion.call(this, model, this._userTimeSeconds);
        if (this.isFinished()) {
            this._currentPriority = 0;
        }
        return updated;
    };
    CubismMotionManager.prototype.reserveMotion = function (priority) {
        if (priority <= this._reservePriority ||
            priority <= this._currentPriority) {
            return false;
        }
        this._reservePriority = priority;
        return true;
    };
    return CubismMotionManager;
}(cubismmotionqueuemanager_1.CubismMotionQueueManager));
exports.CubismMotionManager = CubismMotionManager;
var $ = __importStar(__webpack_require__(/*! ./cubismmotionmanager */ "../../../Framework/src/motion/cubismmotionmanager.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionManager = $.CubismMotionManager;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/cubismmotionqueueentry.ts":
/*!***************************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotionqueueentry.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismMotionQueueEntry = void 0;
var acubismmotion_1 = __webpack_require__(/*! ./acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts");
var CubismMotionQueueEntry = (function () {
    function CubismMotionQueueEntry() {
        this._autoDelete = false;
        this._motion = null;
        this._available = true;
        this._finished = false;
        this._started = false;
        this._startTimeSeconds = -1.0;
        this._fadeInStartTimeSeconds = 0.0;
        this._endTimeSeconds = -1.0;
        this._stateTimeSeconds = 0.0;
        this._stateWeight = 0.0;
        this._lastEventCheckSeconds = 0.0;
        this._motionQueueEntryHandle = this;
        this._fadeOutSeconds = 0.0;
        this._isTriggeredFadeOut = false;
    }
    CubismMotionQueueEntry.prototype.release = function () {
        if (this._autoDelete && this._motion) {
            acubismmotion_1.ACubismMotion.delete(this._motion);
        }
    };
    CubismMotionQueueEntry.prototype.setFadeOut = function (fadeOutSeconds) {
        this._fadeOutSeconds = fadeOutSeconds;
        this._isTriggeredFadeOut = true;
    };
    CubismMotionQueueEntry.prototype.startFadeOut = function (fadeOutSeconds, userTimeSeconds) {
        var newEndTimeSeconds = userTimeSeconds + fadeOutSeconds;
        this._isTriggeredFadeOut = true;
        if (this._endTimeSeconds < 0.0 ||
            newEndTimeSeconds < this._endTimeSeconds) {
            this._endTimeSeconds = newEndTimeSeconds;
        }
    };
    CubismMotionQueueEntry.prototype.isFinished = function () {
        return this._finished;
    };
    CubismMotionQueueEntry.prototype.isStarted = function () {
        return this._started;
    };
    CubismMotionQueueEntry.prototype.getStartTime = function () {
        return this._startTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.getFadeInStartTime = function () {
        return this._fadeInStartTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.getEndTime = function () {
        return this._endTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.setStartTime = function (startTime) {
        this._startTimeSeconds = startTime;
    };
    CubismMotionQueueEntry.prototype.setFadeInStartTime = function (startTime) {
        this._fadeInStartTimeSeconds = startTime;
    };
    CubismMotionQueueEntry.prototype.setEndTime = function (endTime) {
        this._endTimeSeconds = endTime;
    };
    CubismMotionQueueEntry.prototype.setIsFinished = function (f) {
        this._finished = f;
    };
    CubismMotionQueueEntry.prototype.setIsStarted = function (f) {
        this._started = f;
    };
    CubismMotionQueueEntry.prototype.isAvailable = function () {
        return this._available;
    };
    CubismMotionQueueEntry.prototype.setIsAvailable = function (v) {
        this._available = v;
    };
    CubismMotionQueueEntry.prototype.setState = function (timeSeconds, weight) {
        this._stateTimeSeconds = timeSeconds;
        this._stateWeight = weight;
    };
    CubismMotionQueueEntry.prototype.getStateTime = function () {
        return this._stateTimeSeconds;
    };
    CubismMotionQueueEntry.prototype.getStateWeight = function () {
        return this._stateWeight;
    };
    CubismMotionQueueEntry.prototype.getLastCheckEventSeconds = function () {
        return this._lastEventCheckSeconds;
    };
    CubismMotionQueueEntry.prototype.setLastCheckEventSeconds = function (checkSeconds) {
        this._lastEventCheckSeconds = checkSeconds;
    };
    CubismMotionQueueEntry.prototype.isTriggeredFadeOut = function () {
        return this._isTriggeredFadeOut && this._endTimeSeconds < 0.0;
    };
    CubismMotionQueueEntry.prototype.getFadeOutSeconds = function () {
        return this._fadeOutSeconds;
    };
    return CubismMotionQueueEntry;
}());
exports.CubismMotionQueueEntry = CubismMotionQueueEntry;
var $ = __importStar(__webpack_require__(/*! ./cubismmotionqueueentry */ "../../../Framework/src/motion/cubismmotionqueueentry.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionQueueEntry = $.CubismMotionQueueEntry;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/motion/cubismmotionqueuemanager.ts":
/*!*****************************************************************!*\
  !*** ../../../Framework/src/motion/cubismmotionqueuemanager.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.InvalidMotionQueueEntryHandleValue = exports.CubismMotionQueueManager = void 0;
var cubismmotionqueueentry_1 = __webpack_require__(/*! ./cubismmotionqueueentry */ "../../../Framework/src/motion/cubismmotionqueueentry.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var CubismMotionQueueManager = (function () {
    function CubismMotionQueueManager() {
        this._userTimeSeconds = 0.0;
        this._eventCallBack = null;
        this._eventCustomData = null;
        this._motions = new csmvector_1.csmVector();
    }
    CubismMotionQueueManager.prototype.release = function () {
        for (var i = 0; i < this._motions.getSize(); ++i) {
            if (this._motions.at(i)) {
                this._motions.at(i).release();
                this._motions.set(i, void 0);
                this._motions.set(i, null);
            }
        }
        this._motions = null;
    };
    CubismMotionQueueManager.prototype.startMotion = function (motion, autoDelete, userTimeSeconds) {
        if (motion == null) {
            return exports.InvalidMotionQueueEntryHandleValue;
        }
        var motionQueueEntry = null;
        for (var i = 0; i < this._motions.getSize(); ++i) {
            motionQueueEntry = this._motions.at(i);
            if (motionQueueEntry == null) {
                continue;
            }
            motionQueueEntry.setFadeOut(motionQueueEntry._motion.getFadeOutTime());
        }
        motionQueueEntry = new cubismmotionqueueentry_1.CubismMotionQueueEntry();
        motionQueueEntry._autoDelete = autoDelete;
        motionQueueEntry._motion = motion;
        this._motions.pushBack(motionQueueEntry);
        return motionQueueEntry._motionQueueEntryHandle;
    };
    CubismMotionQueueManager.prototype.isFinished = function () {
        for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
            var motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                ite = this._motions.erase(ite);
                continue;
            }
            var motion = motionQueueEntry._motion;
            if (motion == null) {
                motionQueueEntry.release();
                motionQueueEntry = void 0;
                motionQueueEntry = null;
                ite = this._motions.erase(ite);
                continue;
            }
            if (!motionQueueEntry.isFinished()) {
                return false;
            }
            else {
                ite.preIncrement();
            }
        }
        return true;
    };
    CubismMotionQueueManager.prototype.isFinishedByHandle = function (motionQueueEntryNumber) {
        for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.increment()) {
            var motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                continue;
            }
            if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber &&
                !motionQueueEntry.isFinished()) {
                return false;
            }
        }
        return true;
    };
    CubismMotionQueueManager.prototype.stopAllMotions = function () {
        for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
            var motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                ite = this._motions.erase(ite);
                continue;
            }
            motionQueueEntry.release();
            motionQueueEntry = void 0;
            motionQueueEntry = null;
            ite = this._motions.erase(ite);
        }
    };
    CubismMotionQueueManager.prototype.getCubismMotionQueueEntry = function (motionQueueEntryNumber) {
        for (var ite = this._motions.begin(); ite.notEqual(this._motions.end()); ite.preIncrement()) {
            var motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                continue;
            }
            if (motionQueueEntry._motionQueueEntryHandle == motionQueueEntryNumber) {
                return motionQueueEntry;
            }
        }
        return null;
    };
    CubismMotionQueueManager.prototype.setEventCallback = function (callback, customData) {
        if (customData === void 0) { customData = null; }
        this._eventCallBack = callback;
        this._eventCustomData = customData;
    };
    CubismMotionQueueManager.prototype.doUpdateMotion = function (model, userTimeSeconds) {
        var updated = false;
        for (var ite = this._motions.begin(); ite.notEqual(this._motions.end());) {
            var motionQueueEntry = ite.ptr();
            if (motionQueueEntry == null) {
                ite = this._motions.erase(ite);
                continue;
            }
            var motion = motionQueueEntry._motion;
            if (motion == null) {
                motionQueueEntry.release();
                motionQueueEntry = void 0;
                motionQueueEntry = null;
                ite = this._motions.erase(ite);
                continue;
            }
            motion.updateParameters(model, motionQueueEntry, userTimeSeconds);
            updated = true;
            var firedList = motion.getFiredEvent(motionQueueEntry.getLastCheckEventSeconds() -
                motionQueueEntry.getStartTime(), userTimeSeconds - motionQueueEntry.getStartTime());
            for (var i = 0; i < firedList.getSize(); ++i) {
                this._eventCallBack(this, firedList.at(i), this._eventCustomData);
            }
            motionQueueEntry.setLastCheckEventSeconds(userTimeSeconds);
            if (motionQueueEntry.isFinished()) {
                motionQueueEntry.release();
                motionQueueEntry = void 0;
                motionQueueEntry = null;
                ite = this._motions.erase(ite);
            }
            else {
                if (motionQueueEntry.isTriggeredFadeOut()) {
                    motionQueueEntry.startFadeOut(motionQueueEntry.getFadeOutSeconds(), userTimeSeconds);
                }
                ite.preIncrement();
            }
        }
        return updated;
    };
    return CubismMotionQueueManager;
}());
exports.CubismMotionQueueManager = CubismMotionQueueManager;
exports.InvalidMotionQueueEntryHandleValue = -1;
var $ = __importStar(__webpack_require__(/*! ./cubismmotionqueuemanager */ "../../../Framework/src/motion/cubismmotionqueuemanager.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismMotionQueueManager = $.CubismMotionQueueManager;
    Live2DCubismFramework.InvalidMotionQueueEntryHandleValue = $.InvalidMotionQueueEntryHandleValue;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/physics/cubismphysics.ts":
/*!*******************************************************!*\
  !*** ../../../Framework/src/physics/cubismphysics.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.Options = exports.CubismPhysics = void 0;
var cubismmath_1 = __webpack_require__(/*! ../math/cubismmath */ "../../../Framework/src/math/cubismmath.ts");
var cubismvector2_1 = __webpack_require__(/*! ../math/cubismvector2 */ "../../../Framework/src/math/cubismvector2.ts");
var cubismphysicsinternal_1 = __webpack_require__(/*! ./cubismphysicsinternal */ "../../../Framework/src/physics/cubismphysicsinternal.ts");
var cubismphysicsjson_1 = __webpack_require__(/*! ./cubismphysicsjson */ "../../../Framework/src/physics/cubismphysicsjson.ts");
var PhysicsTypeTagX = 'X';
var PhysicsTypeTagY = 'Y';
var PhysicsTypeTagAngle = 'Angle';
var AirResistance = 5.0;
var MaximumWeight = 100.0;
var MovementThreshold = 0.001;
var CubismPhysics = (function () {
    function CubismPhysics() {
        this._physicsRig = null;
        this._options = new Options();
        this._options.gravity.y = -1.0;
        this._options.gravity.x = 0;
        this._options.wind.x = 0;
        this._options.wind.y = 0;
    }
    CubismPhysics.create = function (buffer, size) {
        var ret = new CubismPhysics();
        ret.parse(buffer, size);
        ret._physicsRig.gravity.y = 0;
        return ret;
    };
    CubismPhysics.delete = function (physics) {
        if (physics != null) {
            physics.release();
            physics = null;
        }
    };
    CubismPhysics.prototype.evaluate = function (model, deltaTimeSeconds) {
        var totalAngle;
        var weight;
        var radAngle;
        var outputValue;
        var totalTranslation = new cubismvector2_1.CubismVector2();
        var currentSetting;
        var currentInput;
        var currentOutput;
        var currentParticles;
        var parameterValue;
        var parameterMaximumValue;
        var parameterMinimumValue;
        var parameterDefaultValue;
        parameterValue = model.getModel().parameters.values;
        parameterMaximumValue = model.getModel().parameters.maximumValues;
        parameterMinimumValue = model.getModel().parameters.minimumValues;
        parameterDefaultValue = model.getModel().parameters.defaultValues;
        for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
            totalAngle = { angle: 0.0 };
            totalTranslation.x = 0.0;
            totalTranslation.y = 0.0;
            currentSetting = this._physicsRig.settings.at(settingIndex);
            currentInput = this._physicsRig.inputs.get(currentSetting.baseInputIndex);
            currentOutput = this._physicsRig.outputs.get(currentSetting.baseOutputIndex);
            currentParticles = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
            for (var i = 0; i < currentSetting.inputCount; ++i) {
                weight = currentInput[i].weight / MaximumWeight;
                if (currentInput[i].sourceParameterIndex == -1) {
                    currentInput[i].sourceParameterIndex = model.getParameterIndex(currentInput[i].source.id);
                }
                currentInput[i].getNormalizedParameterValue(totalTranslation, totalAngle, parameterValue[currentInput[i].sourceParameterIndex], parameterMinimumValue[currentInput[i].sourceParameterIndex], parameterMaximumValue[currentInput[i].sourceParameterIndex], parameterDefaultValue[currentInput[i].sourceParameterIndex], currentSetting.normalizationPosition, currentSetting.normalizationAngle, currentInput[i].reflect, weight);
            }
            radAngle = cubismmath_1.CubismMath.degreesToRadian(-totalAngle.angle);
            totalTranslation.x =
                totalTranslation.x * cubismmath_1.CubismMath.cos(radAngle) -
                    totalTranslation.y * cubismmath_1.CubismMath.sin(radAngle);
            totalTranslation.y =
                totalTranslation.x * cubismmath_1.CubismMath.sin(radAngle) +
                    totalTranslation.y * cubismmath_1.CubismMath.cos(radAngle);
            updateParticles(currentParticles, currentSetting.particleCount, totalTranslation, totalAngle.angle, this._options.wind, MovementThreshold * currentSetting.normalizationPosition.maximum, deltaTimeSeconds, AirResistance);
            for (var i = 0; i < currentSetting.outputCount; ++i) {
                var particleIndex = currentOutput[i].vertexIndex;
                if (particleIndex < 1 ||
                    particleIndex >= currentSetting.particleCount) {
                    break;
                }
                if (currentOutput[i].destinationParameterIndex == -1) {
                    currentOutput[i].destinationParameterIndex = model.getParameterIndex(currentOutput[i].destination.id);
                }
                var translation = new cubismvector2_1.CubismVector2();
                translation.x =
                    currentParticles[particleIndex].position.x -
                        currentParticles[particleIndex - 1].position.x;
                translation.y =
                    currentParticles[particleIndex].position.y -
                        currentParticles[particleIndex - 1].position.y;
                outputValue = currentOutput[i].getValue(translation, currentParticles, particleIndex, currentOutput[i].reflect, this._options.gravity);
                var destinationParameterIndex = currentOutput[i].destinationParameterIndex;
                var outParameterValue = !Float32Array.prototype.slice && 'subarray' in Float32Array.prototype
                    ? JSON.parse(JSON.stringify(parameterValue.subarray(destinationParameterIndex)))
                    : parameterValue.slice(destinationParameterIndex);
                updateOutputParameterValue(outParameterValue, parameterMinimumValue[destinationParameterIndex], parameterMaximumValue[destinationParameterIndex], outputValue, currentOutput[i]);
                for (var offset = destinationParameterIndex, outParamIndex = 0; offset < parameterValue.length; offset++, outParamIndex++) {
                    parameterValue[offset] = outParameterValue[outParamIndex];
                }
            }
        }
    };
    CubismPhysics.prototype.setOptions = function (options) {
        this._options = options;
    };
    CubismPhysics.prototype.getOption = function () {
        return this._options;
    };
    CubismPhysics.prototype.release = function () {
        this._physicsRig = void 0;
        this._physicsRig = null;
    };
    CubismPhysics.prototype.parse = function (physicsJson, size) {
        this._physicsRig = new cubismphysicsinternal_1.CubismPhysicsRig();
        var json = new cubismphysicsjson_1.CubismPhysicsJson(physicsJson, size);
        this._physicsRig.gravity = json.getGravity();
        this._physicsRig.wind = json.getWind();
        this._physicsRig.subRigCount = json.getSubRigCount();
        this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, cubismphysicsinternal_1.CubismPhysicsSubRig, true);
        this._physicsRig.inputs.updateSize(json.getTotalInputCount(), cubismphysicsinternal_1.CubismPhysicsInput, true);
        this._physicsRig.outputs.updateSize(json.getTotalOutputCount(), cubismphysicsinternal_1.CubismPhysicsOutput, true);
        this._physicsRig.particles.updateSize(json.getVertexCount(), cubismphysicsinternal_1.CubismPhysicsParticle, true);
        var inputIndex = 0, outputIndex = 0, particleIndex = 0;
        for (var i = 0; i < this._physicsRig.settings.getSize(); ++i) {
            this._physicsRig.settings.at(i).normalizationPosition.minimum = json.getNormalizationPositionMinimumValue(i);
            this._physicsRig.settings.at(i).normalizationPosition.maximum = json.getNormalizationPositionMaximumValue(i);
            this._physicsRig.settings.at(i).normalizationPosition.defalut = json.getNormalizationPositionDefaultValue(i);
            this._physicsRig.settings.at(i).normalizationAngle.minimum = json.getNormalizationAngleMinimumValue(i);
            this._physicsRig.settings.at(i).normalizationAngle.maximum = json.getNormalizationAngleMaximumValue(i);
            this._physicsRig.settings.at(i).normalizationAngle.defalut = json.getNormalizationAngleDefaultValue(i);
            this._physicsRig.settings.at(i).inputCount = json.getInputCount(i);
            this._physicsRig.settings.at(i).baseInputIndex = inputIndex;
            for (var j = 0; j < this._physicsRig.settings.at(i).inputCount; ++j) {
                this._physicsRig.inputs.at(inputIndex + j).sourceParameterIndex = -1;
                this._physicsRig.inputs.at(inputIndex + j).weight = json.getInputWeight(i, j);
                this._physicsRig.inputs.at(inputIndex + j).reflect = json.getInputReflect(i, j);
                if (json.getInputType(i, j) == PhysicsTypeTagX) {
                    this._physicsRig.inputs.at(inputIndex + j).type =
                        cubismphysicsinternal_1.CubismPhysicsSource.CubismPhysicsSource_X;
                    this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationXFromNormalizedParameterValue;
                }
                else if (json.getInputType(i, j) == PhysicsTypeTagY) {
                    this._physicsRig.inputs.at(inputIndex + j).type =
                        cubismphysicsinternal_1.CubismPhysicsSource.CubismPhysicsSource_Y;
                    this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputTranslationYFromNormalizedParamterValue;
                }
                else if (json.getInputType(i, j) == PhysicsTypeTagAngle) {
                    this._physicsRig.inputs.at(inputIndex + j).type =
                        cubismphysicsinternal_1.CubismPhysicsSource.CubismPhysicsSource_Angle;
                    this._physicsRig.inputs.at(inputIndex + j).getNormalizedParameterValue = getInputAngleFromNormalizedParameterValue;
                }
                this._physicsRig.inputs.at(inputIndex + j).source.targetType =
                    cubismphysicsinternal_1.CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                this._physicsRig.inputs.at(inputIndex + j).source.id = json.getInputSourceId(i, j);
            }
            inputIndex += this._physicsRig.settings.at(i).inputCount;
            this._physicsRig.settings.at(i).outputCount = json.getOutputCount(i);
            this._physicsRig.settings.at(i).baseOutputIndex = outputIndex;
            for (var j = 0; j < this._physicsRig.settings.at(i).outputCount; ++j) {
                this._physicsRig.outputs.at(outputIndex + j).destinationParameterIndex = -1;
                this._physicsRig.outputs.at(outputIndex + j).vertexIndex = json.getOutputVertexIndex(i, j);
                this._physicsRig.outputs.at(outputIndex + j).angleScale = json.getOutputAngleScale(i, j);
                this._physicsRig.outputs.at(outputIndex + j).weight = json.getOutputWeight(i, j);
                this._physicsRig.outputs.at(outputIndex + j).destination.targetType =
                    cubismphysicsinternal_1.CubismPhysicsTargetType.CubismPhysicsTargetType_Parameter;
                this._physicsRig.outputs.at(outputIndex + j).destination.id = json.getOutputDestinationId(i, j);
                if (json.getOutputType(i, j) == PhysicsTypeTagX) {
                    this._physicsRig.outputs.at(outputIndex + j).type =
                        cubismphysicsinternal_1.CubismPhysicsSource.CubismPhysicsSource_X;
                    this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationX;
                    this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationX;
                }
                else if (json.getOutputType(i, j) == PhysicsTypeTagY) {
                    this._physicsRig.outputs.at(outputIndex + j).type =
                        cubismphysicsinternal_1.CubismPhysicsSource.CubismPhysicsSource_Y;
                    this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputTranslationY;
                    this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleTranslationY;
                }
                else if (json.getOutputType(i, j) == PhysicsTypeTagAngle) {
                    this._physicsRig.outputs.at(outputIndex + j).type =
                        cubismphysicsinternal_1.CubismPhysicsSource.CubismPhysicsSource_Angle;
                    this._physicsRig.outputs.at(outputIndex + j).getValue = getOutputAngle;
                    this._physicsRig.outputs.at(outputIndex + j).getScale = getOutputScaleAngle;
                }
                this._physicsRig.outputs.at(outputIndex + j).reflect = json.getOutputReflect(i, j);
            }
            outputIndex += this._physicsRig.settings.at(i).outputCount;
            this._physicsRig.settings.at(i).particleCount = json.getParticleCount(i);
            this._physicsRig.settings.at(i).baseParticleIndex = particleIndex;
            for (var j = 0; j < this._physicsRig.settings.at(i).particleCount; ++j) {
                this._physicsRig.particles.at(particleIndex + j).mobility = json.getParticleMobility(i, j);
                this._physicsRig.particles.at(particleIndex + j).delay = json.getParticleDelay(i, j);
                this._physicsRig.particles.at(particleIndex + j).acceleration = json.getParticleAcceleration(i, j);
                this._physicsRig.particles.at(particleIndex + j).radius = json.getParticleRadius(i, j);
                this._physicsRig.particles.at(particleIndex + j).position = json.getParticlePosition(i, j);
            }
            particleIndex += this._physicsRig.settings.at(i).particleCount;
        }
        this.initialize();
        json.release();
        json = void 0;
        json = null;
    };
    CubismPhysics.prototype.initialize = function () {
        var strand;
        var currentSetting;
        var radius;
        for (var settingIndex = 0; settingIndex < this._physicsRig.subRigCount; ++settingIndex) {
            currentSetting = this._physicsRig.settings.at(settingIndex);
            strand = this._physicsRig.particles.get(currentSetting.baseParticleIndex);
            strand[0].initialPosition = new cubismvector2_1.CubismVector2(0.0, 0.0);
            strand[0].lastPosition = new cubismvector2_1.CubismVector2(strand[0].initialPosition.x, strand[0].initialPosition.y);
            strand[0].lastGravity = new cubismvector2_1.CubismVector2(0.0, -1.0);
            strand[0].lastGravity.y *= -1.0;
            strand[0].velocity = new cubismvector2_1.CubismVector2(0.0, 0.0);
            strand[0].force = new cubismvector2_1.CubismVector2(0.0, 0.0);
            for (var i = 1; i < currentSetting.particleCount; ++i) {
                radius = new cubismvector2_1.CubismVector2(0.0, 0.0);
                radius.y = strand[i].radius;
                strand[i].initialPosition = new cubismvector2_1.CubismVector2(strand[i - 1].initialPosition.x + radius.x, strand[i - 1].initialPosition.y + radius.y);
                strand[i].position = new cubismvector2_1.CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                strand[i].lastPosition = new cubismvector2_1.CubismVector2(strand[i].initialPosition.x, strand[i].initialPosition.y);
                strand[i].lastGravity = new cubismvector2_1.CubismVector2(0.0, -1.0);
                strand[i].lastGravity.y *= -1.0;
                strand[i].velocity = new cubismvector2_1.CubismVector2(0.0, 0.0);
                strand[i].force = new cubismvector2_1.CubismVector2(0.0, 0.0);
            }
        }
    };
    return CubismPhysics;
}());
exports.CubismPhysics = CubismPhysics;
var Options = (function () {
    function Options() {
        this.gravity = new cubismvector2_1.CubismVector2(0, 0);
        this.wind = new cubismvector2_1.CubismVector2(0, 0);
    }
    return Options;
}());
exports.Options = Options;
function sign(value) {
    var ret = 0;
    if (value > 0.0) {
        ret = 1;
    }
    else if (value < 0.0) {
        ret = -1;
    }
    return ret;
}
function getInputTranslationXFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.x +=
        normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
}
function getInputTranslationYFromNormalizedParamterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition, normalizationAngle, isInverted, weight) {
    targetTranslation.y +=
        normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationPosition.minimum, normalizationPosition.maximum, normalizationPosition.defalut, isInverted) * weight;
}
function getInputAngleFromNormalizedParameterValue(targetTranslation, targetAngle, value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizaitionPosition, normalizationAngle, isInverted, weight) {
    targetAngle.angle +=
        normalizeParameterValue(value, parameterMinimumValue, parameterMaximumValue, parameterDefaultValue, normalizationAngle.minimum, normalizationAngle.maximum, normalizationAngle.defalut, isInverted) * weight;
}
function getOutputTranslationX(translation, particles, particleIndex, isInverted, parentGravity) {
    var outputValue = translation.x;
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getOutputTranslationY(translation, particles, particleIndex, isInverted, parentGravity) {
    var outputValue = translation.y;
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getOutputAngle(translation, particles, particleIndex, isInverted, parentGravity) {
    var outputValue;
    if (particleIndex >= 2) {
        parentGravity = particles[particleIndex - 1].position.substract(particles[particleIndex - 2].position);
    }
    else {
        parentGravity = parentGravity.multiplyByScaler(-1.0);
    }
    outputValue = cubismmath_1.CubismMath.directionToRadian(parentGravity, translation);
    if (isInverted) {
        outputValue *= -1.0;
    }
    return outputValue;
}
function getRangeValue(min, max) {
    var maxValue = cubismmath_1.CubismMath.max(min, max);
    var minValue = cubismmath_1.CubismMath.min(min, max);
    return cubismmath_1.CubismMath.abs(maxValue - minValue);
}
function getDefaultValue(min, max) {
    var minValue = cubismmath_1.CubismMath.min(min, max);
    return minValue + getRangeValue(min, max) / 2.0;
}
function getOutputScaleTranslationX(translationScale, angleScale) {
    return JSON.parse(JSON.stringify(translationScale.x));
}
function getOutputScaleTranslationY(translationScale, angleScale) {
    return JSON.parse(JSON.stringify(translationScale.y));
}
function getOutputScaleAngle(translationScale, angleScale) {
    return JSON.parse(JSON.stringify(angleScale));
}
function updateParticles(strand, strandCount, totalTranslation, totalAngle, windDirection, thresholdValue, deltaTimeSeconds, airResistance) {
    var totalRadian;
    var delay;
    var radian;
    var currentGravity;
    var direction = new cubismvector2_1.CubismVector2(0.0, 0.0);
    var velocity = new cubismvector2_1.CubismVector2(0.0, 0.0);
    var force = new cubismvector2_1.CubismVector2(0.0, 0.0);
    var newDirection = new cubismvector2_1.CubismVector2(0.0, 0.0);
    strand[0].position = new cubismvector2_1.CubismVector2(totalTranslation.x, totalTranslation.y);
    totalRadian = cubismmath_1.CubismMath.degreesToRadian(totalAngle);
    currentGravity = cubismmath_1.CubismMath.radianToDirection(totalRadian);
    currentGravity.normalize();
    for (var i = 1; i < strandCount; ++i) {
        strand[i].force = currentGravity
            .multiplyByScaler(strand[i].acceleration)
            .add(windDirection);
        strand[i].lastPosition = new cubismvector2_1.CubismVector2(strand[i].position.x, strand[i].position.y);
        delay = strand[i].delay * deltaTimeSeconds * 30.0;
        direction = strand[i].position.substract(strand[i - 1].position);
        radian =
            cubismmath_1.CubismMath.directionToRadian(strand[i].lastGravity, currentGravity) /
                airResistance;
        direction.x =
            cubismmath_1.CubismMath.cos(radian) * direction.x -
                direction.y * cubismmath_1.CubismMath.sin(radian);
        direction.y =
            cubismmath_1.CubismMath.sin(radian) * direction.x +
                direction.y * cubismmath_1.CubismMath.cos(radian);
        strand[i].position = strand[i - 1].position.add(direction);
        velocity = strand[i].velocity.multiplyByScaler(delay);
        force = strand[i].force.multiplyByScaler(delay).multiplyByScaler(delay);
        strand[i].position = strand[i].position.add(velocity).add(force);
        newDirection = strand[i].position.substract(strand[i - 1].position);
        newDirection.normalize();
        strand[i].position = strand[i - 1].position.add(newDirection.multiplyByScaler(strand[i].radius));
        if (cubismmath_1.CubismMath.abs(strand[i].position.x) < thresholdValue) {
            strand[i].position.x = 0.0;
        }
        if (delay != 0.0) {
            strand[i].velocity = strand[i].position.substract(strand[i].lastPosition);
            strand[i].velocity = strand[i].velocity.divisionByScalar(delay);
            strand[i].velocity = strand[i].velocity.multiplyByScaler(strand[i].mobility);
        }
        strand[i].force = new cubismvector2_1.CubismVector2(0.0, 0.0);
        strand[i].lastGravity = new cubismvector2_1.CubismVector2(currentGravity.x, currentGravity.y);
    }
}
function updateOutputParameterValue(parameterValue, parameterValueMinimum, parameterValueMaximum, translation, output) {
    var outputScale;
    var value;
    var weight;
    outputScale = output.getScale(output.translationScale, output.angleScale);
    value = translation * outputScale;
    if (value < parameterValueMinimum) {
        if (value < output.valueBelowMinimum) {
            output.valueBelowMinimum = value;
        }
        value = parameterValueMinimum;
    }
    else if (value > parameterValueMaximum) {
        if (value > output.valueExceededMaximum) {
            output.valueExceededMaximum = value;
        }
        value = parameterValueMaximum;
    }
    weight = output.weight / MaximumWeight;
    if (weight >= 1.0) {
        parameterValue[0] = value;
    }
    else {
        value = parameterValue[0] * (1.0 - weight) + value * weight;
        parameterValue[0] = value;
    }
}
function normalizeParameterValue(value, parameterMinimum, parameterMaximum, parameterDefault, normalizedMinimum, normalizedMaximum, normalizedDefault, isInverted) {
    var result = 0.0;
    var maxValue = cubismmath_1.CubismMath.max(parameterMaximum, parameterMinimum);
    if (maxValue < value) {
        value = maxValue;
    }
    var minValue = cubismmath_1.CubismMath.min(parameterMaximum, parameterMinimum);
    if (minValue > value) {
        value = minValue;
    }
    var minNormValue = cubismmath_1.CubismMath.min(normalizedMinimum, normalizedMaximum);
    var maxNormValue = cubismmath_1.CubismMath.max(normalizedMinimum, normalizedMaximum);
    var middleNormValue = normalizedDefault;
    var middleValue = getDefaultValue(minValue, maxValue);
    var paramValue = value - middleValue;
    switch (sign(paramValue)) {
        case 1: {
            var nLength = maxNormValue - middleNormValue;
            var pLength = maxValue - middleValue;
            if (pLength != 0.0) {
                result = paramValue * (nLength / pLength);
                result += middleNormValue;
            }
            break;
        }
        case -1: {
            var nLength = minNormValue - middleNormValue;
            var pLength = minValue - middleValue;
            if (pLength != 0.0) {
                result = paramValue * (nLength / pLength);
                result += middleNormValue;
            }
            break;
        }
        case 0: {
            result = middleNormValue;
            break;
        }
        default: {
            break;
        }
    }
    return isInverted ? result : result * -1.0;
}
var $ = __importStar(__webpack_require__(/*! ./cubismphysics */ "../../../Framework/src/physics/cubismphysics.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismPhysics = $.CubismPhysics;
    Live2DCubismFramework.Options = $.Options;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/physics/cubismphysicsinternal.ts":
/*!***************************************************************!*\
  !*** ../../../Framework/src/physics/cubismphysicsinternal.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismPhysicsRig = exports.CubismPhysicsOutput = exports.CubismPhysicsInput = exports.CubismPhysicsSubRig = exports.CubismPhysicsParticle = exports.CubismPhysicsNormalization = exports.CubismPhysicsParameter = exports.PhysicsJsonEffectiveForces = exports.CubismPhysicsSource = exports.CubismPhysicsTargetType = void 0;
var cubismvector2_1 = __webpack_require__(/*! ../math/cubismvector2 */ "../../../Framework/src/math/cubismvector2.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var CubismPhysicsTargetType;
(function (CubismPhysicsTargetType) {
    CubismPhysicsTargetType[CubismPhysicsTargetType["CubismPhysicsTargetType_Parameter"] = 0] = "CubismPhysicsTargetType_Parameter";
})(CubismPhysicsTargetType = exports.CubismPhysicsTargetType || (exports.CubismPhysicsTargetType = {}));
var CubismPhysicsSource;
(function (CubismPhysicsSource) {
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_X"] = 0] = "CubismPhysicsSource_X";
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Y"] = 1] = "CubismPhysicsSource_Y";
    CubismPhysicsSource[CubismPhysicsSource["CubismPhysicsSource_Angle"] = 2] = "CubismPhysicsSource_Angle";
})(CubismPhysicsSource = exports.CubismPhysicsSource || (exports.CubismPhysicsSource = {}));
var PhysicsJsonEffectiveForces = (function () {
    function PhysicsJsonEffectiveForces() {
        this.gravity = new cubismvector2_1.CubismVector2(0, 0);
        this.wind = new cubismvector2_1.CubismVector2(0, 0);
    }
    return PhysicsJsonEffectiveForces;
}());
exports.PhysicsJsonEffectiveForces = PhysicsJsonEffectiveForces;
var CubismPhysicsParameter = (function () {
    function CubismPhysicsParameter() {
    }
    return CubismPhysicsParameter;
}());
exports.CubismPhysicsParameter = CubismPhysicsParameter;
var CubismPhysicsNormalization = (function () {
    function CubismPhysicsNormalization() {
    }
    return CubismPhysicsNormalization;
}());
exports.CubismPhysicsNormalization = CubismPhysicsNormalization;
var CubismPhysicsParticle = (function () {
    function CubismPhysicsParticle() {
        this.initialPosition = new cubismvector2_1.CubismVector2(0, 0);
        this.position = new cubismvector2_1.CubismVector2(0, 0);
        this.lastPosition = new cubismvector2_1.CubismVector2(0, 0);
        this.lastGravity = new cubismvector2_1.CubismVector2(0, 0);
        this.force = new cubismvector2_1.CubismVector2(0, 0);
        this.velocity = new cubismvector2_1.CubismVector2(0, 0);
    }
    return CubismPhysicsParticle;
}());
exports.CubismPhysicsParticle = CubismPhysicsParticle;
var CubismPhysicsSubRig = (function () {
    function CubismPhysicsSubRig() {
        this.normalizationPosition = new CubismPhysicsNormalization();
        this.normalizationAngle = new CubismPhysicsNormalization();
    }
    return CubismPhysicsSubRig;
}());
exports.CubismPhysicsSubRig = CubismPhysicsSubRig;
var CubismPhysicsInput = (function () {
    function CubismPhysicsInput() {
        this.source = new CubismPhysicsParameter();
    }
    return CubismPhysicsInput;
}());
exports.CubismPhysicsInput = CubismPhysicsInput;
var CubismPhysicsOutput = (function () {
    function CubismPhysicsOutput() {
        this.destination = new CubismPhysicsParameter();
        this.translationScale = new cubismvector2_1.CubismVector2(0, 0);
    }
    return CubismPhysicsOutput;
}());
exports.CubismPhysicsOutput = CubismPhysicsOutput;
var CubismPhysicsRig = (function () {
    function CubismPhysicsRig() {
        this.settings = new csmvector_1.csmVector();
        this.inputs = new csmvector_1.csmVector();
        this.outputs = new csmvector_1.csmVector();
        this.particles = new csmvector_1.csmVector();
        this.gravity = new cubismvector2_1.CubismVector2(0, 0);
        this.wind = new cubismvector2_1.CubismVector2(0, 0);
    }
    return CubismPhysicsRig;
}());
exports.CubismPhysicsRig = CubismPhysicsRig;
var $ = __importStar(__webpack_require__(/*! ./cubismphysicsinternal */ "../../../Framework/src/physics/cubismphysicsinternal.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismPhysicsInput = $.CubismPhysicsInput;
    Live2DCubismFramework.CubismPhysicsNormalization = $.CubismPhysicsNormalization;
    Live2DCubismFramework.CubismPhysicsOutput = $.CubismPhysicsOutput;
    Live2DCubismFramework.CubismPhysicsParameter = $.CubismPhysicsParameter;
    Live2DCubismFramework.CubismPhysicsParticle = $.CubismPhysicsParticle;
    Live2DCubismFramework.CubismPhysicsRig = $.CubismPhysicsRig;
    Live2DCubismFramework.CubismPhysicsSource = $.CubismPhysicsSource;
    Live2DCubismFramework.CubismPhysicsSubRig = $.CubismPhysicsSubRig;
    Live2DCubismFramework.CubismPhysicsTargetType = $.CubismPhysicsTargetType;
    Live2DCubismFramework.PhysicsJsonEffectiveForces = $.PhysicsJsonEffectiveForces;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/physics/cubismphysicsjson.ts":
/*!***********************************************************!*\
  !*** ../../../Framework/src/physics/cubismphysicsjson.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismPhysicsJson = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismvector2_1 = __webpack_require__(/*! ../math/cubismvector2 */ "../../../Framework/src/math/cubismvector2.ts");
var cubismjson_1 = __webpack_require__(/*! ../utils/cubismjson */ "../../../Framework/src/utils/cubismjson.ts");
var Position = 'Position';
var X = 'X';
var Y = 'Y';
var Angle = 'Angle';
var Type = 'Type';
var Id = 'Id';
var Meta = 'Meta';
var EffectiveForces = 'EffectiveForces';
var TotalInputCount = 'TotalInputCount';
var TotalOutputCount = 'TotalOutputCount';
var PhysicsSettingCount = 'PhysicsSettingCount';
var Gravity = 'Gravity';
var Wind = 'Wind';
var VertexCount = 'VertexCount';
var PhysicsSettings = 'PhysicsSettings';
var Normalization = 'Normalization';
var Minimum = 'Minimum';
var Maximum = 'Maximum';
var Default = 'Default';
var Reflect = 'Reflect';
var Weight = 'Weight';
var Input = 'Input';
var Source = 'Source';
var Output = 'Output';
var Scale = 'Scale';
var VertexIndex = 'VertexIndex';
var Destination = 'Destination';
var Vertices = 'Vertices';
var Mobility = 'Mobility';
var Delay = 'Delay';
var Radius = 'Radius';
var Acceleration = 'Acceleration';
var CubismPhysicsJson = (function () {
    function CubismPhysicsJson(buffer, size) {
        this._json = cubismjson_1.CubismJson.create(buffer, size);
    }
    CubismPhysicsJson.prototype.release = function () {
        cubismjson_1.CubismJson.delete(this._json);
    };
    CubismPhysicsJson.prototype.getGravity = function () {
        var ret = new cubismvector2_1.CubismVector2(0, 0);
        ret.x = this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(EffectiveForces)
            .getValueByString(Gravity)
            .getValueByString(X)
            .toFloat();
        ret.y = this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(EffectiveForces)
            .getValueByString(Gravity)
            .getValueByString(Y)
            .toFloat();
        return ret;
    };
    CubismPhysicsJson.prototype.getWind = function () {
        var ret = new cubismvector2_1.CubismVector2(0, 0);
        ret.x = this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(EffectiveForces)
            .getValueByString(Wind)
            .getValueByString(X)
            .toFloat();
        ret.y = this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(EffectiveForces)
            .getValueByString(Wind)
            .getValueByString(Y)
            .toFloat();
        return ret;
    };
    CubismPhysicsJson.prototype.getSubRigCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(PhysicsSettingCount)
            .toInt();
    };
    CubismPhysicsJson.prototype.getTotalInputCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(TotalInputCount)
            .toInt();
    };
    CubismPhysicsJson.prototype.getTotalOutputCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(TotalOutputCount)
            .toInt();
    };
    CubismPhysicsJson.prototype.getVertexCount = function () {
        return this._json
            .getRoot()
            .getValueByString(Meta)
            .getValueByString(VertexCount)
            .toInt();
    };
    CubismPhysicsJson.prototype.getNormalizationPositionMinimumValue = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Normalization)
            .getValueByString(Position)
            .getValueByString(Minimum)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getNormalizationPositionMaximumValue = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Normalization)
            .getValueByString(Position)
            .getValueByString(Maximum)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getNormalizationPositionDefaultValue = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Normalization)
            .getValueByString(Position)
            .getValueByString(Default)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getNormalizationAngleMinimumValue = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Normalization)
            .getValueByString(Angle)
            .getValueByString(Minimum)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getNormalizationAngleMaximumValue = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Normalization)
            .getValueByString(Angle)
            .getValueByString(Maximum)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getNormalizationAngleDefaultValue = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Normalization)
            .getValueByString(Angle)
            .getValueByString(Default)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getInputCount = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Input)
            .getVector()
            .getSize();
    };
    CubismPhysicsJson.prototype.getInputWeight = function (physicsSettingIndex, inputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Input)
            .getValueByIndex(inputIndex)
            .getValueByString(Weight)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getInputReflect = function (physicsSettingIndex, inputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Input)
            .getValueByIndex(inputIndex)
            .getValueByString(Reflect)
            .toBoolean();
    };
    CubismPhysicsJson.prototype.getInputType = function (physicsSettingIndex, inputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Input)
            .getValueByIndex(inputIndex)
            .getValueByString(Type)
            .getRawString();
    };
    CubismPhysicsJson.prototype.getInputSourceId = function (physicsSettingIndex, inputIndex) {
        return live2dcubismframework_1.CubismFramework.getIdManager().getId(this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Input)
            .getValueByIndex(inputIndex)
            .getValueByString(Source)
            .getValueByString(Id)
            .getRawString());
    };
    CubismPhysicsJson.prototype.getOutputCount = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Output)
            .getVector()
            .getSize();
    };
    CubismPhysicsJson.prototype.getOutputVertexIndex = function (physicsSettingIndex, outputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Output)
            .getValueByIndex(outputIndex)
            .getValueByString(VertexIndex)
            .toInt();
    };
    CubismPhysicsJson.prototype.getOutputAngleScale = function (physicsSettingIndex, outputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Output)
            .getValueByIndex(outputIndex)
            .getValueByString(Scale)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getOutputWeight = function (physicsSettingIndex, outputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Output)
            .getValueByIndex(outputIndex)
            .getValueByString(Weight)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getOutputDestinationId = function (physicsSettingIndex, outputIndex) {
        return live2dcubismframework_1.CubismFramework.getIdManager().getId(this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Output)
            .getValueByIndex(outputIndex)
            .getValueByString(Destination)
            .getValueByString(Id)
            .getRawString());
    };
    CubismPhysicsJson.prototype.getOutputType = function (physicsSettingIndex, outputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Output)
            .getValueByIndex(outputIndex)
            .getValueByString(Type)
            .getRawString();
    };
    CubismPhysicsJson.prototype.getOutputReflect = function (physicsSettingIndex, outputIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Output)
            .getValueByIndex(outputIndex)
            .getValueByString(Reflect)
            .toBoolean();
    };
    CubismPhysicsJson.prototype.getParticleCount = function (physicsSettingIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Vertices)
            .getVector()
            .getSize();
    };
    CubismPhysicsJson.prototype.getParticleMobility = function (physicsSettingIndex, vertexIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Vertices)
            .getValueByIndex(vertexIndex)
            .getValueByString(Mobility)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getParticleDelay = function (physicsSettingIndex, vertexIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Vertices)
            .getValueByIndex(vertexIndex)
            .getValueByString(Delay)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getParticleAcceleration = function (physicsSettingIndex, vertexIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Vertices)
            .getValueByIndex(vertexIndex)
            .getValueByString(Acceleration)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getParticleRadius = function (physicsSettingIndex, vertexIndex) {
        return this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Vertices)
            .getValueByIndex(vertexIndex)
            .getValueByString(Radius)
            .toFloat();
    };
    CubismPhysicsJson.prototype.getParticlePosition = function (physicsSettingIndex, vertexIndex) {
        var ret = new cubismvector2_1.CubismVector2(0, 0);
        ret.x = this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Vertices)
            .getValueByIndex(vertexIndex)
            .getValueByString(Position)
            .getValueByString(X)
            .toFloat();
        ret.y = this._json
            .getRoot()
            .getValueByString(PhysicsSettings)
            .getValueByIndex(physicsSettingIndex)
            .getValueByString(Vertices)
            .getValueByIndex(vertexIndex)
            .getValueByString(Position)
            .getValueByString(Y)
            .toFloat();
        return ret;
    };
    return CubismPhysicsJson;
}());
exports.CubismPhysicsJson = CubismPhysicsJson;
var $ = __importStar(__webpack_require__(/*! ./cubismphysicsjson */ "../../../Framework/src/physics/cubismphysicsjson.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismPhysicsJson = $.CubismPhysicsJson;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/rendering/cubismrenderer.ts":
/*!**********************************************************!*\
  !*** ../../../Framework/src/rendering/cubismrenderer.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismTextureColor = exports.CubismBlendMode = exports.CubismRenderer = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! ../math/cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var CubismRenderer = (function () {
    function CubismRenderer() {
        this._isCulling = false;
        this._isPremultipliedAlpha = false;
        this._anisortopy = 0.0;
        this._model = null;
        this._modelColor = new CubismTextureColor();
        this._mvpMatrix4x4 = new cubismmatrix44_1.CubismMatrix44();
        this._mvpMatrix4x4.loadIdentity();
    }
    CubismRenderer.create = function () {
        return null;
    };
    CubismRenderer.delete = function (renderer) {
        renderer = null;
    };
    CubismRenderer.prototype.initialize = function (model) {
        this._model = model;
    };
    CubismRenderer.prototype.drawModel = function () {
        if (this.getModel() == null)
            return;
        this.doDrawModel();
    };
    CubismRenderer.prototype.setMvpMatrix = function (matrix44) {
        this._mvpMatrix4x4.setMatrix(matrix44.getArray());
    };
    CubismRenderer.prototype.getMvpMatrix = function () {
        return this._mvpMatrix4x4;
    };
    CubismRenderer.prototype.setModelColor = function (red, green, blue, alpha) {
        if (red < 0.0) {
            red = 0.0;
        }
        else if (red > 1.0) {
            red = 1.0;
        }
        if (green < 0.0) {
            green = 0.0;
        }
        else if (green > 1.0) {
            green = 1.0;
        }
        if (blue < 0.0) {
            blue = 0.0;
        }
        else if (blue > 1.0) {
            blue = 1.0;
        }
        if (alpha < 0.0) {
            alpha = 0.0;
        }
        else if (alpha > 1.0) {
            alpha = 1.0;
        }
        this._modelColor.R = red;
        this._modelColor.G = green;
        this._modelColor.B = blue;
        this._modelColor.A = alpha;
    };
    CubismRenderer.prototype.getModelColor = function () {
        return JSON.parse(JSON.stringify(this._modelColor));
    };
    CubismRenderer.prototype.setIsPremultipliedAlpha = function (enable) {
        this._isPremultipliedAlpha = enable;
    };
    CubismRenderer.prototype.isPremultipliedAlpha = function () {
        return this._isPremultipliedAlpha;
    };
    CubismRenderer.prototype.setIsCulling = function (culling) {
        this._isCulling = culling;
    };
    CubismRenderer.prototype.isCulling = function () {
        return this._isCulling;
    };
    CubismRenderer.prototype.setAnisotropy = function (n) {
        this._anisortopy = n;
    };
    CubismRenderer.prototype.getAnisotropy = function () {
        return this._anisortopy;
    };
    CubismRenderer.prototype.getModel = function () {
        return this._model;
    };
    return CubismRenderer;
}());
exports.CubismRenderer = CubismRenderer;
var CubismBlendMode;
(function (CubismBlendMode) {
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
    CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative";
})(CubismBlendMode = exports.CubismBlendMode || (exports.CubismBlendMode = {}));
var CubismTextureColor = (function () {
    function CubismTextureColor() {
        this.R = 1.0;
        this.G = 1.0;
        this.B = 1.0;
        this.A = 1.0;
    }
    return CubismTextureColor;
}());
exports.CubismTextureColor = CubismTextureColor;
var $ = __importStar(__webpack_require__(/*! ./cubismrenderer */ "../../../Framework/src/rendering/cubismrenderer.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismBlendMode = $.CubismBlendMode;
    Live2DCubismFramework.CubismRenderer = $.CubismRenderer;
    Live2DCubismFramework.CubismTextureColor = $.CubismTextureColor;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/rendering/cubismrenderer_webgl.ts":
/*!****************************************************************!*\
  !*** ../../../Framework/src/rendering/cubismrenderer_webgl.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismRenderer_WebGL = exports.fragmentShaderSrcMaskInvertedPremultipliedAlpha = exports.fragmentShaderSrcMaskPremultipliedAlpha = exports.fragmentShaderSrcPremultipliedAlpha = exports.vertexShaderSrcMasked = exports.vertexShaderSrc = exports.fragmentShaderSrcsetupMask = exports.vertexShaderSrcSetupMask = exports.ShaderNames = exports.CubismShaderSet = exports.CubismShader_WebGL = exports.CubismClippingContext = exports.CubismRenderTextureResource = exports.CubismClippingManager_WebGL = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismmatrix44_1 = __webpack_require__(/*! ../math/cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var csmmap_1 = __webpack_require__(/*! ../type/csmmap */ "../../../Framework/src/type/csmmap.ts");
var csmrectf_1 = __webpack_require__(/*! ../type/csmrectf */ "../../../Framework/src/type/csmrectf.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var cubismrenderer_1 = __webpack_require__(/*! ./cubismrenderer */ "../../../Framework/src/rendering/cubismrenderer.ts");
var ColorChannelCount = 4;
var shaderCount = 10;
var s_instance;
var s_viewport;
var s_fbo;
var CubismClippingManager_WebGL = (function () {
    function CubismClippingManager_WebGL() {
        this._maskRenderTexture = null;
        this._colorBuffer = null;
        this._currentFrameNo = 0;
        this._clippingMaskBufferSize = 256;
        this._clippingContextListForMask = new csmvector_1.csmVector();
        this._clippingContextListForDraw = new csmvector_1.csmVector();
        this._channelColors = new csmvector_1.csmVector();
        this._tmpBoundsOnModel = new csmrectf_1.csmRect();
        this._tmpMatrix = new cubismmatrix44_1.CubismMatrix44();
        this._tmpMatrixForMask = new cubismmatrix44_1.CubismMatrix44();
        this._tmpMatrixForDraw = new cubismmatrix44_1.CubismMatrix44();
        this._maskTexture = null;
        var tmp = new cubismrenderer_1.CubismTextureColor();
        tmp.R = 1.0;
        tmp.G = 0.0;
        tmp.B = 0.0;
        tmp.A = 0.0;
        this._channelColors.pushBack(tmp);
        tmp = new cubismrenderer_1.CubismTextureColor();
        tmp.R = 0.0;
        tmp.G = 1.0;
        tmp.B = 0.0;
        tmp.A = 0.0;
        this._channelColors.pushBack(tmp);
        tmp = new cubismrenderer_1.CubismTextureColor();
        tmp.R = 0.0;
        tmp.G = 0.0;
        tmp.B = 1.0;
        tmp.A = 0.0;
        this._channelColors.pushBack(tmp);
        tmp = new cubismrenderer_1.CubismTextureColor();
        tmp.R = 0.0;
        tmp.G = 0.0;
        tmp.B = 0.0;
        tmp.A = 1.0;
        this._channelColors.pushBack(tmp);
    }
    CubismClippingManager_WebGL.prototype.getChannelFlagAsColor = function (channelNo) {
        return this._channelColors.at(channelNo);
    };
    CubismClippingManager_WebGL.prototype.getMaskRenderTexture = function () {
        var ret = 0;
        if (this._maskTexture && this._maskTexture.texture != 0) {
            this._maskTexture.frameNo = this._currentFrameNo;
            ret = this._maskTexture.texture;
        }
        if (ret == 0) {
            var size = this._clippingMaskBufferSize;
            this._colorBuffer = this.gl.createTexture();
            this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, size, size, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
            this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            ret = this.gl.createFramebuffer();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, ret);
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
            this._maskTexture = new CubismRenderTextureResource(this._currentFrameNo, ret);
        }
        return ret;
    };
    CubismClippingManager_WebGL.prototype.setGL = function (gl) {
        this.gl = gl;
    };
    CubismClippingManager_WebGL.prototype.calcClippedDrawTotalBounds = function (model, clippingContext) {
        var clippedDrawTotalMinX = Number.MAX_VALUE;
        var clippedDrawTotalMinY = Number.MAX_VALUE;
        var clippedDrawTotalMaxX = Number.MIN_VALUE;
        var clippedDrawTotalMaxY = Number.MIN_VALUE;
        var clippedDrawCount = clippingContext._clippedDrawableIndexList.length;
        for (var clippedDrawableIndex = 0; clippedDrawableIndex < clippedDrawCount; clippedDrawableIndex++) {
            var drawableIndex = clippingContext._clippedDrawableIndexList[clippedDrawableIndex];
            var drawableVertexCount = model.getDrawableVertexCount(drawableIndex);
            var drawableVertexes = model.getDrawableVertices(drawableIndex);
            var minX = Number.MAX_VALUE;
            var minY = Number.MAX_VALUE;
            var maxX = Number.MIN_VALUE;
            var maxY = Number.MIN_VALUE;
            var loop = drawableVertexCount * live2dcubismframework_1.Constant.vertexStep;
            for (var pi = live2dcubismframework_1.Constant.vertexOffset; pi < loop; pi += live2dcubismframework_1.Constant.vertexStep) {
                var x = drawableVertexes[pi];
                var y = drawableVertexes[pi + 1];
                if (x < minX) {
                    minX = x;
                }
                if (x > maxX) {
                    maxX = x;
                }
                if (y < minY) {
                    minY = y;
                }
                if (y > maxY) {
                    maxY = y;
                }
            }
            if (minX == Number.MAX_VALUE) {
                continue;
            }
            if (minX < clippedDrawTotalMinX) {
                clippedDrawTotalMinX = minX;
            }
            if (minY < clippedDrawTotalMinY) {
                clippedDrawTotalMinY = minY;
            }
            if (maxX > clippedDrawTotalMaxX) {
                clippedDrawTotalMaxX = maxX;
            }
            if (maxY > clippedDrawTotalMaxY) {
                clippedDrawTotalMaxY = maxY;
            }
            if (clippedDrawTotalMinX == Number.MAX_VALUE) {
                clippingContext._allClippedDrawRect.x = 0.0;
                clippingContext._allClippedDrawRect.y = 0.0;
                clippingContext._allClippedDrawRect.width = 0.0;
                clippingContext._allClippedDrawRect.height = 0.0;
                clippingContext._isUsing = false;
            }
            else {
                clippingContext._isUsing = true;
                var w = clippedDrawTotalMaxX - clippedDrawTotalMinX;
                var h = clippedDrawTotalMaxY - clippedDrawTotalMinY;
                clippingContext._allClippedDrawRect.x = clippedDrawTotalMinX;
                clippingContext._allClippedDrawRect.y = clippedDrawTotalMinY;
                clippingContext._allClippedDrawRect.width = w;
                clippingContext._allClippedDrawRect.height = h;
            }
        }
    };
    CubismClippingManager_WebGL.prototype.release = function () {
        for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
            if (this._clippingContextListForMask.at(i)) {
                this._clippingContextListForMask.at(i).release();
                this._clippingContextListForMask.set(i, void 0);
            }
            this._clippingContextListForMask.set(i, null);
        }
        this._clippingContextListForMask = null;
        for (var i = 0; i < this._clippingContextListForDraw.getSize(); i++) {
            this._clippingContextListForDraw.set(i, null);
        }
        this._clippingContextListForDraw = null;
        if (this._maskTexture) {
            this.gl.deleteFramebuffer(this._maskTexture.texture);
            this._maskTexture = null;
        }
        for (var i = 0; i < this._channelColors.getSize(); i++) {
            this._channelColors.set(i, null);
        }
        this._channelColors = null;
        this.gl.deleteTexture(this._colorBuffer);
        this._colorBuffer = null;
    };
    CubismClippingManager_WebGL.prototype.initialize = function (model, drawableCount, drawableMasks, drawableMaskCounts) {
        for (var i = 0; i < drawableCount; i++) {
            if (drawableMaskCounts[i] <= 0) {
                this._clippingContextListForDraw.pushBack(null);
                continue;
            }
            var clippingContext = this.findSameClip(drawableMasks[i], drawableMaskCounts[i]);
            if (clippingContext == null) {
                clippingContext = new CubismClippingContext(this, drawableMasks[i], drawableMaskCounts[i]);
                this._clippingContextListForMask.pushBack(clippingContext);
            }
            clippingContext.addClippedDrawable(i);
            this._clippingContextListForDraw.pushBack(clippingContext);
        }
    };
    CubismClippingManager_WebGL.prototype.setupClippingContext = function (model, renderer) {
        this._currentFrameNo++;
        var usingClipCount = 0;
        for (var clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++) {
            var cc = this._clippingContextListForMask.at(clipIndex);
            this.calcClippedDrawTotalBounds(model, cc);
            if (cc._isUsing) {
                usingClipCount++;
            }
        }
        if (usingClipCount > 0) {
            this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize);
            this._maskRenderTexture = this.getMaskRenderTexture();
            var modelToWorldF = renderer.getMvpMatrix();
            renderer.preDraw();
            this.setupLayoutBounds(usingClipCount);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture);
            this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            for (var clipIndex = 0; clipIndex < this._clippingContextListForMask.getSize(); clipIndex++) {
                var clipContext = this._clippingContextListForMask.at(clipIndex);
                var allClipedDrawRect = clipContext._allClippedDrawRect;
                var layoutBoundsOnTex01 = clipContext._layoutBounds;
                var MARGIN = 0.05;
                this._tmpBoundsOnModel.setRect(allClipedDrawRect);
                this._tmpBoundsOnModel.expand(allClipedDrawRect.width * MARGIN, allClipedDrawRect.height * MARGIN);
                var scaleX = layoutBoundsOnTex01.width / this._tmpBoundsOnModel.width;
                var scaleY = layoutBoundsOnTex01.height / this._tmpBoundsOnModel.height;
                {
                    this._tmpMatrix.loadIdentity();
                    {
                        this._tmpMatrix.translateRelative(-1.0, -1.0);
                        this._tmpMatrix.scaleRelative(2.0, 2.0);
                    }
                    {
                        this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                        this._tmpMatrix.scaleRelative(scaleX, scaleY);
                        this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                    }
                    this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray());
                }
                {
                    this._tmpMatrix.loadIdentity();
                    {
                        this._tmpMatrix.translateRelative(layoutBoundsOnTex01.x, layoutBoundsOnTex01.y);
                        this._tmpMatrix.scaleRelative(scaleX, scaleY);
                        this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y);
                    }
                    this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray());
                }
                clipContext._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray());
                clipContext._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                var clipDrawCount = clipContext._clippingIdCount;
                for (var i = 0; i < clipDrawCount; i++) {
                    var clipDrawIndex = clipContext._clippingIdList[i];
                    if (!model.getDrawableDynamicFlagVertexPositionsDidChange(clipDrawIndex)) {
                        continue;
                    }
                    renderer.setIsCulling(model.getDrawableCulling(clipDrawIndex) != false);
                    renderer.setClippingContextBufferForMask(clipContext);
                    renderer.drawMesh(model.getDrawableTextureIndices(clipDrawIndex), model.getDrawableVertexIndexCount(clipDrawIndex), model.getDrawableVertexCount(clipDrawIndex), model.getDrawableVertexIndices(clipDrawIndex), model.getDrawableVertices(clipDrawIndex), model.getDrawableVertexUvs(clipDrawIndex), model.getDrawableOpacity(clipDrawIndex), cubismrenderer_1.CubismBlendMode.CubismBlendMode_Normal, false);
                }
            }
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, s_fbo);
            renderer.setClippingContextBufferForMask(null);
            this.gl.viewport(s_viewport[0], s_viewport[1], s_viewport[2], s_viewport[3]);
        }
    };
    CubismClippingManager_WebGL.prototype.findSameClip = function (drawableMasks, drawableMaskCounts) {
        for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
            var clippingContext = this._clippingContextListForMask.at(i);
            var count = clippingContext._clippingIdCount;
            if (count != drawableMaskCounts) {
                continue;
            }
            var sameCount = 0;
            for (var j = 0; j < count; j++) {
                var clipId = clippingContext._clippingIdList[j];
                for (var k = 0; k < count; k++) {
                    if (drawableMasks[k] == clipId) {
                        sameCount++;
                        break;
                    }
                }
            }
            if (sameCount == count) {
                return clippingContext;
            }
        }
        return null;
    };
    CubismClippingManager_WebGL.prototype.setupLayoutBounds = function (usingClipCount) {
        var div = usingClipCount / ColorChannelCount;
        var mod = usingClipCount % ColorChannelCount;
        div = ~~div;
        mod = ~~mod;
        var curClipIndex = 0;
        for (var channelNo = 0; channelNo < ColorChannelCount; channelNo++) {
            var layoutCount = div + (channelNo < mod ? 1 : 0);
            if (layoutCount == 0) {
            }
            else if (layoutCount == 1) {
                var clipContext = this._clippingContextListForMask.at(curClipIndex++);
                clipContext._layoutChannelNo = channelNo;
                clipContext._layoutBounds.x = 0.0;
                clipContext._layoutBounds.y = 0.0;
                clipContext._layoutBounds.width = 1.0;
                clipContext._layoutBounds.height = 1.0;
            }
            else if (layoutCount == 2) {
                for (var i = 0; i < layoutCount; i++) {
                    var xpos = i % 2;
                    xpos = ~~xpos;
                    var cc = this._clippingContextListForMask.at(curClipIndex++);
                    cc._layoutChannelNo = channelNo;
                    cc._layoutBounds.x = xpos * 0.5;
                    cc._layoutBounds.y = 0.0;
                    cc._layoutBounds.width = 0.5;
                    cc._layoutBounds.height = 1.0;
                }
            }
            else if (layoutCount <= 4) {
                for (var i = 0; i < layoutCount; i++) {
                    var xpos = i % 2;
                    var ypos = i / 2;
                    xpos = ~~xpos;
                    ypos = ~~ypos;
                    var cc = this._clippingContextListForMask.at(curClipIndex++);
                    cc._layoutChannelNo = channelNo;
                    cc._layoutBounds.x = xpos * 0.5;
                    cc._layoutBounds.y = ypos * 0.5;
                    cc._layoutBounds.width = 0.5;
                    cc._layoutBounds.height = 0.5;
                }
            }
            else if (layoutCount <= 9) {
                for (var i = 0; i < layoutCount; i++) {
                    var xpos = i % 3;
                    var ypos = i / 3;
                    xpos = ~~xpos;
                    ypos = ~~ypos;
                    var cc = this._clippingContextListForMask.at(curClipIndex++);
                    cc._layoutChannelNo = channelNo;
                    cc._layoutBounds.x = xpos / 3.0;
                    cc._layoutBounds.y = ypos / 3.0;
                    cc._layoutBounds.width = 1.0 / 3.0;
                    cc._layoutBounds.height = 1.0 / 3.0;
                }
            }
            else {
                (0, cubismdebug_1.CubismLogError)('not supported mask count : {0}', layoutCount);
            }
        }
    };
    CubismClippingManager_WebGL.prototype.getColorBuffer = function () {
        return this._colorBuffer;
    };
    CubismClippingManager_WebGL.prototype.getClippingContextListForDraw = function () {
        return this._clippingContextListForDraw;
    };
    CubismClippingManager_WebGL.prototype.setClippingMaskBufferSize = function (size) {
        this._clippingMaskBufferSize = size;
    };
    CubismClippingManager_WebGL.prototype.getClippingMaskBufferSize = function () {
        return this._clippingMaskBufferSize;
    };
    return CubismClippingManager_WebGL;
}());
exports.CubismClippingManager_WebGL = CubismClippingManager_WebGL;
var CubismRenderTextureResource = (function () {
    function CubismRenderTextureResource(frameNo, texture) {
        this.frameNo = frameNo;
        this.texture = texture;
    }
    return CubismRenderTextureResource;
}());
exports.CubismRenderTextureResource = CubismRenderTextureResource;
var CubismClippingContext = (function () {
    function CubismClippingContext(manager, clippingDrawableIndices, clipCount) {
        this._owner = manager;
        this._clippingIdList = clippingDrawableIndices;
        this._clippingIdCount = clipCount;
        this._allClippedDrawRect = new csmrectf_1.csmRect();
        this._layoutBounds = new csmrectf_1.csmRect();
        this._clippedDrawableIndexList = [];
        this._matrixForMask = new cubismmatrix44_1.CubismMatrix44();
        this._matrixForDraw = new cubismmatrix44_1.CubismMatrix44();
    }
    CubismClippingContext.prototype.release = function () {
        if (this._layoutBounds != null) {
            this._layoutBounds = null;
        }
        if (this._allClippedDrawRect != null) {
            this._allClippedDrawRect = null;
        }
        if (this._clippedDrawableIndexList != null) {
            this._clippedDrawableIndexList = null;
        }
    };
    CubismClippingContext.prototype.addClippedDrawable = function (drawableIndex) {
        this._clippedDrawableIndexList.push(drawableIndex);
    };
    CubismClippingContext.prototype.getClippingManager = function () {
        return this._owner;
    };
    CubismClippingContext.prototype.setGl = function (gl) {
        this._owner.setGL(gl);
    };
    return CubismClippingContext;
}());
exports.CubismClippingContext = CubismClippingContext;
var CubismShader_WebGL = (function () {
    function CubismShader_WebGL() {
        this._shaderSets = new csmvector_1.csmVector();
    }
    CubismShader_WebGL.getInstance = function () {
        if (s_instance == null) {
            s_instance = new CubismShader_WebGL();
            return s_instance;
        }
        return s_instance;
    };
    CubismShader_WebGL.deleteInstance = function () {
        if (s_instance) {
            s_instance.release();
            s_instance = null;
        }
    };
    CubismShader_WebGL.prototype.release = function () {
        this.releaseShaderProgram();
    };
    CubismShader_WebGL.prototype.setupShaderProgram = function (renderer, textureId, vertexCount, vertexArray, indexArray, uvArray, bufferData, opacity, colorBlendMode, baseColor, isPremultipliedAlpha, matrix4x4, invertedMask) {
        if (!isPremultipliedAlpha) {
            (0, cubismdebug_1.CubismLogError)('NoPremultipliedAlpha is not allowed');
        }
        if (this._shaderSets.getSize() == 0) {
            this.generateShaders();
        }
        var SRC_COLOR;
        var DST_COLOR;
        var SRC_ALPHA;
        var DST_ALPHA;
        if (renderer.getClippingContextBufferForMask() != null) {
            var shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_SetupMask);
            this.gl.useProgram(shaderSet.shaderProgram);
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
            this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
            if (bufferData.vertex == null) {
                bufferData.vertex = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
            this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
            if (bufferData.uv == null) {
                bufferData.uv = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
            this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
            var channelNo = renderer.getClippingContextBufferForMask()
                ._layoutChannelNo;
            var colorChannel = renderer
                .getClippingContextBufferForMask()
                .getClippingManager()
                .getChannelFlagAsColor(channelNo);
            this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
            this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForMask()._matrixForMask.getArray());
            var rect = renderer.getClippingContextBufferForMask()
                ._layoutBounds;
            this.gl.uniform4f(shaderSet.uniformBaseColorLocation, rect.x * 2.0 - 1.0, rect.y * 2.0 - 1.0, rect.getRight() * 2.0 - 1.0, rect.getBottom() * 2.0 - 1.0);
            SRC_COLOR = this.gl.ZERO;
            DST_COLOR = this.gl.ONE_MINUS_SRC_COLOR;
            SRC_ALPHA = this.gl.ZERO;
            DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
        }
        else {
            var masked = renderer.getClippingContextBufferForDraw() != null;
            var offset = masked ? (invertedMask ? 2 : 1) : 0;
            var shaderSet = new CubismShaderSet();
            switch (colorBlendMode) {
                case cubismrenderer_1.CubismBlendMode.CubismBlendMode_Normal:
                default:
                    shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_NormalPremultipliedAlpha + offset);
                    SRC_COLOR = this.gl.ONE;
                    DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                    SRC_ALPHA = this.gl.ONE;
                    DST_ALPHA = this.gl.ONE_MINUS_SRC_ALPHA;
                    break;
                case cubismrenderer_1.CubismBlendMode.CubismBlendMode_Additive:
                    shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_AddPremultipliedAlpha + offset);
                    SRC_COLOR = this.gl.ONE;
                    DST_COLOR = this.gl.ONE;
                    SRC_ALPHA = this.gl.ZERO;
                    DST_ALPHA = this.gl.ONE;
                    break;
                case cubismrenderer_1.CubismBlendMode.CubismBlendMode_Multiplicative:
                    shaderSet = this._shaderSets.at(ShaderNames.ShaderNames_MultPremultipliedAlpha + offset);
                    SRC_COLOR = this.gl.DST_COLOR;
                    DST_COLOR = this.gl.ONE_MINUS_SRC_ALPHA;
                    SRC_ALPHA = this.gl.ZERO;
                    DST_ALPHA = this.gl.ONE;
                    break;
            }
            this.gl.useProgram(shaderSet.shaderProgram);
            if (bufferData.vertex == null) {
                bufferData.vertex = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.vertex);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributePositionLocation);
            this.gl.vertexAttribPointer(shaderSet.attributePositionLocation, 2, this.gl.FLOAT, false, 0, 0);
            if (bufferData.uv == null) {
                bufferData.uv = this.gl.createBuffer();
            }
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, bufferData.uv);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, uvArray, this.gl.DYNAMIC_DRAW);
            this.gl.enableVertexAttribArray(shaderSet.attributeTexCoordLocation);
            this.gl.vertexAttribPointer(shaderSet.attributeTexCoordLocation, 2, this.gl.FLOAT, false, 0, 0);
            if (masked) {
                this.gl.activeTexture(this.gl.TEXTURE1);
                var tex = renderer
                    .getClippingContextBufferForDraw()
                    .getClippingManager()
                    .getColorBuffer();
                this.gl.bindTexture(this.gl.TEXTURE_2D, tex);
                this.gl.uniform1i(shaderSet.samplerTexture1Location, 1);
                this.gl.uniformMatrix4fv(shaderSet.uniformClipMatrixLocation, false, renderer.getClippingContextBufferForDraw()._matrixForDraw.getArray());
                var channelNo = renderer.getClippingContextBufferForDraw()
                    ._layoutChannelNo;
                var colorChannel = renderer
                    .getClippingContextBufferForDraw()
                    .getClippingManager()
                    .getChannelFlagAsColor(channelNo);
                this.gl.uniform4f(shaderSet.uniformChannelFlagLocation, colorChannel.R, colorChannel.G, colorChannel.B, colorChannel.A);
            }
            this.gl.activeTexture(this.gl.TEXTURE0);
            this.gl.bindTexture(this.gl.TEXTURE_2D, textureId);
            this.gl.uniform1i(shaderSet.samplerTexture0Location, 0);
            this.gl.uniformMatrix4fv(shaderSet.uniformMatrixLocation, false, matrix4x4.getArray());
            this.gl.uniform4f(shaderSet.uniformBaseColorLocation, baseColor.R, baseColor.G, baseColor.B, baseColor.A);
        }
        if (bufferData.index == null) {
            bufferData.index = this.gl.createBuffer();
        }
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, bufferData.index);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, indexArray, this.gl.DYNAMIC_DRAW);
        this.gl.blendFuncSeparate(SRC_COLOR, DST_COLOR, SRC_ALPHA, DST_ALPHA);
    };
    CubismShader_WebGL.prototype.releaseShaderProgram = function () {
        for (var i = 0; i < this._shaderSets.getSize(); i++) {
            this.gl.deleteProgram(this._shaderSets.at(i).shaderProgram);
            this._shaderSets.at(i).shaderProgram = 0;
            this._shaderSets.set(i, void 0);
            this._shaderSets.set(i, null);
        }
    };
    CubismShader_WebGL.prototype.generateShaders = function () {
        for (var i = 0; i < shaderCount; i++) {
            this._shaderSets.pushBack(new CubismShaderSet());
        }
        this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(exports.vertexShaderSrcSetupMask, exports.fragmentShaderSrcsetupMask);
        this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(exports.vertexShaderSrc, exports.fragmentShaderSrcPremultipliedAlpha);
        this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(exports.vertexShaderSrcMasked, exports.fragmentShaderSrcMaskPremultipliedAlpha);
        this._shaderSets.at(3).shaderProgram = this.loadShaderProgram(exports.vertexShaderSrcMasked, exports.fragmentShaderSrcMaskInvertedPremultipliedAlpha);
        this._shaderSets.at(4).shaderProgram = this._shaderSets.at(1).shaderProgram;
        this._shaderSets.at(5).shaderProgram = this._shaderSets.at(2).shaderProgram;
        this._shaderSets.at(6).shaderProgram = this._shaderSets.at(3).shaderProgram;
        this._shaderSets.at(7).shaderProgram = this._shaderSets.at(1).shaderProgram;
        this._shaderSets.at(8).shaderProgram = this._shaderSets.at(2).shaderProgram;
        this._shaderSets.at(9).shaderProgram = this._shaderSets.at(3).shaderProgram;
        this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, 'a_position');
        this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, 'a_texCoord');
        this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 's_texture0');
        this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, 'u_baseColor');
        this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, 'a_position');
        this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, 'a_texCoord');
        this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 's_texture0');
        this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_matrix');
        this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, 'u_baseColor');
        this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, 'a_position');
        this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, 'a_texCoord');
        this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 's_texture0');
        this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 's_texture1');
        this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_matrix');
        this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, 'u_baseColor');
        this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, 'a_position');
        this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, 'a_texCoord');
        this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 's_texture0');
        this._shaderSets.at(3).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 's_texture1');
        this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_matrix');
        this._shaderSets.at(3).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(3).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, 'u_baseColor');
        this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, 'a_position');
        this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, 'a_texCoord');
        this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 's_texture0');
        this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_matrix');
        this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, 'u_baseColor');
        this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, 'a_position');
        this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, 'a_texCoord');
        this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 's_texture0');
        this._shaderSets.at(5).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 's_texture1');
        this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_matrix');
        this._shaderSets.at(5).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(5).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, 'u_baseColor');
        this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, 'a_position');
        this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, 'a_texCoord');
        this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 's_texture0');
        this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 's_texture1');
        this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_matrix');
        this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, 'u_baseColor');
        this._shaderSets.at(7).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, 'a_position');
        this._shaderSets.at(7).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, 'a_texCoord');
        this._shaderSets.at(7).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 's_texture0');
        this._shaderSets.at(7).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_matrix');
        this._shaderSets.at(7).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, 'u_baseColor');
        this._shaderSets.at(8).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, 'a_position');
        this._shaderSets.at(8).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, 'a_texCoord');
        this._shaderSets.at(8).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 's_texture0');
        this._shaderSets.at(8).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 's_texture1');
        this._shaderSets.at(8).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_matrix');
        this._shaderSets.at(8).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(8).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(8).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, 'u_baseColor');
        this._shaderSets.at(9).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, 'a_position');
        this._shaderSets.at(9).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, 'a_texCoord');
        this._shaderSets.at(9).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 's_texture0');
        this._shaderSets.at(9).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 's_texture1');
        this._shaderSets.at(9).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_matrix');
        this._shaderSets.at(9).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_clipMatrix');
        this._shaderSets.at(9).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_channelFlag');
        this._shaderSets.at(9).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, 'u_baseColor');
    };
    CubismShader_WebGL.prototype.loadShaderProgram = function (vertexShaderSource, fragmentShaderSource) {
        var shaderProgram = this.gl.createProgram();
        var vertShader = this.compileShaderSource(this.gl.VERTEX_SHADER, vertexShaderSource);
        if (!vertShader) {
            (0, cubismdebug_1.CubismLogError)('Vertex shader compile error!');
            return 0;
        }
        var fragShader = this.compileShaderSource(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!fragShader) {
            (0, cubismdebug_1.CubismLogError)('Vertex shader compile error!');
            return 0;
        }
        this.gl.attachShader(shaderProgram, vertShader);
        this.gl.attachShader(shaderProgram, fragShader);
        this.gl.linkProgram(shaderProgram);
        var linkStatus = this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS);
        if (!linkStatus) {
            (0, cubismdebug_1.CubismLogError)('Failed to link program: {0}', shaderProgram);
            this.gl.deleteShader(vertShader);
            vertShader = 0;
            this.gl.deleteShader(fragShader);
            fragShader = 0;
            if (shaderProgram) {
                this.gl.deleteProgram(shaderProgram);
                shaderProgram = 0;
            }
            return 0;
        }
        this.gl.deleteShader(vertShader);
        this.gl.deleteShader(fragShader);
        return shaderProgram;
    };
    CubismShader_WebGL.prototype.compileShaderSource = function (shaderType, shaderSource) {
        var source = shaderSource;
        var shader = this.gl.createShader(shaderType);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!shader) {
            var log = this.gl.getShaderInfoLog(shader);
            (0, cubismdebug_1.CubismLogError)('Shader compile log: {0} ', log);
        }
        var status = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (!status) {
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    };
    CubismShader_WebGL.prototype.setGl = function (gl) {
        this.gl = gl;
    };
    return CubismShader_WebGL;
}());
exports.CubismShader_WebGL = CubismShader_WebGL;
var CubismShaderSet = (function () {
    function CubismShaderSet() {
    }
    return CubismShaderSet;
}());
exports.CubismShaderSet = CubismShaderSet;
var ShaderNames;
(function (ShaderNames) {
    ShaderNames[ShaderNames["ShaderNames_SetupMask"] = 0] = "ShaderNames_SetupMask";
    ShaderNames[ShaderNames["ShaderNames_NormalPremultipliedAlpha"] = 1] = "ShaderNames_NormalPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_NormalMaskedPremultipliedAlpha"] = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_NomralMaskedInvertedPremultipliedAlpha"] = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_AddPremultipliedAlpha"] = 4] = "ShaderNames_AddPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlpha"] = 5] = "ShaderNames_AddMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_AddMaskedPremultipliedAlphaInverted"] = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted";
    ShaderNames[ShaderNames["ShaderNames_MultPremultipliedAlpha"] = 7] = "ShaderNames_MultPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlpha"] = 8] = "ShaderNames_MultMaskedPremultipliedAlpha";
    ShaderNames[ShaderNames["ShaderNames_MultMaskedPremultipliedAlphaInverted"] = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted";
})(ShaderNames = exports.ShaderNames || (exports.ShaderNames = {}));
exports.vertexShaderSrcSetupMask = 'attribute vec4     a_position;' +
    'attribute vec2     a_texCoord;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_myPos;' +
    'uniform mat4       u_clipMatrix;' +
    'void main()' +
    '{' +
    '   gl_Position = u_clipMatrix * a_position;' +
    '   v_myPos = u_clipMatrix * a_position;' +
    '   v_texCoord = a_texCoord;' +
    '   v_texCoord.y = 1.0 - v_texCoord.y;' +
    '}';
exports.fragmentShaderSrcsetupMask = 'precision mediump float;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_myPos;' +
    'uniform vec4       u_baseColor;' +
    'uniform vec4       u_channelFlag;' +
    'uniform sampler2D  s_texture0;' +
    'void main()' +
    '{' +
    '   float isInside = ' +
    '       step(u_baseColor.x, v_myPos.x/v_myPos.w)' +
    '       * step(u_baseColor.y, v_myPos.y/v_myPos.w)' +
    '       * step(v_myPos.x/v_myPos.w, u_baseColor.z)' +
    '       * step(v_myPos.y/v_myPos.w, u_baseColor.w);' +
    '   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;' +
    '}';
exports.vertexShaderSrc = 'attribute vec4     a_position;' +
    'attribute vec2     a_texCoord;' +
    'varying vec2       v_texCoord;' +
    'uniform mat4       u_matrix;' +
    'void main()' +
    '{' +
    '   gl_Position = u_matrix * a_position;' +
    '   v_texCoord = a_texCoord;' +
    '   v_texCoord.y = 1.0 - v_texCoord.y;' +
    '}';
exports.vertexShaderSrcMasked = 'attribute vec4     a_position;' +
    'attribute vec2     a_texCoord;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_clipPos;' +
    'uniform mat4       u_matrix;' +
    'uniform mat4       u_clipMatrix;' +
    'void main()' +
    '{' +
    '   gl_Position = u_matrix * a_position;' +
    '   v_clipPos = u_clipMatrix * a_position;' +
    '   v_texCoord = a_texCoord;' +
    '   v_texCoord.y = 1.0 - v_texCoord.y;' +
    '}';
exports.fragmentShaderSrcPremultipliedAlpha = 'precision mediump float;' +
    'varying vec2       v_texCoord;' +
    'uniform vec4       u_baseColor;' +
    'uniform sampler2D  s_texture0;' +
    'void main()' +
    '{' +
    '   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;' +
    '}';
exports.fragmentShaderSrcMaskPremultipliedAlpha = 'precision mediump float;' +
    'varying vec2       v_texCoord;' +
    'varying vec4       v_clipPos;' +
    'uniform vec4       u_baseColor;' +
    'uniform vec4       u_channelFlag;' +
    'uniform sampler2D  s_texture0;' +
    'uniform sampler2D  s_texture1;' +
    'void main()' +
    '{' +
    '   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;' +
    '   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
    '   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
    '   col_formask = col_formask * maskVal;' +
    '   gl_FragColor = col_formask;' +
    '}';
exports.fragmentShaderSrcMaskInvertedPremultipliedAlpha = 'precision mediump float;' +
    'varying vec2 v_texCoord;' +
    'varying vec4 v_clipPos;' +
    'uniform sampler2D s_texture0;' +
    'uniform sampler2D s_texture1;' +
    'uniform vec4 u_channelFlag;' +
    'uniform vec4 u_baseColor;' +
    'void main()' +
    '{' +
    'vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;' +
    'vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;' +
    'float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;' +
    'col_formask = col_formask * (1.0 - maskVal);' +
    'gl_FragColor = col_formask;' +
    '}';
var CubismRenderer_WebGL = (function (_super) {
    __extends(CubismRenderer_WebGL, _super);
    function CubismRenderer_WebGL() {
        var _this = _super.call(this) || this;
        _this._clippingContextBufferForMask = null;
        _this._clippingContextBufferForDraw = null;
        _this._clippingManager = new CubismClippingManager_WebGL();
        _this.firstDraw = true;
        _this._textures = new csmmap_1.csmMap();
        _this._sortedDrawableIndexList = new csmvector_1.csmVector();
        _this._bufferData = {
            vertex: WebGLBuffer = null,
            uv: WebGLBuffer = null,
            index: WebGLBuffer = null
        };
        _this._textures.prepareCapacity(32, true);
        return _this;
    }
    CubismRenderer_WebGL.prototype.initialize = function (model) {
        if (model.isUsingMasking()) {
            this._clippingManager = new CubismClippingManager_WebGL();
            this._clippingManager.initialize(model, model.getDrawableCount(), model.getDrawableMasks(), model.getDrawableMaskCounts());
        }
        this._sortedDrawableIndexList.resize(model.getDrawableCount(), 0);
        _super.prototype.initialize.call(this, model);
    };
    CubismRenderer_WebGL.prototype.bindTexture = function (modelTextureNo, glTexture) {
        this._textures.setValue(modelTextureNo, glTexture);
    };
    CubismRenderer_WebGL.prototype.getBindedTextures = function () {
        return this._textures;
    };
    CubismRenderer_WebGL.prototype.setClippingMaskBufferSize = function (size) {
        this._clippingManager.release();
        this._clippingManager = void 0;
        this._clippingManager = null;
        this._clippingManager = new CubismClippingManager_WebGL();
        this._clippingManager.setClippingMaskBufferSize(size);
        this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts());
    };
    CubismRenderer_WebGL.prototype.getClippingMaskBufferSize = function () {
        return this._clippingManager.getClippingMaskBufferSize();
    };
    CubismRenderer_WebGL.prototype.release = function () {
        this._clippingManager.release();
        this._clippingManager = void 0;
        this._clippingManager = null;
        this.gl.deleteBuffer(this._bufferData.vertex);
        this._bufferData.vertex = null;
        this.gl.deleteBuffer(this._bufferData.uv);
        this._bufferData.uv = null;
        this.gl.deleteBuffer(this._bufferData.index);
        this._bufferData.index = null;
        this._bufferData = null;
        this._textures = null;
    };
    CubismRenderer_WebGL.prototype.doDrawModel = function () {
        if (this._clippingManager != null) {
            this.preDraw();
            this._clippingManager.setupClippingContext(this.getModel(), this);
        }
        this.preDraw();
        var drawableCount = this.getModel().getDrawableCount();
        var renderOrder = this.getModel().getDrawableRenderOrders();
        for (var i = 0; i < drawableCount; ++i) {
            var order = renderOrder[i];
            this._sortedDrawableIndexList.set(order, i);
        }
        for (var i = 0; i < drawableCount; ++i) {
            var drawableIndex = this._sortedDrawableIndexList.at(i);
            if (!this.getModel().getDrawableDynamicFlagIsVisible(drawableIndex)) {
                continue;
            }
            this.setClippingContextBufferForDraw(this._clippingManager != null
                ? this._clippingManager
                    .getClippingContextListForDraw()
                    .at(drawableIndex)
                : null);
            this.setIsCulling(this.getModel().getDrawableCulling(drawableIndex));
            this.drawMesh(this.getModel().getDrawableTextureIndices(drawableIndex), this.getModel().getDrawableVertexIndexCount(drawableIndex), this.getModel().getDrawableVertexCount(drawableIndex), this.getModel().getDrawableVertexIndices(drawableIndex), this.getModel().getDrawableVertices(drawableIndex), this.getModel().getDrawableVertexUvs(drawableIndex), this.getModel().getDrawableOpacity(drawableIndex), this.getModel().getDrawableBlendMode(drawableIndex), this.getModel().getDrawableInvertedMaskBit(drawableIndex));
        }
    };
    CubismRenderer_WebGL.prototype.drawMesh = function (textureNo, indexCount, vertexCount, indexArray, vertexArray, uvArray, opacity, colorBlendMode, invertedMask) {
        if (this.isCulling()) {
            this.gl.enable(this.gl.CULL_FACE);
        }
        else {
            this.gl.disable(this.gl.CULL_FACE);
        }
        this.gl.frontFace(this.gl.CCW);
        var modelColorRGBA = this.getModelColor();
        if (this.getClippingContextBufferForMask() == null) {
            modelColorRGBA.A *= opacity;
            if (this.isPremultipliedAlpha()) {
                modelColorRGBA.R *= modelColorRGBA.A;
                modelColorRGBA.G *= modelColorRGBA.A;
                modelColorRGBA.B *= modelColorRGBA.A;
            }
        }
        var drawtexture;
        if (this._textures.getValue(textureNo) != null) {
            drawtexture = this._textures.getValue(textureNo);
        }
        else {
            drawtexture = null;
        }
        CubismShader_WebGL.getInstance().setupShaderProgram(this, drawtexture, vertexCount, vertexArray, indexArray, uvArray, this._bufferData, opacity, colorBlendMode, modelColorRGBA, this.isPremultipliedAlpha(), this.getMvpMatrix(), invertedMask);
        this.gl.drawElements(this.gl.TRIANGLES, indexCount, this.gl.UNSIGNED_SHORT, 0);
        this.gl.useProgram(null);
        this.setClippingContextBufferForDraw(null);
        this.setClippingContextBufferForMask(null);
    };
    CubismRenderer_WebGL.doStaticRelease = function () {
        CubismShader_WebGL.deleteInstance();
    };
    CubismRenderer_WebGL.prototype.setRenderState = function (fbo, viewport) {
        s_fbo = fbo;
        s_viewport = viewport;
    };
    CubismRenderer_WebGL.prototype.preDraw = function () {
        if (this.firstDraw) {
            this.firstDraw = false;
            this._anisortopy =
                this.gl.getExtension('EXT_texture_filter_anisotropic') ||
                    this.gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
                    this.gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
        }
        this.gl.disable(this.gl.SCISSOR_TEST);
        this.gl.disable(this.gl.STENCIL_TEST);
        this.gl.disable(this.gl.DEPTH_TEST);
        this.gl.frontFace(this.gl.CW);
        this.gl.enable(this.gl.BLEND);
        this.gl.colorMask(true, true, true, true);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };
    CubismRenderer_WebGL.prototype.setClippingContextBufferForMask = function (clip) {
        this._clippingContextBufferForMask = clip;
    };
    CubismRenderer_WebGL.prototype.getClippingContextBufferForMask = function () {
        return this._clippingContextBufferForMask;
    };
    CubismRenderer_WebGL.prototype.setClippingContextBufferForDraw = function (clip) {
        this._clippingContextBufferForDraw = clip;
    };
    CubismRenderer_WebGL.prototype.getClippingContextBufferForDraw = function () {
        return this._clippingContextBufferForDraw;
    };
    CubismRenderer_WebGL.prototype.startUp = function (gl) {
        this.gl = gl;
        this._clippingManager.setGL(gl);
        CubismShader_WebGL.getInstance().setGl(gl);
    };
    return CubismRenderer_WebGL;
}(cubismrenderer_1.CubismRenderer));
exports.CubismRenderer_WebGL = CubismRenderer_WebGL;
cubismrenderer_1.CubismRenderer.staticRelease = function () {
    CubismRenderer_WebGL.doStaticRelease();
};
var $ = __importStar(__webpack_require__(/*! ./cubismrenderer_webgl */ "../../../Framework/src/rendering/cubismrenderer_webgl.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismClippingContext = $.CubismClippingContext;
    Live2DCubismFramework.CubismClippingManager_WebGL = $.CubismClippingManager_WebGL;
    Live2DCubismFramework.CubismRenderTextureResource = $.CubismRenderTextureResource;
    Live2DCubismFramework.CubismRenderer_WebGL = $.CubismRenderer_WebGL;
    Live2DCubismFramework.CubismShaderSet = $.CubismShaderSet;
    Live2DCubismFramework.CubismShader_WebGL = $.CubismShader_WebGL;
    Live2DCubismFramework.ShaderNames = $.ShaderNames;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/type/csmmap.ts":
/*!*********************************************!*\
  !*** ../../../Framework/src/type/csmmap.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.iterator = exports.csmMap = exports.csmPair = void 0;
var cubismdebug_1 = __webpack_require__(/*! ../utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var csmPair = (function () {
    function csmPair(key, value) {
        this.first = key == undefined ? null : key;
        this.second = value == undefined ? null : value;
    }
    return csmPair;
}());
exports.csmPair = csmPair;
var csmMap = (function () {
    function csmMap(size) {
        if (size != undefined) {
            if (size < 1) {
                this._keyValues = [];
                this._dummyValue = null;
                this._size = 0;
            }
            else {
                this._keyValues = new Array(size);
                this._size = size;
            }
        }
        else {
            this._keyValues = [];
            this._dummyValue = null;
            this._size = 0;
        }
    }
    csmMap.prototype.release = function () {
        this.clear();
    };
    csmMap.prototype.appendKey = function (key) {
        this.prepareCapacity(this._size + 1, false);
        this._keyValues[this._size] = new csmPair(key);
        this._size += 1;
    };
    csmMap.prototype.getValue = function (key) {
        var found = -1;
        for (var i = 0; i < this._size; i++) {
            if (this._keyValues[i].first == key) {
                found = i;
                break;
            }
        }
        if (found >= 0) {
            return this._keyValues[found].second;
        }
        else {
            this.appendKey(key);
            return this._keyValues[this._size - 1].second;
        }
    };
    csmMap.prototype.setValue = function (key, value) {
        var found = -1;
        for (var i = 0; i < this._size; i++) {
            if (this._keyValues[i].first == key) {
                found = i;
                break;
            }
        }
        if (found >= 0) {
            this._keyValues[found].second = value;
        }
        else {
            this.appendKey(key);
            this._keyValues[this._size - 1].second = value;
        }
    };
    csmMap.prototype.isExist = function (key) {
        for (var i = 0; i < this._size; i++) {
            if (this._keyValues[i].first == key) {
                return true;
            }
        }
        return false;
    };
    csmMap.prototype.clear = function () {
        this._keyValues = void 0;
        this._keyValues = null;
        this._keyValues = [];
        this._size = 0;
    };
    csmMap.prototype.getSize = function () {
        return this._size;
    };
    csmMap.prototype.prepareCapacity = function (newSize, fitToSize) {
        if (newSize > this._keyValues.length) {
            if (this._keyValues.length == 0) {
                if (!fitToSize && newSize < csmMap.DefaultSize)
                    newSize = csmMap.DefaultSize;
                this._keyValues.length = newSize;
            }
            else {
                if (!fitToSize && newSize < this._keyValues.length * 2)
                    newSize = this._keyValues.length * 2;
                this._keyValues.length = newSize;
            }
        }
    };
    csmMap.prototype.begin = function () {
        var ite = new iterator(this, 0);
        return ite;
    };
    csmMap.prototype.end = function () {
        var ite = new iterator(this, this._size);
        return ite;
    };
    csmMap.prototype.erase = function (ite) {
        var index = ite._index;
        if (index < 0 || this._size <= index) {
            return ite;
        }
        this._keyValues.splice(index, 1);
        --this._size;
        var ite2 = new iterator(this, index);
        return ite2;
    };
    csmMap.prototype.dumpAsInt = function () {
        for (var i = 0; i < this._size; i++) {
            (0, cubismdebug_1.CubismLogDebug)('{0} ,', this._keyValues[i]);
            (0, cubismdebug_1.CubismLogDebug)('\n');
        }
    };
    csmMap.DefaultSize = 10;
    return csmMap;
}());
exports.csmMap = csmMap;
var iterator = (function () {
    function iterator(v, idx) {
        this._map = v != undefined ? v : new csmMap();
        this._index = idx != undefined ? idx : 0;
    }
    iterator.prototype.set = function (ite) {
        this._index = ite._index;
        this._map = ite._map;
        return this;
    };
    iterator.prototype.preIncrement = function () {
        ++this._index;
        return this;
    };
    iterator.prototype.preDecrement = function () {
        --this._index;
        return this;
    };
    iterator.prototype.increment = function () {
        var iteold = new iterator(this._map, this._index++);
        return iteold;
    };
    iterator.prototype.decrement = function () {
        var iteold = new iterator(this._map, this._index);
        this._map = iteold._map;
        this._index = iteold._index;
        return this;
    };
    iterator.prototype.ptr = function () {
        return this._map._keyValues[this._index];
    };
    iterator.prototype.notEqual = function (ite) {
        return this._index != ite._index || this._map != ite._map;
    };
    return iterator;
}());
exports.iterator = iterator;
var $ = __importStar(__webpack_require__(/*! ./csmmap */ "../../../Framework/src/type/csmmap.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.csmMap = $.csmMap;
    Live2DCubismFramework.csmPair = $.csmPair;
    Live2DCubismFramework.iterator = $.iterator;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/type/csmrectf.ts":
/*!***********************************************!*\
  !*** ../../../Framework/src/type/csmrectf.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.csmRect = void 0;
var csmRect = (function () {
    function csmRect(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    csmRect.prototype.getCenterX = function () {
        return this.x + 0.5 * this.width;
    };
    csmRect.prototype.getCenterY = function () {
        return this.y + 0.5 * this.height;
    };
    csmRect.prototype.getRight = function () {
        return this.x + this.width;
    };
    csmRect.prototype.getBottom = function () {
        return this.y + this.height;
    };
    csmRect.prototype.setRect = function (r) {
        this.x = r.x;
        this.y = r.y;
        this.width = r.width;
        this.height = r.height;
    };
    csmRect.prototype.expand = function (w, h) {
        this.x -= w;
        this.y -= h;
        this.width += w * 2.0;
        this.height += h * 2.0;
    };
    return csmRect;
}());
exports.csmRect = csmRect;
var $ = __importStar(__webpack_require__(/*! ./csmrectf */ "../../../Framework/src/type/csmrectf.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.csmRect = $.csmRect;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/type/csmstring.ts":
/*!************************************************!*\
  !*** ../../../Framework/src/type/csmstring.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.csmString = void 0;
var csmString = (function () {
    function csmString(s) {
        this.s = s;
    }
    csmString.prototype.append = function (c, length) {
        this.s += length !== undefined ? c.substr(0, length) : c;
        return this;
    };
    csmString.prototype.expansion = function (length, v) {
        for (var i = 0; i < length; i++) {
            this.append(v);
        }
        return this;
    };
    csmString.prototype.getBytes = function () {
        return encodeURIComponent(this.s).replace(/%../g, 'x').length;
    };
    csmString.prototype.getLength = function () {
        return this.s.length;
    };
    csmString.prototype.isLess = function (s) {
        return this.s < s.s;
    };
    csmString.prototype.isGreat = function (s) {
        return this.s > s.s;
    };
    csmString.prototype.isEqual = function (s) {
        return this.s == s;
    };
    csmString.prototype.isEmpty = function () {
        return this.s.length == 0;
    };
    return csmString;
}());
exports.csmString = csmString;
var $ = __importStar(__webpack_require__(/*! ./csmstring */ "../../../Framework/src/type/csmstring.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.csmString = $.csmString;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/type/csmvector.ts":
/*!************************************************!*\
  !*** ../../../Framework/src/type/csmvector.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.iterator = exports.csmVector = void 0;
var csmVector = (function () {
    function csmVector(initialCapacity) {
        if (initialCapacity === void 0) { initialCapacity = 0; }
        if (initialCapacity < 1) {
            this._ptr = [];
            this._capacity = 0;
            this._size = 0;
        }
        else {
            this._ptr = new Array(initialCapacity);
            this._capacity = initialCapacity;
            this._size = 0;
        }
    }
    csmVector.prototype.at = function (index) {
        return this._ptr[index];
    };
    csmVector.prototype.set = function (index, value) {
        this._ptr[index] = value;
    };
    csmVector.prototype.get = function (offset) {
        if (offset === void 0) { offset = 0; }
        var ret = new Array();
        for (var i = offset; i < this._size; i++) {
            ret.push(this._ptr[i]);
        }
        return ret;
    };
    csmVector.prototype.pushBack = function (value) {
        if (this._size >= this._capacity) {
            this.prepareCapacity(this._capacity == 0 ? csmVector.s_defaultSize : this._capacity * 2);
        }
        this._ptr[this._size++] = value;
    };
    csmVector.prototype.clear = function () {
        this._ptr.length = 0;
        this._size = 0;
    };
    csmVector.prototype.getSize = function () {
        return this._size;
    };
    csmVector.prototype.assign = function (newSize, value) {
        var curSize = this._size;
        if (curSize < newSize) {
            this.prepareCapacity(newSize);
        }
        for (var i = 0; i < newSize; i++) {
            this._ptr[i] = value;
        }
        this._size = newSize;
    };
    csmVector.prototype.resize = function (newSize, value) {
        if (value === void 0) { value = null; }
        this.updateSize(newSize, value, true);
    };
    csmVector.prototype.updateSize = function (newSize, value, callPlacementNew) {
        if (value === void 0) { value = null; }
        if (callPlacementNew === void 0) { callPlacementNew = true; }
        var curSize = this._size;
        if (curSize < newSize) {
            this.prepareCapacity(newSize);
            if (callPlacementNew) {
                for (var i = this._size; i < newSize; i++) {
                    if (typeof value == 'function') {
                        this._ptr[i] = JSON.parse(JSON.stringify(new value()));
                    }
                    else {
                        this._ptr[i] = value;
                    }
                }
            }
            else {
                for (var i = this._size; i < newSize; i++) {
                    this._ptr[i] = value;
                }
            }
        }
        else {
            var sub = this._size - newSize;
            this._ptr.splice(this._size - sub, sub);
        }
        this._size = newSize;
    };
    csmVector.prototype.insert = function (position, begin, end) {
        var dstSi = position._index;
        var srcSi = begin._index;
        var srcEi = end._index;
        var addCount = srcEi - srcSi;
        this.prepareCapacity(this._size + addCount);
        var addSize = this._size - dstSi;
        if (addSize > 0) {
            for (var i = 0; i < addSize; i++) {
                this._ptr.splice(dstSi + i, 0, null);
            }
        }
        for (var i = srcSi; i < srcEi; i++, dstSi++) {
            this._ptr[dstSi] = begin._vector._ptr[i];
        }
        this._size = this._size + addCount;
    };
    csmVector.prototype.remove = function (index) {
        if (index < 0 || this._size <= index) {
            return false;
        }
        this._ptr.splice(index, 1);
        --this._size;
        return true;
    };
    csmVector.prototype.erase = function (ite) {
        var index = ite._index;
        if (index < 0 || this._size <= index) {
            return ite;
        }
        this._ptr.splice(index, 1);
        --this._size;
        var ite2 = new iterator(this, index);
        return ite2;
    };
    csmVector.prototype.prepareCapacity = function (newSize) {
        if (newSize > this._capacity) {
            if (this._capacity == 0) {
                this._ptr = new Array(newSize);
                this._capacity = newSize;
            }
            else {
                this._ptr.length = newSize;
                this._capacity = newSize;
            }
        }
    };
    csmVector.prototype.begin = function () {
        var ite = this._size == 0 ? this.end() : new iterator(this, 0);
        return ite;
    };
    csmVector.prototype.end = function () {
        var ite = new iterator(this, this._size);
        return ite;
    };
    csmVector.prototype.getOffset = function (offset) {
        var newVector = new csmVector();
        newVector._ptr = this.get(offset);
        newVector._size = this.get(offset).length;
        newVector._capacity = this.get(offset).length;
        return newVector;
    };
    csmVector.s_defaultSize = 10;
    return csmVector;
}());
exports.csmVector = csmVector;
var iterator = (function () {
    function iterator(v, index) {
        this._vector = v != undefined ? v : null;
        this._index = index != undefined ? index : 0;
    }
    iterator.prototype.set = function (ite) {
        this._index = ite._index;
        this._vector = ite._vector;
        return this;
    };
    iterator.prototype.preIncrement = function () {
        ++this._index;
        return this;
    };
    iterator.prototype.preDecrement = function () {
        --this._index;
        return this;
    };
    iterator.prototype.increment = function () {
        var iteold = new iterator(this._vector, this._index++);
        return iteold;
    };
    iterator.prototype.decrement = function () {
        var iteold = new iterator(this._vector, this._index--);
        return iteold;
    };
    iterator.prototype.ptr = function () {
        return this._vector._ptr[this._index];
    };
    iterator.prototype.substitution = function (ite) {
        this._index = ite._index;
        this._vector = ite._vector;
        return this;
    };
    iterator.prototype.notEqual = function (ite) {
        return this._index != ite._index || this._vector != ite._vector;
    };
    return iterator;
}());
exports.iterator = iterator;
var $ = __importStar(__webpack_require__(/*! ./csmvector */ "../../../Framework/src/type/csmvector.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.csmVector = $.csmVector;
    Live2DCubismFramework.iterator = $.iterator;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/utils/cubismdebug.ts":
/*!***************************************************!*\
  !*** ../../../Framework/src/utils/cubismdebug.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.CubismDebug = exports.CubismLogError = exports.CubismLogWarning = exports.CubismLogInfo = exports.CubismLogDebug = exports.CubismLogVerbose = exports.CSM_ASSERT = exports.CubismLogPrintIn = exports.CubismLogPrint = void 0;
var cubismframeworkconfig_1 = __webpack_require__(/*! ../cubismframeworkconfig */ "../../../Framework/src/cubismframeworkconfig.ts");
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var CubismLogPrint = function (level, fmt, args) {
    CubismDebug.print(level, '[CSM]' + fmt, args);
};
exports.CubismLogPrint = CubismLogPrint;
var CubismLogPrintIn = function (level, fmt, args) {
    (0, exports.CubismLogPrint)(level, fmt + '\n', args);
};
exports.CubismLogPrintIn = CubismLogPrintIn;
var CSM_ASSERT = function (expr) {
    console.assert(expr);
};
exports.CSM_ASSERT = CSM_ASSERT;
if (cubismframeworkconfig_1.CSM_LOG_LEVEL <= cubismframeworkconfig_1.CSM_LOG_LEVEL_VERBOSE) {
    exports.CubismLogVerbose = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Verbose, '[V]' + fmt, args);
    };
    exports.CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Debug, '[D]' + fmt, args);
    };
    exports.CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Info, '[I]' + fmt, args);
    };
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_DEBUG) {
    exports.CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Debug, '[D]' + fmt, args);
    };
    exports.CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Info, '[I]' + fmt, args);
    };
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_INFO) {
    exports.CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Info, '[I]' + fmt, args);
    };
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_WARNING) {
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_ERROR) {
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
var CubismDebug = (function () {
    function CubismDebug() {
    }
    CubismDebug.print = function (logLevel, format, args) {
        if (logLevel < live2dcubismframework_1.CubismFramework.getLoggingLevel()) {
            return;
        }
        var logPrint = live2dcubismframework_1.CubismFramework.coreLogFunction;
        if (!logPrint)
            return;
        var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
            return args[k];
        });
        logPrint(buffer);
    };
    CubismDebug.dumpBytes = function (logLevel, data, length) {
        for (var i = 0; i < length; i++) {
            if (i % 16 == 0 && i > 0)
                this.print(logLevel, '\n');
            else if (i % 8 == 0 && i > 0)
                this.print(logLevel, '  ');
            this.print(logLevel, '{0} ', [data[i] & 0xff]);
        }
        this.print(logLevel, '\n');
    };
    return CubismDebug;
}());
exports.CubismDebug = CubismDebug;
var $ = __importStar(__webpack_require__(/*! ./cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismDebug = $.CubismDebug;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "../../../Framework/src/utils/cubismjson.ts":
/*!**************************************************!*\
  !*** ../../../Framework/src/utils/cubismjson.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Live2DCubismFramework = exports.JsonMap = exports.JsonArray = exports.JsonNullvalue = exports.JsonError = exports.JsonString = exports.JsonBoolean = exports.JsonFloat = exports.CubismJson = exports.Value = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! ../live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var csmmap_1 = __webpack_require__(/*! ../type/csmmap */ "../../../Framework/src/type/csmmap.ts");
var csmstring_1 = __webpack_require__(/*! ../type/csmstring */ "../../../Framework/src/type/csmstring.ts");
var csmvector_1 = __webpack_require__(/*! ../type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismdebug_1 = __webpack_require__(/*! ./cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var CSM_JSON_ERROR_TYPE_MISMATCH = 'Error: type mismatch';
var CSM_JSON_ERROR_INDEX_OF_BOUNDS = 'Error: index out of bounds';
var Value = (function () {
    function Value() {
    }
    Value.prototype.getRawString = function (defaultValue, indent) {
        return this.getString(defaultValue, indent);
    };
    Value.prototype.toInt = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0; }
        return defaultValue;
    };
    Value.prototype.toFloat = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0; }
        return defaultValue;
    };
    Value.prototype.toBoolean = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        return defaultValue;
    };
    Value.prototype.getSize = function () {
        return 0;
    };
    Value.prototype.getArray = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return defaultValue;
    };
    Value.prototype.getVector = function (defaultValue) {
        return defaultValue;
    };
    Value.prototype.getMap = function (defaultValue) {
        return defaultValue;
    };
    Value.prototype.getValueByIndex = function (index) {
        return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    };
    Value.prototype.getValueByString = function (s) {
        return Value.nullValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    };
    Value.prototype.getKeys = function () {
        return Value.s_dummyKeys;
    };
    Value.prototype.isError = function () {
        return false;
    };
    Value.prototype.isNull = function () {
        return false;
    };
    Value.prototype.isBool = function () {
        return false;
    };
    Value.prototype.isFloat = function () {
        return false;
    };
    Value.prototype.isString = function () {
        return false;
    };
    Value.prototype.isArray = function () {
        return false;
    };
    Value.prototype.isMap = function () {
        return false;
    };
    Value.prototype.equals = function (value) {
        return false;
    };
    Value.prototype.isStatic = function () {
        return false;
    };
    Value.prototype.setErrorNotForClientCall = function (errorStr) {
        return JsonError.errorValue;
    };
    Value.staticInitializeNotForClientCall = function () {
        JsonBoolean.trueValue = new JsonBoolean(true);
        JsonBoolean.falseValue = new JsonBoolean(false);
        JsonError.errorValue = new JsonError('ERROR', true);
        this.nullValue = new JsonNullvalue();
        Value.s_dummyKeys = new csmvector_1.csmVector();
    };
    Value.staticReleaseNotForClientCall = function () {
        JsonBoolean.trueValue = null;
        JsonBoolean.falseValue = null;
        JsonError.errorValue = null;
        Value.nullValue = null;
        Value.s_dummyKeys = null;
        JsonBoolean.trueValue = null;
        JsonBoolean.falseValue = null;
        JsonError.errorValue = null;
        Value.nullValue = null;
        Value.s_dummyKeys = null;
    };
    return Value;
}());
exports.Value = Value;
var CubismJson = (function () {
    function CubismJson(buffer, length) {
        this._error = null;
        this._lineCount = 0;
        this._root = null;
        if (buffer != undefined) {
            this.parseBytes(buffer, length);
        }
    }
    CubismJson.create = function (buffer, size) {
        var json = new CubismJson();
        var succeeded = json.parseBytes(buffer, size);
        if (!succeeded) {
            CubismJson.delete(json);
            return null;
        }
        else {
            return json;
        }
    };
    CubismJson.delete = function (instance) {
        instance = null;
    };
    CubismJson.prototype.getRoot = function () {
        return this._root;
    };
    CubismJson.prototype.arrayBufferToString = function (buffer) {
        var uint8Array = new Uint8Array(buffer);
        var str = '';
        for (var i = 0, len = uint8Array.length; i < len; ++i) {
            str += '%' + this.pad(uint8Array[i].toString(16));
        }
        str = decodeURIComponent(str);
        return str;
    };
    CubismJson.prototype.pad = function (n) {
        return n.length < 2 ? '0' + n : n;
    };
    CubismJson.prototype.parseBytes = function (buffer, size) {
        var endPos = new Array(1);
        var decodeBuffer = this.arrayBufferToString(buffer);
        this._root = this.parseValue(decodeBuffer, size, 0, endPos);
        if (this._error) {
            var strbuf = '\0';
            strbuf = 'Json parse error : @line ' + (this._lineCount + 1) + '\n';
            this._root = new JsonString(strbuf);
            (0, cubismdebug_1.CubismLogInfo)('{0}', this._root.getRawString());
            return false;
        }
        else if (this._root == null) {
            this._root = new JsonError(new csmstring_1.csmString(this._error), false);
            return false;
        }
        return true;
    };
    CubismJson.prototype.getParseError = function () {
        return this._error;
    };
    CubismJson.prototype.checkEndOfFile = function () {
        return this._root.getArray()[1].equals('EOF');
    };
    CubismJson.prototype.parseValue = function (buffer, length, begin, outEndPos) {
        if (this._error)
            return null;
        var o = null;
        var i = begin;
        var f;
        for (; i < length; i++) {
            var c = buffer[i];
            switch (c) {
                case '-':
                case '.':
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9': {
                    var afterString = new Array(1);
                    f = (0, live2dcubismframework_1.strtod)(buffer.slice(i), afterString);
                    outEndPos[0] = buffer.indexOf(afterString[0]);
                    return new JsonFloat(f);
                }
                case '"':
                    return new JsonString(this.parseString(buffer, length, i + 1, outEndPos));
                case '[':
                    o = this.parseArray(buffer, length, i + 1, outEndPos);
                    return o;
                case '{':
                    o = this.parseObject(buffer, length, i + 1, outEndPos);
                    return o;
                case 'n':
                    if (i + 3 < length) {
                        o = new JsonNullvalue();
                        outEndPos[0] = i + 4;
                    }
                    else {
                        this._error = 'parse null';
                    }
                    return o;
                case 't':
                    if (i + 3 < length) {
                        o = JsonBoolean.trueValue;
                        outEndPos[0] = i + 4;
                    }
                    else {
                        this._error = 'parse true';
                    }
                    return o;
                case 'f':
                    if (i + 4 < length) {
                        o = JsonBoolean.falseValue;
                        outEndPos[0] = i + 5;
                    }
                    else {
                        this._error = "illegal ',' position";
                    }
                    return o;
                case ',':
                    this._error = "illegal ',' position";
                    return null;
                case ']':
                    outEndPos[0] = i;
                    return null;
                case '\n':
                    this._lineCount++;
                case ' ':
                case '\t':
                case '\r':
                default:
                    break;
            }
        }
        this._error = 'illegal end of value';
        return null;
    };
    CubismJson.prototype.parseString = function (string, length, begin, outEndPos) {
        if (this._error)
            return null;
        var i = begin;
        var c, c2;
        var ret = new csmstring_1.csmString('');
        var bufStart = begin;
        for (; i < length; i++) {
            c = string[i];
            switch (c) {
                case '"': {
                    outEndPos[0] = i + 1;
                    ret.append(string.slice(bufStart), i - bufStart);
                    return ret.s;
                }
                case '//': {
                    i++;
                    if (i - 1 > bufStart) {
                        ret.append(string.slice(bufStart), i - bufStart);
                    }
                    bufStart = i + 1;
                    if (i < length) {
                        c2 = string[i];
                        switch (c2) {
                            case '\\':
                                ret.expansion(1, '\\');
                                break;
                            case '"':
                                ret.expansion(1, '"');
                                break;
                            case '/':
                                ret.expansion(1, '/');
                                break;
                            case 'b':
                                ret.expansion(1, '\b');
                                break;
                            case 'f':
                                ret.expansion(1, '\f');
                                break;
                            case 'n':
                                ret.expansion(1, '\n');
                                break;
                            case 'r':
                                ret.expansion(1, '\r');
                                break;
                            case 't':
                                ret.expansion(1, '\t');
                                break;
                            case 'u':
                                this._error = 'parse string/unicord escape not supported';
                                break;
                            default:
                                break;
                        }
                    }
                    else {
                        this._error = 'parse string/escape error';
                    }
                }
                default: {
                    break;
                }
            }
        }
        this._error = 'parse string/illegal end';
        return null;
    };
    CubismJson.prototype.parseObject = function (buffer, length, begin, outEndPos) {
        if (this._error)
            return null;
        var ret = new JsonMap();
        var key = '';
        var i = begin;
        var c = '';
        var localRetEndPos2 = Array(1);
        var ok = false;
        for (; i < length; i++) {
            FOR_LOOP: for (; i < length; i++) {
                c = buffer[i];
                switch (c) {
                    case '"':
                        key = this.parseString(buffer, length, i + 1, localRetEndPos2);
                        if (this._error) {
                            return null;
                        }
                        i = localRetEndPos2[0];
                        ok = true;
                        break FOR_LOOP;
                    case '}':
                        outEndPos[0] = i + 1;
                        return ret;
                    case ':':
                        this._error = "illegal ':' position";
                        break;
                    case '\n':
                        this._lineCount++;
                    default:
                        break;
                }
            }
            if (!ok) {
                this._error = 'key not found';
                return null;
            }
            ok = false;
            FOR_LOOP2: for (; i < length; i++) {
                c = buffer[i];
                switch (c) {
                    case ':':
                        ok = true;
                        i++;
                        break FOR_LOOP2;
                    case '}':
                        this._error = "illegal '}' position";
                        break;
                    case '\n':
                        this._lineCount++;
                    default:
                        break;
                }
            }
            if (!ok) {
                this._error = "':' not found";
                return null;
            }
            var value = this.parseValue(buffer, length, i, localRetEndPos2);
            if (this._error) {
                return null;
            }
            i = localRetEndPos2[0];
            ret.put(key, value);
            FOR_LOOP3: for (; i < length; i++) {
                c = buffer[i];
                switch (c) {
                    case ',':
                        break FOR_LOOP3;
                    case '}':
                        outEndPos[0] = i + 1;
                        return ret;
                    case '\n':
                        this._lineCount++;
                    default:
                        break;
                }
            }
        }
        this._error = 'illegal end of perseObject';
        return null;
    };
    CubismJson.prototype.parseArray = function (buffer, length, begin, outEndPos) {
        if (this._error)
            return null;
        var ret = new JsonArray();
        var i = begin;
        var c;
        var localRetEndpos2 = new Array(1);
        for (; i < length; i++) {
            var value = this.parseValue(buffer, length, i, localRetEndpos2);
            if (this._error) {
                return null;
            }
            i = localRetEndpos2[0];
            if (value) {
                ret.add(value);
            }
            FOR_LOOP: for (; i < length; i++) {
                c = buffer[i];
                switch (c) {
                    case ',':
                        break FOR_LOOP;
                    case ']':
                        outEndPos[0] = i + 1;
                        return ret;
                    case '\n':
                        ++this._lineCount;
                    default:
                        break;
                }
            }
        }
        ret = void 0;
        this._error = 'illegal end of parseObject';
        return null;
    };
    return CubismJson;
}());
exports.CubismJson = CubismJson;
var JsonFloat = (function (_super) {
    __extends(JsonFloat, _super);
    function JsonFloat(v) {
        var _this = _super.call(this) || this;
        _this._value = v;
        return _this;
    }
    JsonFloat.prototype.isFloat = function () {
        return true;
    };
    JsonFloat.prototype.getString = function (defaultValue, indent) {
        var strbuf = '\0';
        this._value = parseFloat(strbuf);
        this._stringBuffer = strbuf;
        return this._stringBuffer;
    };
    JsonFloat.prototype.toInt = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0; }
        return parseInt(this._value.toString());
    };
    JsonFloat.prototype.toFloat = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = 0.0; }
        return this._value;
    };
    JsonFloat.prototype.equals = function (value) {
        if ('number' === typeof value) {
            if (Math.round(value)) {
                return false;
            }
            else {
                return value == this._value;
            }
        }
        return false;
    };
    return JsonFloat;
}(Value));
exports.JsonFloat = JsonFloat;
var JsonBoolean = (function (_super) {
    __extends(JsonBoolean, _super);
    function JsonBoolean(v) {
        var _this = _super.call(this) || this;
        _this._boolValue = v;
        return _this;
    }
    JsonBoolean.prototype.isBool = function () {
        return true;
    };
    JsonBoolean.prototype.toBoolean = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        return this._boolValue;
    };
    JsonBoolean.prototype.getString = function (defaultValue, indent) {
        this._stringBuffer = this._boolValue ? 'true' : 'false';
        return this._stringBuffer;
    };
    JsonBoolean.prototype.equals = function (value) {
        if ('boolean' === typeof value) {
            return value == this._boolValue;
        }
        return false;
    };
    JsonBoolean.prototype.isStatic = function () {
        return true;
    };
    return JsonBoolean;
}(Value));
exports.JsonBoolean = JsonBoolean;
var JsonString = (function (_super) {
    __extends(JsonString, _super);
    function JsonString(s) {
        var _this = _super.call(this) || this;
        if ('string' === typeof s) {
            _this._stringBuffer = s;
        }
        if (s instanceof csmstring_1.csmString) {
            _this._stringBuffer = s.s;
        }
        return _this;
    }
    JsonString.prototype.isString = function () {
        return true;
    };
    JsonString.prototype.getString = function (defaultValue, indent) {
        return this._stringBuffer;
    };
    JsonString.prototype.equals = function (value) {
        if ('string' === typeof value) {
            return this._stringBuffer == value;
        }
        if (value instanceof csmstring_1.csmString) {
            return this._stringBuffer == value.s;
        }
        return false;
    };
    return JsonString;
}(Value));
exports.JsonString = JsonString;
var JsonError = (function (_super) {
    __extends(JsonError, _super);
    function JsonError(s, isStatic) {
        var _this = this;
        if ('string' === typeof s) {
            _this = _super.call(this, s) || this;
        }
        else {
            _this = _super.call(this, s) || this;
        }
        _this._isStatic = isStatic;
        return _this;
    }
    JsonError.prototype.isStatic = function () {
        return this._isStatic;
    };
    JsonError.prototype.setErrorNotForClientCall = function (s) {
        this._stringBuffer = s;
        return this;
    };
    JsonError.prototype.isError = function () {
        return true;
    };
    return JsonError;
}(JsonString));
exports.JsonError = JsonError;
var JsonNullvalue = (function (_super) {
    __extends(JsonNullvalue, _super);
    function JsonNullvalue() {
        var _this = _super.call(this) || this;
        _this._stringBuffer = 'NullValue';
        return _this;
    }
    JsonNullvalue.prototype.isNull = function () {
        return true;
    };
    JsonNullvalue.prototype.getString = function (defaultValue, indent) {
        return this._stringBuffer;
    };
    JsonNullvalue.prototype.isStatic = function () {
        return true;
    };
    return JsonNullvalue;
}(Value));
exports.JsonNullvalue = JsonNullvalue;
var JsonArray = (function (_super) {
    __extends(JsonArray, _super);
    function JsonArray() {
        var _this = _super.call(this) || this;
        _this._array = new csmvector_1.csmVector();
        return _this;
    }
    JsonArray.prototype.release = function () {
        for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.preIncrement()) {
            var v = ite.ptr();
            if (v && !v.isStatic()) {
                v = void 0;
                v = null;
            }
        }
    };
    JsonArray.prototype.isArray = function () {
        return true;
    };
    JsonArray.prototype.getValueByIndex = function (index) {
        if (index < 0 || this._array.getSize() <= index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_INDEX_OF_BOUNDS);
        }
        var v = this._array.at(index);
        if (v == null) {
            return Value.nullValue;
        }
        return v;
    };
    JsonArray.prototype.getValueByString = function (s) {
        return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    };
    JsonArray.prototype.getString = function (defaultValue, indent) {
        var stringBuffer = indent + '[\n';
        for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.increment()) {
            var v = ite.ptr();
            this._stringBuffer += indent + '' + v.getString(indent + ' ') + '\n';
        }
        this._stringBuffer = stringBuffer + indent + ']\n';
        return this._stringBuffer;
    };
    JsonArray.prototype.add = function (v) {
        this._array.pushBack(v);
    };
    JsonArray.prototype.getVector = function (defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return this._array;
    };
    JsonArray.prototype.getSize = function () {
        return this._array.getSize();
    };
    return JsonArray;
}(Value));
exports.JsonArray = JsonArray;
var JsonMap = (function (_super) {
    __extends(JsonMap, _super);
    function JsonMap() {
        var _this = _super.call(this) || this;
        _this._map = new csmmap_1.csmMap();
        return _this;
    }
    JsonMap.prototype.release = function () {
        var ite = this._map.begin();
        while (ite.notEqual(this._map.end())) {
            var v = ite.ptr().second;
            if (v && !v.isStatic()) {
                v = void 0;
                v = null;
            }
            ite.preIncrement();
        }
    };
    JsonMap.prototype.isMap = function () {
        return true;
    };
    JsonMap.prototype.getValueByString = function (s) {
        if (s instanceof csmstring_1.csmString) {
            var ret = this._map.getValue(s.s);
            if (ret == null) {
                return Value.nullValue;
            }
            return ret;
        }
        for (var iter = this._map.begin(); iter.notEqual(this._map.end()); iter.preIncrement()) {
            if (iter.ptr().first == s) {
                if (iter.ptr().second == null) {
                    return Value.nullValue;
                }
                return iter.ptr().second;
            }
        }
        return Value.nullValue;
    };
    JsonMap.prototype.getValueByIndex = function (index) {
        return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
    };
    JsonMap.prototype.getString = function (defaultValue, indent) {
        this._stringBuffer = indent + '{\n';
        var ite = this._map.begin();
        while (ite.notEqual(this._map.end())) {
            var key = ite.ptr().first;
            var v = ite.ptr().second;
            this._stringBuffer +=
                indent + ' ' + key + ' : ' + v.getString(indent + '   ') + ' \n';
            ite.preIncrement();
        }
        this._stringBuffer += indent + '}\n';
        return this._stringBuffer;
    };
    JsonMap.prototype.getMap = function (defaultValue) {
        return this._map;
    };
    JsonMap.prototype.put = function (key, v) {
        this._map.setValue(key, v);
    };
    JsonMap.prototype.getKeys = function () {
        if (!this._keys) {
            this._keys = new csmvector_1.csmVector();
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var key = ite.ptr().first;
                this._keys.pushBack(key);
                ite.preIncrement();
            }
        }
        return this._keys;
    };
    JsonMap.prototype.getSize = function () {
        return this._keys.getSize();
    };
    return JsonMap;
}(Value));
exports.JsonMap = JsonMap;
var $ = __importStar(__webpack_require__(/*! ./cubismjson */ "../../../Framework/src/utils/cubismjson.ts"));
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismJson = $.CubismJson;
    Live2DCubismFramework.JsonArray = $.JsonArray;
    Live2DCubismFramework.JsonBoolean = $.JsonBoolean;
    Live2DCubismFramework.JsonError = $.JsonError;
    Live2DCubismFramework.JsonFloat = $.JsonFloat;
    Live2DCubismFramework.JsonMap = $.JsonMap;
    Live2DCubismFramework.JsonNullvalue = $.JsonNullvalue;
    Live2DCubismFramework.JsonString = $.JsonString;
    Live2DCubismFramework.Value = $.Value;
})(Live2DCubismFramework = exports.Live2DCubismFramework || (exports.Live2DCubismFramework = {}));


/***/ }),

/***/ "./src/MocMapper.ts":
/*!**************************!*\
  !*** ./src/MocMapper.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MocMapper = void 0;
var lappdefine_1 = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
var MocMapper = (function () {
    function MocMapper() {
        this.parameterIdMAp = new Map();
        this.resourcesPathToUrlMap = new Map();
        this.jsonResources = null;
        this.scale = 1;
    }
    MocMapper.getInstance = function () {
        if (this.mapper == null) {
            this.mapper = new MocMapper();
        }
        return this.mapper;
    };
    MocMapper.prototype.setParameter = function (defaultParameter, currentModParameter) {
        this.parameterIdMAp.set(defaultParameter, currentModParameter);
    };
    MocMapper.prototype.getParemeter = function (defaultParameter) {
        return this.parameterIdMAp.get(defaultParameter);
    };
    MocMapper.prototype.setPathToUrl = function (resourcesPath, url) {
        this.resourcesPathToUrlMap.set(resourcesPath, url);
    };
    MocMapper.prototype.getUrl = function (resourcesPath) {
        return this.resourcesPathToUrlMap.get(resourcesPath);
    };
    MocMapper.prototype.getJsonConfig = function () {
        return this.jsonResources;
    };
    MocMapper.prototype.getScale = function () { return this.scale; };
    MocMapper.prototype.setMapperJson = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, arrayOfparameters, arrayOfUrl, i, item, key, i, item, key, centerPointScal, model_scale;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, fetch(url).then(function (response) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var json;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4, response.json()];
                                            case 1:
                                                json = _a.sent();
                                                return [2, json];
                                        }
                                    });
                                });
                            })];
                    case 1:
                        _a.jsonResources = _b.sent();
                        arrayOfparameters = this.getJsonConfig().parameter;
                        arrayOfUrl = this.getJsonConfig().url;
                        for (i = 0; i < arrayOfparameters.length; i++) {
                            item = arrayOfparameters[i];
                            for (key in item) {
                                this.setParameter(key, item[key]);
                            }
                        }
                        for (i = 0; i < arrayOfUrl.length; i++) {
                            item = arrayOfUrl[i];
                            for (key in item) {
                                this.setParameter(key, item[key]);
                            }
                        }
                        centerPointScal = this.getJsonConfig().center;
                        lappdefine_1.resourcesConfig.setXscale(centerPointScal[0]);
                        lappdefine_1.resourcesConfig.setYscale(centerPointScal[1]);
                        model_scale = this.getJsonConfig().model_scale;
                        if (model_scale == undefined || model_scale <= 0 || model_scale > 50) {
                            model_scale = 1;
                        }
                        this.scale = model_scale;
                        lappdefine_1.resourcesConfig.setModelScale(model_scale);
                        return [2];
                }
            });
        });
    };
    MocMapper.mapper = null;
    return MocMapper;
}());
exports.MocMapper = MocMapper;


/***/ }),

/***/ "./src/lappdefine.ts":
/*!***************************!*\
  !*** ./src/lappdefine.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderTargetHeight = exports.RenderTargetWidth = exports.CubismLoggingLevel = exports.DebugTouchLogEnable = exports.DebugLogEnable = exports.PriorityForce = exports.PriorityNormal = exports.PriorityIdle = exports.PriorityNone = exports.HitAreaNameBody = exports.HitAreaNameHead = exports.MotionGroupTapBody = exports.MotionGroupIdle = exports.PowerImageName = exports.GearImageName = exports.BackImageName = exports.resourcesConfig = exports.ViewLogicalMaxTop = exports.ViewLogicalMaxBottom = exports.ViewLogicalMaxRight = exports.ViewLogicalMaxLeft = exports.ViewLogicalTop = exports.ViewLogicalBottom = exports.ViewLogicalRight = exports.ViewLogicalLeft = exports.ViewMinScale = exports.ViewMaxScale = exports.ViewScale = exports.CanvasSize = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! @framework/live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
exports.CanvasSize = 'auto';
exports.ViewScale = 2;
exports.ViewMaxScale = 4.0;
exports.ViewMinScale = 0.4;
exports.ViewLogicalLeft = -1.0;
exports.ViewLogicalRight = 1.0;
exports.ViewLogicalBottom = -1.0;
exports.ViewLogicalTop = 1.0;
exports.ViewLogicalMaxLeft = -2.0;
exports.ViewLogicalMaxRight = 2.0;
exports.ViewLogicalMaxBottom = -2.0;
exports.ViewLogicalMaxTop = 2.0;
var ResourceConfig = (function () {
    function ResourceConfig() {
        this.canvasId = 'live2d';
        this.x_scale = 2;
        this.y_scale = 1;
        this.model_scale = 1;
        this.resourcesPath = '../../Resources/';
        this.modelNames = ['Haru', 'Hiyori', 'Mark', 'Natori', 'Rice'];
        this.modelSize = this.modelNames.length;
    }
    ResourceConfig.prototype.setResourcesPath = function (path) {
        this.resourcesPath = path;
    };
    ResourceConfig.prototype.setCanvasId = function (canvasId) {
        this.canvasId = canvasId;
    };
    ResourceConfig.prototype.setModelScale = function (scale) {
        this.model_scale = scale;
    };
    ResourceConfig.prototype.getModelScale = function () {
        return this.model_scale;
    };
    ResourceConfig.prototype.setModelNames = function (models) {
        this.modelNames = models;
        this.setModelSize();
    };
    ResourceConfig.prototype.setModelSize = function () {
        this.modelSize = this.modelNames.length;
    };
    ResourceConfig.prototype.getResourcesPath = function () {
        return this.resourcesPath;
    };
    ResourceConfig.prototype.getModelNames = function () {
        return this.modelNames;
    };
    ResourceConfig.prototype.getModelSize = function () { return this.modelSize; };
    ResourceConfig.prototype.getCanvasId = function () {
        return this.canvasId;
    };
    ResourceConfig.prototype.setXscale = function (scale) { this.x_scale = scale; };
    ResourceConfig.prototype.setYscale = function (scale) { this.y_scale = scale; };
    ResourceConfig.prototype.getXscale = function () { return this.x_scale; };
    ResourceConfig.prototype.getYscale = function () { return this.y_scale; };
    return ResourceConfig;
}());
exports.resourcesConfig = new ResourceConfig();
exports.BackImageName = '';
exports.GearImageName = '';
exports.PowerImageName = '';
exports.MotionGroupIdle = 'Idle';
exports.MotionGroupTapBody = 'TapBody';
exports.HitAreaNameHead = 'Head';
exports.HitAreaNameBody = 'Body';
exports.PriorityNone = 0;
exports.PriorityIdle = 1;
exports.PriorityNormal = 2;
exports.PriorityForce = 3;
exports.DebugLogEnable = true;
exports.DebugTouchLogEnable = false;
exports.CubismLoggingLevel = live2dcubismframework_1.LogLevel.LogLevel_Verbose;
exports.RenderTargetWidth = 1900;
exports.RenderTargetHeight = 1000;


/***/ }),

/***/ "./src/lappdelegate.ts":
/*!*****************************!*\
  !*** ./src/lappdelegate.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppDelegate = exports.frameBuffer = exports.gl = exports.s_instance = exports.canvas = void 0;
var live2dcubismframework_1 = __webpack_require__(/*! @framework/live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lapptexturemanager_1 = __webpack_require__(/*! ./lapptexturemanager */ "./src/lapptexturemanager.ts");
var lappview_1 = __webpack_require__(/*! ./lappview */ "./src/lappview.ts");
exports.canvas = null;
exports.s_instance = null;
exports.gl = null;
exports.frameBuffer = null;
var LAppDelegate = (function () {
    function LAppDelegate() {
        this._captured = false;
        this._mouseX = 0.0;
        this._mouseY = 0.0;
        this._isEnd = false;
        this._cubismOption = new live2dcubismframework_1.Option();
        this._view = new lappview_1.LAppView();
        this._textureManager = new lapptexturemanager_1.LAppTextureManager();
    }
    LAppDelegate.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppDelegate();
        }
        return exports.s_instance;
    };
    LAppDelegate.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance.release();
        }
        exports.s_instance = null;
    };
    LAppDelegate.prototype.initialize = function () {
        exports.canvas = document.getElementById(LAppDefine.resourcesConfig.getCanvasId());
        exports.gl = exports.canvas.getContext('webgl') || exports.canvas.getContext('experimental-webgl');
        if (!exports.gl) {
            alert('Cannot initialize WebGL. This browser does not support.');
            exports.gl = null;
            document.body.innerHTML =
                'This browser does not support the <code>&lt;canvas&gt;</code> element.';
            return false;
        }
        if (!exports.frameBuffer) {
            exports.frameBuffer = exports.gl.getParameter(exports.gl.FRAMEBUFFER_BINDING);
        }
        exports.gl.enable(exports.gl.BLEND);
        exports.gl.blendFunc(exports.gl.SRC_ALPHA, exports.gl.ONE_MINUS_SRC_ALPHA);
        exports.canvas.onmouseup = onClickEnded;
        document.addEventListener("mousemove", function (e) {
            if (!LAppDelegate.getInstance()._view) {
                lapppal_1.LAppPal.printMessage("view notfound");
                return;
            }
            var rect = exports.canvas.getBoundingClientRect();
            var posX = e.clientX - rect.left;
            var posY = e.clientY - rect.top;
            LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
        }, false);
        document.addEventListener("mouseout", function (e) {
            var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
            live2DManager.onDrag(0.0, 0.0);
        }, false);
        this._view.initialize();
        this.initializeCubism();
        return true;
    };
    LAppDelegate.prototype.onResize = function () {
        this._resizeCanvas();
        this._view.initialize();
        this._view.initializeSprite();
    };
    LAppDelegate.prototype.release = function () {
        this._textureManager.release();
        this._textureManager = null;
        this._view.release();
        this._view = null;
        lapplive2dmanager_1.LAppLive2DManager.releaseInstance();
        live2dcubismframework_1.CubismFramework.dispose();
    };
    LAppDelegate.prototype.run = function () {
        var _this = this;
        var loop = function () {
            if (exports.s_instance == null) {
                return;
            }
            lapppal_1.LAppPal.updateTime();
            exports.gl.clearColor(0.0, 0.0, 0.0, 0.0);
            exports.gl.enable(exports.gl.DEPTH_TEST);
            exports.gl.depthFunc(exports.gl.LEQUAL);
            exports.gl.clear(exports.gl.COLOR_BUFFER_BIT | exports.gl.DEPTH_BUFFER_BIT);
            exports.gl.clearDepth(1.0);
            exports.gl.enable(exports.gl.BLEND);
            exports.gl.blendFunc(exports.gl.SRC_ALPHA, exports.gl.ONE_MINUS_SRC_ALPHA);
            _this._view.render();
            requestAnimationFrame(loop);
        };
        loop();
    };
    LAppDelegate.prototype.createShader = function () {
        var vertexShaderId = exports.gl.createShader(exports.gl.VERTEX_SHADER);
        if (vertexShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create vertexShader');
            return null;
        }
        var vertexShader = 'precision mediump float;' +
            'attribute vec3 position;' +
            'attribute vec2 uv;' +
            'varying vec2 vuv;' +
            'void main(void)' +
            '{' +
            '   gl_Position = vec4(position, 1.0);' +
            '   vuv = uv;' +
            '}';
        exports.gl.shaderSource(vertexShaderId, vertexShader);
        exports.gl.compileShader(vertexShaderId);
        var fragmentShaderId = exports.gl.createShader(exports.gl.FRAGMENT_SHADER);
        if (fragmentShaderId == null) {
            lapppal_1.LAppPal.printMessage('failed to create fragmentShader');
            return null;
        }
        var fragmentShader = 'precision mediump float;' +
            'varying vec2 vuv;' +
            'uniform sampler2D texture;' +
            'void main(void)' +
            '{' +
            '   gl_FragColor = texture2D(texture, vuv);' +
            '}';
        exports.gl.shaderSource(fragmentShaderId, fragmentShader);
        exports.gl.compileShader(fragmentShaderId);
        var programId = exports.gl.createProgram();
        exports.gl.attachShader(programId, vertexShaderId);
        exports.gl.attachShader(programId, fragmentShaderId);
        exports.gl.deleteShader(vertexShaderId);
        exports.gl.deleteShader(fragmentShaderId);
        exports.gl.linkProgram(programId);
        exports.gl.useProgram(programId);
        return programId;
    };
    LAppDelegate.prototype.getView = function () {
        return this._view;
    };
    LAppDelegate.prototype.getTextureManager = function () {
        return this._textureManager;
    };
    LAppDelegate.prototype.initializeCubism = function () {
        this._cubismOption.logFunction = lapppal_1.LAppPal.printMessage;
        this._cubismOption.loggingLevel = LAppDefine.CubismLoggingLevel;
        live2dcubismframework_1.CubismFramework.startUp(this._cubismOption);
        live2dcubismframework_1.CubismFramework.initialize();
        lapplive2dmanager_1.LAppLive2DManager.getInstance();
        lapppal_1.LAppPal.updateTime();
        this._view.initializeSprite();
    };
    LAppDelegate.prototype._resizeCanvas = function () {
        exports.canvas.width = window.innerWidth;
        exports.canvas.height = window.innerHeight;
    };
    return LAppDelegate;
}());
exports.LAppDelegate = LAppDelegate;
function onClickBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    var posX = e.pageX;
    var posY = e.pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onMouseMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onClickEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.clientX - rect.left;
    var posY = e.clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchBegan(e) {
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    LAppDelegate.getInstance()._captured = true;
    var posX = e.changedTouches[0].pageX;
    var posY = e.changedTouches[0].pageY;
    LAppDelegate.getInstance()._view.onTouchesBegan(posX, posY);
}
function onTouchMoved(e) {
    if (!LAppDelegate.getInstance()._captured) {
        return;
    }
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesMoved(posX, posY);
}
function onTouchEnded(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}
function onTouchCancel(e) {
    LAppDelegate.getInstance()._captured = false;
    if (!LAppDelegate.getInstance()._view) {
        lapppal_1.LAppPal.printMessage('view notfound');
        return;
    }
    var rect = exports.canvas.getBoundingClientRect();
    var posX = e.changedTouches[0].clientX - rect.left;
    var posY = e.changedTouches[0].clientY - rect.top;
    LAppDelegate.getInstance()._view.onTouchesEnded(posX, posY);
}


/***/ }),

/***/ "./src/lapplive2dmanager.ts":
/*!**********************************!*\
  !*** ./src/lapplive2dmanager.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppLive2DManager = exports.s_instance = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! @framework/math/cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var csmvector_1 = __webpack_require__(/*! @framework/type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var MocMapper_1 = __webpack_require__(/*! ./MocMapper */ "./src/MocMapper.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lappmodel_1 = __webpack_require__(/*! ./lappmodel */ "./src/lappmodel.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
exports.s_instance = null;
var LAppLive2DManager = (function () {
    function LAppLive2DManager() {
        this._finishedMotion = function (self) {
            lapppal_1.LAppPal.printMessage('Motion Finished:');
            console.log(self);
        };
        this._viewMatrix = new cubismmatrix44_1.CubismMatrix44();
        this._models = new csmvector_1.csmVector();
        this._sceneIndex = 0;
        this.changeScene(this._sceneIndex);
    }
    LAppLive2DManager.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppLive2DManager();
        }
        return exports.s_instance;
    };
    LAppLive2DManager.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance = void 0;
        }
        exports.s_instance = null;
    };
    LAppLive2DManager.prototype.getModel = function (no) {
        if (no < this._models.getSize()) {
            return this._models.at(no);
        }
        return null;
    };
    LAppLive2DManager.prototype.releaseAllModel = function () {
        for (var i = 0; i < this._models.getSize(); i++) {
            this._models.at(i).release();
            this._models.set(i, null);
        }
        this._models.clear();
    };
    LAppLive2DManager.prototype.onDrag = function (x, y) {
        for (var i = 0; i < this._models.getSize(); i++) {
            var model = this.getModel(i);
            if (model) {
                model.setDragging(x, y);
            }
        }
    };
    LAppLive2DManager.prototype.onDefaultTap = function (x, y) {
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]tap point: {x: ".concat(x.toFixed(2), " y: ").concat(y.toFixed(2), "}"));
        }
        for (var i = 0; i < this._models.getSize(); i++) {
            if (this._models.at(i).hitTest(LAppDefine.HitAreaNameHead, x, y)) {
                if (LAppDefine.DebugLogEnable) {
                    lapppal_1.LAppPal.printMessage("[APP]hit area: [".concat(LAppDefine.HitAreaNameHead, "]"));
                }
                this._models.at(i).setRandomExpression();
            }
            else if (this._models.at(i).hitTest(LAppDefine.HitAreaNameBody, x, y)) {
                if (LAppDefine.DebugLogEnable) {
                    lapppal_1.LAppPal.printMessage("[APP]hit area: [".concat(LAppDefine.HitAreaNameBody, "]"));
                }
                this._models
                    .at(i)
                    .startRandomMotion(LAppDefine.MotionGroupTapBody, LAppDefine.PriorityNormal, this._finishedMotion);
            }
        }
    };
    LAppLive2DManager.prototype.onTap = function (x, y) {
        if (LAppDefine.DebugLogEnable) {
            lapppal_1.LAppPal.printMessage("[APP]tap point: {x: ".concat(x.toFixed(2), " y: ").concat(y.toFixed(2), "}"));
        }
        for (var i = 0; i < this._models.getSize(); i++) {
            if (x > -1 && x < 1 && y > -1 && y < 1) {
                this._models
                    .at(i)
                    .startRandomMotion(LAppDefine.MotionGroupTapBody, LAppDefine.PriorityForce, this._finishedMotion);
            }
        }
    };
    LAppLive2DManager.prototype.onUpdate = function () {
        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;
        var projection = new cubismmatrix44_1.CubismMatrix44();
        var modelCount = this._models.getSize();
        for (var i = 0; i < modelCount; ++i) {
            var model = this.getModel(i);
            if (model.getModel()) {
                if (model.getModel().getCanvasWidth() > 1.0 && width < height) {
                    model.getModelMatrix().setWidth(2.0);
                    projection.scale(1.0, width / height);
                }
                else {
                    projection.scale(height / width, 1.0);
                }
                if (this._viewMatrix != null) {
                    projection.multiplyByMatrix(this._viewMatrix);
                }
            }
            model.update();
            model.draw(projection);
        }
    };
    LAppLive2DManager.prototype.nextScene = function () {
        var no = (this._sceneIndex + 1) % LAppDefine.resourcesConfig.getModelSize();
        this.changeScene(no);
    };
    LAppLive2DManager.prototype.randomScene = function () {
        var randomNum = Math.random() * (LAppDefine.resourcesConfig.getModelSize() + 1);
        var indexOfModel = Math.floor(randomNum) % LAppDefine.resourcesConfig.getModelSize();
        this.changeScene(indexOfModel);
    };
    LAppLive2DManager.prototype.changeScene = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var model, modelPath, modelJsonName, mapperJsonOfModel, mapper;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._sceneIndex = index;
                        if (LAppDefine.DebugLogEnable) {
                            lapppal_1.LAppPal.printMessage("[APP]model index: ".concat(this._sceneIndex));
                        }
                        model = LAppDefine.resourcesConfig.getModelNames()[index];
                        modelPath = LAppDefine.resourcesConfig.getResourcesPath() + model + '/';
                        modelJsonName = LAppDefine.resourcesConfig.getModelNames()[index];
                        modelJsonName += '.model3.json';
                        mapperJsonOfModel = modelPath + 'mapper.json';
                        mapper = MocMapper_1.MocMapper.getInstance();
                        return [4, mapper.setMapperJson(mapperJsonOfModel)];
                    case 1:
                        _a.sent();
                        this.releaseAllModel();
                        this._models.pushBack(new lappmodel_1.LAppModel());
                        this._models.at(0).loadAssets(modelPath, modelJsonName);
                        return [2];
                }
            });
        });
    };
    LAppLive2DManager.prototype.setViewMatrix = function (m) {
        for (var i = 0; i < 16; i++) {
            this._viewMatrix.getArray()[i] = m.getArray()[i];
        }
    };
    return LAppLive2DManager;
}());
exports.LAppLive2DManager = LAppLive2DManager;


/***/ }),

/***/ "./src/lappmodel.ts":
/*!**************************!*\
  !*** ./src/lappmodel.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppModel = void 0;
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
var cubismdefaultparameterid_1 = __webpack_require__(/*! @framework/cubismdefaultparameterid */ "../../../Framework/src/cubismdefaultparameterid.ts");
var cubismmodelsettingjson_1 = __webpack_require__(/*! @framework/cubismmodelsettingjson */ "../../../Framework/src/cubismmodelsettingjson.ts");
var MocMapper_1 = __webpack_require__(/*! ../../Demo/src/MocMapper */ "./src/MocMapper.ts");
var cubismbreath_1 = __webpack_require__(/*! @framework/effect/cubismbreath */ "../../../Framework/src/effect/cubismbreath.ts");
var cubismeyeblink_1 = __webpack_require__(/*! @framework/effect/cubismeyeblink */ "../../../Framework/src/effect/cubismeyeblink.ts");
var live2dcubismframework_1 = __webpack_require__(/*! @framework/live2dcubismframework */ "../../../Framework/src/live2dcubismframework.ts");
var cubismusermodel_1 = __webpack_require__(/*! @framework/model/cubismusermodel */ "../../../Framework/src/model/cubismusermodel.ts");
var acubismmotion_1 = __webpack_require__(/*! @framework/motion/acubismmotion */ "../../../Framework/src/motion/acubismmotion.ts");
var cubismmotionqueuemanager_1 = __webpack_require__(/*! @framework/motion/cubismmotionqueuemanager */ "../../../Framework/src/motion/cubismmotionqueuemanager.ts");
var csmmap_1 = __webpack_require__(/*! @framework/type/csmmap */ "../../../Framework/src/type/csmmap.ts");
var csmvector_1 = __webpack_require__(/*! @framework/type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var cubismdebug_1 = __webpack_require__(/*! @framework/utils/cubismdebug */ "../../../Framework/src/utils/cubismdebug.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var lappwavfilehandler_1 = __webpack_require__(/*! ./lappwavfilehandler */ "./src/lappwavfilehandler.ts");
var LoadStep;
(function (LoadStep) {
    LoadStep[LoadStep["LoadAssets"] = 0] = "LoadAssets";
    LoadStep[LoadStep["LoadModel"] = 1] = "LoadModel";
    LoadStep[LoadStep["WaitLoadModel"] = 2] = "WaitLoadModel";
    LoadStep[LoadStep["LoadExpression"] = 3] = "LoadExpression";
    LoadStep[LoadStep["WaitLoadExpression"] = 4] = "WaitLoadExpression";
    LoadStep[LoadStep["LoadPhysics"] = 5] = "LoadPhysics";
    LoadStep[LoadStep["WaitLoadPhysics"] = 6] = "WaitLoadPhysics";
    LoadStep[LoadStep["LoadPose"] = 7] = "LoadPose";
    LoadStep[LoadStep["WaitLoadPose"] = 8] = "WaitLoadPose";
    LoadStep[LoadStep["SetupEyeBlink"] = 9] = "SetupEyeBlink";
    LoadStep[LoadStep["SetupBreath"] = 10] = "SetupBreath";
    LoadStep[LoadStep["LoadUserData"] = 11] = "LoadUserData";
    LoadStep[LoadStep["WaitLoadUserData"] = 12] = "WaitLoadUserData";
    LoadStep[LoadStep["SetupEyeBlinkIds"] = 13] = "SetupEyeBlinkIds";
    LoadStep[LoadStep["SetupLipSyncIds"] = 14] = "SetupLipSyncIds";
    LoadStep[LoadStep["SetupLayout"] = 15] = "SetupLayout";
    LoadStep[LoadStep["LoadMotion"] = 16] = "LoadMotion";
    LoadStep[LoadStep["WaitLoadMotion"] = 17] = "WaitLoadMotion";
    LoadStep[LoadStep["CompleteInitialize"] = 18] = "CompleteInitialize";
    LoadStep[LoadStep["CompleteSetupModel"] = 19] = "CompleteSetupModel";
    LoadStep[LoadStep["LoadTexture"] = 20] = "LoadTexture";
    LoadStep[LoadStep["WaitLoadTexture"] = 21] = "WaitLoadTexture";
    LoadStep[LoadStep["CompleteSetup"] = 22] = "CompleteSetup";
})(LoadStep || (LoadStep = {}));
var LAppModel = (function (_super) {
    __extends(LAppModel, _super);
    function LAppModel() {
        var _this = _super.call(this) || this;
        _this._modelSetting = null;
        _this._modelHomeDir = null;
        _this._userTimeSeconds = 0.0;
        _this._eyeBlinkIds = new csmvector_1.csmVector();
        _this._lipSyncIds = new csmvector_1.csmVector();
        _this._motions = new csmmap_1.csmMap();
        _this._expressions = new csmmap_1.csmMap();
        _this._hitArea = new csmvector_1.csmVector();
        _this._userArea = new csmvector_1.csmVector();
        var mapper = MocMapper_1.MocMapper.mapper;
        if (mapper != null) {
            _this._idParamAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamAngleX"));
            _this._idParamAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamAngleY"));
            _this._idParamAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamAngleZ"));
            _this._idParamEyeBallX = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamEyeBallX"));
            _this._idParamEyeBallY = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamEyeBallY"));
            _this._idParamBodyAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(mapper.getParemeter("ParamBodyAngleX"));
        }
        else {
            _this._idParamAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleX);
            _this._idParamAngleY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleY);
            _this._idParamAngleZ = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamAngleZ);
            _this._idParamEyeBallX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallX);
            _this._idParamEyeBallY = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamEyeBallY);
            _this._idParamBodyAngleX = live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBodyAngleX);
        }
        _this._state = LoadStep.LoadAssets;
        _this._expressionCount = 0;
        _this._textureCount = 0;
        _this._motionCount = 0;
        _this._allMotionCount = 0;
        _this._wavFileHandler = new lappwavfilehandler_1.LAppWavFileHandler();
        return _this;
    }
    LAppModel.prototype.loadAssets = function (dir, fileName) {
        var _this = this;
        this._modelHomeDir = dir;
        fetch("".concat(this._modelHomeDir).concat(fileName))
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (arrayBuffer) {
            var setting = new cubismmodelsettingjson_1.CubismModelSettingJson(arrayBuffer, arrayBuffer.byteLength);
            _this._state = LoadStep.LoadModel;
            _this.setupModel(setting);
        });
    };
    LAppModel.prototype.setupModel = function (setting) {
        var _this = this;
        this._updating = true;
        this._initialized = false;
        this._modelSetting = setting;
        if (this._modelSetting.getModelFileName() != '') {
            var modelFileName = this._modelSetting.getModelFileName();
            fetch("".concat(this._modelHomeDir).concat(modelFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                _this.loadModel(arrayBuffer);
                _this._state = LoadStep.LoadExpression;
                loadCubismExpression();
            });
            this._state = LoadStep.WaitLoadModel;
        }
        else {
            lapppal_1.LAppPal.printMessage('Model data does not exist.');
        }
        var loadCubismExpression = function () {
            if (_this._modelSetting.getExpressionCount() > 0) {
                var count_1 = _this._modelSetting.getExpressionCount();
                var _loop_1 = function (i) {
                    var expressionName = _this._modelSetting.getExpressionName(i);
                    var expressionFileName = _this._modelSetting.getExpressionFileName(i);
                    fetch("".concat(_this._modelHomeDir).concat(expressionFileName))
                        .then(function (response) { return response.arrayBuffer(); })
                        .then(function (arrayBuffer) {
                        var motion = _this.loadExpression(arrayBuffer, arrayBuffer.byteLength, expressionName);
                        if (_this._expressions.getValue(expressionName) != null) {
                            acubismmotion_1.ACubismMotion.delete(_this._expressions.getValue(expressionName));
                            _this._expressions.setValue(expressionName, null);
                        }
                        _this._expressions.setValue(expressionName, motion);
                        _this._expressionCount++;
                        if (_this._expressionCount >= count_1) {
                            _this._state = LoadStep.LoadPhysics;
                            loadCubismPhysics();
                        }
                    });
                };
                for (var i = 0; i < count_1; i++) {
                    _loop_1(i);
                }
                _this._state = LoadStep.WaitLoadExpression;
            }
            else {
                _this._state = LoadStep.LoadPhysics;
                loadCubismPhysics();
            }
        };
        var loadCubismPhysics = function () {
            if (_this._modelSetting.getPhysicsFileName() != '') {
                var physicsFileName = _this._modelSetting.getPhysicsFileName();
                fetch("".concat(_this._modelHomeDir).concat(physicsFileName))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPhysics(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.LoadPose;
                    loadCubismPose();
                });
                _this._state = LoadStep.WaitLoadPhysics;
            }
            else {
                _this._state = LoadStep.LoadPose;
                loadCubismPose();
            }
        };
        var loadCubismPose = function () {
            if (_this._modelSetting.getPoseFileName() != '') {
                var poseFileName = _this._modelSetting.getPoseFileName();
                fetch("".concat(_this._modelHomeDir).concat(poseFileName))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadPose(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlink;
                    setupEyeBlink();
                });
                _this._state = LoadStep.WaitLoadPose;
            }
            else {
                _this._state = LoadStep.SetupEyeBlink;
                setupEyeBlink();
            }
        };
        var setupEyeBlink = function () {
            if (_this._modelSetting.getEyeBlinkParameterCount() > 0) {
                _this._eyeBlink = cubismeyeblink_1.CubismEyeBlink.create(_this._modelSetting);
                _this._state = LoadStep.SetupBreath;
            }
            setupBreath();
        };
        var setupBreath = function () {
            _this._breath = cubismbreath_1.CubismBreath.create();
            var breathParameters = new csmvector_1.csmVector();
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleX, 0.0, 15.0, 6.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleY, 0.0, 8.0, 3.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamAngleZ, 0.0, 10.0, 5.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(_this._idParamBodyAngleX, 0.0, 4.0, 15.5345, 0.5));
            breathParameters.pushBack(new cubismbreath_1.BreathParameterData(live2dcubismframework_1.CubismFramework.getIdManager().getId(cubismdefaultparameterid_1.CubismDefaultParameterId.ParamBreath), 0.0, 0.5, 3.2345, 0.5));
            _this._breath.setParameters(breathParameters);
            _this._state = LoadStep.LoadUserData;
            loadUserData();
        };
        var loadUserData = function () {
            if (_this._modelSetting.getUserDataFile() != '') {
                var userDataFile = _this._modelSetting.getUserDataFile();
                fetch("".concat(_this._modelHomeDir).concat(userDataFile))
                    .then(function (response) { return response.arrayBuffer(); })
                    .then(function (arrayBuffer) {
                    _this.loadUserData(arrayBuffer, arrayBuffer.byteLength);
                    _this._state = LoadStep.SetupEyeBlinkIds;
                    setupEyeBlinkIds();
                });
                _this._state = LoadStep.WaitLoadUserData;
            }
            else {
                _this._state = LoadStep.SetupEyeBlinkIds;
                setupEyeBlinkIds();
            }
        };
        var setupEyeBlinkIds = function () {
            var eyeBlinkIdCount = _this._modelSetting.getEyeBlinkParameterCount();
            for (var i = 0; i < eyeBlinkIdCount; ++i) {
                _this._eyeBlinkIds.pushBack(_this._modelSetting.getEyeBlinkParameterId(i));
            }
            _this._state = LoadStep.SetupLipSyncIds;
            setupLipSyncIds();
        };
        var setupLipSyncIds = function () {
            var lipSyncIdCount = _this._modelSetting.getLipSyncParameterCount();
            for (var i = 0; i < lipSyncIdCount; ++i) {
                _this._lipSyncIds.pushBack(_this._modelSetting.getLipSyncParameterId(i));
            }
            _this._state = LoadStep.SetupLayout;
            setupLayout();
        };
        var setupLayout = function () {
            var layout = new csmmap_1.csmMap();
            _this._modelSetting.getLayoutMap(layout);
            _this._modelMatrix.setupFromLayout(layout);
            _this._state = LoadStep.LoadMotion;
            loadCubismMotion();
        };
        var loadCubismMotion = function () {
            _this._state = LoadStep.WaitLoadMotion;
            _this._model.saveParameters();
            _this._allMotionCount = 0;
            _this._motionCount = 0;
            var group = [];
            var motionGroupCount = _this._modelSetting.getMotionGroupCount();
            for (var i = 0; i < motionGroupCount; i++) {
                group[i] = _this._modelSetting.getMotionGroupName(i);
                _this._allMotionCount += _this._modelSetting.getMotionCount(group[i]);
            }
            for (var i = 0; i < motionGroupCount; i++) {
                _this.preLoadMotionGroup(group[i]);
            }
            if (motionGroupCount == 0) {
                _this._state = LoadStep.LoadTexture;
                _this._motionManager.stopAllMotions();
                _this._updating = false;
                _this._initialized = true;
                _this.createRenderer();
                _this.setupTextures();
                _this.getRenderer().startUp(lappdelegate_1.gl);
            }
        };
    };
    LAppModel.prototype.setupTextures = function () {
        var _this = this;
        var usePremultiply = true;
        if (this._state == LoadStep.LoadTexture) {
            var textureCount_1 = this._modelSetting.getTextureCount();
            var _loop_2 = function (modelTextureNumber) {
                if (this_1._modelSetting.getTextureFileName(modelTextureNumber) == '') {
                    console.log('getTextureFileName null');
                    return "continue";
                }
                var texturePath = this_1._modelSetting.getTextureFileName(modelTextureNumber);
                texturePath = this_1._modelHomeDir + texturePath;
                var onLoad = function (textureInfo) {
                    _this.getRenderer().bindTexture(modelTextureNumber, textureInfo.id);
                    _this._textureCount++;
                    if (_this._textureCount >= textureCount_1) {
                        _this._state = LoadStep.CompleteSetup;
                    }
                };
                lappdelegate_1.LAppDelegate.getInstance()
                    .getTextureManager()
                    .createTextureFromPngFile(texturePath, usePremultiply, onLoad);
                this_1.getRenderer().setIsPremultipliedAlpha(usePremultiply);
            };
            var this_1 = this;
            for (var modelTextureNumber = 0; modelTextureNumber < textureCount_1; modelTextureNumber++) {
                _loop_2(modelTextureNumber);
            }
            this._state = LoadStep.WaitLoadTexture;
        }
    };
    LAppModel.prototype.reloadRenderer = function () {
        this.deleteRenderer();
        this.createRenderer();
        this.setupTextures();
    };
    LAppModel.prototype.update = function () {
        if (this._state != LoadStep.CompleteSetup)
            return;
        var deltaTimeSeconds = lapppal_1.LAppPal.getDeltaTime();
        this._userTimeSeconds += deltaTimeSeconds;
        this._dragManager.update(deltaTimeSeconds);
        this._dragX = this._dragManager.getX();
        this._dragY = this._dragManager.getY();
        var motionUpdated = false;
        this._model.loadParameters();
        if (this._motionManager.isFinished()) {
            this.startRandomMotion(LAppDefine.MotionGroupIdle, LAppDefine.PriorityIdle);
        }
        else {
            motionUpdated = this._motionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.saveParameters();
        if (!motionUpdated) {
            if (this._eyeBlink != null) {
                this._eyeBlink.updateParameters(this._model, deltaTimeSeconds);
            }
        }
        if (this._expressionManager != null) {
            this._expressionManager.updateMotion(this._model, deltaTimeSeconds);
        }
        this._model.addParameterValueById(this._idParamAngleX, this._dragX * 30);
        this._model.addParameterValueById(this._idParamAngleY, this._dragY * 30);
        this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30);
        this._model.addParameterValueById(this._idParamBodyAngleX, this._dragX * 10);
        this._model.addParameterValueById(this._idParamEyeBallX, this._dragX);
        this._model.addParameterValueById(this._idParamEyeBallY, this._dragY);
        if (this._breath != null) {
            this._breath.updateParameters(this._model, deltaTimeSeconds);
        }
        if (this._physics != null) {
            this._physics.evaluate(this._model, deltaTimeSeconds);
        }
        if (this._lipsync) {
            var value = 0.0;
            this._wavFileHandler.update(deltaTimeSeconds);
            value = this._wavFileHandler.getRms();
            for (var i = 0; i < this._lipSyncIds.getSize(); ++i) {
                this._model.addParameterValueById(this._lipSyncIds.at(i), value, 0.8);
            }
        }
        if (this._pose != null) {
            this._pose.updateParameters(this._model, deltaTimeSeconds);
        }
        this._model.update();
    };
    LAppModel.prototype.startMotion = function (group, no, priority, onFinishedMotionHandler) {
        var _this = this;
        if (priority == LAppDefine.PriorityForce) {
            this._motionManager.setReservePriority(priority);
        }
        else if (!this._motionManager.reserveMotion(priority)) {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]can't start motion.");
            }
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var motionFileName = this._modelSetting.getMotionFileName(group, no);
        var name = "".concat(group, "_").concat(no);
        var motion = this._motions.getValue(name);
        var autoDelete = false;
        if (motion == null) {
            fetch("".concat(this._modelHomeDir).concat(motionFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                motion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, null, onFinishedMotionHandler);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, no);
                if (fadeTime >= 0.0) {
                    motion.setFadeOutTime(fadeTime);
                }
                motion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                autoDelete = true;
            });
        }
        else {
            motion.setFinishedMotionHandler(onFinishedMotionHandler);
        }
        var voice = this._modelSetting.getMotionSoundFileName(group, no);
        if (voice.localeCompare('') != 0) {
            var path = voice;
            path = this._modelHomeDir + path;
            console.log("lappmodel.ts 加载了音频文件:" + path);
            this._wavFileHandler.start(path);
        }
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]start motion: [".concat(group, "_").concat(no));
        }
        return this._motionManager.startMotionPriority(motion, autoDelete, priority);
    };
    LAppModel.prototype.startRandomMotion = function (group, priority, onFinishedMotionHandler) {
        if (this._modelSetting.getMotionCount(group) == 0) {
            return cubismmotionqueuemanager_1.InvalidMotionQueueEntryHandleValue;
        }
        var no = Math.floor(Math.random() * this._modelSetting.getMotionCount(group));
        return this.startMotion(group, no, priority, onFinishedMotionHandler);
    };
    LAppModel.prototype.setExpression = function (expressionId) {
        var motion = this._expressions.getValue(expressionId);
        if (this._debugMode) {
            lapppal_1.LAppPal.printMessage("[APP]expression: [".concat(expressionId, "]"));
        }
        if (motion != null) {
            this._expressionManager.startMotionPriority(motion, false, LAppDefine.PriorityForce);
        }
        else {
            if (this._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]expression[".concat(expressionId, "] is null"));
            }
        }
    };
    LAppModel.prototype.setRandomExpression = function () {
        if (this._expressions.getSize() == 0) {
            return;
        }
        var no = Math.floor(Math.random() * this._expressions.getSize());
        for (var i = 0; i < this._expressions.getSize(); i++) {
            if (i == no) {
                var name_1 = this._expressions._keyValues[i].first;
                this.setExpression(name_1);
                return;
            }
        }
    };
    LAppModel.prototype.motionEventFired = function (eventValue) {
        (0, cubismdebug_1.CubismLogInfo)('{0} is fired on LAppModel!!', eventValue.s);
    };
    LAppModel.prototype.hitTest = function (hitArenaName, x, y) {
        if (this._opacity < 1) {
            return false;
        }
        var count = this._modelSetting.getHitAreasCount();
        for (var i = 0; i < count; i++) {
            if (this._modelSetting.getHitAreaName(i) == hitArenaName) {
                var drawId = this._modelSetting.getHitAreaId(i);
                return this.isHit(drawId, x, y);
            }
        }
        return false;
    };
    LAppModel.prototype.preLoadMotionGroup = function (group) {
        var _this = this;
        var _loop_3 = function (i) {
            var motionFileName = this_2._modelSetting.getMotionFileName(group, i);
            var name_2 = "".concat(group, "_").concat(i);
            if (this_2._debugMode) {
                lapppal_1.LAppPal.printMessage("[APP]load motion: ".concat(motionFileName, " => [").concat(name_2, "]"));
            }
            fetch("".concat(this_2._modelHomeDir).concat(motionFileName))
                .then(function (response) { return response.arrayBuffer(); })
                .then(function (arrayBuffer) {
                var tmpMotion = _this.loadMotion(arrayBuffer, arrayBuffer.byteLength, name_2);
                var fadeTime = _this._modelSetting.getMotionFadeInTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeInTime(fadeTime);
                }
                fadeTime = _this._modelSetting.getMotionFadeOutTimeValue(group, i);
                if (fadeTime >= 0.0) {
                    tmpMotion.setFadeOutTime(fadeTime);
                }
                tmpMotion.setEffectIds(_this._eyeBlinkIds, _this._lipSyncIds);
                if (_this._motions.getValue(name_2) != null) {
                    acubismmotion_1.ACubismMotion.delete(_this._motions.getValue(name_2));
                }
                _this._motions.setValue(name_2, tmpMotion);
                _this._motionCount++;
                if (_this._motionCount >= _this._allMotionCount) {
                    _this._state = LoadStep.LoadTexture;
                    _this._motionManager.stopAllMotions();
                    _this._updating = false;
                    _this._initialized = true;
                    _this.createRenderer();
                    _this.setupTextures();
                    _this.getRenderer().startUp(lappdelegate_1.gl);
                }
            });
        };
        var this_2 = this;
        for (var i = 0; i < this._modelSetting.getMotionCount(group); i++) {
            _loop_3(i);
        }
    };
    LAppModel.prototype.releaseMotions = function () {
        this._motions.clear();
    };
    LAppModel.prototype.releaseExpressions = function () {
        this._expressions.clear();
    };
    LAppModel.prototype.doDraw = function () {
        if (this._model == null)
            return;
        var viewport = [0, 0, lappdelegate_1.canvas.width, lappdelegate_1.canvas.height];
        this.getRenderer().setRenderState(lappdelegate_1.frameBuffer, viewport);
        this.getRenderer().drawModel();
    };
    LAppModel.prototype.draw = function (matrix) {
        if (this._model == null) {
            return;
        }
        if (this._state == LoadStep.CompleteSetup) {
            matrix.multiplyByMatrix(this._modelMatrix);
            this.getRenderer().setMvpMatrix(matrix);
            this.doDraw();
        }
    };
    return LAppModel;
}(cubismusermodel_1.CubismUserModel));
exports.LAppModel = LAppModel;


/***/ }),

/***/ "./src/lapppal.ts":
/*!************************!*\
  !*** ./src/lapppal.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppPal = void 0;
var LAppPal = (function () {
    function LAppPal() {
    }
    LAppPal.loadFileAsBytes = function (filePath, callback) {
        fetch(filePath)
            .then(function (response) { return response.arrayBuffer(); })
            .then(function (arrayBuffer) { return callback(arrayBuffer, arrayBuffer.byteLength); });
    };
    LAppPal.getDeltaTime = function () {
        return this.s_deltaTime;
    };
    LAppPal.updateTime = function () {
        this.s_currentFrame = Date.now();
        this.s_deltaTime = (this.s_currentFrame - this.s_lastFrame) / 1000;
        this.s_lastFrame = this.s_currentFrame;
    };
    LAppPal.printMessage = function (message) {
        console.log(message);
    };
    LAppPal.lastUpdate = Date.now();
    LAppPal.s_currentFrame = 0.0;
    LAppPal.s_lastFrame = 0.0;
    LAppPal.s_deltaTime = 0.0;
    return LAppPal;
}());
exports.LAppPal = LAppPal;


/***/ }),

/***/ "./src/lapptexturemanager.ts":
/*!***********************************!*\
  !*** ./src/lapptexturemanager.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextureInfo = exports.LAppTextureManager = void 0;
var csmvector_1 = __webpack_require__(/*! @framework/type/csmvector */ "../../../Framework/src/type/csmvector.ts");
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var LAppTextureManager = (function () {
    function LAppTextureManager() {
        this._textures = new csmvector_1.csmVector();
    }
    LAppTextureManager.prototype.release = function () {
        for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
            lappdelegate_1.gl.deleteTexture(ite.ptr().id);
        }
        this._textures = null;
    };
    LAppTextureManager.prototype.createTextureFromPngFile = function (fileName, usePremultiply, callback) {
        var _this = this;
        var _loop_1 = function (ite) {
            if (ite.ptr().fileName == fileName &&
                ite.ptr().usePremultply == usePremultiply) {
                ite.ptr().img = new Image();
                ite.ptr().img.onload = function () { return callback(ite.ptr()); };
                ite.ptr().img.src = fileName;
                return { value: void 0 };
            }
        };
        for (var ite = this._textures.begin(); ite.notEqual(this._textures.end()); ite.preIncrement()) {
            var state_1 = _loop_1(ite);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        var img = new Image();
        img.crossOrigin = '';
        img.onload = function () {
            var tex = lappdelegate_1.gl.createTexture();
            lappdelegate_1.gl.bindTexture(lappdelegate_1.gl.TEXTURE_2D, tex);
            lappdelegate_1.gl.texParameteri(lappdelegate_1.gl.TEXTURE_2D, lappdelegate_1.gl.TEXTURE_MIN_FILTER, lappdelegate_1.gl.LINEAR_MIPMAP_LINEAR);
            lappdelegate_1.gl.texParameteri(lappdelegate_1.gl.TEXTURE_2D, lappdelegate_1.gl.TEXTURE_MAG_FILTER, lappdelegate_1.gl.LINEAR);
            if (usePremultiply) {
                lappdelegate_1.gl.pixelStorei(lappdelegate_1.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
            }
            lappdelegate_1.gl.texImage2D(lappdelegate_1.gl.TEXTURE_2D, 0, lappdelegate_1.gl.RGBA, lappdelegate_1.gl.RGBA, lappdelegate_1.gl.UNSIGNED_BYTE, img);
            lappdelegate_1.gl.generateMipmap(lappdelegate_1.gl.TEXTURE_2D);
            lappdelegate_1.gl.bindTexture(lappdelegate_1.gl.TEXTURE_2D, null);
            var textureInfo = new TextureInfo();
            if (textureInfo != null) {
                textureInfo.fileName = fileName;
                textureInfo.width = img.width;
                textureInfo.height = img.height;
                textureInfo.id = tex;
                textureInfo.img = img;
                textureInfo.usePremultply = usePremultiply;
                _this._textures.pushBack(textureInfo);
            }
            callback(textureInfo);
        };
        img.src = fileName;
    };
    LAppTextureManager.prototype.releaseTextures = function () {
        for (var i = 0; i < this._textures.getSize(); i++) {
            this._textures.set(i, null);
        }
        this._textures.clear();
    };
    LAppTextureManager.prototype.releaseTextureByTexture = function (texture) {
        for (var i = 0; i < this._textures.getSize(); i++) {
            if (this._textures.at(i).id != texture) {
                continue;
            }
            this._textures.set(i, null);
            this._textures.remove(i);
            break;
        }
    };
    LAppTextureManager.prototype.releaseTextureByFilePath = function (fileName) {
        for (var i = 0; i < this._textures.getSize(); i++) {
            if (this._textures.at(i).fileName == fileName) {
                this._textures.set(i, null);
                this._textures.remove(i);
                break;
            }
        }
    };
    return LAppTextureManager;
}());
exports.LAppTextureManager = LAppTextureManager;
var TextureInfo = (function () {
    function TextureInfo() {
        this.id = null;
        this.width = 0;
        this.height = 0;
    }
    return TextureInfo;
}());
exports.TextureInfo = TextureInfo;


/***/ }),

/***/ "./src/lappview.ts":
/*!*************************!*\
  !*** ./src/lappview.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LAppView = void 0;
var cubismmatrix44_1 = __webpack_require__(/*! @framework/math/cubismmatrix44 */ "../../../Framework/src/math/cubismmatrix44.ts");
var cubismviewmatrix_1 = __webpack_require__(/*! @framework/math/cubismviewmatrix */ "../../../Framework/src/math/cubismviewmatrix.ts");
var LAppDefine = __importStar(__webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts"));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
var lapppal_1 = __webpack_require__(/*! ./lapppal */ "./src/lapppal.ts");
var touchmanager_1 = __webpack_require__(/*! ./touchmanager */ "./src/touchmanager.ts");
var LAppView = (function () {
    function LAppView() {
        this._programId = null;
        this._back = null;
        this._gear = null;
        this._touchManager = new touchmanager_1.TouchManager();
        this._deviceToScreen = new cubismmatrix44_1.CubismMatrix44();
        this._viewMatrix = new cubismviewmatrix_1.CubismViewMatrix();
    }
    LAppView.prototype.initialize = function () {
        var width = lappdelegate_1.canvas.width, height = lappdelegate_1.canvas.height;
        var ratio = width / height;
        var left = -ratio;
        var right = ratio;
        var bottom = LAppDefine.ViewLogicalLeft;
        var top = LAppDefine.ViewLogicalRight;
        this._viewMatrix.setScreenRect(left, right, bottom, top);
        this._viewMatrix.scale(LAppDefine.ViewScale, LAppDefine.ViewScale);
        this._deviceToScreen.loadIdentity();
        if (width > height) {
            var screenW = Math.abs(right - left);
            this._deviceToScreen.scaleRelative(screenW / width, -screenW / width);
        }
        else {
            var screenH = Math.abs(top - bottom);
            this._deviceToScreen.scaleRelative(screenH / height, -screenH / height);
        }
        this._deviceToScreen.translateRelative(-width * 0.5, -height * 0.5);
        this._viewMatrix.setMaxScale(LAppDefine.ViewMaxScale);
        this._viewMatrix.setMinScale(LAppDefine.ViewMinScale);
        this._viewMatrix.setMaxScreenRect(LAppDefine.ViewLogicalMaxLeft, LAppDefine.ViewLogicalMaxRight, LAppDefine.ViewLogicalMaxBottom, LAppDefine.ViewLogicalMaxTop);
    };
    LAppView.prototype.release = function () {
        this._viewMatrix = null;
        this._touchManager = null;
        this._deviceToScreen = null;
        this._gear.release();
        this._gear = null;
        this._back.release();
        this._back = null;
        lappdelegate_1.gl.deleteProgram(this._programId);
        this._programId = null;
    };
    LAppView.prototype.render = function () {
        lappdelegate_1.gl.useProgram(this._programId);
        lappdelegate_1.gl.flush();
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.setViewMatrix(this._viewMatrix);
        live2DManager.onUpdate();
    };
    LAppView.prototype.initializeSprite = function () {
        var width = lappdelegate_1.canvas.width;
        var height = lappdelegate_1.canvas.height;
        var textureManager = lappdelegate_1.LAppDelegate.getInstance().getTextureManager();
        var resourcesPath = LAppDefine.resourcesConfig.getResourcesPath();
        if (this._programId == null) {
            this._programId = lappdelegate_1.LAppDelegate.getInstance().createShader();
        }
    };
    LAppView.prototype.onTouchesBegan = function (pointX, pointY) {
        this._touchManager.touchesBegan(pointX, pointY);
    };
    LAppView.prototype.onTouchesMoved = function (pointX, pointY) {
        var viewX = this.transformViewX(this._touchManager.getX());
        var viewY = this.transformViewY(this._touchManager.getY());
        this._touchManager.touchesMoved(pointX, pointY);
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        live2DManager.onDrag(viewX, viewY);
    };
    LAppView.prototype.onTouchesEnded = function (pointX, pointY) {
        var live2DManager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
        {
            var x = this._deviceToScreen.transformX(this._touchManager.getX());
            var y = this._deviceToScreen.transformY(this._touchManager.getY());
            if (LAppDefine.DebugTouchLogEnable) {
                lapppal_1.LAppPal.printMessage("[APP]touchesEnded x: ".concat(x, " y: ").concat(y));
            }
            live2DManager.onTap(x, y);
        }
    };
    LAppView.prototype.transformViewX = function (deviceX) {
        var screenX = this._deviceToScreen.transformX(deviceX);
        return this._viewMatrix.invertTransformX(screenX);
    };
    LAppView.prototype.transformViewY = function (deviceY) {
        var screenY = this._deviceToScreen.transformY(deviceY);
        return this._viewMatrix.invertTransformY(screenY);
    };
    LAppView.prototype.transformScreenX = function (deviceX) {
        return this._deviceToScreen.transformX(deviceX);
    };
    LAppView.prototype.transformScreenY = function (deviceY) {
        return this._deviceToScreen.transformY(deviceY);
    };
    return LAppView;
}());
exports.LAppView = LAppView;


/***/ }),

/***/ "./src/lappwavfilehandler.ts":
/*!***********************************!*\
  !*** ./src/lappwavfilehandler.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByteReader = exports.WavFileInfo = exports.LAppWavFileHandler = exports.s_instance = void 0;
exports.s_instance = null;
var LAppWavFileHandler = (function () {
    function LAppWavFileHandler() {
        var _this = this;
        this._loadFiletoBytes = function (arrayBuffer, length) {
            _this._byteReader._fileByte = arrayBuffer;
            _this._byteReader._fileDataView = new DataView(_this._byteReader._fileByte);
            _this._byteReader._fileSize = length;
        };
        this._pcmData = null;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        this._sampleOffset = 0.0;
        this._wavFileInfo = new WavFileInfo();
        this._byteReader = new ByteReader();
    }
    LAppWavFileHandler.getInstance = function () {
        if (exports.s_instance == null) {
            exports.s_instance = new LAppWavFileHandler();
        }
        return exports.s_instance;
    };
    LAppWavFileHandler.releaseInstance = function () {
        if (exports.s_instance != null) {
            exports.s_instance = void 0;
        }
        exports.s_instance = null;
    };
    LAppWavFileHandler.prototype.update = function (deltaTimeSeconds) {
        var goalOffset;
        var rms;
        if (this._pcmData == null ||
            this._sampleOffset >= this._wavFileInfo._samplesPerChannel) {
            this._lastRms = 0.0;
            return false;
        }
        this._userTimeSeconds += deltaTimeSeconds;
        goalOffset = Math.floor(this._userTimeSeconds * this._wavFileInfo._samplingRate);
        if (goalOffset > this._wavFileInfo._samplesPerChannel) {
            goalOffset = this._wavFileInfo._samplesPerChannel;
        }
        rms = 0.0;
        for (var channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            for (var sampleCount = this._sampleOffset; sampleCount < goalOffset; sampleCount++) {
                var pcm = this._pcmData[channelCount][sampleCount];
                rms += pcm * pcm;
            }
        }
        rms = Math.sqrt(rms /
            (this._wavFileInfo._numberOfChannels *
                (goalOffset - this._sampleOffset)));
        this._lastRms = rms;
        this._sampleOffset = goalOffset;
        return true;
    };
    LAppWavFileHandler.prototype.start = function (filePath) {
        this._sampleOffset = 0;
        this._userTimeSeconds = 0.0;
        this._lastRms = 0.0;
        if (!this.loadWavFile(filePath)) {
            return;
        }
    };
    LAppWavFileHandler.prototype.getRms = function () {
        return this._lastRms;
    };
    LAppWavFileHandler.prototype.loadWavFile = function (filePath) {
        var _this = this;
        var ret = false;
        if (this._pcmData != null) {
            this.releasePcmData();
        }
        var asyncFileLoad = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, fetch(filePath).then(function (responce) {
                        return responce.arrayBuffer();
                    })];
            });
        }); };
        var asyncWavFileManager = (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, audioContext, audioSource, gainNode;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this._byteReader;
                        return [4, asyncFileLoad()];
                    case 1:
                        _a._fileByte = _b.sent();
                        this._byteReader._fileDataView = new DataView(this._byteReader._fileByte);
                        this._byteReader._fileSize = this._byteReader._fileByte.byteLength;
                        this._byteReader._readOffset = 0;
                        audioContext = new window.AudioContext();
                        audioSource = audioContext.createBufferSource();
                        gainNode = audioContext.createGain();
                        audioContext.decodeAudioData(this._byteReader._fileByte, function (buffer) {
                            audioSource.buffer = buffer;
                            gainNode.gain.value = 1;
                            audioSource.connect(gainNode);
                            gainNode.connect(audioContext.destination);
                            audioSource.start();
                        });
                        ret = true;
                        return [2];
                }
            });
        }); })();
        return ret;
    };
    LAppWavFileHandler.prototype.getPcmSample = function () {
        var pcm32;
        switch (this._wavFileInfo._bitsPerSample) {
            case 8:
                pcm32 = this._byteReader.get8() - 128;
                pcm32 <<= 24;
                break;
            case 16:
                pcm32 = this._byteReader.get16LittleEndian() << 16;
                break;
            case 24:
                pcm32 = this._byteReader.get24LittleEndian() << 8;
                break;
            default:
                pcm32 = 0;
                break;
        }
        return pcm32 / 2147483647;
    };
    LAppWavFileHandler.prototype.releasePcmData = function () {
        for (var channelCount = 0; channelCount < this._wavFileInfo._numberOfChannels; channelCount++) {
            delete this._pcmData[channelCount];
        }
        delete this._pcmData;
        this._pcmData = null;
    };
    return LAppWavFileHandler;
}());
exports.LAppWavFileHandler = LAppWavFileHandler;
var WavFileInfo = (function () {
    function WavFileInfo() {
        this._fileName = '';
        this._numberOfChannels = 0;
        this._bitsPerSample = 0;
        this._samplingRate = 0;
        this._samplesPerChannel = 0;
    }
    return WavFileInfo;
}());
exports.WavFileInfo = WavFileInfo;
var ByteReader = (function () {
    function ByteReader() {
        this._fileByte = null;
        this._fileDataView = null;
        this._fileSize = 0;
        this._readOffset = 0;
    }
    ByteReader.prototype.get8 = function () {
        var ret = this._fileDataView.getUint8(this._readOffset);
        this._readOffset++;
        return ret;
    };
    ByteReader.prototype.get16LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 2;
        return ret;
    };
    ByteReader.prototype.get24LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 3;
        return ret;
    };
    ByteReader.prototype.get32LittleEndian = function () {
        var ret = (this._fileDataView.getUint8(this._readOffset + 3) << 24) |
            (this._fileDataView.getUint8(this._readOffset + 2) << 16) |
            (this._fileDataView.getUint8(this._readOffset + 1) << 8) |
            this._fileDataView.getUint8(this._readOffset);
        this._readOffset += 4;
        return ret;
    };
    ByteReader.prototype.getCheckSignature = function (reference) {
        var getSignature = new Uint8Array(4);
        var referenceString = new TextEncoder().encode(reference);
        if (reference.length != 4) {
            return false;
        }
        for (var signatureOffset = 0; signatureOffset < 4; signatureOffset++) {
            getSignature[signatureOffset] = this.get8();
        }
        return (getSignature[0] == referenceString[0] &&
            getSignature[1] == referenceString[1] &&
            getSignature[2] == referenceString[2] &&
            getSignature[3] == referenceString[3]);
    };
    return ByteReader;
}());
exports.ByteReader = ByteReader;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var lappdelegate_1 = __webpack_require__(/*! ./lappdelegate */ "./src/lappdelegate.ts");
var lappdefine_1 = __webpack_require__(/*! ./lappdefine */ "./src/lappdefine.ts");
var lapplive2dmanager_1 = __webpack_require__(/*! ./lapplive2dmanager */ "./src/lapplive2dmanager.ts");
function printVersion() {
    console.log("欢迎使用 DBlog 前端看板娘");
    console.log("项目开源地址：https://github.com/cqc233/live2dDemo");
}
function start() {
    printVersion();
    if (lappdelegate_1.LAppDelegate.getInstance().initialize() == false) {
        return;
    }
    lappdelegate_1.LAppDelegate.getInstance().run();
}
function stop() {
    lappdelegate_1.LAppDelegate.releaseInstance();
}
function changeScene(index) {
    var manager = lapplive2dmanager_1.LAppLive2DManager.getInstance();
    if (index < 0) {
        manager.randomScene();
    }
    else if (index > 0) {
        manager.changeScene(index - 1);
    }
    else if (index == 0) {
        manager.nextScene();
    }
}
module.exports = { start: start, stop: stop, changeScene: changeScene, resourcesConfig: lappdefine_1.resourcesConfig };


/***/ }),

/***/ "./src/touchmanager.ts":
/*!*****************************!*\
  !*** ./src/touchmanager.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TouchManager = void 0;
var TouchManager = (function () {
    function TouchManager() {
        this._startX = 0.0;
        this._startY = 0.0;
        this._lastX = 0.0;
        this._lastY = 0.0;
        this._lastX1 = 0.0;
        this._lastY1 = 0.0;
        this._lastX2 = 0.0;
        this._lastY2 = 0.0;
        this._lastTouchDistance = 0.0;
        this._deltaX = 0.0;
        this._deltaY = 0.0;
        this._scale = 1.0;
        this._touchSingle = false;
        this._flipAvailable = false;
    }
    TouchManager.prototype.getCenterX = function () {
        return this._lastX;
    };
    TouchManager.prototype.getCenterY = function () {
        return this._lastY;
    };
    TouchManager.prototype.getDeltaX = function () {
        return this._deltaX;
    };
    TouchManager.prototype.getDeltaY = function () {
        return this._deltaY;
    };
    TouchManager.prototype.getStartX = function () {
        return this._startX;
    };
    TouchManager.prototype.getStartY = function () {
        return this._startY;
    };
    TouchManager.prototype.getScale = function () {
        return this._scale;
    };
    TouchManager.prototype.getX = function () {
        return this._lastX;
    };
    TouchManager.prototype.getY = function () {
        return this._lastY;
    };
    TouchManager.prototype.getX1 = function () {
        return this._lastX1;
    };
    TouchManager.prototype.getY1 = function () {
        return this._lastY1;
    };
    TouchManager.prototype.getX2 = function () {
        return this._lastX2;
    };
    TouchManager.prototype.getY2 = function () {
        return this._lastY2;
    };
    TouchManager.prototype.isSingleTouch = function () {
        return this._touchSingle;
    };
    TouchManager.prototype.isFlickAvailable = function () {
        return this._flipAvailable;
    };
    TouchManager.prototype.disableFlick = function () {
        this._flipAvailable = false;
    };
    TouchManager.prototype.touchesBegan = function (deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._startX = deviceX;
        this._startY = deviceY;
        this._lastTouchDistance = -1.0;
        this._flipAvailable = true;
        this._touchSingle = true;
    };
    TouchManager.prototype.touchesMoved = function (deviceX, deviceY) {
        this._lastX = deviceX;
        this._lastY = deviceY;
        this._lastTouchDistance = -1.0;
        this._touchSingle = true;
    };
    TouchManager.prototype.getFlickDistance = function () {
        return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY);
    };
    TouchManager.prototype.calculateDistance = function (x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    };
    TouchManager.prototype.calculateMovingAmount = function (v1, v2) {
        if (v1 > 0.0 != v2 > 0.0) {
            return 0.0;
        }
        var sign = v1 > 0.0 ? 1.0 : -1.0;
        var absoluteValue1 = Math.abs(v1);
        var absoluteValue2 = Math.abs(v2);
        return (sign * (absoluteValue1 < absoluteValue2 ? absoluteValue1 : absoluteValue2));
    };
    return TouchManager;
}());
exports.TouchManager = TouchManager;


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMException": function() { return /* binding */ DOMException; },
/* harmony export */   "Headers": function() { return /* binding */ Headers; },
/* harmony export */   "Request": function() { return /* binding */ Request; },
/* harmony export */   "Response": function() { return /* binding */ Response; },
/* harmony export */   "fetch": function() { return /* binding */ fetch; }
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});