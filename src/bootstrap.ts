import app from './app/app.module.js';
import { UIRouter, UrlService } from '@uirouter/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const injector = platformRef.injector;
    const upgrade = injector.get(UpgradeModule) as UpgradeModule;

    upgrade.bootstrap(document.body, [app.name]);

    // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
    const url = injector.get(UrlService);

    // Instruct UIRouter to listen to URL changes
    url.listen();
    url.sync();
  });
});
