import { Iteration } from './iteration';
import { Member } from './member';

export class Record {
  crm: number;
  userStory: string;
  descrip: string;
  isInOurTeam: boolean;
  createDate: Date;
  lastUpdate: Date;
  dueDate: Date;
  respMem: Member;
  testMem: Member;
  iteration: Iteration;
  deployStat: {};
  usStat: {};
  tag: {};
  isDefect: boolean;
}
