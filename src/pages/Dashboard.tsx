import React from 'react';
import { Calendar, Users, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: React.ElementType }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Events" value="124" icon={Calendar} />
        <StatCard title="Total Attendees" value="1,234" icon={Users} />
        <StatCard title="Monthly Growth" value="+12.5%" icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          {/* Add upcoming events list component here */}
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          {/* Add activity feed component here */}
        </div>
      </div>
    </div>
  );
}