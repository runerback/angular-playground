import { Mixin, MixinConstructor } from './MixinTypes';

describe('MixIn should work', () => {
    it('mixin example', () => {
        class OriginalDTO {
            ID: string = '';
        }

        function ModifiedDTOMixIn(Base: MixinConstructor<OriginalDTO>) {
            return class extends Base {
                private _extendField = false;

                get ExtendField(): boolean {
                    return this._extendField;
                }

                set ExtendField(value: boolean) {
                    this._extendField = value;
                }
            };
        }

        const ModifiedDTO = ModifiedDTOMixIn(OriginalDTO);
        type ModifiedDTOType = Mixin<typeof ModifiedDTOMixIn>;

        const original = new OriginalDTO();
        original.ID = 'your id here';

        const modified: ModifiedDTOType = new ModifiedDTO();
        modified.ID = original.ID;

        expect(modified.ID).toBe(original.ID);

        modified.ExtendField = true;
        expect(modified.ExtendField).toBeTrue();

        modified.ExtendField = false;
        expect(modified.ExtendField).toBeFalse();
    });
});
