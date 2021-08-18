import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // create a fake copy of the users service
    const users: User[] = [];
    fakeUsersService = {
      find: (email: string) => {
        const filteredUsers = users.filter((user) => user.email === email);
        return Promise.resolve(filteredUsers);
      },
      create: (email: string, password: string) => {
        const user = {
          id: Math.floor(Math.random() * 9999),
          email,
          password,
        } as User;
        users.push(user);
        return Promise.resolve(user);
      },
    };

    // make temporary DI container
    const module = await Test.createTestingModule({
      providers: [
        // List of things we want to register in our testing DI container
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('crates a new user with a salted and hashed password', async () => {
    const user = await service.signup('hoge@test.com', '12345');
    expect(user.password).not.toEqual('12345');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an error if user signs up with email that is in use', async () => {
    await service.signup('hoge@test.com', '12345');
    await expect(service.signup('hoge@test.com', '12345')).rejects.toThrow(
      'email in use',
    );
  });

  it('throws if signin is called with an unused email', async () => {
    await service.signup('hoge@test.com', '12345');
    await expect(service.signin('test@test.com', '12345')).rejects.toThrow(
      'user not found',
    );
  });

  it('thorows if an invalid password is provided', async () => {
    await service.signup('hoge@test.com', '12345');
    await expect(service.signin('hoge@test.com', 'password')).rejects.toThrow(
      'Bad password',
    );
  });

  it('returns a user if correct password is provided', async () => {
    await service.signup('hoge@test.com', '12345');
    const user = await service.signin('hoge@test.com', '12345');
    expect(user).toBeDefined();
  });
});
