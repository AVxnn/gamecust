import React, { useEffect, useState } from 'react'
import styles from './ItemSub.module.scss'
import Image from "next/image"
import Link from 'next/link'
const ItemSub = ({user} : any) => {

    const [userData, setUserData] = useState<any>({})
    console.log(user);
    
    

    useEffect(() => {
        const getUser = async () => {
            const userData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/getUserId/${user}`);
            setUserData(await userData?.json())
        }

        getUser()
    }, [user])
    console.log(userData);
    
    return (
       <Link href={`/profile/${userData.username}`}> 
        <div className={styles.item}>
                {
                    userData.username ? (
                        <div className={styles.image}>
                            <Image layout={'fill'} src={'https://i.pinimg.com/736x/78/a6/de/78a6dee0461f3a04c067b4198730bfb2.jpg'} alt="ads"/>
                        </div>
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