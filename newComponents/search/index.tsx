import React from 'react'
import Input from '../../components/legendary/input'
import styles from "./search.module.scss"
import Search from '../../public/img/svg/Search'

const SearchComponent = () => {
  return (
    <div className={styles.container}>
      <Input icon={<Search/>} placeholder={'Поиск'} />
    </div>
  )
}

export default SearchComponent