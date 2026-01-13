import axios from 'axios'

export const getArticle = () => {
    return axios
        .get('https://northcoders-news-ihiu.onrender.com/api/articles', {
        })
        .then (({ data }) => {
            return data.articles
        })
}