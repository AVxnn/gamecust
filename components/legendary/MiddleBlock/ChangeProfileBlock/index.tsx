import React, { useContext } from 'react'
import styles from "./ChangeProfileBlock.module.scss"
import { useRouter } from 'next/router'
import Drafts from './Drafts'
import Comments from './Comments'
import PostList from '../PostList'
import { Context } from '../../../../pages/_app'

const ChangeProfileBlock = ({data} : any) => {

    const {mobxStore} = useContext(Context);

    const fetchData = async (page : any) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/filter/${data[0].userId}/${page}`);
        console.log(data[0].userId);
        console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/filter/${data[0].userId}/${page}`);
        
        
        return await res?.json()
    }

    const posts = data.filter((e: any) => e.published)
    const drafts = data.filter((e: any) => !e.published)
    const router = useRouter() as any
    
    console.log(posts);

    switch (router.query.id[1]) {
        case 'entries':
            return <PostList PostData={posts} fetchData={fetchData}/>
        case 'comments':
            return <Comments />
        case 'drafts':
            return <Drafts data={drafts} />
        default:
            return <PostList PostData={posts} fetchData={fetchData}/>;
    }
}

export default ChangeProfileBlock