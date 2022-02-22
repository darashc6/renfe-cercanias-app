import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RechargeUserRenfeCardPage } from './recharge-user-renfe-card.page';

describe('RechargeUserRenfeCardPage', () => {
  let component: RechargeUserRenfeCardPage;
  let fixture: ComponentFixture<RechargeUserRenfeCardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeUserRenfeCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RechargeUserRenfeCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
