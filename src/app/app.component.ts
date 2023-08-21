import { Component, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit(): void { };
  firstFormGroup: FormGroup = this._formBuilder.group({
    firstCtrl: ['']
  });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });
  title = 'questionnaire-app';
}

// Define the module
@NgModule({
  declarations: [
    // You can add more components here if needed
  ],
  imports: [
    // Import other required modules
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
    // Add more module imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
