import styled, { css } from "styled-components";
import { targetQuerySize } from "../const";

// 레이아웃 스타일컴포넌트 정의

type FlexAlign = "flex-start" | "center" | "flex-end";
interface FlexItemProps {
  display?: "block" | "flex";
  align?: FlexAlign;
  justify?: FlexAlign;
  direction?: "row" | "column";
}

export const FlexItem = styled.div<FlexItemProps>`
  display: ${({ display }) => (display ? display : "flex")};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
`;

export const GridPageLayout = styled.div`
  display: grid;
  grid-template-rows: minmax(50px, 60px) 1fr;
  background-color: #eee;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "pageHeader pageContentHeader"
    "contents contents";

  @media (min-width: ${targetQuerySize}px) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    grid-template-columns: 300px 1fr;
    grid-gap: 5px 10px;
    grid-template-areas:
      "pageHeader pageContentHeader"
      "menu contents";
  }
`;

type GridAreaName = "pageHeader" | "pageContentHeader" | "menu" | "contents";

const conditionAreaStyle = (name?: GridAreaName) => {
  switch (name) {
    case "pageContentHeader":
      return css`
        border-left: 1px solid #eee;
        @media (min-width: ${targetQuerySize}px) {
          border: 0;
        }
      `;
    case "contents":
      return css`
        border-top: 1px solid #eee;
        @media (min-width: ${targetQuerySize}px) {
          border-top: 0;
        }
      `;
    default:
      return;
  }
};

export const GridPageSection = styled(FlexItem)<{
  overFlow?: boolean;
  name?: GridAreaName;
  enablePadding?: boolean;
}>`
  position: relative;
  background-color: #fff;

  ${({ name }) => conditionAreaStyle(name)};
  padding: ${({ enablePadding }) => !enablePadding && "0 16px"};
  grid-area: ${({ name }) => name};
  overflow: ${({ overFlow }) => (overFlow ? "auto" : "hidden")};
`;
