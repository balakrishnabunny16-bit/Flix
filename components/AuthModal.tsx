
import React, { useState } from 'react';
import { useApp } from '../store/AppContext';

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-black/80 p-10 rounded-md w-full max-w-md border border-gray-800 relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition text-2xl"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h2 className="text-3xl font-bold mb-8">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Email" 
              required
              className="w-full bg-[#333] rounded px-5 py-4 outline-none border-b-2 border-transparent focus:border-b-orange-500 transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              required
              className="w-full bg-[#333] rounded px-5 py-4 outline-none border-b-2 border-transparent focus:border-b-orange-500 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-[#E50914] text-white font-bold py-4 rounded hover:bg-[#b20710] transition text-lg"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between text-gray-400 text-sm">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 bg-gray-500" />
            <span>Remember me</span>
          </label>
          <p className="hover:underline cursor-pointer">Need help?</p>
        </div>

        <div className="mt-12">
          <p className="text-gray-500">
            {isLogin ? 'New to FlixStream?' : 'Already have an account?'} 
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-white hover:underline ml-2"
            >
              {isLogin ? 'Sign up now' : 'Sign in now'}
            </button>
          </p>
          <p className="text-gray-500 text-xs mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-blue-500 cursor-pointer">Learn more.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
