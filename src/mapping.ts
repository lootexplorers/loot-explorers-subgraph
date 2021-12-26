import { store } from "@graphprotocol/graph-ts"
import {
  LootExplorers,
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer
} from "../generated/LootExplorers/LootExplorers"
import { Explorer, Owner } from "../generated/schema"

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

// Known burn addresses
const BURN_ADDRESSES = [ZERO_ADDRESS]

export function handleApproval(event: Approval): void {
  // // Entities can be loaded from the store using a string ID; this ID
  // // needs to be unique across all entities of the same type
  // let entity = ExampleEntity.load(event.transaction.from.toHex())

  // // Entities only exist after they have been saved to the store;
  // // `null` checks allow to create entities on demand
  // if (!entity) {
  //   entity = new ExampleEntity(event.transaction.from.toHex())

  //   // Entity fields can be set using simple assignments
  //   entity.count = BigInt.fromI32(0)
  // }

  // // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // // Entity fields can be set based on event parameters
  // entity.owner = event.params.owner
  // entity.approved = event.params.approved

  // // Entities can be written to the store with `.save()`
  // entity.save()

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAX_PER_MINT(...)
  // - contract.MAX_PER_WALLET_OG_WHITELIST(...)
  // - contract.MAX_SUPPLY(...)
  // - contract.PRICE(...)
  // - contract.balanceOf(...)
  // - contract.communityWhitelistMerkleRoot(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.lootAddress(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.saleIsActive(...)
  // - contract.saleStage(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.totalSupply(...)
}

export function handleApprovalForAll(event: ApprovalForAll): void { }

export function handleOwnershipTransferred(event: OwnershipTransferred): void { }

export function handleTransfer(event: Transfer): void {
  let id = event.params.tokenId.toString()
  let contractId = event.address.toHex()
  let from = event.params.from.toHex()
  let to = event.params.to.toHex()
  const contract = LootExplorers.bind(event.address)

  if (BURN_ADDRESSES.includes(to)) {
    // If sending to burn address, remove explorer from store
    store.remove("Explorer", id)
  } else {
    // Set new owner and explorer
    // Note: If a handler doesn't require existing field values, it is faster
    // _not_ to load the entity from the store. Instead, create it fresh with
    // `new Entity(...)`, set the fields that should be updated and save the
    // entity back to the store. Fields that were not set or unset remain
    // unchanged, allowing for partial updates to be applied.
    let newOwner = new Owner(to)
    let explorer = new Explorer(id)

    explorer.owner = newOwner.id
    explorer.save()
    newOwner.save()
  }
}
