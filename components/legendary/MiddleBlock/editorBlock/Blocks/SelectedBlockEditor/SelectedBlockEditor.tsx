import React, { useContext, useEffect, useState } from 'react'
import styles from "./SelectedBlockEditor.module.scss"
import LinkIcon from '../../../../../../public/img/svg/LinkIcon'
import Bold from '../../../../../../public/img/svg/Bold'
import Italic from '../../../../../../public/img/svg/Italic'
import { Context } from '../../../../../../pages/_app'
import { observer } from 'mobx-react-lite'
import Arrow from '../../../../../../public/img/svg/Arrow'
import { motion } from 'framer-motion'

const SelectedBlockEditor = ({ posLeft, selectedText, item} : any) => {

    const {postCreateStore} = useContext(Context);

    const [isLinkOpen, setIsLinkOpen] = useState(false);

    const [isLink, setIsLink] = useState(false);
    const [isBold, setIsBold] = useState('');
    const [isItalic, setIsItalic] = useState('');

    const [link, setLink] = useState('');

    const isWordInBoldTag = (word: string) => {
        const div = document.createElement('div');
        div.innerHTML = item.value;

        const italicTags = div.querySelectorAll('i') as any;
        for (const tag of italicTags) {
          if (tag.textContent.includes(word)) {
            console.log('split')
            setIsItalic('split')
          }
        }
        
        const beforeWord = item.value.charAt(item.value.indexOf(word) - 2); // Буква перед словом
        const afterWord = item.value.charAt(item.value.indexOf(word) + word.length + 2);
        
        if (beforeWord == 'i' && afterWord == 'i') {
            console.log('all');
            setIsItalic('all')
        }
    
        const boldTags = div.querySelectorAll('b') as any;
        for (const tag of boldTags) {
          if (tag.textContent.includes(word)) {
            console.log('split')
            setIsBold('split')
          }
        }
        
        if (beforeWord == 'b' && afterWord == 'b') {
            console.log('all');
            setIsBold('all')
        }
        console.log(isItalic, item.value);
        
        return false;
    };

    const boldHandler = () => {
        isWordInBoldTag(selectedText)
        if (isBold == 'split' && selectedText !== ' ') {
            postCreateStore.updateItem({...item, value: item.value.replace(`${selectedText}`, `</b>${selectedText}<b>`)})
        } else if (isBold == 'all' && selectedText !== ' ') {
            postCreateStore.updateItem({...item, value: item.value.replace(`<b>${selectedText}</b>`, `${selectedText}`)})
        } else if (selectedText !== ' ') {
            postCreateStore.updateItem({...item, value: item.value.replace(`${selectedText}`, `<b>${selectedText}</b>`)})
        }
    }

    const italicHandler = () => {
        isWordInBoldTag(selectedText)
        if (isItalic == 'split' && selectedText !== ' ') {
            postCreateStore.updateItem({...item, value: item.value.replace(`${selectedText}`, `</i>${selectedText}<i>`)})
        } else if (isItalic == 'all' && selectedText !== ' ') {
            postCreateStore.updateItem({...item, value: item.value.replace(`<i>${selectedText}</i>`, `${selectedText}`)})
        } else if (selectedText !== ' ') {
            postCreateStore.updateItem({...item, value: item.value.replace(`${selectedText}`, `<i>${selectedText}</i>`)})
        }
    }

    const isLinkHandler = () => {
        setIsLinkOpen(true)
    }

    const LinkHandler = () => {
        if (link !== '') {
            const resultText = item.value.replace(`${selectedText}`, `<a href='${link}' target="_blank">${selectedText}</a>`)
            postCreateStore.updateItem({...item, value: resultText})
        }
        // const newContent = item.value.replace(new RegExp(`<a href="[^"]+">${selectedText}</a>`), selectedText);
        // postCreateStore.updateItem({...item, value: newContent})
    }

    useEffect(() => {
        if (selectedText) {
            isWordInBoldTag(selectedText)
        }
    }, [selectedText])


    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2, type: 'spring' }}
            className={styles.block} 
            style={{left: `${posLeft.left || 0}px`, top: `${posLeft.top - 60 || 0}px`}}
        >
            {
                isLinkOpen ? (
                    <>
                        <li onClick={isLinkHandler} className={styles.arrow}>
                            <Arrow />
                        </li>
                        <li onClick={LinkHandler} className={styles.input}>
                            <input onChange={(e) => setLink(e.currentTarget.value)} type="text" placeholder='Вставь ссылку'/>
                        </li>
                    </>
                ) : (
                    <>
                        <li onClick={boldHandler} className={styles.item}>
                            <Bold />
                        </li>
                        <li onClick={italicHandler} className={styles.item}>
                            <Italic />
                        </li>
                        <li onClick={isLinkHandler} className={styles.item}>
                            <LinkIcon />
                        </li>
                    </>
                )
            }
        </motion.div>
    )
}

export default observer(SelectedBlockEditor)