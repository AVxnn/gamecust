import React from 'react'
import MediaUpload from '../../../common/PostPreview/common/SelectForm/ui/MediaUpload';
import LinkUpload from '../../../common/PostPreview/common/SelectForm/ui/LinkUpload';
import TextAreaBlock from '../Blocks/TextAreaBlock';
import Br from '../../../common/PostPreview/common/SelectForm/ui/Br';

const ConstructorBlocks = (data : any) => {
    switch (data.data.type) {
      case 'media':
        return <MediaUpload item={data.data} />
      case 'link':
        return <LinkUpload item={data.data} />
      case 'br':
        return <Br item={data.data} />
      case 'h1':
        return <TextAreaBlock item={data.data} />
      case 'text':
        return <TextAreaBlock item={data.data} />
      default:
        return null;
    }
  }

export default ConstructorBlocks
