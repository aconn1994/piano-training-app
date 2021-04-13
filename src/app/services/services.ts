import { NaturalMinorKeyService } from './natural-minor-key.service';
import { MajorKeyService } from './major-key.service';
import { DatabaseService } from './database.service';
import { BaseService } from './base.service';
import { HarmonicMinorKeyService } from './harmonic-minor-key.service';

export const Services = [
    BaseService,
    DatabaseService,
    MajorKeyService,
    NaturalMinorKeyService,
    HarmonicMinorKeyService
];