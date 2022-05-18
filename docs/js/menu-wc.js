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
                    <a href="index.html" data-type="index-link">file-manager-service documentation</a>
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
                                            'data-target="#controllers-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' : 'data-target="#xs-controllers-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' :
                                            'id="xs-controllers-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' : 'data-target="#xs-injectables-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' :
                                        'id="xs-injectables-links-module-AppModule-4a0e4d95dcb8caaef02d0bbb5459a8c36ac256da218b588f712f8e1d6c389feb4a89bbc2a60d1c70579dfdd19c1637edaeaa21460b1a701cd1413242d968fc2d"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-b872a4d715cdefec4b02a865055c78c8535f83a2a2ec8a128dec6649fb1db33f42984c8cfa45203c3da93c419319b6cf01190ed29d25210442e14b59c585bb54"' : 'data-target="#xs-injectables-links-module-AuthModule-b872a4d715cdefec4b02a865055c78c8535f83a2a2ec8a128dec6649fb1db33f42984c8cfa45203c3da93c419319b6cf01190ed29d25210442e14b59c585bb54"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b872a4d715cdefec4b02a865055c78c8535f83a2a2ec8a128dec6649fb1db33f42984c8cfa45203c3da93c419319b6cf01190ed29d25210442e14b59c585bb54"' :
                                        'id="xs-injectables-links-module-AuthModule-b872a4d715cdefec4b02a865055c78c8535f83a2a2ec8a128dec6649fb1db33f42984c8cfa45203c3da93c419319b6cf01190ed29d25210442e14b59c585bb54"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataManagerModule.html" data-type="entity-link" >DataManagerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DataManagerModule-4022be0913d1ab6063ac53b902a004d52c3c7150c1b0878b3f8a2636920b08775bbbda52f0f300f9632b6a511978cc5d0181a4e89e765052a681b127d7d2b100"' : 'data-target="#xs-injectables-links-module-DataManagerModule-4022be0913d1ab6063ac53b902a004d52c3c7150c1b0878b3f8a2636920b08775bbbda52f0f300f9632b6a511978cc5d0181a4e89e765052a681b127d7d2b100"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DataManagerModule-4022be0913d1ab6063ac53b902a004d52c3c7150c1b0878b3f8a2636920b08775bbbda52f0f300f9632b6a511978cc5d0181a4e89e765052a681b127d7d2b100"' :
                                        'id="xs-injectables-links-module-DataManagerModule-4022be0913d1ab6063ac53b902a004d52c3c7150c1b0878b3f8a2636920b08775bbbda52f0f300f9632b6a511978cc5d0181a4e89e765052a681b127d7d2b100"' }>
                                        <li class="link">
                                            <a href="injectables/DataManagerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DataManagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileManagerAPIModule.html" data-type="entity-link" >FileManagerAPIModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' : 'data-target="#xs-controllers-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' :
                                            'id="xs-controllers-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' }>
                                            <li class="link">
                                                <a href="controllers/FileManagerAPIController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileManagerAPIController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' : 'data-target="#xs-injectables-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' :
                                        'id="xs-injectables-links-module-FileManagerAPIModule-4d1cca7e7e0c2fe3c50178fa200d4144890949ea10f3b9ea3bc6c215aa184e63e0ccf4dea2e46dc57d4b9465b5a0c790b75d9ac14372ef6314f3710419d64cf1"' }>
                                        <li class="link">
                                            <a href="injectables/FileManagerAPIService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileManagerAPIService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FileManagerFTPService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileManagerFTPService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FileUtilitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUtilitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LinkDownloadAPIModule.html" data-type="entity-link" >LinkDownloadAPIModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' : 'data-target="#xs-controllers-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' :
                                            'id="xs-controllers-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' }>
                                            <li class="link">
                                                <a href="controllers/LinkDownloadAPIController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkDownloadAPIController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' : 'data-target="#xs-injectables-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' :
                                        'id="xs-injectables-links-module-LinkDownloadAPIModule-ee248a02071f3339479cbf33304d14cfd45eb987928f7f743b50a09551847eeebe2eab196b0967d579a3618d11a8f87d0279334744301824f7a272873a648928"' }>
                                        <li class="link">
                                            <a href="injectables/LinkDownloadAPIService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LinkDownloadAPIService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReadFileModule.html" data-type="entity-link" >ReadFileModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ReadFileModule-092de791e798ba5cf33d9b380def92b3910334a3dc0c55091d5d65220635c160291dd86c978ae1abb280734febd3e2682052f8c1e2b89eb92db9b792966e7852"' : 'data-target="#xs-injectables-links-module-ReadFileModule-092de791e798ba5cf33d9b380def92b3910334a3dc0c55091d5d65220635c160291dd86c978ae1abb280734febd3e2682052f8c1e2b89eb92db9b792966e7852"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ReadFileModule-092de791e798ba5cf33d9b380def92b3910334a3dc0c55091d5d65220635c160291dd86c978ae1abb280734febd3e2682052f8c1e2b89eb92db9b792966e7852"' :
                                        'id="xs-injectables-links-module-ReadFileModule-092de791e798ba5cf33d9b380def92b3910334a3dc0c55091d5d65220635c160291dd86c978ae1abb280734febd3e2682052f8c1e2b89eb92db9b792966e7852"' }>
                                        <li class="link">
                                            <a href="injectables/ReadFileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReadFileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/GetAuthGuard.html" data-type="entity-link" >GetAuthGuard</a>
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
                                <a href="interfaces/Action.html" data-type="entity-link" >Action</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AirflowProgressReport.html" data-type="entity-link" >AirflowProgressReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AirflowReportToAPI.html" data-type="entity-link" >AirflowReportToAPI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AirflowResponse.html" data-type="entity-link" >AirflowResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AirflowSuccessReport.html" data-type="entity-link" >AirflowSuccessReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AirflowSuccessResponse.html" data-type="entity-link" >AirflowSuccessResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AirflowSuccessToAPI.html" data-type="entity-link" >AirflowSuccessToAPI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aria2cProgressReport.html" data-type="entity-link" >Aria2cProgressReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aria2cResponse.html" data-type="entity-link" >Aria2cResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AriaDownloadObject.html" data-type="entity-link" >AriaDownloadObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AriaFileInfo.html" data-type="entity-link" >AriaFileInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseModuleInterface.html" data-type="entity-link" >BaseModuleInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Certs.html" data-type="entity-link" >Certs</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DagRunInfo.html" data-type="entity-link" >DagRunInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataManagerData.html" data-type="entity-link" >DataManagerData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DetailsResponse.html" data-type="entity-link" >DetailsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadFailed.html" data-type="entity-link" >DownloadFailed</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadInputFromFM.html" data-type="entity-link" >DownloadInputFromFM</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadObject.html" data-type="entity-link" >DownloadObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadRequestFromFM.html" data-type="entity-link" >DownloadRequestFromFM</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadResponse.html" data-type="entity-link" >DownloadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadResults.html" data-type="entity-link" >DownloadResults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadToken.html" data-type="entity-link" >DownloadToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownloadToSatelliteRequest.html" data-type="entity-link" >DownloadToSatelliteRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileData.html" data-type="entity-link" >FileData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileDetails.html" data-type="entity-link" >FileDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileInformation.html" data-type="entity-link" >FileInformation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileManagerError.html" data-type="entity-link" >FileManagerError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FileManagerToken.html" data-type="entity-link" >FileManagerToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/fsStats.html" data-type="entity-link" >fsStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FTPInformation.html" data-type="entity-link" >FTPInformation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FTPProgress.html" data-type="entity-link" >FTPProgress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Info.html" data-type="entity-link" >Info</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InputObject.html" data-type="entity-link" >InputObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MergedDownloadObject.html" data-type="entity-link" >MergedDownloadObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MimeTypes.html" data-type="entity-link" >MimeTypes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pm2Packet.html" data-type="entity-link" >Pm2Packet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pm2Response.html" data-type="entity-link" >Pm2Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProcessedData.html" data-type="entity-link" >ProcessedData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReadRequest.html" data-type="entity-link" >ReadRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReadResponse.html" data-type="entity-link" >ReadResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RootLocations.html" data-type="entity-link" >RootLocations</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sample.html" data-type="entity-link" >Sample</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SatelliteJWT.html" data-type="entity-link" >SatelliteJWT</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Statistics.html" data-type="entity-link" >Statistics</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatisticsReport.html" data-type="entity-link" >StatisticsReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepStats.html" data-type="entity-link" >StepStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadInformation.html" data-type="entity-link" >UploadInformation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UploadRequest.html" data-type="entity-link" >UploadRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualPlugin.html" data-type="entity-link" >VisualPlugin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualPluginRequest.html" data-type="entity-link" >VisualPluginRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualPluginResponse.html" data-type="entity-link" >VisualPluginResponse</a>
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