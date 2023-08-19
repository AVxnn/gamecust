import React, { useEffect, useState } from 'react'
import styles from './ItemSub.module.scss'
import Image from "next/image"
import Link from 'next/link'
import ImageLoader from 'react-imageloader'
import ContentLoader from 'react-content-loader'

function preloader() {
    return (
        <ContentLoader  viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="32" />
        </ContentLoader>
    )
}

const ItemSub = ({user} : any) => {
    const [userData, setUserData] = useState<any>({})

    useEffect(() => {
        const getUser = async () => {
            const userData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserId/${user}`);
            setUserData(await userData?.json())
        }

        getUser()
    }, [user])
    console.log(userData);
    
    return (
       <Link href={`/profile/${userData.id}`}> 
        <div className={styles.item}>
                <div className={styles.image}>
                    <ImageLoader
                        className={styles.avatar}
                        src={`${process.env.NEXT_PUBLIC_AVATARS_URL}${user?.avatarPath}`}
                        wrapper={React.createFactory('div')}
                        preloader={preloader}>
                    </ImageLoader>
                    <Image layout={'fill'} src={`${process.env.NEXT_PUBLIC_AVATARS_URL}${userData.avatarPath}`} alt="ads"/>
                </div>
                <span className={styles.username}>{userData.username}</span>
            </div>
        </Link>
    )
}

export default ItemSub