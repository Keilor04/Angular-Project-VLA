// ...existing code...
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [
    // ...existing code...
    ProductFormComponent
  ],
  imports: [
    // ...existing code...
    ReactiveFormsModule,
    HttpClientModule
  ],
  // ...existing code...
})
export class AppModule { }
