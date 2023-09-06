import { Component, Input, Output, TemplateRef } from '@angular/core';

export type JoinItemsComponentContext<T> = {
    readonly item: T;
    readonly index: number;
}

@Component({
    selector: 'app-join-items',
    templateUrl: './join-items.component.html',
    styleUrls: ['./join-items.component.less'],
})
export class JoinItemsComponent<T = {}> {
    /**
     * spliter
     * @default ''
     */
    @Input() spliter: string | TemplateRef<any> = "";
    @Input() nzData: T[] = [];
    @Input() itemTemplate: TemplateRef<JoinItemsComponentContext<T>> | null = null;

    constructor() { }

    @Output()
    get stringSpliter() {
        if (this.spliter instanceof String) {
            return this.spliter as string;
        }
        return;
    }

    @Output()
    get templateSpliter() {
        if (this.spliter instanceof TemplateRef) {
            return this.spliter as TemplateRef<any>;
        }
        return;
    }
}
