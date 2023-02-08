import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebaUnitaria'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebaUnitaria');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pruebaUnitaria app is running!');
  });

  //TODO: Actividad de la practica
  it('revisión del formato de la imagen', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const imgen: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgen).toBeTruthy();
    expect(imgen.baseURI).toEqual('https://images.milenio.com/JC9cyv2ahh1pbMOq9-hpjuqjYrc=/942x596/uploads/media/2023/02/07/como-haer-un-dino-meme.jpg');
  })

  it('El label debe tener el nombre de terminos', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.etiqueta')?.textContent).toContain('Terminos');


  });

  it('Ver que el checkbox no este selecionado', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const checkbox:HTMLInputElement = fixture.nativeElement.querySelector('.checkbox2');
    expect(checkbox.checked).toEqual(false);


  });


  describe("Prueba de la lista de opciones", function() {
    it("Ver si las opeciones tienen datos", function() {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const select: HTMLSelectElement = fixture.nativeElement.querySelector('#mySelect');
      expect(select.options.length).toEqual(5);
      expect(select.options[0].value).toEqual("1");
      expect(select.options[0].text).toEqual("Ecuador");
      expect(select.options[1].value).toEqual("2");
      expect(select.options[1].text).toEqual("Peru");
      expect(select.options[2].value).toEqual("3");
      expect(select.options[2].text).toEqual("Colombia");
      expect(select.options[3].value).toEqual("4");
      expect(select.options[3].text).toEqual("Brasil");
      expect(select.options[4].value).toEqual("5");
      expect(select.options[4].text).toEqual("Argentina");
    });
  });

  it('revisar que tebe estar con mi nombre el input', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const input: HTMLInputElement = fixture.nativeElement.querySelector('.nombre');
    expect(input).toBeTruthy();
    expect(input.value).toEqual('Wilmer Shagñay');
    expect(input.disabled).toBeTruthy();
  });


  it('revisión del nombre del boton', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const boton: HTMLButtonElement = fixture.nativeElement.querySelector('.btn');
    expect(boton).toBeTruthy();
    expect(boton.textContent).toEqual('Guardar');
  })



});



