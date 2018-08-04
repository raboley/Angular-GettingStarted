import { TestBed, async } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { AppModule } from '../app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,AppModule
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular: Getting Started'`, async(() => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageTitle).toEqual('Product List');
  }));

  it(`should have a showImage property that is false by default'`, async(() => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.showImage).toEqual(false);
  }));

  it(`should toggle showHide to true when calling the toggleImage() method'`, async(() => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    app.toggleImage()
    expect(app.showImage).toEqual(true);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(ProductListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('thead').textContent).toBeTruthy;
  }));
});
