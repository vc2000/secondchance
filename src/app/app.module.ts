import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TestPageComponent } from './container/test-page/test-page.component';
import { TestComponent } from './components/test/test.component';
import { TestService } from './services/testService';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TestPageComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
