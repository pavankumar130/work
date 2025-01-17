import React, { useState,useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import { useParams } from "react-router-dom";

function Container() {
  const { name } = useParams();
  const [imgData, setimgData] = useState([]);

  useEffect(() => 
  {
    const fetchImages = async () =>
    {
      try
      {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&q=${name}&key=AIzaSyBgp3Q7UJ7630cKu0yjXi8c_Dp7mKwAUC8');
        console.log(response);
      }
      catch(error)
      {
        console.log(error);
      }
    }

    fetchImages();
  },[]);


  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&q=${name}&key=AIzaSyBgp3Q7UJ7630cKu0yjXi8c_Dp7mKwAUC8`);
  //       const data = await response.json();
  //       setimgData(data.items);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchImages();
  // }, []);

  // const videoLink = `https://www.youtube.com/watch?v=${imgData.videoId}`;

  return (
    <>
      <div style={{ display: "flex", marginTop:"10px" }}>
        <div
          className="dg_b isvctrl"
          role="main"
          data-ufmc="savim1"
          data-sfmc="savim2"
          data-svitminfp='{"SourceAttr":"m","Mapping":"murl:MediaUrl,purl:PageUrl,mid:MediaId","Loc":"C","ItemTagPath":"","AttachToElementSelector":"","AttachDelay":0}'
          data-svptnk="Images"
          data-persbtncls="psvctrl"
          data-svptnerinfo='{"PredefinedCollectionType":"ImageDefault","Title":"Saved Images","CollectionId":"","ItemType":"image","APIItemType":"images","CollectionTagPath":""}'
          data-svcptid="ImageResults"
          data-pagewidth={1457}
          data-clientwidth={0}
          data-disablerefreshoniframe={1}
          data-reloadableiniframe=""
          style={{ display: "inline-flex", marginLeft:"40px" }}
        >
          <div
            id="mmComponent_images_2"
            className="dgControl dtl hover"
            style={{
              gridTemplateColumns:"repeat(4, minmax(350px, 1fr))",
              display: "grid",
              gap: "1.8 rem",

              gridAutoRows: "345px",
              gridAutoFlow: "dense",
              width: "auto",
            }}
            data-nexturl="/images/async?q=narendra+modi&first=45&count=35&cw=1024&ch=768&relp=35&datsrc=I&layout=RowBased&apc=0&relo=2&relr=9&rely=1525&mmasync=1&dgState=x*193_y*1525_h*185_c*1_i*36_r*9"
            data-postdata=""
            data-iid="images.5996"
            data-layout="row"
          >
            {imgData?.map((val,index) => {
              return (
                <ImageCard
                  channelTitle={val.channelTitle}
                  link={val.id.videoId}
                  imgurl={val.snippet.thumbnails.high.url}
                  info={val.snippet.title}
                  key = {index}
                />
              );
            })}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Container;
