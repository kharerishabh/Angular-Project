import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrorComponent } from './error/error.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHightLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './structural-directive/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ErrorComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    BasicHightLightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
