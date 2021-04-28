import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchandfilterdetailPage } from './searchandfilterdetail.page';

describe('SearchandfilterdetailPage', () => {
  let component: SearchandfilterdetailPage;
  let fixture: ComponentFixture<SearchandfilterdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchandfilterdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchandfilterdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
