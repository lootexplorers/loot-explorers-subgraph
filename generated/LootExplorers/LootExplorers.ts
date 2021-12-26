// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LootExplorers extends ethereum.SmartContract {
  static bind(address: Address): LootExplorers {
    return new LootExplorers("LootExplorers", address);
  }

  MAX_PER_MINT(): BigInt {
    let result = super.call("MAX_PER_MINT", "MAX_PER_MINT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_PER_MINT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_PER_MINT", "MAX_PER_MINT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_PER_WALLET_OG_WHITELIST(): BigInt {
    let result = super.call(
      "MAX_PER_WALLET_OG_WHITELIST",
      "MAX_PER_WALLET_OG_WHITELIST():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_PER_WALLET_OG_WHITELIST(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_PER_WALLET_OG_WHITELIST",
      "MAX_PER_WALLET_OG_WHITELIST():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MAX_SUPPLY(): BigInt {
    let result = super.call("MAX_SUPPLY", "MAX_SUPPLY():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_SUPPLY(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_SUPPLY", "MAX_SUPPLY():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRICE(): BigInt {
    let result = super.call("PRICE", "PRICE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PRICE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PRICE", "PRICE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  communityWhitelistMerkleRoot(): Bytes {
    let result = super.call(
      "communityWhitelistMerkleRoot",
      "communityWhitelistMerkleRoot():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_communityWhitelistMerkleRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "communityWhitelistMerkleRoot",
      "communityWhitelistMerkleRoot():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lootAddress(): Address {
    let result = super.call("lootAddress", "lootAddress():(address)", []);

    return result[0].toAddress();
  }

  try_lootAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("lootAddress", "lootAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  saleIsActive(): boolean {
    let result = super.call("saleIsActive", "saleIsActive():(bool)", []);

    return result[0].toBoolean();
  }

  try_saleIsActive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("saleIsActive", "saleIsActive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  saleStage(): string {
    let result = super.call("saleStage", "saleStage():(string)", []);

    return result[0].toString();
  }

  try_saleStage(): ethereum.CallResult<string> {
    let result = super.tryCall("saleStage", "saleStage():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _lootAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AppendToExistingUnmintedTokenIdsCall extends ethereum.Call {
  get inputs(): AppendToExistingUnmintedTokenIdsCall__Inputs {
    return new AppendToExistingUnmintedTokenIdsCall__Inputs(this);
  }

  get outputs(): AppendToExistingUnmintedTokenIdsCall__Outputs {
    return new AppendToExistingUnmintedTokenIdsCall__Outputs(this);
  }
}

export class AppendToExistingUnmintedTokenIdsCall__Inputs {
  _call: AppendToExistingUnmintedTokenIdsCall;

  constructor(call: AppendToExistingUnmintedTokenIdsCall) {
    this._call = call;
  }

  get tokenIds(): Array<i32> {
    return this._call.inputValues[0].value.toI32Array();
  }
}

export class AppendToExistingUnmintedTokenIdsCall__Outputs {
  _call: AppendToExistingUnmintedTokenIdsCall;

  constructor(call: AppendToExistingUnmintedTokenIdsCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetMerkleRootCall extends ethereum.Call {
  get inputs(): SetMerkleRootCall__Inputs {
    return new SetMerkleRootCall__Inputs(this);
  }

  get outputs(): SetMerkleRootCall__Outputs {
    return new SetMerkleRootCall__Outputs(this);
  }
}

export class SetMerkleRootCall__Inputs {
  _call: SetMerkleRootCall;

  constructor(call: SetMerkleRootCall) {
    this._call = call;
  }

  get _root(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetMerkleRootCall__Outputs {
  _call: SetMerkleRootCall;

  constructor(call: SetMerkleRootCall) {
    this._call = call;
  }
}

export class SetSaleStartCall extends ethereum.Call {
  get inputs(): SetSaleStartCall__Inputs {
    return new SetSaleStartCall__Inputs(this);
  }

  get outputs(): SetSaleStartCall__Outputs {
    return new SetSaleStartCall__Outputs(this);
  }
}

export class SetSaleStartCall__Inputs {
  _call: SetSaleStartCall;

  constructor(call: SetSaleStartCall) {
    this._call = call;
  }

  get start(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetSaleStartCall__Outputs {
  _call: SetSaleStartCall;

  constructor(call: SetSaleStartCall) {
    this._call = call;
  }
}

export class SetUnmintedTokenIdsCall extends ethereum.Call {
  get inputs(): SetUnmintedTokenIdsCall__Inputs {
    return new SetUnmintedTokenIdsCall__Inputs(this);
  }

  get outputs(): SetUnmintedTokenIdsCall__Outputs {
    return new SetUnmintedTokenIdsCall__Outputs(this);
  }
}

export class SetUnmintedTokenIdsCall__Inputs {
  _call: SetUnmintedTokenIdsCall;

  constructor(call: SetUnmintedTokenIdsCall) {
    this._call = call;
  }

  get tokenIds(): Array<i32> {
    return this._call.inputValues[0].value.toI32Array();
  }
}

export class SetUnmintedTokenIdsCall__Outputs {
  _call: SetUnmintedTokenIdsCall;

  constructor(call: SetUnmintedTokenIdsCall) {
    this._call = call;
  }
}

export class SummonCall extends ethereum.Call {
  get inputs(): SummonCall__Inputs {
    return new SummonCall__Inputs(this);
  }

  get outputs(): SummonCall__Outputs {
    return new SummonCall__Outputs(this);
  }
}

export class SummonCall__Inputs {
  _call: SummonCall;

  constructor(call: SummonCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SummonCall__Outputs {
  _call: SummonCall;

  constructor(call: SummonCall) {
    this._call = call;
  }
}

export class SummonFirstExplorersCall extends ethereum.Call {
  get inputs(): SummonFirstExplorersCall__Inputs {
    return new SummonFirstExplorersCall__Inputs(this);
  }

  get outputs(): SummonFirstExplorersCall__Outputs {
    return new SummonFirstExplorersCall__Outputs(this);
  }
}

export class SummonFirstExplorersCall__Inputs {
  _call: SummonFirstExplorersCall;

  constructor(call: SummonFirstExplorersCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get merkleProof(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }
}

export class SummonFirstExplorersCall__Outputs {
  _call: SummonFirstExplorersCall;

  constructor(call: SummonFirstExplorersCall) {
    this._call = call;
  }
}

export class SummonWithLootsCall extends ethereum.Call {
  get inputs(): SummonWithLootsCall__Inputs {
    return new SummonWithLootsCall__Inputs(this);
  }

  get outputs(): SummonWithLootsCall__Outputs {
    return new SummonWithLootsCall__Outputs(this);
  }
}

export class SummonWithLootsCall__Inputs {
  _call: SummonWithLootsCall;

  constructor(call: SummonWithLootsCall) {
    this._call = call;
  }

  get lootIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class SummonWithLootsCall__Outputs {
  _call: SummonWithLootsCall;

  constructor(call: SummonWithLootsCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class TransitionToLootSaleCall extends ethereum.Call {
  get inputs(): TransitionToLootSaleCall__Inputs {
    return new TransitionToLootSaleCall__Inputs(this);
  }

  get outputs(): TransitionToLootSaleCall__Outputs {
    return new TransitionToLootSaleCall__Outputs(this);
  }
}

export class TransitionToLootSaleCall__Inputs {
  _call: TransitionToLootSaleCall;

  constructor(call: TransitionToLootSaleCall) {
    this._call = call;
  }
}

export class TransitionToLootSaleCall__Outputs {
  _call: TransitionToLootSaleCall;

  constructor(call: TransitionToLootSaleCall) {
    this._call = call;
  }
}

export class TransitionToPublicSaleCall extends ethereum.Call {
  get inputs(): TransitionToPublicSaleCall__Inputs {
    return new TransitionToPublicSaleCall__Inputs(this);
  }

  get outputs(): TransitionToPublicSaleCall__Outputs {
    return new TransitionToPublicSaleCall__Outputs(this);
  }
}

export class TransitionToPublicSaleCall__Inputs {
  _call: TransitionToPublicSaleCall;

  constructor(call: TransitionToPublicSaleCall) {
    this._call = call;
  }
}

export class TransitionToPublicSaleCall__Outputs {
  _call: TransitionToPublicSaleCall;

  constructor(call: TransitionToPublicSaleCall) {
    this._call = call;
  }
}

export class TransitionToWhitelistSaleCall extends ethereum.Call {
  get inputs(): TransitionToWhitelistSaleCall__Inputs {
    return new TransitionToWhitelistSaleCall__Inputs(this);
  }

  get outputs(): TransitionToWhitelistSaleCall__Outputs {
    return new TransitionToWhitelistSaleCall__Outputs(this);
  }
}

export class TransitionToWhitelistSaleCall__Inputs {
  _call: TransitionToWhitelistSaleCall;

  constructor(call: TransitionToWhitelistSaleCall) {
    this._call = call;
  }
}

export class TransitionToWhitelistSaleCall__Outputs {
  _call: TransitionToWhitelistSaleCall;

  constructor(call: TransitionToWhitelistSaleCall) {
    this._call = call;
  }
}

export class WithdrawAllCall extends ethereum.Call {
  get inputs(): WithdrawAllCall__Inputs {
    return new WithdrawAllCall__Inputs(this);
  }

  get outputs(): WithdrawAllCall__Outputs {
    return new WithdrawAllCall__Outputs(this);
  }
}

export class WithdrawAllCall__Inputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawAllCall__Outputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawAllTokensCall extends ethereum.Call {
  get inputs(): WithdrawAllTokensCall__Inputs {
    return new WithdrawAllTokensCall__Inputs(this);
  }

  get outputs(): WithdrawAllTokensCall__Outputs {
    return new WithdrawAllTokensCall__Outputs(this);
  }
}

export class WithdrawAllTokensCall__Inputs {
  _call: WithdrawAllTokensCall;

  constructor(call: WithdrawAllTokensCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawAllTokensCall__Outputs {
  _call: WithdrawAllTokensCall;

  constructor(call: WithdrawAllTokensCall) {
    this._call = call;
  }
}