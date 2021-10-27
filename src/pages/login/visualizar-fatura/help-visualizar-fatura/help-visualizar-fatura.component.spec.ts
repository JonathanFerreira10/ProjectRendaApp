import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HelpVisualizarFaturaComponent } from './help-visualizar-fatura.component';

describe('HelpVisualizarFaturaComponent', () => {
  let component: HelpVisualizarFaturaComponent;
  let fixture: ComponentFixture<HelpVisualizarFaturaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpVisualizarFaturaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpVisualizarFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
