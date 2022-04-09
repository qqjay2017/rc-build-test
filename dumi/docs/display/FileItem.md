## FIleItem - 文件预览

#### 基本使用

```jsx
import React from "react";
import { FileItem } from "ljc-react";

export default () => {
  return <FileItem fileName="1111.pdf" fileSrcUrl="https://baidu.com" />;
};
```

#### 几种文件类型

```jsx
import React from "react";
import { FileItem } from "ljc-react";

export default () => {
  return (
    <div>
      <FileItem fileName="1111.mp4" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.doc" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.docx" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.jpg" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.png" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.webp" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.mp3" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.xls" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.xlsx" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.ppt" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.pdf" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.dwg" fileSrcUrl="https://baidu.com" />
      <FileItem fileName="1111.text" fileSrcUrl="https://baidu.com" />
    </div>
  );
};
```

#### TODO 文件预览

#### API

<API src="ljc-react/components/FileItem/index.tsx"></API>
