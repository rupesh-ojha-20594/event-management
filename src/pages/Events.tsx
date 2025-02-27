import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Calendar, List, Grid } from 'lucide-react';
import { Button } from '../components/ui/Button';

const EventList = React.lazy(() => import('../components/events/EventList'));
const EventGrid = React.lazy(() => import('../components/events/EventGrid'));
const EventCalendar = React.lazy(() => import('../components/events/EventCalendar'));

export default function Events() {
  const [view, setView] = React.useState<'list' | 'grid' | 'calendar'>('list');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl font-bold">Events</h2>
        <div className="flex items-center gap-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-1">
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setView('list')}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={view === 'grid' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setView('grid')}
              aria-label="Grid view"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === 'calendar' ? 'default' : 'ghost'}
              size="icon"
              onClick={() => setView('calendar')}
              aria-label="Calendar view"
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
          <Button>Create Event</Button>
        </div>
      </div>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={
            view === 'list' ? <EventList /> :
            view === 'grid' ? <EventGrid /> :
            <EventCalendar />
          } />
          {/* Add other event-related routes here */}
        </Routes>
      </React.Suspense>
    </div>
  );
}