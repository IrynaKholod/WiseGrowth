import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout.jsx';

const Courses = lazy(() => import('../pages/Courses/Courses.jsx'));
const Course = lazy(() => import('../pages/Course/Course'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="courses" />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="courses/:courseId" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
