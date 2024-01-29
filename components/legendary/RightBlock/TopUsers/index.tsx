import React, {useEffect, useState} from 'react';
import styles from './TopUsers.module.scss'
import UserItem from "./UserItem";
import { getTopUsers } from '../../../../features/new/getTopUsers/getTopUsers';

const TopUsers = () => {

  const [active, setActive] = useState(0)
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    setUsers(await getTopUsers())
    console.log(users, await getTopUsers())
  }

  useEffect(() => {
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.topUsers}>
      <h3 className={styles.title}>Топ пользователей</h3>
      <div className={styles.list}>
        {
          users?.length && users?.map((item : any, index : number) => {
            return (
              <UserItem key={index} index={index} get={active} set={setActive} data={item}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default TopUsers;
