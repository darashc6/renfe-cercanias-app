import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefaultStationRadioBtnComponent } from './default-station-radio-btn.component';

describe('DefaultStationRadioBtnComponent', () => {
  let component: DefaultStationRadioBtnComponent;
  let fixture: ComponentFixture<DefaultStationRadioBtnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultStationRadioBtnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultStationRadioBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
