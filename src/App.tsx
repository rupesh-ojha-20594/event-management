import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { Button } from './components/ui/Button';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Events = React.lazy(() => import('./pages/Events'));
const Settings = React.lazy(() => import('./pages/Settings'));

function App() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="fixed top-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">{t('appName')}</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? t('lightMode') : t('darkMode')}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <div className="pt-16">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events/*" element={<Events />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
