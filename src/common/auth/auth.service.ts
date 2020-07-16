import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import { IUser } from '../../data/interfaces/user.interface'
import { UsersService } from '../../modules/administrator/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService
  ) {}

  async validateUser(username: string, pass: string): Promise<IUser | null> {
    const user = await this.usersService.fetchByUsername(username)

    if (user && user.password === pass) {
      user.password = undefined

      return user
    }

    return null
  }

  async signIn(user: IUser): Promise<{ access_token }> {
    return {
      access_token: await this.jwtService.signAsync({
        username: user.username,
        sub: user._id
      })
    }
  }

  async profile(user: { userId }): Promise<{ user }> {
    return { user: await this.usersService.fetch(user.userId) }
  }
}
