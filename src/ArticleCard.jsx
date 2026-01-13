function ArticleCard ({article}) {
    const { author, title, topic, created_at, votes, article_img_url, comment_count } = article

    const dateFormatted = new Date (created_at).toLocaleString()

    return (
      <li className='articleCard'>
        <div className='articleImage'>
          <img src={article_img_url} alt={`Image for ${title}`} />
        </div>

        <div className='articleText'>
            <h3>{title}</h3>
            <p>Written by {author}</p>
            <p>{dateFormatted}</p>
            <p>{votes} votes</p>
            <p>{comment_count} comments</p>
            <p>Topic: {topic}</p>
        </div>
      </li>  
    )
}

export default ArticleCard