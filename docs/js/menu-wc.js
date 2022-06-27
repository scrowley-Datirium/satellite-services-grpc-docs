'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">scidap-satellite documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"' : 'data-target="#xs-injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"' :
                                        'id="xs-injectables-links-module-AppModule-1332147a6ac08d2f7f699e3b5a94bd1a1699a823a111a199a8c9587e7d9ad54fa426ce00b74a70445aa1fb9b6b21c6af32b49ba2c5254e7e7df66c961c2b0a4c"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CommandService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TreeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TreeService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"' : 'data-target="#xs-injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"' :
                                        'id="xs-injectables-links-module-AuthModule-e6e0d92d9b25e7e55d31c0775ad3225030d0d1509777d387267be1be814a2d8f54e0931b0e06026154b2df81f01d13d58bb00296d6f8bcd6b3c85a24dcf9a0cd"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Pm2Module.html" data-type="entity-link" >Pm2Module</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"' : 'data-target="#xs-injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"' :
                                        'id="xs-injectables-links-module-Pm2Module-db0acc3ddb8e3c9b2f9f00c6399da26dd5fa5d5fc2adc38d2ea6f3763d83fde2c113d697e7a3fdc0b09e2565c3fd467280b017eaab7f212148d961eba2e0bdc6"' }>
                                        <li class="link">
                                            <a href="injectables/Pm2Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pm2Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StateMachineModules.html" data-type="entity-link" >StateMachineModules</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"' : 'data-target="#xs-injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"' :
                                        'id="xs-injectables-links-module-StateMachineModules-1caa0588cd523251f643ab35416f01dd933e859f9a0c237d7e40f1436dfa2a771be1f6422ea43fd65a6773567884bad43485e0c870789b42b2b755a701febc15"' }>
                                        <li class="link">
                                            <a href="injectables/StateMachinesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateMachinesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AirflowReportToAPI.html" data-type="entity-link" class="deprecated-name">AirflowReportToAPI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AirflowSuccessToAPI.html" data-type="entity-link" >AirflowSuccessToAPI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APISyncComplete.html" data-type="entity-link" >APISyncComplete</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APISyncMessage.html" data-type="entity-link" >APISyncMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/APISyncService.html" data-type="entity-link" >APISyncService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aria2cProgressReport.html" data-type="entity-link" >Aria2cProgressReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AriaDownloadObject.html" data-type="entity-link" >AriaDownloadObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AriaFileInfo.html" data-type="entity-link" >AriaFileInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseContext.html" data-type="entity-link" >BaseContext</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseModuleInterface.html" data-type="entity-link" >BaseModuleInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContextChildren.html" data-type="entity-link" >ContextChildren</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomPm2StartOptions.html" data-type="entity-link" >CustomPm2StartOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DefaultMachineConfig.html" data-type="entity-link" >DefaultMachineConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DependencyTree.html" data-type="entity-link" >DependencyTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadFailed.html" data-type="entity-link" >DownloadFailed</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadObject.html" data-type="entity-link" >DownloadObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadResults.html" data-type="entity-link" >DownloadResults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileData.html" data-type="entity-link" >FileData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileFromClient.html" data-type="entity-link" >FileFromClient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Info.html" data-type="entity-link" >Info</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MergedDownloadObject.html" data-type="entity-link" >MergedDownloadObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OnOptions.html" data-type="entity-link" >OnOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OptionTypes.html" data-type="entity-link" >OptionTypes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PM2_Service.html" data-type="entity-link" >PM2_Service</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PM2BusPacket.html" data-type="entity-link" >PM2BusPacket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessedData.html" data-type="entity-link" >ProcessedData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessedTree.html" data-type="entity-link" >ProcessedTree</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteJWT.html" data-type="entity-link" >SatelliteJWT</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteMessage.html" data-type="entity-link" >SatelliteMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteOutput.html" data-type="entity-link" >SatelliteOutput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteTask.html" data-type="entity-link" >SatelliteTask</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ServiceCommand.html" data-type="entity-link" >ServiceCommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StartOptions.html" data-type="entity-link" >StartOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateMachineOptions.html" data-type="entity-link" >StateMachineOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StateOptions.html" data-type="entity-link" >StateOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StreamInformation.html" data-type="entity-link" >StreamInformation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StreamResponse.html" data-type="entity-link" >StreamResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UnProcessedStateMachineOptions.html" data-type="entity-link" >UnProcessedStateMachineOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});