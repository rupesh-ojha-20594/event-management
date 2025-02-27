import React from 'react';
import { useTranslation } from 'react-i18next';
import { Settings as SettingsIcon, Bell, Globe, Shield, User } from 'lucide-react';
import { Button } from '../components/ui/Button';

const SettingsSection = ({ 
  title, 
  icon: Icon, 
  children 
}: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

export default function Settings() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <SettingsIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
        <h2 className="text-2xl font-bold">{t('settings.title')}</h2>
      </div>

      <div className="max-w-3xl">
        <SettingsSection title={t('settings.profile')} icon={User}>
          {/* Add profile settings form */}
        </SettingsSection>

        <SettingsSection title={t('settings.notifications')} icon={Bell}>
          {/* Add notification preferences */}
        </SettingsSection>

        <SettingsSection title={t('settings.language')} icon={Globe}>
          {/* Add language selection */}
        </SettingsSection>

        <SettingsSection title={t('settings.security')} icon={Shield}>
          {/* Add security settings */}
        </SettingsSection>

        <div className="flex justify-end gap-4 mt-8">
          <Button variant="ghost">{t('common.cancel')}</Button>
          <Button>{t('common.saveChanges')}</Button>
        </div>
      </div>
    </div>
  );
}