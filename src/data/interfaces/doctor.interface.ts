import { IRoom } from './room.interface'
import { IUser } from './user.interface'

export interface IDoctor extends IUser {
  status: string
  room: string | IRoom
  specializations: string[]
  joiningDate: Date
}
