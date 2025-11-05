import { useState } from 'react';

const Book = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm w-80 transform hover:-translate-y-2">
      {/* 
        To ensure all book cards and their images appear the same size,
        set a fixed image wrapper height and width, and ensure the image
        is fully covered inside, cropping if necessary. 
      */}
      <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={props.img} 
            alt={props.title} 
            className="rounded-lg shadow-md object-cover w-full h-full"
            style={{ maxWidth: "100%", maxHeight: "100%", aspectRatio: "3/4" }}
          />
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {props.title}
        </h4>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-indigo-600">
            ₹{props.price}
          </span>
        </div>
        
        <div className="flex items-center justify-center gap-4 bg-gray-50 rounded-lg p-3">
          <button 
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={count === 0}
          >
            -
          </button>
          <span className="text-2xl font-bold text-gray-800 min-w-[3rem] text-center">
            {count}
          </span>
          <button 
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book
