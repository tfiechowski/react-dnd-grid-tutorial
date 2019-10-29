import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  width: 600px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;

export const GridImage = styled.div`
  flex-grow: 1;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

const GridItemWrapper = styled.div`
  flex: 0 0 33.3%;
  display: flex;
  justify-content: center;
  align-items: stretch;

  box-sizing: border-box;

  :before {
    content: "";
    display: table;
    padding-top: 100%;
  }
`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);
