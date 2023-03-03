import * as React from "react";
import { FileInputButton, FileMosaic } from "../../../files-ui";

const sampleFileProps = {
  id: "fileId",
  size: 28 * 1024 * 1024,
  type: "plain/javascript",
  name: "file created from props.jsx",
};
const DemoFileMosaicBasic = (props) => {
  const [value, setValue] = React.useState(undefined);

  const updateFile = (incommingFiles) => {
    console.log("incomming extFiles", incommingFiles);
    setValue(incommingFiles[0]);
  };

  const removeFile = () => {
    setValue(undefined);
  };
  return (
    <>
      {value ? (
        <FileMosaic {...value} onDelete={removeFile} alwaysActive info preview/>
      ) : (
        <FileInputButton value={value?[value]:[]} onChange={updateFile} />
      )}
      <FileMosaic {...sampleFileProps} alwaysActive info preview/>
    </>
  );
};
export default DemoFileMosaicBasic;