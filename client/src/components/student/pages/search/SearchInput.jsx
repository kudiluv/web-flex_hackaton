import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './styles/search.module.css';
import { fetchSearch } from "../../../store/thunks/search";

const SearchInput = (props) => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(fetchSearch(`/lectures/search?keyword=${value}&page=${props.page}`));
    }
    return (
        <div className={styles.search__form}>
            <input className={styles.search__input} type="text" onChange={event => setValue(event.target.value)} value={value} placeholder="Найти..."/>
            <button className={styles.search__button} onClick={handleSubmit}>
                <svg width="24" height="24" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.4968 31.9889L29.2914 24.7847C28.9662 24.4595 28.5253 24.2789 28.0628 24.2789H26.8848C28.8795 21.7282 30.0647 18.5199 30.0647 15.0298C30.0647 6.72727 23.3363 0 15.0323 0C6.72842 0 0 6.72727 0 15.0298C0 23.3323 6.72842 30.0596 15.0323 30.0596C18.523 30.0596 21.7319 28.8745 24.283 26.8802V28.058C24.283 28.5205 24.4637 28.9612 24.7889 29.2864L31.9943 36.4906C32.6737 37.1698 33.7722 37.1698 34.4443 36.4906L36.4896 34.4457C37.1689 33.7664 37.1689 32.6681 36.4968 31.9889ZM15.0323 24.2789C9.9228 24.2789 5.78167 20.1457 5.78167 15.0298C5.78167 9.9211 9.91557 5.78069 15.0323 5.78069C20.1419 5.78069 24.283 9.91387 24.283 15.0298C24.283 20.1385 20.1491 24.2789 15.0323 24.2789Z" fill="black"/>
                </svg>
            </button>
        </div>
    )
}

export default SearchInput;