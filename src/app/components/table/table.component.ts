import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { KeySignature } from 'src/app/shared/models/key.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {
  @Input() keyType: KeySignature[];
  @Input() mood: string;
  expandedElement: KeySignature | null;
  columnsToDisplay: string[] = ['name'];

  constructor() { }

  ngOnInit(): void {
  }

}
