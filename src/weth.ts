import {Deposit as DepositEvent, Withdrawal as WithdrawalEvent} from "../generated/WETH/WETH"
import {TokenBalance} from "../generated/schema"

let WETH = "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f";
let stakingETH = "0x3e636c4dc9bd55831055c3400160e1e8a25dad8a";

export function handleDeposit(event: DepositEvent): void {
    let dst = event.params.dst.toHex();
    if (dst != stakingETH)
        return;

    let user_address = event.transaction.from.toHex()
    let id = "weth_" + user_address;
    let tokenBalance = TokenBalance.load(id);
    if (!tokenBalance) {
        tokenBalance = new TokenBalance(id);
        tokenBalance.user_address = user_address;
        tokenBalance.token_address = WETH;
        tokenBalance.token_symbol = "WETH";
        tokenBalance.token_balance = event.params.wad;
    } else {
        tokenBalance.token_balance = tokenBalance.token_balance.plus(event.params.wad);
    }
    tokenBalance.save();
}

export function handleWithdrawal(event: WithdrawalEvent): void {
    let src = event.params.src.toHex();
    if (src != stakingETH)
        return;

    let id = "WETH-" + event.transaction.from.toHex();
    let tokenBalance = TokenBalance.load(id);
    if (!tokenBalance)
        return;
    tokenBalance.token_balance = tokenBalance.token_balance.minus(event.params.wad);
    tokenBalance.save();
}
