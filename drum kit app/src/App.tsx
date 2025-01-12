import React from 'react';
import { Drum, Headphones } from 'lucide-react';
import DrumKit from './components/DrumKit';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="p-6 flex items-center justify-center gap-4">
        <Drum className="w-8 h-8" />
        <h1 className="text-3xl font-bold">Interactive Drum Kit</h1>
        <Headphones className="w-8 h-8" />
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <p className="text-gray-300">Click on any drum component to play its sound</p>
        </div>
        <DrumKit />
      </main>
    </div>
  );
}

export default App;