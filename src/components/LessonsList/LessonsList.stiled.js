import styled from 'styled-components';
import { ImEyeBlocked,
  } from 'react-icons/im';

export const LessonsListStyle = styled.ul`
  margin-left: 15px;
  list-style: square;
`;

export const LessonsListItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    color: rgba(72, 37, 209, 255);
  }

`;

export const LockedIcon = styled(ImEyeBlocked)`
  color: rgba(72, 37, 209, 255);
`;

export const LessonLink =styled.a`
&:active{
  color: rgba(72, 37, 209, 255);
}

`