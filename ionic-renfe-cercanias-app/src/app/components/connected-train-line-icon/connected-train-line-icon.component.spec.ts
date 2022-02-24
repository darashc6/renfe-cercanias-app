import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectedTrainLineIconComponent } from './connected-train-line-icon.component';

describe('ConnectedTrainLineIconComponent', () => {
  let component: ConnectedTrainLineIconComponent;
  let fixture: ComponentFixture<ConnectedTrainLineIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedTrainLineIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectedTrainLineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
