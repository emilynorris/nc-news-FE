function ArticleCard ({article}) {
    const { author, title, topic, created_at, votes, article_img_url, comment_count } = article

    const dateFormatted = new Date (created_at).toLocaleDateString()

    return (
      <li className='articleCard'>
        <div className='articleContent'>
            <div className='articleImage'>
                <img src={article_img_url} alt={`Image for ${title}`} />
            </div>

            <div className='articleText'>
                <h3>{title}</h3>
                <p>Written by {author}, {dateFormatted}</p>
                <p>{votes} votes, {comment_count} comments</p>
                <p></p>
                <p>Topic: {topic.charAt(0).toUpperCase()+topic.slice(1)}</p>
            </div>
        </div>
      </li>  
    )
}

export default ArticleCard