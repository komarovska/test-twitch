import styled from 'styled-components';

import {
  lightBrown,
  lightGrey,
} from './constants';

export const List = styled.div`
    margin-top: 50px;
`;

export const Title = styled.div`
    position: relative;
    min-height: 80px;
    padding-top: 5px;
    color: ${lightGrey};
    background: ${lightBrown};
    font-family: 'Oswald', sans-serif;
    font-size: 46px;
    font-weight: 500;
    overflow: hidden;
  `;

export const Indicator = styled.div`
    color: ${lightBrown};
    background: ${lightGrey};
    font-size: 14px;
    font-weight: 400;
    text-align: right;
    margin-bottom: 5px;
    width: 80px;
    padding-right: 10px;
  `;

export const Circle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid ${lightBrown}; 
    display: inline-block;
    float: left;
    margin: 3px;
  `;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid ${lightBrown};
    padding: 0;
  `;

export const TableCell = styled.div`
    font-family: 'Lora', serif;
    display: inline-block;
    padding: 20px;
    text-align: center;
    `;
