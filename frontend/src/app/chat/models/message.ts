export class Message {
  email: string;
  displayName: string;
  message: string;
  timestamp: any;

  getData(): object {
    const result = {};
    Object.keys(this).map(key => result[key] = this[key]);
    return result;
  }
}
