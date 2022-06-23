'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">scidap-satellite documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"' : 'data-target="#xs-injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"' : 'id="xs-injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/CommandService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CommandService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TaskService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TaskService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TreeService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TreeService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"' : 'data-target="#xs-injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"' : 'id="xs-injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/Pm2Module.html\" data-type=\"entity-link\" >Pm2Module</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"' : 'data-target="#xs-injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"' : 'id="xs-injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/Pm2Service.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >Pm2Service</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StateMachineModules.html\" data-type=\"entity-link\" >StateMachineModules</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"' : 'data-target="#xs-injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"' : 'id="xs-injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/StateMachinesService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StateMachinesService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AirflowReportToAPI.html\" data-type=\"entity-link\" class=\"deprecated-name\">AirflowReportToAPI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AirflowSuccessToAPI.html\" data-type=\"entity-link\" >AirflowSuccessToAPI</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/APISyncComplete.html\" data-type=\"entity-link\" >APISyncComplete</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/APISyncMessage.html\" data-type=\"entity-link\" >APISyncMessage</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/APISyncService.html\" data-type=\"entity-link\" >APISyncService</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Aria2cProgressReport.html\" data-type=\"entity-link\" >Aria2cProgressReport</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AriaDownloadObject.html\" data-type=\"entity-link\" >AriaDownloadObject</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AriaFileInfo.html\" data-type=\"entity-link\" >AriaFileInfo</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/BaseContext.html\" data-type=\"entity-link\" >BaseContext</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/BaseModuleInterface.html\" data-type=\"entity-link\" >BaseModuleInterface</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ContextChildren.html\" data-type=\"entity-link\" >ContextChildren</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CustomPm2StartOptions.html\" data-type=\"entity-link\" >CustomPm2StartOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DefaultMachineConfig.html\" data-type=\"entity-link\" >DefaultMachineConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DependencyTree.html\" data-type=\"entity-link\" >DependencyTree</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DownloadFailed.html\" data-type=\"entity-link\" >DownloadFailed</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DownloadObject.html\" data-type=\"entity-link\" >DownloadObject</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DownloadResults.html\" data-type=\"entity-link\" >DownloadResults</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FileData.html\" data-type=\"entity-link\" >FileData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FileFromClient.html\" data-type=\"entity-link\" >FileFromClient</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Info.html\" data-type=\"entity-link\" >Info</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/MergedDownloadObject.html\" data-type=\"entity-link\" >MergedDownloadObject</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/OnOptions.html\" data-type=\"entity-link\" >OnOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/OptionTypes.html\" data-type=\"entity-link\" >OptionTypes</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PM2_Service.html\" data-type=\"entity-link\" >PM2_Service</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/PM2BusPacket.html\" data-type=\"entity-link\" >PM2BusPacket</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ProcessedData.html\" data-type=\"entity-link\" >ProcessedData</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ProcessedTree.html\" data-type=\"entity-link\" >ProcessedTree</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SatelliteJWT.html\" data-type=\"entity-link\" >SatelliteJWT</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SatelliteMessage.html\" data-type=\"entity-link\" >SatelliteMessage</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SatelliteOutput.html\" data-type=\"entity-link\" >SatelliteOutput</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SatelliteTask.html\" data-type=\"entity-link\" >SatelliteTask</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ServiceCommand.html\" data-type=\"entity-link\" >ServiceCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StartOptions.html\" data-type=\"entity-link\" >StartOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StateMachineOptions.html\" data-type=\"entity-link\" >StateMachineOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StateOptions.html\" data-type=\"entity-link\" >StateOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StreamInformation.html\" data-type=\"entity-link\" >StreamInformation</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/StreamResponse.html\" data-type=\"entity-link\" >StreamResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/UnProcessedStateMachineOptions.html\" data-type=\"entity-link\" >UnProcessedStateMachineOptions</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));