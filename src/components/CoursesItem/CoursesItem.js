import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  ItemCourse,
  ItemImg,
  ListTitle,
  ItemHeader,
  SkillsList,
  Raitingline,
  ItemBox,
  PreviwVideo,
} from './CoursesItem.styled';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';

const CoursesItem = ({ course }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const location = useLocation();

  const handleImageLoad = () => setIsImageLoaded(true);

  useEffect(() => {
    if (course.meta.courseVideoPreview && course.meta.courseVideoPreview.link) {
      const hls = VideoPlayer(
        course.meta.courseVideoPreview.link,
        videoRef.current,
        0.1
      );
      return () => {
        hls && hls.destroy();
      };
    }
  }, [course.meta.courseVideoPreview]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current && videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current && videoRef.current.pause();
  };

  return (
    <ItemCourse>
      <Link
        to={`${course.id}`}
        state={{ from: location }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li>
          <ItemBox>
            <ItemImg
              src={`${course.previewImageLink}/cover.webp`}
              alt="CourseImage"
              onLoad={handleImageLoad}
              style={{ opacity: isHovered ? 0 : 1 }}
            />
            {!isImageLoaded && <div>Loading...</div>}
            <PreviwVideo
              ref={videoRef}
              style={{ opacity: isHovered ? 1 : 0 }}
              controls
              muted
            />

            <ItemHeader>{course.title}</ItemHeader>
            <ListTitle>Skill you'll achieve:</ListTitle>
            <SkillsList>
              {' '}
              {course.meta.skills?.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </SkillsList>
          </ItemBox>

          <Raitingline>
            Raitig: {course.rating} &nbsp; &nbsp; Lessons: {course.lessonsCount}
          </Raitingline>
        </li>
      </Link>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ItemCourse>
  );
};

export default CoursesItem;
