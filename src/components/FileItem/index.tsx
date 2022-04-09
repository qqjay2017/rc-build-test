import React, { useMemo } from "react";

import fileIconData from "../../constant/fileIconData";
import { getFileType } from "../../helps/getFileType";
import "./styles.less";
import { DownloadOutlined } from "@ant-design/icons";
export interface FileItemProps {
  fileName: string;
  fileSrcUrl: string;
}

function getTypeIsActive(fileType: string) {
  return ["pdf", "mp4", "jpg"].includes(fileType);
}
function FileItem(props: FileItemProps) {
  const { fileName, fileSrcUrl } = props;

  const fileItemSrcAndActive = useMemo(() => {
    const fileType = getFileType(fileName);

    if (!fileType) {
      return {
        src: fileIconData.usually,
        isActive: false,
      };
    }
    const isActive = getTypeIsActive(fileType);

    if (fileIconData[fileType]) {
      return {
        src: fileIconData[fileType],
        isActive: isActive,
      };
    }
    return {
      src: fileIconData.usually,
      isActive: false,
    };
  }, [fileName]);
  return (
    <div className="fileItem">
      <img className="img" src={fileItemSrcAndActive.src} alt="" />
      <a target="_blank" rel="noreferrer" href={fileSrcUrl} className="link">
        <span
          style={{
            color: fileItemSrcAndActive.isActive
              ? "#1677ff"
              : "rgba(0,0,0,0.55)",
          }}
        >
          {fileName}
        </span>
        <DownloadOutlined style={{ marginLeft: "16px" }} />
      </a>
    </div>
  );
}

export default FileItem;
