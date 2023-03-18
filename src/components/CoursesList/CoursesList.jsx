import React from 'react';
import CoursesItem from '../../components/CoursesItem/CoursesItem';
import { ListCourses } from './CoursesList.styled';

export const CoursesList = ({ courses }) => {
  return (
    <ListCourses>
      {courses.map(course => (
        <CoursesItem key={course.id} courseId={course.id} course={course} />
      ))}
    </ListCourses>
  );
};
