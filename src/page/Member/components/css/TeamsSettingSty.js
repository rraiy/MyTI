import styled from 'styled-components';
import { primary } from '../../../../public_component/globalStyle';

export const TeamsSettingWrap = styled.div`
  width: 952px;

  @media (max-width: 1199px) {
    width: 85%;
  }

  @media (max-width: 700px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const FavoriteWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;

  h2 {
    font-size: 24px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    h2 {
      margin-bottom: 20px;
    }
  }
`;

export const StarI = styled.img`
  width: 28px;
  margin-bottom: 20px;
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const RemoveLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: grey;
  opacity: 0;
  line-height: 100%;
  color: #fff;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const MemberTeamLogo = styled.img`
  width: 120px;
  margin-bottom: 10px;
`;

export const SelectTeamWrap = styled.div`
  width: 100%;

  p,
  input {
    margin-bottom: 16px;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const AllTeamUL = styled.ul`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    img {
      width: 40px;
    }
  }
`;

export const TeamItemWrapLi = styled.li`
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #262955;
  padding: 10px 10px;
  margin-right: 24px;
  margin-bottom: 16px;
  max-height: 230px;

  p {
    margin-bottom: 10px;
  }
  hr {
    width: 100%;
    border: 1px solid ${primary};
    margin-bottom: 10px;
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    width: 120px;
  }
`;

export const SearchTeamInput = styled.input`
  width: 240px;
  height: 36px;
`;

export const PickBtn = styled.button`
  width: 80px;
  border: 1px solid ${primary};
  border-radius: 50px;
  padding: 4px 8px;
  color: ${primary};

  :hover {
    background: ${primary};
    color: #fff;
  }
`;

export const NoSelectP = styled.p`
  margin-bottom: 100px;
`;
