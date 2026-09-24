import { type ReactNode } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import DashboardPage from '@/pages/dashboard';
import CoursesPage from '@/pages/courses';
import StudyPage from '@/pages/study';
import StudyLessonPage from '@/pages/study-lesson';
import QuizPage from '@/pages/quiz';
import AskPage from '@/pages/ask';
import DrugsPage from '@/pages/drugs';
import ProgressPage from '@/pages/progress';
import DocsPage from '@/pages/docs';
import NotFound from '@/pages/not-found';
import AppShell from '@/components/app-shell';
import { Redirect } from 'wouter';

function Routed({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Router() {
  return (
    <Routed>
      <AppShell>
        <Switch>
          <Route path="/" component={() => <Redirect to="/dashboard" replace />} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/study" component={StudyPage} />
          <Route path="/study/:nodeId" component={StudyLessonPage} />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/ask" component={AskPage} />
          <Route path="/drugs" component={DrugsPage} />
          <Route path="/progress" component={ProgressPage} />
          <Route path="/docs" component={DocsPage} />
          <Route component={NotFound} />
        </Switch>
      </AppShell>
    </Routed>
  );
}

export default Router;
