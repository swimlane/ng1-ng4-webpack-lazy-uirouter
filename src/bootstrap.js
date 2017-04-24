import { adapter } from './adapter';
import { appModule } from './app/app.module';

document.addEventListener('DOMContentLoaded', () => {
  // `adapter['ng2AppModule']` is `app/upgrade.module`
  adapter.bootstrap(document.body, [appModule.name]);
});
