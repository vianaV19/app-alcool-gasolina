import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resultado text be "resultado!"', () => {
    expect(component.resultado).withContext("start value").toEqual("Resultado!")
  });
   
  it('should resKmRodado text be "Resultado: R$ 0,00"', () => {
    expect(component.resKmRodado).withContext("start value").toEqual("Resultado: R$ 0,00")
  })

  it('should resultado be Truthy', () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    component.alcool = 4
    component.alcool = 5
    component.calcular();
    expect(component.resultado).toBeTruthy();
  });

});
