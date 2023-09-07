import styled from 'styled-components';

export const ProfileCard = styled.div`
  background-color: white;
  border-radius: 30px;
  border: 3px solid gray;
  width: 500px;
  padding-top: 50px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.41) 2px 3px 14px 2px;
  &:hover {
    box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
    -webkit-box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
    -moz-box-shadow: -4px 7px 65px 6px rgba(13, 13, 13, 0.75);
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
  border: 2px solid rgb(37, 37, 37);
`;

export const Name = styled.p`
  font-weight: 900;
  color: rgb(57, 57, 57);
  margin-bottom: 20px;
  font-size: 30px;
`;

export const ProfileDescription = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  letter-spacing: 0.05em;
`;

export const Statistics = styled.ul`
  display: flex;

  text-align: center;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  border-top: 2px solid black;
  border-radius: 20px;
  background-color: rgb(222, 221, 221);
`;

export const Items = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 20px;
  &:not(:last-child) {
    border-right: 2px solid black;
  }
`;

export const Label = styled.span`
  font-size: 20px;
  letter-spacing: 0.1em;
`;

export const Quantity = styled.span`
  font-weight: 800;
`;
