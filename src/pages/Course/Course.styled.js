import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LessonWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const VideoWrapper = styled.div`
  @media (min-width: 768px) {
   flex: 1;
  }
`

export const SideLessonInfo = styled.div`
  @media (min-width: 768px) {
    flex: 1;
    margin-top: 105px;
    margin-left: 30px;
  }
`;

export const BackLink = styled(NavLink)`
  display: block;
  margin-bottom: 15px;
  &:hover {
    color: rgba(72, 37, 209, 255);
  }
`;

export const CourseTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 28px;
`;

export const VideoCourse = styled.video`
  width: 100%;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const MassegeTytle = styled.h2`
  margin-top: 150px;
  margin-bottom: 150px;
  color: rgba(72, 37, 209, 255);
  text-align: center;
`;

export const LessonsTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const LessonDescription = styled.p`
  margin-bottom: 15px;
  text-align: center;
  font-size: 20px;
  line-height: 1.5em;
  color: grey;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
