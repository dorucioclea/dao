import { Account, Model, types } from "../deps.ts";

enum Err {
  ERR_VALUE_EXISTS = 6001,
  ERR_NOT_AUTHORIZED = 6002,
}

export class StorageUInt extends Model {
  name = "storage-uint";

  static Err = Err;

  getValue(id: number, name: string) {
    return this.callReadOnly("get-value", [types.uint(id), types.ascii(name)])
      .result;
  }

  newValue(id: number, name: string, value: number, sender: Account) {
    return this.callPublic(
      "new-value",
      [types.uint(id), types.ascii(name), types.uint(value)],
      sender
    );
  }
}
