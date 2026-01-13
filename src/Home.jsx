import Header from './Header'
import FilterSortMenu from './FilterSortMenu'
import ArticleList from './ArticleList'

import { useState, useEffect } from 'react'

import * as api from './api'

function Home () {
    const [articles, setArticles] = useState([])

    const fetchArticle = () => {
        api
            .getArticle()
            .then((articles) => {
                setArticles(articles)
            })
    }

    useEffect(() => {
        fetchArticle()
    },[])

    return (
        <div className='home'>
            <Header/>
            <FilterSortMenu/>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default Home