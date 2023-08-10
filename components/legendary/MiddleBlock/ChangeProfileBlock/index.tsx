import React from 'react'
import styles from "./ChangeProfileBlock.module.scss"
import { useRouter } from 'next/router'
import Drafts from './Drafts'
import Comments from './Comments'
import PostList from '../PostList'

const ChangeProfileBlock = ({data} : any) => {
    const posts = data.filter((e: any) => e.published)
    const drafts = data.filter((e: any) => !e.published)
    const router = useRouter() as any
    switch (router.query.profile[1]) {
        case 'entries':
            return <PostList PostData={posts}/>
        case 'comments':
            return <Comments />
        case 'drafts':
            return <Drafts data={drafts} />
        default:
            return <PostList PostData={posts}/>;
    }
}

export default ChangeProfileBlock