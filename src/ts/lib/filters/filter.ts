import { iFantaFilterConstructor, iFantaInput, iFantaFilter, iFantaOptions } from '../interfaces';

export abstract class Filter implements iFantaFilter {
    selector: string;
    filterValue: any;
    input: iFantaInput;
    protected _options: iFantaOptions;

    constructor({ dependencies, input, _userOptions }: iFantaFilterConstructor) {
        const { defaultOptions } = dependencies;
        this._options = Object.assign(defaultOptions, _userOptions);
        this.input = input;
        return this;
    }
}
