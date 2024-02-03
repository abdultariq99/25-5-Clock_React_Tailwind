import './App.css';

function Clock() {
  return (
    <div className='bg-red-500 w-screen h-screen flex items-center justify-center font-serif text-gray-50'>
      <div className='w-96 h-96 bg-blue-300'>
        <div>
          <h2 className='text-5xl text-gray-50 font-semibold antialiased text-center'>25+5 Clock</h2>
          <div>
            <div>
              <h3>Break Length</h3>
              5
            </div>
            <div>
              <h3>Session Length</h3>
              25
              </div>
          </div>
          <div>
            <h4>Session</h4>
            <h3>25:00</h3>
            <div>Pause Reset</div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Clock;
