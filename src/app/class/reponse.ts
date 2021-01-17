export class Response
{
  code: number;
  msg: string;
  details: any;

  constructor()
  {
    this.code = 0;
    this.msg = '';
    this.details = [];
  }
}
