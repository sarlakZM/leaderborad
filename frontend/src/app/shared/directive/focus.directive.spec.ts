import {TestBed, ComponentFixture} from '@angular/core/testing';
import {Component, DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import { AutofocusDirective } from './focus.directive';

@Component({
  template: `<input type="text" vrAutofocus>`,
  styles: ['input:focus { background-color: blue; }input { background-color: red; }']

})
class TestFocusComponent {
}

describe('Directive: vrAutofocus', () => {

  let component: TestFocusComponent;
  let fixture: ComponentFixture<TestFocusComponent>;
  let inputEl: DebugElement;
  let inputElFocus: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFocusComponent, AutofocusDirective],

    });

    fixture = TestBed.createComponent(TestFocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));

  });


  it('auto focus input', () => {
    setTimeout(()=> {
      inputElFocus = fixture.debugElement.query(By.css(':focus'));
      expect(inputElFocus.name).toBe('input');
    },1000)

  });

});
