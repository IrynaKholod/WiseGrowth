import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ItemCourse = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #f7f7f7;
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 10px);
  }

  &:hover {
    box-shadow: 0px 2px 2px 0px #0000001f, 0px 1px 2px 0px #00000014,
      0px 3px 1px 0px #0000001a;
  }
`;

export const ItemImg = styled.img`
  align-items: center;
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 'opacity 0.5s ease-in-out';
  max-width: 100%;
  max-height: 200px;
  object-fit: scale-down;
  z-index: 11;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 12;
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    &::before {
      opacity: 0;
    }
  }
`;

export const ItemHeader = styled.h2`
margin-top: 225px;
align-items: center
size: 24px;

&:hover {
color:rgba(72,37,209,255);
    }
`;

export const SkillsList = styled.ul`
  list-style: square;
  margin-top: 15px;
  margin-left: 20px;
  text-align: left;
`;

export const Raitingline = styled.p`
  color: grey;
  margin-top: 20px;
  margin-bottom: 0;
  align-items: flex-end;
`;

export const ItemBox = styled.div``;

export const ListTitle = styled.p`
  margin-top: 20px;
  margin-left: 15px;
  text-align: left;
  size: 15px;
  font-weight: 500;
`;

export const PreviwVideo = styled.video`
  position: absolute;
  top: 2%;
  left: 0;
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  width: 100%;
  height: 200px;
  z-index: 1;
`;
