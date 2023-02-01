import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
   return (
      <div><h1 className={styles.root}>Not found</h1>
         <p className={styles.description}>sorry :-(</p></div>
   )
}

export default NotFoundBlock