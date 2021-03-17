import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DocumentsComponent } from './documents.component';
import { DocumentsService } from './services/documents.service';

describe('DocumentsComponent', () => {
  let component: DocumentsComponent;
  let fixture: ComponentFixture<DocumentsComponent>;
  let documentsSrv: DocumentsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    documentsSrv = TestBed.inject(DocumentsService);
    fixture = TestBed.createComponent(DocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test OnInit implementation', fakeAsync(() => {
    const populateColumnsSpy: jasmine.Spy =
    spyOn(documentsSrv, 'populateColumns').and.callThrough();
    const fetchDocumentsSpy: jasmine.Spy =
    spyOn(documentsSrv, 'fetchDocuments').and.callThrough();
    component.ngOnInit();
    tick(1000);
    expect(populateColumnsSpy).toHaveBeenCalledTimes(1);
    expect(component.columns.length).toEqual(5);
    expect(fetchDocumentsSpy).toHaveBeenCalledTimes(1);
    expect(component.documents.length).toEqual(50);
    expect(component.loading).toEqual(false);
  }));
});
