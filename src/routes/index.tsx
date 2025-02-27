const EventGallery = lazy(() => import('@/pages/resources/EventGallery'));
const PDFLibrary = lazy(() => import('@/pages/resources/PDFLibrary'));
const PresentationLibrary = lazy(() => import('@/pages/resources/PresentationLibrary'));
const VideoLibrary = lazy(() => import('@/pages/resources/VideoLibrary'));

// Settings routes
const EventCustomDomain = lazy(() => import('@/pages/settings/EventCustomDomain'));
const MailDomain = lazy(() => import('@/pages/settings/MailDomain'));
const SettingsOverview = lazy(() => import('@/pages/settings/Overview'));
const Polls = lazy(() => import('@/pages/settings/Polls'));
const SignInSettings = lazy(() => import('@/pages/settings/SignInSettings'));
const SiteTracking = lazy(() => import('@/pages/settings/SiteTracking'));

                path: 'settings',
                element: <SettingsLayout />,
                children: [
                  {
                    path: '',
                    element: <SettingsOverview />
                  },
                  {
                    path: 'event-custom-domain',
                    element: <EventCustomDomain />
                  }]