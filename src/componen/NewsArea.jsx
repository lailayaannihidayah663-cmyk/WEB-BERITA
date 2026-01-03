
import { useEffect, useState } from "react"
import NewsItems from "./NewsItems";

const NewsArea = ({category}) => {
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url =` https://newsapi.org/v2/top-headlines?country=us&apiKey=7bef4672016e4b8997b593de48bf569e`
        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    },[category])
  return(
   <div>
    <h2 className="text-center my-4">Latest
      <span className="badge bg-danger">News</span>
    </h2>
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {articles&&articles.map((news,index)=>{
        return <NewsItems
        key={index}
        title={news.title}
        description={news.description}
        src={news.urlToImage}
        url={news.url}
        />
      })}
      </div>
      </div>
  )}
export default NewsArea