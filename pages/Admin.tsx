
import React, { useState } from 'react';
import { MOCK_MOVIES, GENRES } from '../constants';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'list' | 'add'>('list');
  const [movies, setMovies] = useState(MOCK_MOVIES);

  return (
    <div className="pt-24 px-4 md:px-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Admin Panel</h2>
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 rounded transition ${activeTab === 'list' ? 'bg-[#E50914]' : 'bg-gray-800'}`}
          >
            Manage Content
          </button>
          <button 
            onClick={() => setActiveTab('add')}
            className={`px-4 py-2 rounded transition ${activeTab === 'add' ? 'bg-[#E50914]' : 'bg-gray-800'}`}
          >
            Upload New
          </button>
        </div>
      </div>

      {activeTab === 'list' ? (
        <div className="bg-[#1c1c1c] rounded-lg overflow-hidden border border-gray-800">
          <table className="w-full text-left">
            <thead className="bg-black text-gray-400 text-xs uppercase font-bold border-b border-gray-800">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Release</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {movies.map((movie) => (
                <tr key={movie.id} className="hover:bg-black/40 transition">
                  <td className="px-6 py-4 font-bold">{movie.title}</td>
                  <td className="px-6 py-4 text-gray-400">{movie.releaseDate}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded capitalize ${movie.type === 'tv' ? 'bg-blue-900' : 'bg-orange-900'}`}>
                      {movie.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
                    {movie.rating}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-500 hover:text-blue-400 mr-4">Edit</button>
                    <button className="text-red-500 hover:text-red-400" onClick={() => setMovies(movies.filter(m => m.id !== movie.id))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-[#1c1c1c] p-8 rounded-lg border border-gray-800 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-6">Create New Title</h3>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Saved (Mock)'); setActiveTab('list'); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Title</label>
                <input type="text" className="w-full bg-[#333] border border-gray-700 rounded p-2" placeholder="e.g. Inception" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Release Date</label>
                <input type="date" className="w-full bg-[#333] border border-gray-700 rounded p-2" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Description</label>
              <textarea className="w-full bg-[#333] border border-gray-700 rounded p-2 h-32" placeholder="Movie synopsis..." required></textarea>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Type</label>
                <select className="w-full bg-[#333] border border-gray-700 rounded p-2">
                  <option value="movie">Movie</option>
                  <option value="tv">TV Show</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Rating</label>
                <input type="number" step="0.1" max="10" className="w-full bg-[#333] border border-gray-700 rounded p-2" placeholder="8.5" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Duration</label>
                <input type="text" className="w-full bg-[#333] border border-gray-700 rounded p-2" placeholder="2h 10m" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Genres</label>
              <div className="flex flex-wrap gap-2">
                {GENRES.map(g => (
                  <label key={g} className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded cursor-pointer">
                    <input type="checkbox" />
                    <span>{g}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 flex justify-end space-x-4">
              <button type="button" onClick={() => setActiveTab('list')} className="px-6 py-2 rounded text-gray-400 hover:text-white">Cancel</button>
              <button type="submit" className="px-10 py-2 rounded bg-[#E50914] text-white font-bold hover:bg-[#b20710]">Save Title</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admin;
