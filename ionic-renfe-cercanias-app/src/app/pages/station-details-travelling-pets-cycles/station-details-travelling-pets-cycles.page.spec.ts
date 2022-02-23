import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StationDetailsTravellingPetsCyclesPage } from './station-details-travelling-pets-cycles.page';

describe('StationDetailsTravellingPetsCyclesPage', () => {
  let component: StationDetailsTravellingPetsCyclesPage;
  let fixture: ComponentFixture<StationDetailsTravellingPetsCyclesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StationDetailsTravellingPetsCyclesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StationDetailsTravellingPetsCyclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
