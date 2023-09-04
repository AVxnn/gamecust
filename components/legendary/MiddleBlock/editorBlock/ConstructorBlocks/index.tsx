import React from 'react'
import MediaUpload from '../../../common/PostPreview/common/SelectForm/ui/MediaUpload';
import LinkUpload from '../../../common/PostPreview/common/SelectForm/ui/LinkUpload';
import TextAreaBlock from '../Blocks/TextAreaBlock';
import Br from '../../../common/PostPreview/common/SelectForm/ui/Br';
import { Reorder, useDragControls } from 'framer-motion';

const ConstructorBlocks = (data : any) => {

    const dragControls = useDragControls();
    console.log(data.data.unicalId);
    
    switch (data.data.type) {
      case 'media':
        return (
          <Reorder.Item dragListener={false} key={data.data.unicalId} dragControls={dragControls} value={data.data}>
            <MediaUpload item={data.data} dragControls={dragControls} />
          </Reorder.Item>
        )
      case 'link':
        return (
          <Reorder.Item dragListener={false} key={data.data.unicalId} dragControls={dragControls} value={data.data}>
            <LinkUpload item={data.data} />
          </Reorder.Item>
        )
      case 'br':
        return (
          <Reorder.Item dragListener={false} key={data.data.unicalId} dragControls={dragControls} value={data.data}>
            <Br item={data.data} />
          </Reorder.Item>
        )
      case 'h1':
        return (
          <Reorder.Item dragListener={false} key={data.data.unicalId} dragControls={dragControls} value={data.data}>
            <TextAreaBlock item={data.data} dragControls={dragControls}/>
          </Reorder.Item>
        )
      case 'text':
        return (
          <Reorder.Item dragListener={false} key={data.data.unicalId} dragControls={dragControls} value={data.data}>
            <TextAreaBlock item={data.data} dragControls={dragControls}/>
          </Reorder.Item>
        )
      default:
        return null;
    }
  }

export default ConstructorBlocks
