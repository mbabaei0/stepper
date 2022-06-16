export interface UserForm{
  validAmount: number,
  validDate: Date,
  status: UserStatus,
  sourceOfFound: string
}


export enum UserStatus {
  Active = '1',
  Pending = '2',
  Finished = '3',
  Error = '4'
}
