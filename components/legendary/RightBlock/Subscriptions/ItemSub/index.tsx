import React, { useEffect, useState } from 'react'
import styles from './ItemSub.module.scss'
import Image from "next/image"
import Link from 'next/link'
const ItemSub = ({user} : any) => {

    const [userData, setUserData] = useState<any>({})
    console.log(user);
    
    const getUser = async () => {
        const userData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/getUserId/${user}`);
        setUserData(await userData?.json())
    }

    useEffect(() => {
        getUser()
    }, [user])
    console.log(userData);
    
    return (
       <Link href={`/profile/${userData.username}`}> 
        <div className={styles.item}>
                {
                    !userData?.username ? (
                        <Image layout={'fill'} src={''} alt={''} />
                    ) : (
                        <div className={styles.noImage}></div>
                    )
                }
                <span className={styles.username}>{userData.username}</span>
            </div>
        </Link>
    )
}

export default ItemSub