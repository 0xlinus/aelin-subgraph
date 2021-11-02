// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PoolCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PoolCreated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PoolCreated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PoolCreated", id.toString(), this);
  }

  static load(id: string): PoolCreated | null {
    return store.get("PoolCreated", id) as PoolCreated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get purchaseTokenCap(): BigInt {
    let value = this.get("purchaseTokenCap");
    return value.toBigInt();
  }

  set purchaseTokenCap(value: BigInt) {
    this.set("purchaseTokenCap", Value.fromBigInt(value));
  }

  get purchaseToken(): Bytes {
    let value = this.get("purchaseToken");
    return value.toBytes();
  }

  set purchaseToken(value: Bytes) {
    this.set("purchaseToken", Value.fromBytes(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get sponsorFee(): BigInt {
    let value = this.get("sponsorFee");
    return value.toBigInt();
  }

  set sponsorFee(value: BigInt) {
    this.set("sponsorFee", Value.fromBigInt(value));
  }

  get sponsor(): Bytes {
    let value = this.get("sponsor");
    return value.toBytes();
  }

  set sponsor(value: Bytes) {
    this.set("sponsor", Value.fromBytes(value));
  }

  get purchaseExpiry(): BigInt {
    let value = this.get("purchaseExpiry");
    return value.toBigInt();
  }

  set purchaseExpiry(value: BigInt) {
    this.set("purchaseExpiry", Value.fromBigInt(value));
  }
}

export class PurchasePoolToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PurchasePoolToken entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PurchasePoolToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PurchasePoolToken", id.toString(), this);
  }

  static load(id: string): PurchasePoolToken | null {
    return store.get("PurchasePoolToken", id) as PurchasePoolToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get purchaser(): Bytes {
    let value = this.get("purchaser");
    return value.toBytes();
  }

  set purchaser(value: Bytes) {
    this.set("purchaser", Value.fromBytes(value));
  }

  get poolAddress(): Bytes {
    let value = this.get("poolAddress");
    return value.toBytes();
  }

  set poolAddress(value: Bytes) {
    this.set("poolAddress", Value.fromBytes(value));
  }

  get purchaseTokenAmount(): BigInt {
    let value = this.get("purchaseTokenAmount");
    return value.toBigInt();
  }

  set purchaseTokenAmount(value: BigInt) {
    this.set("purchaseTokenAmount", Value.fromBigInt(value));
  }

  get poolTokenAmount(): BigInt {
    let value = this.get("poolTokenAmount");
    return value.toBigInt();
  }

  set poolTokenAmount(value: BigInt) {
    this.set("poolTokenAmount", Value.fromBigInt(value));
  }
}

export class WithdrawFromPool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save WithdrawFromPool entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawFromPool entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawFromPool", id.toString(), this);
  }

  static load(id: string): WithdrawFromPool | null {
    return store.get("WithdrawFromPool", id) as WithdrawFromPool | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get purchaser(): Bytes {
    let value = this.get("purchaser");
    return value.toBytes();
  }

  set purchaser(value: Bytes) {
    this.set("purchaser", Value.fromBytes(value));
  }

  get poolAddress(): Bytes {
    let value = this.get("poolAddress");
    return value.toBytes();
  }

  set poolAddress(value: Bytes) {
    this.set("poolAddress", Value.fromBytes(value));
  }

  get purchaseTokenAmount(): BigInt {
    let value = this.get("purchaseTokenAmount");
    return value.toBigInt();
  }

  set purchaseTokenAmount(value: BigInt) {
    this.set("purchaseTokenAmount", Value.fromBigInt(value));
  }

  get poolTokenAmount(): BigInt {
    let value = this.get("poolTokenAmount");
    return value.toBigInt();
  }

  set poolTokenAmount(value: BigInt) {
    this.set("poolTokenAmount", Value.fromBigInt(value));
  }
}

export class AcceptDeal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AcceptDeal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AcceptDeal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AcceptDeal", id.toString(), this);
  }

  static load(id: string): AcceptDeal | null {
    return store.get("AcceptDeal", id) as AcceptDeal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get purchaser(): Bytes {
    let value = this.get("purchaser");
    return value.toBytes();
  }

  set purchaser(value: Bytes) {
    this.set("purchaser", Value.fromBytes(value));
  }

  get poolAddress(): Bytes {
    let value = this.get("poolAddress");
    return value.toBytes();
  }

  set poolAddress(value: Bytes) {
    this.set("poolAddress", Value.fromBytes(value));
  }

  get dealAddress(): Bytes {
    let value = this.get("dealAddress");
    return value.toBytes();
  }

  set dealAddress(value: Bytes) {
    this.set("dealAddress", Value.fromBytes(value));
  }

  get sponsorFee(): BigInt {
    let value = this.get("sponsorFee");
    return value.toBigInt();
  }

  set sponsorFee(value: BigInt) {
    this.set("sponsorFee", Value.fromBigInt(value));
  }

  get aelinFee(): BigInt {
    let value = this.get("aelinFee");
    return value.toBigInt();
  }

  set aelinFee(value: BigInt) {
    this.set("aelinFee", Value.fromBigInt(value));
  }

  get poolTokenAmount(): BigInt {
    let value = this.get("poolTokenAmount");
    return value.toBigInt();
  }

  set poolTokenAmount(value: BigInt) {
    this.set("poolTokenAmount", Value.fromBigInt(value));
  }

  get underlyingToHolderAmt(): BigInt {
    let value = this.get("underlyingToHolderAmt");
    return value.toBigInt();
  }

  set underlyingToHolderAmt(value: BigInt) {
    this.set("underlyingToHolderAmt", Value.fromBigInt(value));
  }
}

export class DealCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DealCreated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DealCreated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DealCreated", id.toString(), this);
  }

  static load(id: string): DealCreated | null {
    return store.get("DealCreated", id) as DealCreated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get poolAddress(): Bytes {
    let value = this.get("poolAddress");
    return value.toBytes();
  }

  set poolAddress(value: Bytes) {
    this.set("poolAddress", Value.fromBytes(value));
  }

  get sponsor(): Bytes {
    let value = this.get("sponsor");
    return value.toBytes();
  }

  set sponsor(value: Bytes) {
    this.set("sponsor", Value.fromBytes(value));
  }
}

export class DealDetails extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DealDetails entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DealDetails entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DealDetails", id.toString(), this);
  }

  static load(id: string): DealDetails | null {
    return store.get("DealDetails", id) as DealDetails | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get underlyingDealToken(): Bytes {
    let value = this.get("underlyingDealToken");
    return value.toBytes();
  }

  set underlyingDealToken(value: Bytes) {
    this.set("underlyingDealToken", Value.fromBytes(value));
  }

  get purchaseTokenTotalForDeal(): BigInt {
    let value = this.get("purchaseTokenTotalForDeal");
    return value.toBigInt();
  }

  set purchaseTokenTotalForDeal(value: BigInt) {
    this.set("purchaseTokenTotalForDeal", Value.fromBigInt(value));
  }

  get underlyingDealTokenTotal(): BigInt {
    let value = this.get("underlyingDealTokenTotal");
    return value.toBigInt();
  }

  set underlyingDealTokenTotal(value: BigInt) {
    this.set("underlyingDealTokenTotal", Value.fromBigInt(value));
  }

  get vestingPeriod(): BigInt {
    let value = this.get("vestingPeriod");
    return value.toBigInt();
  }

  set vestingPeriod(value: BigInt) {
    this.set("vestingPeriod", Value.fromBigInt(value));
  }

  get vestingCliff(): BigInt {
    let value = this.get("vestingCliff");
    return value.toBigInt();
  }

  set vestingCliff(value: BigInt) {
    this.set("vestingCliff", Value.fromBigInt(value));
  }

  get proRataRedemptionPeriod(): BigInt {
    let value = this.get("proRataRedemptionPeriod");
    return value.toBigInt();
  }

  set proRataRedemptionPeriod(value: BigInt) {
    this.set("proRataRedemptionPeriod", Value.fromBigInt(value));
  }

  get openRedemptionPeriod(): BigInt {
    let value = this.get("openRedemptionPeriod");
    return value.toBigInt();
  }

  set openRedemptionPeriod(value: BigInt) {
    this.set("openRedemptionPeriod", Value.fromBigInt(value));
  }

  get holder(): Bytes {
    let value = this.get("holder");
    return value.toBytes();
  }

  set holder(value: Bytes) {
    this.set("holder", Value.fromBytes(value));
  }
}

export class SetSponsor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SetSponsor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SetSponsor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SetSponsor", id.toString(), this);
  }

  static load(id: string): SetSponsor | null {
    return store.get("SetSponsor", id) as SetSponsor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sponsor(): Bytes {
    let value = this.get("sponsor");
    return value.toBytes();
  }

  set sponsor(value: Bytes) {
    this.set("sponsor", Value.fromBytes(value));
  }
}

export class SetHolder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SetHolder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SetHolder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SetHolder", id.toString(), this);
  }

  static load(id: string): SetHolder | null {
    return store.get("SetHolder", id) as SetHolder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get holder(): Bytes {
    let value = this.get("holder");
    return value.toBytes();
  }

  set holder(value: Bytes) {
    this.set("holder", Value.fromBytes(value));
  }
}

export class DealFullyFunded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DealFullyFunded entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DealFullyFunded entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DealFullyFunded", id.toString(), this);
  }

  static load(id: string): DealFullyFunded | null {
    return store.get("DealFullyFunded", id) as DealFullyFunded | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolAddress(): Bytes {
    let value = this.get("poolAddress");
    return value.toBytes();
  }

  set poolAddress(value: Bytes) {
    this.set("poolAddress", Value.fromBytes(value));
  }

  get proRataRedemptionStart(): BigInt {
    let value = this.get("proRataRedemptionStart");
    return value.toBigInt();
  }

  set proRataRedemptionStart(value: BigInt) {
    this.set("proRataRedemptionStart", Value.fromBigInt(value));
  }

  get openRedemptionStart(): BigInt {
    let value = this.get("openRedemptionStart");
    return value.toBigInt();
  }

  set openRedemptionStart(value: BigInt) {
    this.set("openRedemptionStart", Value.fromBigInt(value));
  }

  get proRataRedemptionExpiry(): BigInt {
    let value = this.get("proRataRedemptionExpiry");
    return value.toBigInt();
  }

  set proRataRedemptionExpiry(value: BigInt) {
    this.set("proRataRedemptionExpiry", Value.fromBigInt(value));
  }

  get openRedemptionExpiry(): BigInt {
    let value = this.get("openRedemptionExpiry");
    return value.toBigInt();
  }

  set openRedemptionExpiry(value: BigInt) {
    this.set("openRedemptionExpiry", Value.fromBigInt(value));
  }
}

export class DepositDealTokens extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DepositDealTokens entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DepositDealTokens entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DepositDealTokens", id.toString(), this);
  }

  static load(id: string): DepositDealTokens | null {
    return store.get("DepositDealTokens", id) as DepositDealTokens | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get underlyingDealTokenAddress(): Bytes {
    let value = this.get("underlyingDealTokenAddress");
    return value.toBytes();
  }

  set underlyingDealTokenAddress(value: Bytes) {
    this.set("underlyingDealTokenAddress", Value.fromBytes(value));
  }

  get depositor(): Bytes {
    let value = this.get("depositor");
    return value.toBytes();
  }

  set depositor(value: Bytes) {
    this.set("depositor", Value.fromBytes(value));
  }

  get dealContract(): Bytes {
    let value = this.get("dealContract");
    return value.toBytes();
  }

  set dealContract(value: Bytes) {
    this.set("dealContract", Value.fromBytes(value));
  }

  get underlyingDealTokenAmount(): BigInt {
    let value = this.get("underlyingDealTokenAmount");
    return value.toBigInt();
  }

  set underlyingDealTokenAmount(value: BigInt) {
    this.set("underlyingDealTokenAmount", Value.fromBigInt(value));
  }
}

export class WithdrawUnderlyingDealTokens extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save WithdrawUnderlyingDealTokens entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save WithdrawUnderlyingDealTokens entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("WithdrawUnderlyingDealTokens", id.toString(), this);
  }

  static load(id: string): WithdrawUnderlyingDealTokens | null {
    return store.get(
      "WithdrawUnderlyingDealTokens",
      id
    ) as WithdrawUnderlyingDealTokens | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get underlyingDealTokenAddress(): Bytes {
    let value = this.get("underlyingDealTokenAddress");
    return value.toBytes();
  }

  set underlyingDealTokenAddress(value: Bytes) {
    this.set("underlyingDealTokenAddress", Value.fromBytes(value));
  }

  get depositor(): Bytes {
    let value = this.get("depositor");
    return value.toBytes();
  }

  set depositor(value: Bytes) {
    this.set("depositor", Value.fromBytes(value));
  }

  get dealContract(): Bytes {
    let value = this.get("dealContract");
    return value.toBytes();
  }

  set dealContract(value: Bytes) {
    this.set("dealContract", Value.fromBytes(value));
  }

  get underlyingDealTokenAmount(): BigInt {
    let value = this.get("underlyingDealTokenAmount");
    return value.toBigInt();
  }

  set underlyingDealTokenAmount(value: BigInt) {
    this.set("underlyingDealTokenAmount", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfer", id.toString(), this);
  }

  static load(id: string): Transfer | null {
    return store.get("Transfer", id) as Transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class ClaimedUnderlyingDealTokens extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save ClaimedUnderlyingDealTokens entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ClaimedUnderlyingDealTokens entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ClaimedUnderlyingDealTokens", id.toString(), this);
  }

  static load(id: string): ClaimedUnderlyingDealTokens | null {
    return store.get(
      "ClaimedUnderlyingDealTokens",
      id
    ) as ClaimedUnderlyingDealTokens | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get underlyingDealTokenAddress(): Bytes {
    let value = this.get("underlyingDealTokenAddress");
    return value.toBytes();
  }

  set underlyingDealTokenAddress(value: Bytes) {
    this.set("underlyingDealTokenAddress", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get underlyingDealTokensClaimed(): BigInt {
    let value = this.get("underlyingDealTokensClaimed");
    return value.toBigInt();
  }

  set underlyingDealTokensClaimed(value: BigInt) {
    this.set("underlyingDealTokensClaimed", Value.fromBigInt(value));
  }
}

export class MintDealTokens extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MintDealTokens entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MintDealTokens entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MintDealTokens", id.toString(), this);
  }

  static load(id: string): MintDealTokens | null {
    return store.get("MintDealTokens", id) as MintDealTokens | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dealContract(): Bytes {
    let value = this.get("dealContract");
    return value.toBytes();
  }

  set dealContract(value: Bytes) {
    this.set("dealContract", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get dealTokenAmount(): BigInt {
    let value = this.get("dealTokenAmount");
    return value.toBigInt();
  }

  set dealTokenAmount(value: BigInt) {
    this.set("dealTokenAmount", Value.fromBigInt(value));
  }
}
