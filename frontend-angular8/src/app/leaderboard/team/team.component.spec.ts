
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { TeamComponent } from './team.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { PipesGlobalModule } from '../../shared/pipe/pipes-global.module';
import { ToastrModule } from 'ngx-toastr';
import { ToastComponent } from '../../shared/component/toast/toast.component';
import { ITeam } from '../../shared/model/team.model';
import { TeamService } from '../../shared/api/team.service';


describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let teamService: TeamService;
  const expectedResult = {
    id: 23652,
    name: 'team name',
    description: null,
    step_counter: 0,
  };
  let TEAMS: ITeam[] = [expectedResult];; 

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ TeamComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule ,
        ToastrModule.forRoot({
          timeOut: 3000,
          tapToDismiss: false,
          preventDuplicates: false,
          positionClass: 'toast-top-right',
          maxOpened: 6,
          enableHtml: true,
          closeButton: true,
          toastComponent: ToastComponent,
        }),
        MatTableModule,
        MatTooltipModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatGridListModule,
        PipesGlobalModule,
        MatCardModule,
      ],
      providers:[
        // TeamService
      ],  
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
     // TeamService provided to the TestBed
    teamService = TestBed.get(TeamService);

  }));


  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('Check getAll data (the first method)', async() => {

    spyOn(teamService, 'getAll').and.returnValues(Promise.resolve(TEAMS));

    await expectAsync(component.getAll()).toBeResolved(Promise.resolve(TEAMS))


  });

  it("Check getAll data (the second method)'", async() => {
      spyOn(teamService, "getAll").and.returnValue(Promise.resolve(TEAMS));
      let result = component.getAll()
      result.then((data) => {
        expect(data).toContain(expectedResult);
      })

      expect(await component.getAll()).toBe(TEAMS);

   }
  );

});
