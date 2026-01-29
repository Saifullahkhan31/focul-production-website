import React from 'react';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="app-wrapper bg-black">
      {/* Later, you can wrap <Home /> in a <PageTransition> wrapper */}
      <Home />
    </div>
  );
}

export default App;