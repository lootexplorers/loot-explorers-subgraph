// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Owner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Owner entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Owner", id.toString(), this);
    }
  }

  static load(id: string): Owner | null {
    return changetype<Owner | null>(store.get("Owner", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get explorers(): Array<string> {
    let value = this.get("explorers");
    return value!.toStringArray();
  }

  set explorers(value: Array<string>) {
    this.set("explorers", Value.fromStringArray(value));
  }
}

export class Explorer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Explorer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Explorer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Explorer", id.toString(), this);
    }
  }

  static load(id: string): Explorer | null {
    return changetype<Explorer | null>(store.get("Explorer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class MetadataIPFS extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("url", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MetadataIPFS entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save MetadataIPFS entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("MetadataIPFS", id.toString(), this);
    }
  }

  static load(id: string): MetadataIPFS | null {
    return changetype<MetadataIPFS | null>(store.get("MetadataIPFS", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get url(): string {
    let value = this.get("url");
    return value!.toString();
  }

  set url(value: string) {
    this.set("url", Value.fromString(value));
  }
}
