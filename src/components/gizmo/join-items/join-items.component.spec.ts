import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinItemsComponent } from './join-items.component';

describe('SharedShowPriceComponent', () => {
    let component: JoinItemsComponent<number>;
    let fixture: ComponentFixture<JoinItemsComponent<number>>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [JoinItemsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(JoinItemsComponent<number>);
        component = fixture.componentInstance;
    });

    it('should create default', () => {
        fixture.detectChanges();

        expect(fixture.debugElement.children.length).toBe(0);
    });
});
