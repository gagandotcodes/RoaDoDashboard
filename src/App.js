import React from "react";

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-14 bg-white p-2 shadow-md">
        <div className="flex items-center mb-8">
        <img src="https://cdn-icons-png.flaticon.com/128/6958/6958459.png" alt="Logo" className="h-10" />
        </div>
        <nav>
          <ul>
            <li className="mb-6">
              <a href='/' className="flex items-center text-gray-700 hover:text-gray-900">
              <img src="https://cdn-icons-png.flaticon.com/128/664/664468.png" alt="Logo" className="h-8" />
              </a>
            </li>
            <li className="mb-6">
              <a href='/'  className="flex items-center text-gray-700 hover:text-gray-900">
              <img src="https://cdn-icons-png.flaticon.com/128/14639/14639042.png" alt="Logo" className="h-8" />
              </a>
            </li>
            <li className="mb-6">
              <a href='/'  className="flex items-center text-gray-700 hover:text-gray-900">
              <img src="https://cdn-icons-png.flaticon.com/128/6011/6011983.png" alt="Logo" className="h-8" />
              </a>
            </li>
            <li className="mb-6">
              <a href='/'  className="flex items-center text-gray-700 hover:text-gray-900">
              <img src="https://cdn-icons-png.flaticon.com/128/3045/3045489.png" alt="Logo" className="h-8" />
              </a>
            </li>
            <li className="mb-6">
              <a href='/'  className="flex items-center text-gray-700 hover:text-gray-900">
              <img src="https://cdn-icons-png.flaticon.com/128/869/869134.png" alt="Logo" className="h-8" />
              </a>
            </li>
            <li className="mb-6">
              <a href='/'  className="flex items-center text-gray-700 hover:text-gray-900">
              <img src="https://cdn-icons-png.flaticon.com/128/709/709790.png" alt="Logo" className="h-8" />
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-1 p-6">
        {/* Dashboard Header */}
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="mr-4 rounded border border-gray-300 p-2"
            />
            <div className="flex items-center space-x-4">
              <span>🔔</span>
              <span>👤</span>
            </div>
          </div>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-semibold mb-2">Orders</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span>Total</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Upcoming</span>
                <span>50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ongoing</span>
                <span>100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Completed</span>
                <span>50</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-semibold mb-2">Trips</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span>Total</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Upcoming</span>
                <span>50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ongoing</span>
                <span>100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Completed</span>
                <span>50</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span>Total</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Upcoming</span>
                <span>50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ongoing</span>
                <span>100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Completed</span>
                <span>50</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white shadow-md rounded">
            <h2 className="text-lg font-semibold mb-2">Expenses</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span>Total</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Freight Charge</span>
                <span>50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Driver Charge</span>
                <span>100</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Other Charges</span>
                <span>50</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6 p-4 bg-white shadow-md rounded">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="flex justify-between">
            <button className="flex-1 p-2 mx-1 bg-gray-200 rounded">
              Create Indents
            </button>
            <button className="flex-1 p-2 mx-1 bg-gray-200 rounded">
              Add Vehicle
            </button>
            <button className="flex-1 p-2 mx-1 bg-gray-200 rounded">
              Add Trailer
            </button>
            <button className="flex-1 p-2 mx-1 bg-gray-200 rounded">
              Add Driver
            </button>
            <button className="flex-1 p-2 mx-1 bg-gray-200 rounded">
              Add Indents
            </button>
          </div>
        </div>

        {/* High Priority Alerts */}
        <div className="mb-6 p-4 bg-white shadow-md rounded">
          <h2 className="text-lg font-semibold mb-4">
            High Priority Alerts (14)
          </h2>
          <div className="mb-4">
            <div className="p-4 bg-gray-100 rounded flex justify-between">
              <div>
                <h3 className="font-semibold">Driver Raised Concern</h3>
                <p>Load No: 12454, Bill To: RoaDo demo Bangalore</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 bg-gray-300 rounded">Ignore</button>
                <button className="p-2 bg-blue-500 text-white rounded">
                  Resolve
                </button>
              </div>
            </div>
          </div>
       
          <div>
            <div className="p-4 bg-gray-100 rounded flex justify-between">
              <div>
                <h3 className="font-semibold">Reefer Temp. out of range</h3>
                <p>Load No: 12454, Bill To: RoaDo demo Bangalore</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 bg-gray-300 rounded">Ignore</button>
                <button className="p-2 bg-blue-500 text-white rounded">
                  Resolve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* highlights */}
      <div className="bg-white p-4 shadow-md rounded-md w-80">
      <h2 className="text-lg font-semibold">Today's Highlights (14)</h2>
      <p className="text-sm text-gray-500">18 May 2024</p>
      <div className="mt-4">
        <div className="flex justify-between border-b pb-2">
          <div>
            <span className="block text-sm">Income</span>
            <span className="block text-green-600 font-semibold">100000 CAD</span>
            <span className="block text-xs text-gray-500">2 payments received</span>
          </div>
          <div>
            <span className="block text-sm">Expenses</span>
            <span className="block text-red-600 font-semibold">50000 CAD</span>
            <span className="block text-xs text-gray-500">5 payments paid</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold flex justify-between">
          Completed Activities (14) <a href="#" className="text-blue-500 text-sm">View All</a>
        </h3>
        <ul className="mt-2">
          <li className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Gagandeep Singh</span> (Dispatch team) has created Load No. I-AAA-1325
          </li>
          <li className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Arshdeep</span> (Driver) Picked Up goods at Location_Name for Load No. I-AAA-1325
          </li>
          <li className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Gagandeep Singh</span> (Dispatch team) has created Load No. I-AAA-1325
          </li>
          <li className="text-sm text-gray-700 mb-2">
            Load No. I-AAA-1325 will start added by <span className="font-semibold">Gurpreet Singh</span>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold flex justify-between">
          Scheduled Activities (14) <a href="#" className="text-blue-500 text-sm">View All</a>
        </h3>
        <ul className="mt-2">
          <li className="text-sm text-gray-700 mb-2">
            Load No. I-AAA-1325 will be delivered by <span className="font-semibold">Arshdeep (Driver)</span>
          </li>
          <li className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Arshdeep (Driver)</span> will Pick Up goods at Location_Name for Load No. I-AAA-1325
          </li>
          <li className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Gagandeep Singh</span> (Dispatch team) has created Load No. I-AAA-1325
          </li>
          <li className="text-sm text-gray-700 mb-2">
            Load No. I-AAA-1325 will start added by <span className="font-semibold">Gagandeep Singh</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default App;
