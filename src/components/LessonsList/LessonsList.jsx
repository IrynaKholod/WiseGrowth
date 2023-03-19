import React from 'react';
import {
  LessonsListItem,
  LockedIcon,
  LessonsListStyle,
  LessonLink
} from './LessonsList.stiled';

const LessonsList = ({ course, setCurrentLesson }) => {
  const { lessons } = course || {};

  if (!lessons || !Array.isArray(lessons)) {
    return null;
  }

  return (
    <div>
      <LessonsListStyle>
        {lessons.map(lesson => (
          <LessonsListItem key={lesson.id}>
            <LessonLink
              href={lesson.link}
              onClick={e => {
                e.preventDefault();
                setCurrentLesson(lesson);
                e.target.classList.add('active');
              }}
              disabled={lesson.status === 'locked'}
            >
              {lesson.title}
            </LessonLink>
            {lesson.status === 'locked' && (
              <span>
                {' '}
                &nbsp; &nbsp; <LockedIcon />
              </span>
            )}
          </LessonsListItem>
        ))}
      </LessonsListStyle>
    </div>
  );
};

export default LessonsList;
