/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
        fixture = TestBed.createComponent(AppComponent);
       // fixture.componentInstance
    });
    it ('should work', () => {
        expect(fixture.componentInstance instanceof AppComponent)
            .toBe(true, 'should create AppComponent');
    });
});
