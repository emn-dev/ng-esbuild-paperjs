import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initTools, convertSvgToCanvas } from './utils';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    setTimeout(() => {
      convertSvgToCanvas();
      initTools();
    }, 100);
  })
  .catch((err) => console.error(err));
