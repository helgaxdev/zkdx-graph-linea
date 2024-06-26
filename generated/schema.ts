// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class TokenBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenBalance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TokenBalance", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TokenBalance | null {
    return changetype<TokenBalance | null>(
      store.get_in_block("TokenBalance", id),
    );
  }

  static load(id: string): TokenBalance | null {
    return changetype<TokenBalance | null>(store.get("TokenBalance", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user_address(): string {
    let value = this.get("user_address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user_address(value: string) {
    this.set("user_address", Value.fromString(value));
  }

  get token_address(): string {
    let value = this.get("token_address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set token_address(value: string) {
    this.set("token_address", Value.fromString(value));
  }

  get token_balance(): BigInt {
    let value = this.get("token_balance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set token_balance(value: BigInt) {
    this.set("token_balance", Value.fromBigInt(value));
  }
}

export class TokenBalanceShot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenBalanceShot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenBalanceShot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("TokenBalanceShot", id.toString(), this);
    }
  }

  static loadInBlock(id: string): TokenBalanceShot | null {
    return changetype<TokenBalanceShot | null>(
      store.get_in_block("TokenBalanceShot", id),
    );
  }

  static load(id: string): TokenBalanceShot | null {
    return changetype<TokenBalanceShot | null>(
      store.get("TokenBalanceShot", id),
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user_address(): string {
    let value = this.get("user_address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user_address(value: string) {
    this.set("user_address", Value.fromString(value));
  }

  get token_address(): string {
    let value = this.get("token_address");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set token_address(value: string) {
    this.set("token_address", Value.fromString(value));
  }

  get token_balance(): BigInt {
    let value = this.get("token_balance");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set token_balance(value: BigInt) {
    this.set("token_balance", Value.fromBigInt(value));
  }

  get block_number(): BigInt {
    let value = this.get("block_number");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set block_number(value: BigInt) {
    this.set("block_number", Value.fromBigInt(value));
  }
}

export class ZUSDHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ZUSDHolder entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ZUSDHolder must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`,
      );
      store.set("ZUSDHolder", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ZUSDHolder | null {
    return changetype<ZUSDHolder | null>(store.get_in_block("ZUSDHolder", id));
  }

  static load(id: string): ZUSDHolder | null {
    return changetype<ZUSDHolder | null>(store.get("ZUSDHolder", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}
