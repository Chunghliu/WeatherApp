// ./src/WeatherSetting.js
import React from 'react';
import styled from '@emotion/styled';
import useWeatherApi from './useWeatherApi';

const WeatherSettingWrapper = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 15px;
`;

const StyledInputList = styled.input`
  display: block;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  outline: none;
  width: 100%;
  max-width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  padding: 7px 10px;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    margin: 0;
    letter-spacing: 0.3px;
    line-height: 1;
    cursor: pointer;
    overflow: visible;
    text-transform: none;
    border: 1px solid transparent;
    background-color: transparent;
    height: 35px;
    width: 80px;
    border-radius: 5px;

    &:focus,
    &.focus {
      outline: 0;
      box-shadow: none;
    }

    &::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }
  }
`;

const Back = styled.button`
  && {
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) => theme.textColor};
  }
`;

const Save = styled.button`
  && {
    color: white;
    background-color: #40a9f3;
  }
`;

//although locations supposed to be a fixed value, it can be more dynamic
//In case the api changed the "place", "locations" has to be changed too.
const locations = [
    '京士柏', '香港天文台', '黃竹坑',
    '打鼓嶺', '流浮山', '大埔',
    '沙田', '屯門', '將軍澳',
    '西貢', '長洲', '赤鱲角',
    '青衣', '石崗', '荃灣可觀',
    '荃灣城門谷', '香港公園', '筲箕灣',
    '九龍城', '跑馬地', '黃大仙',
    '赤柱', '觀塘', '深水埗',
    '啟德跑道公園', '元朗公園', '大美督'
];

const WeatherSetting = () => {
    const [WeatherElement] = useWeatherApi();

    return (
        <WeatherSettingWrapper>
            <Title>設定</Title>
            <StyledLabel htmlFor="location">地區</StyledLabel>
            <StyledInputList list="location-list" id="location" name="location" />
            <datalist id="location-list">
                {/* 定義 datalist 中的 options*/}
                {locations.map(location => (
                    <option value={location} key={location} />
                ))}
            </datalist>

            <ButtonGroup>
                <Back>返回</Back>
                <Save>儲存</Save>
            </ButtonGroup>
        </WeatherSettingWrapper>
    );
};

export default WeatherSetting;