import {Transfer,} from "../generated/USDC/USDC"
import {TokenBalance, TokenBalanceShot} from "../generated/schema";

let USDC = "0x176211869ca2b568f2a7d4ee941e073a821ee1ff"
let matches = [
    "0xe0d1977a23cb90252b9997ab07b03136e214e0c6", // stakingUSDC
    "0x3a85b87e81cd99d4a6670f95a4f0dedaac207da0" // exchanger
]
let prefix = "usdc_";

export function handleTransfer(event: Transfer): void {

    let from = event.params.from.toHex();
    let to = event.params.to.toHex();

    let user_address = "";
    let isIn = true;
    if (matches.includes(to)) {
        user_address = from;
    } else if (matches.includes(from)) {
        user_address = to;
        isIn = false;
    } else {
        return;
    }

    let id = prefix + user_address;
    let tokenBalance = TokenBalance.load(id);
    if (!tokenBalance) {
        tokenBalance = new TokenBalance(id);
        tokenBalance.user_address = user_address;
        tokenBalance.token_address = USDC;
        tokenBalance.token_balance = event.params.value;
    } else {
        if (isIn)
            tokenBalance.token_balance = tokenBalance.token_balance.plus(event.params.value);
        else
            tokenBalance.token_balance = tokenBalance.token_balance.minus(event.params.value);
    }
    tokenBalance.save();

    let tokenBalanceShot = new TokenBalanceShot(event.transaction.hash.toHex());
    tokenBalanceShot.user_address = user_address;
    tokenBalanceShot.token_address = USDC;
    tokenBalanceShot.token_balance = tokenBalance.token_balance;
    tokenBalanceShot.block_number = event.block.number;
    tokenBalanceShot.save();
}
