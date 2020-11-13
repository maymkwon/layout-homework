import React from "react";
import { Typography } from "@material-ui/core";
import { FlexItem, GridPageSection } from "../../common/layouts";
import FilterBox from "./components/FilterBox";
import HeaderConfig from "./components/HeaderConfig";
import useSWR from "swr";
import TableList from "../../common/components/TableList";
import { mockApiUrl, SwrConfig } from "../../common/const";
import fetcher from "../../common/utils/fetcher";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
interface Props {
  morethan768: boolean;
}

const InfoBox = styled(FlexItem)`
  background-color: #eee;
  padding: 20px;
  margin: 15px 0;
  border-radius: 4px;
  p {
    margin-left: 15px;
  }
`;

const ConfigPage: React.FC<Props> = ({ morethan768, ...rest }) => {
  console.log(rest);
  const { data, error } = useSWR(mockApiUrl, fetcher, SwrConfig);
  return (
    <>
      <HeaderConfig morethan768={morethan768} />
      <GridPageSection name="contents" direction="column">
        <FilterBox />
        <div style={{ overflow: "auto" }}>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Consequuntur ipsa quam deleniti consectetur, sunt nemo, reiciendis
            odio dolorem,
            <br />
            quis ea perferendis dicta nisi vero illum officia.
            <br />
            Porro repellat sint deserunt?
          </Typography>
          <InfoBox align="center">
            <InfoIcon />
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Typography>
          </InfoBox>
          <TableList data={data} />
        </div>
      </GridPageSection>
    </>
  );
};

export default ConfigPage;
