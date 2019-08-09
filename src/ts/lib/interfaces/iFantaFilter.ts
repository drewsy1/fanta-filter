import { iFantaInput } from './iFantaElement';

export interface iFantaFilter{
    input: iFantaInput,
    selector: string,
    filterValue: any
}

export interface iMatchFantaFilter extends iFantaFilter{
}

export interface iTagFantaFilter extends iFantaFilter{

}

export interface iDateFantaFilter extends iFantaFilter{

}