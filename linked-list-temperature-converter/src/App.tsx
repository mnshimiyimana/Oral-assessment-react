// src/App.tsx

import React from 'react';
import TemperatureConverter from './tasks/TemperatureConverter';
import { LinkedList } from './tasks/LinkedList';

function App() {
    const list = new LinkedList<number>();
    list.add(10);
    list.add(20);
    list.add(30);
    
    console.log("Initial Linked List:");
    list.display();

    console.log("Finding 20:", list.find(20));
    
    console.log("Removing 20:", list.remove(20)); 
    
    console.log("Linked List after removal:");
    list.display();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <TemperatureConverter />
                <h2 className="mt-6 text-lg font-semibold text-center">Check console for Linked List operations</h2>
            </div>
        </div>
    );
}

export default App;