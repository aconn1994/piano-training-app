export interface KeySignature {
    name: string;
    id: string;
    // mood: 'major' | 'minor';
    // songNames: Array<string>;
    // speeds: ScaleSpeeds;
    degrees: ScaleDegrees;
}

export interface ScaleSpeeds {
    oneZeroZero: boolean;
    oneTwoFive: boolean;
    oneFiveZero: boolean;
    oneSevenFive: boolean;
    twoZeroZero: boolean;
    twoTwoFive: boolean;
    twoFiveZero: boolean;
}

export interface ScaleDegrees {
    tonic: string;
    supertonic: string;
    mediant: string;
    subdominant: string;
    dominant: string;
    submediant: string;
    leadingTone: string;
}