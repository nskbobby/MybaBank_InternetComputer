import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'addBalance' : (arg_0: bigint) => Promise<[bigint, bigint]>,
  'getBalance' : () => Promise<bigint>,
  'withdrawAmount' : (arg_0: bigint) => Promise<string>,
}
