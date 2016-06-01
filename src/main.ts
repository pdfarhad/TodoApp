import {enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {TodoAppAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoAppAppComponent);
