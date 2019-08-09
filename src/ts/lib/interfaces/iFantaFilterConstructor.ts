import { iFantaDependencies } from './iFantaDependencies';
import { iFantaInput } from './iFantaElement';
import { iFantaOptions } from './iFantaOptions';

export interface iFantaFilterConstructor {
    dependencies: iFantaDependencies;
    input: iFantaInput;
    _userOptions: iFantaOptions;
}
