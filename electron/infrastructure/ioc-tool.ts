import { Container } from "inversify";
import { nameof } from "ts-simple-nameof";

type constructor<T> = new (...params: any[]) => T;

export class IocTool {
  public readonly container: Container;

  public RegisterClass<T>(constructor: constructor<T>): IocTool {
    var typeName = nameof(constructor);
    this.container.bind<T>(typeName).to(constructor);
    return this;
  }

  constructor() {
    this.container = new Container();
  }
}