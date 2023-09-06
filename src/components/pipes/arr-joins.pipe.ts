import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "arrayJoins",
})
export class ArrayJoinsPipe implements PipeTransform {
    transform(
        value: Array<Array<string>>,
        joinChar: string = "",
        suffix?: string,
        prefix?: string
    ): string[] {
        return value?.map(
            (it) =>
                (Boolean(prefix) ? prefix : "") +
                it.join(joinChar) +
                (Boolean(suffix) ? suffix : "")
        );
    }
}
