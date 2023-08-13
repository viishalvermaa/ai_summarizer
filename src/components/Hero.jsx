import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open('https://github.com/viishalvermaa/ai_summarizer')}
          className="black_btn"  
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with
          <br className="max-md:hidden" />
          <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
      Facilitate easier reading with Summize, an article summarizer that converts long articles into clear and brief summaries.
      </h2>

    </header>
  )
}

export default Hero