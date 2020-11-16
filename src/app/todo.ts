export class Todo {
  id: number;
  text: string;
  isCompleted: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
