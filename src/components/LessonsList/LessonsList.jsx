import React from 'react';
import {
  LessonsListItem,
  LockedIcon,
  LessonsListStyle,
  LessonLink,
} from './LessonsList.stiled';
import { ImPointLeft } from 'react-icons/im';

const LessonsList = ({ course, setCurrentLesson, currentLesson }) => {
  const { lessons } = course || {};

  if (!lessons || !Array.isArray(lessons)) {
    return null;
  }

  return (
    <div>
      <LessonsListStyle>
        {lessons.map(lesson => {
          const isActive = lesson === currentLesson;
          const isLocked = lesson.status === 'locked';
          const linkClassName = isActive ? 'active' : '';
          return (
            <LessonsListItem key={lesson.id}>
              <LessonLink
                href={lesson.link}
                onClick={e => {
                  e.preventDefault();
                  setCurrentLesson(lesson);
                }}
                disabled={isLocked}
                className={linkClassName}
              >
                {lesson.title}
                {isActive && (
                  <span>
                    {' '}
                    <ImPointLeft />
                  </span>
                )}
              </LessonLink>
              {isLocked && (
                <span>
                  {' '}
                  &nbsp; &nbsp; <LockedIcon />
                </span>
              )}
            </LessonsListItem>
          );
        })}
      </LessonsListStyle>
    </div>
  );
};

export default LessonsList;
