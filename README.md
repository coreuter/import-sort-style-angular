# import-sort-style-angular

A personal style for [import-sort](https://github.com/renke/import-sort) that is focused on angular.

```
// Absolute modules with side effects (not sorted because order may matter)
import "a";
import "c";
import "b";

// Relative modules with side effects (not sorted because order may matter)
import "./a";
import "./c";
import "./b";

// Modules from the Node.js "standard" library sorted by name
import {readFile, writeFile} from "fs";
import * as path from "path";

// angular modules
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ngxs modules
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

// barrel modules
import { LoadingIndicatorModule } from '@app/lib/modules/loading-indicator';
import { NotificationModule } from '@app/lib/modules/notification';

// First-party modules sorted by relative depth and then by name
import { AppComponent } from '../app.component';

import { HomeComponent } from './home.component';
```
