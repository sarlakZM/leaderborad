// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserFormComponent } from './user-form.component';

// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { SharedModule } from 'src/app/shared/shared.module';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RouterTestingModule } from "@angular/router/testing";
// import { MatButtonModule, MatCardModule, MatDialogModule, MatDialogRef, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatProgressBarModule, MatSlideToggleModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PipesGlobalModule } from 'src/app/shared/pipe/pipes-global.module';
// import { ToastrModule } from 'ngx-toastr';
// import { ToastComponent } from 'src/app/shared/component/toast/toast.component';
// import { UserService } from 'src/app/shared/api/user.service';
// import { NotificationService } from 'src/app/shared/service/notification.service';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { routes } from 'src/app/app-routing.module'

// let userServiceStub: Partial<UserService>;

//   userServiceStub = {
//     // isLoggedIn: true,
//     // user: { name: 'Test User' },
//   };

// describe('UserFormComponent', () => {
//   let component: UserFormComponent;
//   let fixture: ComponentFixture<UserFormComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ UserFormComponent ],
//       imports:[
//         routes,
//         RouterModule.forRoot([]),
//         // CommonModule, 
//         BrowserModule,
//         BrowserAnimationsModule,
//         HttpClientTestingModule,
//         RouterTestingModule ,
//         // CommonModule,
//         ToastrModule.forRoot({
//           timeOut: 3000,
//           tapToDismiss: false,
//           preventDuplicates: false,
//           positionClass: 'toast-top-right',
//           maxOpened: 6,
//           enableHtml: true,
//           closeButton: true,
//           toastComponent: ToastComponent,
//         }),
//         {
//             provide: MatDialogRef,
//             useValue: {}
//          },
//         // RouterModule,
//         // FormsModule,
//         ReactiveFormsModule,
//         // MatTableModule,
//         MatTooltipModule,
//         MatIconModule,
//         MatDialogModule,
//         // MatTabsModule,
//         MatButtonModule,
//         MatFormFieldModule,
//         MatToolbarModule,
//         MatGridListModule,
//         PipesGlobalModule,
//         MatInputModule,
//         MatProgressBarModule,
//         MatSlideToggleModule,
//         MatCardModule,

//       ],

//       providers:[
//         { provide: UserService, useValue: userServiceStub }
//         //   UserService,
//         //   NotificationService
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserFormComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     let userService = fixture.debugElement.injector.get(UserService);

//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
