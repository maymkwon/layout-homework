import { Button, IconButton } from "@material-ui/core";
import React from "react";
import { PageContentHeader } from "../../../common/components";
import ReplayIcon from "@material-ui/icons/Replay";
import DeleteIcon from "@material-ui/icons/Delete";
import { FlexItem } from "../../../common/layouts";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// 공통타입관리 X
interface Props {
  morethan768: boolean;
}

const PageTitle = "Configuration";

const HeaderConfig: React.FC<Props> = ({ morethan768 }) => {
  if (!morethan768) {
    return (
      <PageContentHeader title={PageTitle}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </PageContentHeader>
    );
  }
  return (
    <PageContentHeader title={PageTitle}>
      <FlexItem>
        <Button size="large" color="primary" startIcon={<ReplayIcon />}>
          REFRESH
        </Button>
        <Button size="large" color="primary" startIcon={<DeleteIcon />}>
          DELETE
        </Button>
      </FlexItem>
    </PageContentHeader>
  );
};

export default HeaderConfig;
