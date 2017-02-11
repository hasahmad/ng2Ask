export class Player {
  firstName: string;
  lastName: string;
  position: string;
  height: string;
  weight: string;

  constructor(fn:string, ln: string, p: string, h: string, w: string) {
    this.firstName = fn;
    this.lastName = ln;
    this.position = p;
    this.height = h;
    this.weight = w;
  }
}
