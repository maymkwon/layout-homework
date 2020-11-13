import React from "react";
import TableList from "../../common/components/TableList";
import { GridPageSection } from "../../common/layouts";
import HeaderVm from "./components/HeaderVm";
import { mockApiUrl, SwrConfig } from "../../common/const";
import useSWR from "swr";
import fetcher from "../../common/utils/fetcher";
import SearchBox from "./components/SearchBox";

interface Props {
  morethan768: boolean;
}
const VMPage: React.FC<Props> = ({ morethan768 }) => {
  const { data, error } = useSWR(mockApiUrl, fetcher, SwrConfig);

  return (
    <>
      <HeaderVm morethan768={morethan768} />
      <GridPageSection name="contents" overFlow direction="column">
        <SearchBox />
        <TableList data={data} />
      </GridPageSection>
    </>
  );
};

export default VMPage;
