import { Button, IconButton } from "@material-ui/core";
import React from "react";
import { PageContentHeader } from "../../../common/components";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import GetAppIcon from "@material-ui/icons/GetApp";
import ReplayIcon from "@material-ui/icons/Replay";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import PauseIcon from "@material-ui/icons/Pause";
import DeleteIcon from "@material-ui/icons/Delete";
import Replay10Icon from "@material-ui/icons/Replay10";
import { FlexItem } from "../../../common/layouts";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// 공통타입관리 X
interface Props {
  morethan768: boolean;
}

const PageTitle = "VM Instance";

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
        <Button size="large" color="primary" startIcon={<BookmarkIcon />}>
          CREATE INSTANCE
        </Button>
        <Button size="large" color="primary" startIcon={<GetAppIcon />}>
          IMPORT VM
        </Button>
        <FlexItem align="center">
          <IconButton>
            <ReplayIcon />
          </IconButton>
          <IconButton>
            <PlayArrowIcon />
          </IconButton>
          <IconButton>
            <StopIcon />
          </IconButton>
          <IconButton>
            <PauseIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <Replay10Icon />
          </IconButton>
        </FlexItem>
      </FlexItem>
      {/*  */}
      <FlexItem align="center">
        <Button size="large" color="primary" startIcon={<BookmarkIcon />}>
          CREATE INSTANCE
        </Button>
        <Button size="large" color="primary" startIcon={<GetAppIcon />}>
          IMPORT VM
        </Button>
      </FlexItem>
    </PageContentHeader>
  );
};

export default HeaderConfig;
