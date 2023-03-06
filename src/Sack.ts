export class Sack {
  private content: Array<any> = [];

  constructor(content: Array<any>) {
    this.content = [
      ...this.content,
      ...content.filter(() => Math.random() > 0.5)
    ] 
  }

  public empty(): Array<any> {
    let tmp = this.content.sort(() => Math.random() * 2 - 1);
    this.content = [];
    return tmp;
  }

  public fill(content: Array<any>): void {
    this.content = [
      ...this.content,
      ...content.filter(() => Math.random() > 0.5)
    ] 
  }

  public take(): any {
    this.content = this.content.filter(() => Math.random() > 0.5);
    return this.content.pop();
  }

  public put(content: any): void {
    if (Math.random() > 0.5) this.content.push(content)
  }
}