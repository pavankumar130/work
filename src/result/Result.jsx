import React from 'react'
import { useEffect, useState } from 'react'
import './Style.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from '../Commons/Header'
import image from '../assets/4.png'
import RelatedSearch from './RelatedSearch'
import Pagination from './Pagination'
import NoDataFound from './NoDataFound'

import {MdVerified} from 'react-icons/md'

function WikiComponent(props) {
  const slicedExtract = props?.extract?.slice(0,200);
  console.log(props);
  return (
    <div className="wiki_container" style={{width:'23rem',height:'450px'}}>
      <img className="wiki_image_content" src={props.image} alt={props.title} style={{width:'100%',height:'45%',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>{' '}
      <div
        className="wiki_heading"
        style={{ textAlign: 'left', marginBottom: '10px',marginLeft:'8px'}}
      >
        <div
          className="main_heading"
          style={{ marginTop: '20px', marginBottom: '8px',padding:'0 8px' }}
        >
          <h2 style={{ fontSize: '28px'}}>
            <span>{props.title}</span>
          </h2>
        </div>
        <div
          className="sun_heading"
          style={{ fontSize: '18px', color: 'chocolate',padding:'0 8px' }}
        >
          <span style={{color:'#888888',fontFamily:'DDG_ProximaNova'}}>{props.description}</span>
        </div>
      </div>
      <div
        className="wiki_details"
        style={{ textAlign: 'left',padding:'0 8px',marginLeft:'8px' }}
      >
        <span style={{lineHeight:'23px'}}>
          {slicedExtract}{' '}
          <a href={props?.link} style={{ textDecoration: 'none' }}>
          {props?.extract?.length > 200 ? "...   " : "    "}
          read more
</a>

        </span>
      </div>
    </div>
  )
}
function ResultComponent(props) {
  return (
    <li className="b_algo">
      <div className="b_title" style={{lineHeight:'0'}}>
        <h2 style={{marginBottom : '0'}}>
          <a style={{color:'#1A0DAB',opacity:'0.8',fontWeight:'normal',fontSize:'18px'}} href={props.link} h="ID=SERP,5292.1">
            {props.title} {props.index < 10 ? <MdVerified style={{fontSize:'17px'}}/>:''}
          </a>
        </h2>
      </div>
      <div className="b_imgcap_altitle b_imgcap_alattr">
        <div className="b_imagePair square_mp reverse">
          <div
            className="b_attribution"
            u="3|5094|4802937594642996|jXaG3jOqUP-IH6J3UdURN5ccWGAXP6ee"
            tabIndex={0}
          >
            <cite style={{fontSize:'14px'}}>{props.displayLink}</cite>
            <span className="c_tlbxTrg">
              <span
                className="c_tlbxH"
                h="BASE:CACHEDPAGEDEFAULT"
                k="SERP,5293.1"
              />
            </span>
          </div>
          <p className="b_lineclamp2 b_algoSlug">
            <span className="news_dt" style={{fontSize:'14px',fontFamily: 'Raleway, sans-serif',color:'#494949'}} >
              {props.snippet}
            </span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default function Result() {
  const [Data, setData] = useState([])
  const [Totalresults, setDatatotal] = useState([])
  const [wiki, SetwikiData] = useState([])
  const { name } = useParams()

  useEffect(() => {
    async function getWikiData() {
      try {
        const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${name}`);
        SetwikiData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data from Wikipedia:', error);
      }
    }

    getWikiData(); 
  }, []);

  useEffect(() => {
    async function getSearchData() {
      try {
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAPe5RBxcHm1VyIEUVu1dRQO5M4W4EnYrI&cx=6563eb05187c74b28&q=${name}&start=0`);
        setDatatotal(response.data.items)
        console.log(response.data.items);
      } catch (error) {
        console.error('Error fetching data from Wikipedia:', error);
      }
    }

    getSearchData(); 
  }, []);

  return (
    <>
      <div>
        <Header page={'result'} />
        
        {/*Wikipedia header*/}
        <div id="b_content">
          <main aria-label="Search Results">
            {
              wiki.extract?.length? (<div className="aiResult example" style={{height:'40px'}}>
              <h1 style={{fontWeight:'700',color:'black',fontSize:'20px'}}>
                {wiki.title}
              </h1>
              <p style={{color:'black',marginTop:'10px',fontSize:'15px'}}>
                {wiki.extract}
              </p>
            </div>):''
            }


            {/* AI result box end*/}
            <div
              className="results_new"
              style={{ display: 'flex', height: '100%' }}
            >
              <ol id="b_results" className>
                {
                  Totalresults? Totalresults?.map((results,index) => (
                    <ResultComponent
                      title={results.title}
                      link={results.link}
                      displayLink={results.displayLink}
                      snippet={results.snippet}
                      index = {index}
                    />
                  )):<NoDataFound/>
                }

                <RelatedSearch title={wiki.title} name = {name}/>
                <Pagination title={wiki.title} />

                <li id="mfa_root" className="b_fabHide fabcolapse">
                  <div className="b_ds5">
                    <a
                      role="button"
                      className="mfa_btn"
                      id="mfa_srch"
                      aria-label="Search more"
                      href="javascript:void(0);"
                      h="ID=SERP,6977.1"
                    >
                      <div
                        className="fba_sbicn"
                        style={{ width: '40px', height: '40px' }}
                      />
                    </a>
                  </div>
                </li>
              </ol>

              {/* image={wiki.originalimage.source} */}
              {
                wiki?.extract?.length? (<WikiComponent
                  title={wiki?.title}
                  description={wiki?.description}
                  extract={wiki?.extract}
                  image = {wiki?.originalimage?.source} 
                  link = {wiki?.content_urls?.desktop?.page}
                />):''
              }
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
