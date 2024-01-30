import React from "react";
import MediaUpload from "../../../common/PostPreview/common/SelectForm/ui/MediaUpload";
import LinkUpload from "../../../common/PostPreview/common/SelectForm/ui/LinkUpload";
import TextAreaBlock from "../Blocks/TextAreaBlock";
import Br from "../../../common/PostPreview/common/SelectForm/ui/Br";
import { Reorder, useDragControls } from "framer-motion";
import { observer } from "mobx-react-lite";

const ConstructorBlocks = ({ data }: any) => {
  const dragControls = useDragControls();

  switch (data.type) {
    case "media":
      return (
        <Reorder.Item
          dragListener={false}
          dragControls={dragControls}
          value={data}
        >
          <MediaUpload item={data} dragControls={dragControls} />
        </Reorder.Item>
      );
    case "link":
      return (
        <Reorder.Item
          dragListener={false}
          dragControls={dragControls}
          value={data}
        >
          <LinkUpload item={data} dragControls={dragControls} />
        </Reorder.Item>
      );
    case "br":
      return (
        <Reorder.Item
          dragListener={false}
          dragControls={dragControls}
          value={data}
        >
          <Br item={data} dragControls={dragControls} />
        </Reorder.Item>
      );
    case "h1":
      return (
        <Reorder.Item
          dragListener={false}
          dragControls={dragControls}
          value={data}
        ></Reorder.Item>
      );
    case "h2":
      return (
        <Reorder.Item
          dragListener={false}
          dragControls={dragControls}
          value={data}
        >
          <TextAreaBlock item={data} dragControls={dragControls} />
        </Reorder.Item>
      );
    case "text":
      return (
        <Reorder.Item
          dragListener={false}
          key={data.unicalId}
          dragControls={dragControls}
          value={data}
        >
          <TextAreaBlock item={data} dragControls={dragControls} />
        </Reorder.Item>
      );
    default:
      return null;
  }
};

export default observer(ConstructorBlocks);
