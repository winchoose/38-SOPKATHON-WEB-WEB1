import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layout/Layout';
import ArchiveDetailPage from '../pages/archive-detail/ArchiveDetailPage';
import ArchivePage from '../pages/archive/ArchivePage';
import HomePage from '../pages/home/HomePage';
import LetterConfirmPage from '../pages/letter-confirm/LetterConfirmPage';
import MessagePage from '../pages/message/MessagePage';
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import ReplyPage from '../pages/reply/ReplyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <OnboardingPage />
      </Layout>
    ),
  },
  {
    path: '/home',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/letters/confirm',
    element: (
      <Layout>
        <LetterConfirmPage />
      </Layout>
    ),
  },
  {
    path: '/letters/:messageId',
    element: (
      <Layout>
        <MessagePage />
      </Layout>
    ),
  },
  {
    path: '/letters/:messageId/reply',
    element: (
      <Layout>
        <ReplyPage />
      </Layout>
    ),
  },
  {
    path: '/archives',
    element: (
      <Layout>
        <ArchivePage />
      </Layout>
    ),
  },
  {
    path: '/archives/:savedMessageId',
    element: (
      <Layout>
        <ArchiveDetailPage />
      </Layout>
    ),
  },
]);
