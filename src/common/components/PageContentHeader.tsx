import React, { ReactNode } from "react";
import { GridPageSection, FlexItem } from "../layouts";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { targetQuerySize } from "../const";

// 2번 영역
// 타이틀 제외 다른 버튼이 들어가는게 페이지마다 달라
// 공통레이아웃만 정의후 각페이지마다 끼워서 사용

const Container = styled(FlexItem)`
  width: 100%;
  justify-content: space-between;
  h6 {
    font-weight: bold;
  }
  @media (min-width: ${targetQuerySize}px) {
    overflow: hidden;
    justify-content: flex-start;
    h6 {
      min-width: 150px;
      margin-right: 30px;
    }
  }
`;
const ToolBox = styled.div`
  & + & {
    border-left: 1px solid #eee;
    margin-left: 10px;
    padding-left: 10px;
  }
  button + button {
    margin-left: 5px;
  }
`;

interface Props {
  title: string | JSX.Element[] | JSX.Element;
  children: ReactNode;
}

const PageContentHeader: React.FC<Props> = ({ title, children }) => {
  return (
    <GridPageSection
      name="pageContentHeader"
      id="page-content-header"
      align="center"
    >
      <Container align="center">
        <Typography variant="subtitle1">{title}</Typography>
        <FlexItem align="center" style={{ overflow: "auto" }}>
          {React.Children.map(children || null, (child, i) => {
            return <ToolBox key={i}>{child}</ToolBox>;
          })}
        </FlexItem>
      </Container>
    </GridPageSection>
  );
};

export default PageContentHeader;
