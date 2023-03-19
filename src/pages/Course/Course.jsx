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
  VideoWrapper
} from './Course.styled';

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [currentLesson, setCurrentLesson] = useState(null);
  const [startVideoWith, setstartVideoWith] = useState(-1);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/courses';

  const handleLessonClick = lesson => {
    setCurrentLesson(lesson);
  };

  useEffect(() => {
    async function fetchCourseByID() {
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
        <VideoWrapper>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <CourseTitle>{course.title}</CourseTitle>
          {currentLesson?.status !== 'locked' ? (
            <VideoCourse
              id={courseId}
              controls
              width="100%"
              autoPlay
              onTimeUpdate={e => saveCurrentTimeVideo(e)}
            ></VideoCourse>
          ) : (
            <MassegeTytle>
              For viewing the video, please upgrade to a premium account.
            </MassegeTytle>
          )}
        </VideoWrapper>
        <SideLessonInfo>
          <LessonDescription>{course.description}</LessonDescription>
          <LessonsTitle>Lessons:</LessonsTitle>
          <LessonsList
            course={course}
            setCurrentLesson={handleLessonClick}
            currentLesson={currentLesson}
          />
        </SideLessonInfo>
      </LessonWrapper>
    </>
  );
};

export default Course;
