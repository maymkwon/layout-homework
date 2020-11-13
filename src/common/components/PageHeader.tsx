import { SvgIcon, Typography } from "@material-ui/core";
import React from "react";
import { FlexItem, GridPageSection } from "../layouts";
import AppleIcon from "@material-ui/icons/Apple";
import styled from "styled-components";

// 1번영역
// 최상위 메뉴이름이 들어가는영역
// 로고와 여러가지 조건이 필요한데 정보가 없어 간단히 텍스트정보만 받음
const OverrideFlexItem = styled(FlexItem)`
  width: 100%;
  .icon-wrap {
    min-width: 56px;
  }
  h6 {
    font-weight: bold;
  }
`;
interface Props {
  title: string;
}

const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <GridPageSection name="pageHeader" align="center">
      <OverrideFlexItem align="center">
        <div className="icon-wrap">
          <AppleIcon fontSize="large" />
        </div>
        <Typography variant="subtitle1" noWrap>
          {title}
        </Typography>
      </OverrideFlexItem>
    </GridPageSection>
  );
};

export default PageHeader;
