
import bcryptjs from 'bcryptjs';
import { updateUser } from '../controllers/user.controller';
import User from '../models/user.model'; // Assuming the path is correct
// import SignUp from '../../pages/SignUp';
import "@testing-library/jest-dom"

// Mocking the errorHandler function
jest.mock('../utils/error.js', () => ({
  errorHandler: jest.fn((status, message) => ({ status, message }))
}));

// Mocking the bcryptjs module
jest.mock('bcryptjs');

// Mocking the User model functions
jest.mock('../models/user.model', () => ({
  findByIdAndUpdate: jest.fn(),
}));

describe('User Controller Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('updateUser function', async () => {
    const req = {
      user: { id: 'userId' },
      params: { userId: 'userId' },
      body: { password: 'newPassword' }
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    await updateUser(req, res, next);

    expect(bcryptjs.hashSync).toHaveBeenCalledWith('newPassword', 10);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
    expect(next).not.toHaveBeenCalled();
  });

  // Similarly, you can write tests for other controller functions...
});
