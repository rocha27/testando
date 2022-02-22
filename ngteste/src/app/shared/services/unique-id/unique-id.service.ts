import {Injectable} from '@angular/core';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UniqueIdService {
  private numberOfGenaretedIds = 0;

  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empety')
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGenaretedIds++;
    return `${prefix}-${uniqueId}`;
  }
  public getNumberOfGneratedUniqueId(): number {
    return this.numberOfGenaretedIds;
  }
  private generateUniqueId(): string {
    return uuidv4();
  }
}
