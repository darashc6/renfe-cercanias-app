import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravellingPetsCyclesPage } from './travelling-pets-cycles.page';

describe('TravellingPetsCyclesPage', () => {
  let component: TravellingPetsCyclesPage;
  let fixture: ComponentFixture<TravellingPetsCyclesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellingPetsCyclesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravellingPetsCyclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
