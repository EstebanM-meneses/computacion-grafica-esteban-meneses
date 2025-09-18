import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// PrimeNG
import { PasswordModule } from 'primeng/password';
//import { DropdownModule } from 'primeng/dropdown';
//import { CalendarModule } from 'primeng/calendar';
//import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    RouterOutlet,
    PasswordModule,
    //DropdownModule,
    //CalendarModule,
    //InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    FileUploadModule,
    ToastModule
  ]
})
export class App {
  title = signal('Proyecto con Primeng ');
}
