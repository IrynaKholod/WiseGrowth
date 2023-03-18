import React, { useState, useEffect } from 'react';
import { GetCourseById } from '../../Api/Api';
import { useParams, useLocation } from 'react-router-dom';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';
import LessonsList from '../../components/LessonsList/LessonsList';
import {
  BackLink,
  VideoCourse,
  CourseTitle,
  MassegeTytle,
  LessonsTitle,
  LessonDescription,
  LessonWrapper,
  SideLessonInfo,
} from './Course.styled';

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [currentLesson, setCurrentLesson] = useState(null);
  const [startVideoWith, setstartVideoWith] = useState(-1);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/courses';

  useEffect(() => {
    async function fetchCourseByID() {
      if (!course) {
        return;
      }
      try {
        const response = await GetCourseById(courseId);
        if (response) {
          setCourse(response);
        } else {
          console.log('Error: response does not contain results');
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    }

    fetchCourseByID();
  }, [courseId]);

  useEffect(() => {
    if (!course || !course.lessons || course.lessons.length === 0) {
      return;
    }
    setCurrentLesson(course.lessons[0]);
  }, [course]);

  useEffect(() => {
    if (!currentLesson) {
      return;
    }
    if (currentLesson.status === 'locked') {
      return;
    }
    const videoElement = document.getElementById(courseId);
    const time = JSON.parse(
      localStorage.getItem(`Lesson-id-${currentLesson.id}`)
    );
    if (time) {
      setstartVideoWith(time);
    }
    const hls = VideoPlayer(currentLesson.link, videoElement, startVideoWith);
    return () => {
      hls.destroy();
    };
  }, [currentLesson, courseId, startVideoWith]);

  const saveCurrentTimeVideo = e => {
    if (!e.target.currentTime) {
      return;
    }
    localStorage.setItem(
      `Lesson-id-${currentLesson.id}`,
      JSON.stringify(Math.floor(e.target.currentTime))
    );
  };

  return (
    <>
      <LessonWrapper>
        <div>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <CourseTitle>{course.title}</CourseTitle>
          {currentLesson?.status !== 'locked' ? (
            <VideoCourse
              id={courseId}
              controls
              poster={`${currentLesson?.previewImageLink}/lesson.order.webp`}
              onTimeUpdate={e => saveCurrentTimeVideo(e)}
            ></VideoCourse>
          ) : (
            <MassegeTytle>
              For viewing the video, please upgrade to a premium account.
            </MassegeTytle>
          )}
        </div>
        <SideLessonInfo>
          <LessonDescription>{course.description}</LessonDescription>
          <LessonsTitle>Lessons:</LessonsTitle>
          <LessonsList course={course} setCurrentLesson={setCurrentLesson} />
        </SideLessonInfo>
      </LessonWrapper>
    </>
  );
};

export default Course;
