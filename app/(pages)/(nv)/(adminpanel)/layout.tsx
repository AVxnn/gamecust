"use client"

import { useRouter } from 'next/navigation';
import styles from "./layout.module.scss"
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../layout';
import { observer } from 'mobx-react-lite';
import LeftPanel from '../../../../components/adminPanel/leftMenu';

const Adminlayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { mobxStore } = useContext(Context);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function checkRole() {
            if (!!mobxStore.user.id) {
                const roles = mobxStore.user.roles
                if (!roles || !roles.includes('admin')) {
                  return router.push('/');
                }
                setLoading(true)
            } else {
                router.push('/');
            }
        }
        checkRole();
      }, [mobxStore.user, router]);

    return loading ? (
        <div className={styles.layout}>
            <div className={styles.leftColumn}>
                <LeftPanel />
            </div>
            <div className={styles.middleColumn}>{children}</div>
            <div className={styles.rightColumn}>
            </div>
        </div>
    ) : (<></>)
}

export default observer(Adminlayout)