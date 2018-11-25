import "reflect-metadata";
import { injectable, inject } from "inversify";
import { BaseManager } from "../bootstrap/base-manager";
import { nameof } from "../Infrastructure/base-tool";
import { BootstrapEventBus, BootstrapArg } from "../bootstrap/bootstrap-event-bus";
import { BootstrapContext } from "../bootstrap/bootstrap-context";


@injectable()
export class IpcEventManager extends BaseManager  {
    constructor(
        @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
      ) {
        super(bootstrapEventBus);
      }
      
  protected async initializingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("IpcEventManager initializing");
  }

  protected async preparingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("IpcEventManager preparing");
  }

  protected async startingHandle(
    this: BootstrapContext,
    arg: BootstrapArg
  ): Promise<void> {
    console.log("IpcEventManager starting");
  }
};