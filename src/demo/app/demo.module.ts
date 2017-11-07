import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CBPRootModule} from '../../app/cbp-root/' ;
import { CBPHeaderModule, CBPAppHeaderModule} from '../../app/header/' ;
import { CBPAccordionModule} from '../../app/accordion/' ;

import { DemoAppRoutingModule } from './demo-routing.module';
import { DemoAppComponent } from './demo.component';
import { MockUserService} from '../../mock-services/user.mock.service';

import {MatIconModule, MatTabsModule} from '@angular/material';

import {DemoCBPAccordionComponent} from './demo-cbp-accordion/demo-cbp-accordion.component';
import {DemoTypographyComponent} from './demo-typograqphy/demo-typography.component';
import {DemoButtonsModule} from './demo-buttons/demo-buttons.module';
import {DemoAppHeaderModule} from './demo-app-header/demo-app-header.module';
import {HttpClientModule} from '@angular/common/http';
import {MockApplicationsService} from '../../mock-services/applications.mock.service';
import {CBP_USER_SERVICE} from '../../app/user/user';
import {CBP_APPLICATIONS_SERVICE, CBPApplication} from '../../app/applications/cbp-applications-service';
import {APP_BASE_HREF} from '@angular/common';



@NgModule({
  declarations: [
      DemoAppComponent,
      DemoCBPAccordionComponent,
      DemoTypographyComponent
  ],
  imports: [
      BrowserModule, HttpClientModule,
      MatTabsModule, MatIconModule, // MdTabsModule is used only for demo cbp-app-header
      DemoAppRoutingModule,
      CBPRootModule,
      CBPAccordionModule,
      CBPHeaderModule,
      CBPAppHeaderModule,
      // CBPProgressModule,
      // demo
      DemoButtonsModule,
      DemoAppHeaderModule
  ],
  exports: [DemoButtonsModule, DemoAppHeaderModule],
  providers: [
      MockUserService,
      MockApplicationsService,
      { provide: CBP_USER_SERVICE,          useExisting: MockUserService },
      { provide: CBP_APPLICATIONS_SERVICE,  useExisting: MockApplicationsService },
      { provide: APP_BASE_HREF, useValue: '/'}
  ],
  schemas: [],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule {
    constructor(applicationsService: MockApplicationsService) {
        const thisApp = new CBPApplication('Kitchen Sink Demo');
        thisApp.version = 'v0.0.0';
        applicationsService.registerCurrentApplication(thisApp);
    }
}



