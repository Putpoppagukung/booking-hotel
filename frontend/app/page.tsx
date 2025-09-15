'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Mock data สำหรับที่พักยอดนิยม
const popularStays = [
  { id: 1, name: 'Cozy Villa Bangkok', price: 600, rating: 4.5, image: 'https://via.placeholder.com/300x200' },
  { id: 2, name: 'Sea View Resort Phuket', price: 540, rating: 4.8, image: 'https://via.placeholder.com/300x200' },
  { id: 3, name: 'Mountain Retreat Chiang Mai', price: 590, rating: 4.2, image: 'https://via.placeholder.com/300x200' },
];

const Home: React.FC = () => {
  // State สำหรับการค้นหา
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  // ฟังก์ชันจัดการการค้นหา (จำลองการส่งข้อมูล)
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', { destination, checkIn, checkOut, guests });
    // สามารถเชื่อมต่อ API หรือเปลี่ยนเส้นทางไปหนผลลัพธ์ได้
  };

  return (
    <div className="min-h-screen bg-white-100">
      <Head>
        <title>Booking Hotel - Find Your Stay</title>
        <meta name="description" content="Book hotels and accommodations easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Booking Hotel</h1>
          <nav>
            <Link href="/profile" className="mr-4 hover:underline">Profile</Link>
            <Link href="/login" className="hover:underline text-yellow-400 font-semibold">login</Link>
            
          </nav>
        </div>
      </header>

      {/* Search Section */}
      <section className="container mx-auto p-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Find Your Perfect Stay</h2>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-black-700">Destination</label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="e.g., Bangkok, Phuket"
                required
              />
            </div>
            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium text-black-700">Check-in</label>
              <input
                type="date"
                id="checkIn"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="checkOut" className="block text-sm font-medium text-black-700">Check-out</label>
              <input
                type="date"
                id="checkOut"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-black-700">Guests</label>
              <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                min="1"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="md:col-span-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white p-2 rounded-md mt-4 hover:bg-blue-700"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Stays Section */}
      <section className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Popular Stays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularStays.map((stay) => (
            <div key={stay.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={stay.image} alt={stay.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{stay.name}</h3>
                <p className="text-gray-600">฿{stay.price} / night</p>
                <p className="text-yellow-500">{'★'.repeat(Math.floor(stay.rating))} ({stay.rating})</p>
                <Link
                  href={`/stay/${stay.id}`}
                  className="mt-2 inline-block bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Booking App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;