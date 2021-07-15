import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module'

enableProdMode();
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
