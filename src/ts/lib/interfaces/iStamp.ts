import stampit from 'stampit';

export interface iStampFactory extends stampit.Stamp {
    ({ value }: { value: any }): iStamp;
}

export interface iStamp {
    value: any;
}
