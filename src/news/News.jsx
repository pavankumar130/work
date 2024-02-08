import React from 'react'
import { useEffect, useState } from 'react'
import './Style.css'
import { useParams } from 'react-router-dom'
import Header from '../Commons/Header'
import axios from 'axios'

function NewsComponent(props) {
  return (
    <div className="news-card" style={{width:'60%'}}>
      <div className="news-details" style={{width:'65%',marginRight:'28px'}}>
        <div className="news-heading" style={{color:'#174AE4',opacity:'0.7',marginTop:'10px'}}>
          <a href={props.link}>{props.title}.</a>
        </div>
        <div className="news-mini-details">
          <span>
            <strong>{props.author}</strong>
          </span>
        </div>
        <div className="news-snippet">
          <span>{props.snippet}</span>
        </div>
      </div>
      {
        props.url ? (
          <div className="news-image">
            <img src={props.url} alt="" />
          </div>
        ) : null
      }
    </div>
  )
}
export default function Result() {
  const { name } = useParams()
  const [News, SetNewsData] = useState([])
  const [altNews,setAltNews] = useState([])

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${name}&apiKey=e177595e25c446c08d579556a5a8d16a`
    )
      .then((response) => response.json())
      .then((News) => SetNewsData(News.articles))
      .catch((error) => console.error(error))
    console.log(News)
  }, [])

  useEffect(() => {
    async function getNews() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/news/${name}`);
        console.log(response.data);
        setAltNews(response.data);
      } catch (error) {
        console.error('Error fetching data from Wikipedia:', error);
      }
    }

    getNews();
  }, []);


  return (
    <>
      <div className="news_result">
        <Header />
        <div className="news-container" style={{overflowY:'scroll',height:'100%', width:'90%'}}>
          {News.length > 0 ? News.map((news) => (
            <NewsComponent
              title={news.title}
              link={news.url}
              url={news.urlToImage}
              snippet={news.description}
              author={news.source.name}
            />
          )) : altNews.map((news) => (
            <NewsComponent
              title={news.title}
              link={news.url}
              url={news.image}
              snippet={news.body}
              author={news.source}
            />
          ))}
        </div>
      </div>
    </>
  )
}
