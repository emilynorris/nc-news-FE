import Header from './Header'
import FilterSortMenu from './FilterSortMenu'
import ArticleList from './ArticleList'

function Home () {
    return (
        <div>
            <Header/>
            <FilterSortMenu/>
            <ArticleList/>
        </div>
    )
}

export default Home