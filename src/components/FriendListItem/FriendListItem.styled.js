import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const FriendAvatar = styled.img`
  width: 48px;
  border: 1px solid transparent;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 900;
  color: rgb(57, 57, 57);
  margin: 0px;
  padding: 10px;
  font-size: 40px;
`;
