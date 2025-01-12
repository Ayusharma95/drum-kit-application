import React from 'react';
import DrumPad from './DrumPad';

const drumParts = [
  {
    id: 'kick',
    name: 'Kick Drum',
    soundUrl: 'https://cdn.jsdelivr.net/gh/wesbos/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav',
    color: 'bg-red-600',
    position: 'col-span-2 row-span-2'
  },
  {
    id: 'snare',
    name: 'Snare',
    soundUrl: 'https://cdn.jsdelivr.net/gh/wesbos/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav',
    color: 'bg-blue-600',
    position: 'col-span-1 row-span-1'
  },
  {
    id: 'hihat',
    name: 'Hi-Hat',
    soundUrl: 'https://cdn.jsdelivr.net/gh/wesbos/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav',
    color: 'bg-yellow-600',
    position: 'col-span-1 row-span-1'
  },
  {
    id: 'tom1',
    name: 'Tom 1',
    soundUrl: 'https://cdn.jsdelivr.net/gh/wesbos/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav',
    color: 'bg-green-600',
    position: 'col-span-1 row-span-1'
  },
  {
    id: 'tom2',
    name: 'Tom 2',
    soundUrl: 'https://cdn.jsdelivr.net/gh/wesbos/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav',
    color: 'bg-purple-600',
    position: 'col-span-1 row-span-1'
  },
  {
    id: 'crash',
    name: 'Crash',
    soundUrl: 'https://cdn.jsdelivr.net/gh/wesbos/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav',
    color: 'bg-orange-600',
    position: 'col-span-1 row-span-1'
  },
  {
    id: 'ride',
    name: 'Ride',
    soundUrl: 'https://cdn.jsdelivr.net/gh/wesbos/JavaScript30/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav',
    color: 'bg-pink-600',
    position: 'col-span-1 row-span-1'
  }
];

const DrumKit: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto">
      {drumParts.map((drum) => (
        <DrumPad
          key={drum.id}
          {...drum}
        />
      ))}
    </div>
  );
};

export default DrumKit;