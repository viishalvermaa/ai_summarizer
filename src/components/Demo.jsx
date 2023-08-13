import { useState, useEffect } from "react"

import { copy, linkIcon, loader, tick} from '../assets'

import {useLazyGetSummaryQuery} from '../services/article'

const Demo = () => {

  const [article, setArticle] = useState({
    url:'',
    summary:'',
  });

  const [getSummary, {error, isFetching}]= useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await getSummary({articleUrl: article.url});

    if(data?.summary){
      const newArticle={...article, summary:data.summary}

      setArticle(newArticle);

      console.log(newArticle);
    }
  }

  return (
    <section className="w-full mt-16 max-w-xl">

      {/* Search */}
      <div className="w-full flex flex-col gap-2">
        <form 
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img 
            src={linkIcon} 
            alt="link_icon" 
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input 
            type="url" 
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>setArticle({
              ...article, url: e.target.value
            })}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn
            peer-focus:border-gray-700
            peer-focus:text-gray-700"
          >
            ↵              
          </button>

        </form>
      </div>




    {/* Display Results */}
    
    <div className="my-10 max-w-full flex justify-center items-center">
      {isFetching ? (
        <img src={loader} alt="loader" className="w-20 h-20 object-contain"/>
      ) : error ?(
        <p className="font-inter font-bold text-black text-center">
          Well, that wasn't supposed to happen...
          <br />
          <span className="font-satoshi font-normal text-gray-700">
            {error?.data?.error}
          </span>
        </p>
      ) : (
        article.summary && (
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
              Article <span className="blue_gradient">Summary</span>
            </h2>
            <div className="summary_box">
              <p className="font-satoshi font-medium text-sm text-gray-700">{article.summary}</p>
            </div>
          </div>
        )
      )}
    </div>


    </section>
  )
}

export default Demo