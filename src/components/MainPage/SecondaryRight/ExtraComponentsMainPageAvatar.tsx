import * as React from "react";
import { Stack, Paper } from "@mui/material";
import {
  FileCard,
  ExtFile,
  FullScreen,
  ImagePreview,
  VideoPreview,
  FileInputButton,
  Avatar,
  MaterialButton,
} from "../../../files-ui";
import AnchorToTab from "../../util-components/AnchorToTab";
import TypeHighlight from "../../typeHighlight/TypeHighlight";
import { BIA_URL } from "../../../data/imagesURL";

interface ExtraComponentsMainPageProps {
  darkMode?: boolean;
}
const ExtraComponentsMainPageAvatar: React.FC<ExtraComponentsMainPageProps> = (
  props: ExtraComponentsMainPageProps
) => {
  const { darkMode } = props;
  const [isUloading, setIsUploading] = React.useState<boolean>(false);

  const [avatarSrc, setAvatarSrc] = React.useState<string | undefined | File>(
    BIA_URL
  );

  const handleChange = async (file: File) => {
    setAvatarSrc(file);
  };
  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        boxSizing: "border-box",
        backgroundColor: darkMode ? "#121212" : "rgba(0, 0, 0, 0.06)",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <TypeHighlight size="1.1rem">
        <AnchorToTab href="/components/avatar">
          <h3 style={{ margin: 0 }}>{"<Avatar/>"}</h3>
        </AnchorToTab>
      </TypeHighlight>
      <Stack
        direction={"column"}
        spacing={2}
        alignItems="center"
        justifyContent={"space-evenly"}
        sx={{
          flexWrap: "wrap",
          flexGrow: 1,
        }}
      >
        <Avatar
          src={avatarSrc}
          onChange={handleChange}
          isUloading={isUloading}
          smartImgFit={"center"}
          style={{ width: "170px", height: "170px" }}
          //variant={"circle"}
        />
        <Avatar
          src={avatarSrc}
          onChange={handleChange}
          isUloading={isUloading}
          smartImgFit={"center"}
          variant={"circle"}
          style={{ width: "170px", height: "170px" }}
        />
        <MaterialButton
          onClick={() => setAvatarSrc(undefined)}
          disabled={avatarSrc === undefined}
        >
          remove avatar
        </MaterialButton>
      </Stack>
    </Paper>
  );
};
export default ExtraComponentsMainPageAvatar;

const sampleFileProps: ExtFile = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "text/plain",
  name: "file created from props.jsx",
};
