require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User');
const connectDB = require('./src/config/database');

const seedUsers = [
  {
    fullName: 'Admin User',
    email: 'admin@example.com',
    password: 'Admin@123',
    role: 'admin',
    status: 'active',
  },
  {
    fullName: 'John Doe',
    email: 'john@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'Jane Smith',
    email: 'jane@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'Bob Wilson',
    email: 'bob@example.com',
    password: 'User@123',
    role: 'user',
    status: 'inactive',
  },
  {
    fullName: 'Alice Brown',
    email: 'alice@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'Charlie Davis',
    email: 'charlie@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'Diana Miller',
    email: 'diana@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'Edward Garcia',
    email: 'edward@example.com',
    password: 'User@123',
    role: 'user',
    status: 'inactive',
  },
  {
    fullName: 'Fiona Martinez',
    email: 'fiona@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'George Anderson',
    email: 'george@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'Hannah Thomas',
    email: 'hannah@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
  {
    fullName: 'Ian Jackson',
    email: 'ian@example.com',
    password: 'User@123',
    role: 'user',
    status: 'active',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    
    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Create new users
    for (const userData of seedUsers) {
      const user = await User.create(userData);
      console.log(`Created user: ${user.email}`);
    }

    console.log('\n✅ Database seeded successfully!');
    console.log('\nTest Accounts:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Admin: admin@example.com / Admin@123');
    console.log('User:  john@example.com / User@123');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
