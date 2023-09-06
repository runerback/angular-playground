import { Component, Output } from "@angular/core";

type WheelHub = {
    readonly name: string;
    readonly diameter: number;
    readonly width: number;
    readonly spoke: number;
    readonly hold: number;
    readonly et: number;
    readonly tech: string;
    readonly pcd: string;
};

@Component({
    selector: "app-join-items-example",
    templateUrl: "./join-items-example.component.html",
    styleUrls: ["./join-items-example.component.less"],
})
export class JoinItemsComponentExampleComponent {
    constructor() {}

    @Output()
    get wheels(): WheelHub[] {
        return [
            {
                name: "Mk II",
                diameter: 18,
                width: 8.0,
                spoke: 10,
                hold: 5,
                et: 35,
                tech: "MAT",
                pcd: "5x114.3",
            },
            {
                name: "Mk II",
                diameter: 19,
                width: 8.5,
                spoke: 10,
                hold: 5,
                et: 35,
                tech: "MAT",
                pcd: "5x114.3",
            },
        ];
    }
}
