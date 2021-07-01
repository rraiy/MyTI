import React from 'react'
import styled from 'styled-components'
import icon from '../../images/icon/tour.png'

let mark_w = '9%'
let date_w = '25%'
let tourlogo_w = '18%'
let tourtitle_w = '40%'
let location_w = '18%'
let info_w = '10%'

const Wrap = styled.div`
    min-width: 1200px;
    height: 1800px;
    background: transparent
        linear-gradient(180deg, rgba(7, 0, 28, 1) 0%, rgba(24, 15, 51, 1) 34%, rgba(58, 45, 96, 1) 100%) 0% 0% no-repeat
        padding-box;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1199px) and (min-width: 700px) {
        min-width: 700px;
    }

    @media (max-width: 699px) and (min-width: 360px) {
        min-width: 360px;
    }
`

const OngoingWrap = styled.div`
    width: 952px;
    height: 430px;
    background: rgb(43, 51, 96);
    border: 2px solid rgb(168, 73, 237);
    border-radius: 8px;
    margin-top: 100px;
`

const TitleDiv = styled.div`
    height: 60px;
    background: rgb(70, 75, 134);
    border-bottom: 2px solid rgb(168, 73, 237);
    color: #fff;
    padding: 8px 16px;

    ul:first-child {
        height: 100%;
        display: flex;
        text-align: center;
        justify-content: space-evenly;
        align-items: center;
    }
`

const TourListUL = styled.ul`
    display: flex;
    flex-direction: column;
    color: #fff;
`

const TourLi = styled.li`
    display: flex;
    flex-direction: row;
    height: 64px;
    padding: 8px 16px;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    div img {
        width: 30px;
    }

    // 收藏
    div:nth-child(1) {
        width: ${mark_w};
    }

    // date
    span:nth-child(2) {
        width: ${date_w};
    }

    div:nth-child(3) {
        width: ${tourlogo_w};
    }

    span:nth-child(4) {
        width: ${tourtitle_w};
        line-height: 1.2em;
    }

    span:nth-child(5) {
        width: ${location_w};
    }

    div:nth-child(6) {
        width: ${info_w};
    }
`

const AllTours = () => {
    return (
        <Wrap>
            <OngoingWrap>
                <TitleDiv>
                    <ul>
                        <li style={{ width: mark_w }}>mark</li>
                        <li style={{ width: date_w }}>Date</li>
                        <li style={{ width: tourlogo_w }}>logo</li>
                        <li style={{ width: tourtitle_w }}>Tournament</li>
                        <li style={{ width: location_w }}>Location</li>
                        <li style={{ width: info_w }}>Info</li>
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
                    <TourLi>
                        <div>
                            <img src={icon} alt="" />
                        </div>
                        <span>2020.03.15-03.20</span>
                        <div>
                            <img src={icon} alt="" />
                        </div>
                        <span>Dota Pro Circuit 2021: Season 2 - China Upper Division</span>
                        <span>美國洛杉磯</span>
                        <div>
                            <img src={icon} alt="" />
                        </div>
                    </TourLi>
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

export default AllTours
