import React from 'react';
import TodoProvider from 'contexts/TodoContext';
import HomePage from 'pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <HomePage />
      </TodoProvider>
    </div>
  );
}

export default App;
