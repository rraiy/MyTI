import React from 'react';
import styled from 'styled-components';
import icon from '../../images/icon/tour.png';

const Wrap = styled.div`
    min-width:1200px;
    height:1800px;
    background:transparent linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%) 0% 0% no-repeat padding-box;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    align-items:center;

    @media (max-width:1199px) and (min-width:700px){
        min-width:700px;
    }

    @media (max-width:699px) and (min-width:360px){
        min-width:360px;
    }
`

const OngoingWrap = styled.div`
    width:952px;
    height:430px;
    background:rgb(43,51,96);
    border:2px solid rgb(168,73,237);
    border-radius:8px;
    margin-top:100px;
`

const TitleDiv = styled.div`
    height:60px;
    background:rgb(70,75,134);
    border-bottom:2px solid rgb(168,73,237);
    color:#fff;
    padding:8px;

    ul:first-child{
        height:100%;
        display:flex;
        text-align:center;
        justify-content:space-evenly;
        align-items:center;
    }
`

const TourListUL = styled.ul`
    display:flex;
    flex-direction:column;
    color:#fff;
`

const TourLi = styled.li`
    display:flex;
    flex-direction:row;
    padding:8px 16px;
    justify-content:space-evenly;
    align-items:center;

    div img{
        width:30px;
    }
    
    // 收藏
    div:nth-child(1){
        width:9%;
    }

    // date
    span:nth-child(2){
        width:25%;
    }

    div:nth-child(3){
        width:20%;
    }

    span:nth-child(4){
        width:40%;
    }

    span:nth-child(5){
        width:18%;
    }

    div:nth-child(6){
        width:10%;
    }
`

const AllTours = () => {

    return(
        <Wrap>
            <OngoingWrap>
                <TitleDiv>
                    <ul>
                        <li style={{width:'9%'}}>(i)</li>
                        <li style={{width:'25%'}}>Date</li>
                        <li style={{width:'18%'}}>logo</li>
                        <li style={{width:'40%'}}>Tournament</li>
                        <li style={{width:'18%'}}>Location</li>
                        <li style={{width:'10%'}}>Info</li>
                    </ul>
                </TitleDiv>
                    <TourListUL>
                        <TourLi>
                            <div>
                                <img src={icon} alt="" />
                            </div>
                            <span>2020.03.15-03.20</span>
                            <div>
                                <img src={icon} alt="" />
                            </div>
                            <span>ESLOne洛杉磯Major</span>
                            <span>美國洛杉磯</span>
                            <div>
                                <img src={icon} alt="" />
                            </div>
                        </TourLi>
                    </TourListUL>
                
            </OngoingWrap>
        </Wrap>
    )
}

export default AllTours;