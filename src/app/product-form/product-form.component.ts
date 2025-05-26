import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
  imports: [ReactiveFormsModule, CommonModule], // Para directivas como *ngIf, *ngFor y para formularios reactivos
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      category = [
        { id: 1, name: 'Abarrotes' },
        { id: 2, name: 'Productos de limpieza' },
        { id: 3, name: 'Bebidas' },
        { id: 4, name: 'Frutas y verduras' },
        { id: 5, name: 'Lácteos' },
        { id: 6, name: 'Carnes y pescados' },
        { id: 7, name: 'Panadería y pastelería' },
        { id: 8, name: 'Congelados' },
        { id: 9, name: 'Cuidado personal' },
        { id: 10, name: 'Cuidado del hogar' },
        { id: 11, name: 'Mascotas' },
      ];
      // image: ['', Validators.required] // La API requiere al menos una URL de imagen, la simularemos
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.http.post('https://api.escuelajs.co/api/v1/products', productData)
        .subscribe(response => {
          console.log('Producto creado:', response);
        }, error => {
          console.error('Error al crear el producto:', error);
        });
    }
  }
}

//fetch sirve para hacer peticiones HTTP
//metodo POST sirve para enviar datos al servidor
//headers sirve para definir los encabezados de la petición
//body sirve para enviar el cuerpo de la petición
//En esta parte se uso Copiot para hacer la petición POST

fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  })
    .then((response) => response.json())
    .then((data) => console.log('Product created:', data))
    .catch((error) => console.error('Error creating product:', error));
} else {
  console.log('Form is invalid');
}
}

ngOnInit(): void {
    // Inicializa tu FormGroup en ngOnInit
    this.profileForm = this.fb.group({
      categoryId: ['', Validators.required] // Inicializa categoryId con un valor vacío y un validador (opcional)
    });
  }