export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addBalance' : IDL.Func([IDL.Nat], [IDL.Nat, IDL.Int], []),
    'getBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'withdrawAmount' : IDL.Func([IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
