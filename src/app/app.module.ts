import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {
    ArrayJoinsPipe,
    ArrayMapsPipe,
    JoinItemTemplateDirective,
    JoinItemsComponent,
    JoinItemsComponentExampleComponent,
} from "src/components";

@NgModule({
    declarations: [
        AppComponent,
        JoinItemsComponent,
        JoinItemTemplateDirective,
        JoinItemsComponentExampleComponent,
        ArrayMapsPipe,
        ArrayJoinsPipe,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
