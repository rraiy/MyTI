import styled from 'styled-components';
import { primary } from '../../../../public_component/globalStyle';

export const TeamsSettingWrap = styled.div`
  width: 952px;
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
`;

export const StarI = styled.img`
  width: 28px;
  margin-bottom: 20px;
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const AllTeamUL = styled.ul`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
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
