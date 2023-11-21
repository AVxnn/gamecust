import React, { useContext, useEffect } from 'react'
import styles from "./ChangeProfileBlock.module.scss"
import { useRouter } from 'next/router'
import Drafts from './Drafts'
import Comments from './Comments'
import PostList from '../PostList'
import { Context } from '../../../../pages/_app'
import { observer } from 'mobx-react-lite'

const ChangeProfileBlock = ({data, user} : any) => {

    const {mobxStore} = useContext(Context);

    const fetchData = async (page : any) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post/getPosts/filter/${data[0].userId}/${page}`);
        
        return await res?.json()
    }

    const posts = data.filter((e: any) => e.published)
    const drafts = data.filter((e: any) => !e.published)
    const router = useRouter() as any

    useEffect(() => {
        fetchData(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    switch (router.query.id[1]) {
        case 'entries':
            return <PostList PostData={posts} fetchData={fetchData} textEmpty={'Создайте свой первый пост'}/>
        case 'comments':
            return <Comments />
        case 'drafts':
            return <Drafts data={drafts} user={user}/>
        default:
            return <PostList PostData={posts} fetchData={fetchData} textEmpty={'Создайте свой первый пост'}/>;
    }
}

export default observer(ChangeProfileBlock)