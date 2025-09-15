'use client';
import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-600">Register</h1>
        {/* ฟอร์มสมัครสมาชิก */}
        <form>
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 w-full border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 p-2 w-full border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 w-full border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;