import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import Code from "./Code"

import cover from '../assets/img/cover.jpeg'
import '../styles/Post.css'

const Post = () => {
  const [postContent, setPostcontent] = useState('')
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    import('../tutorials/tutorial1.md')
      .then(res =>
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostcontent(response))
          .catch(err => console.log(err))
      )
  }, [])

  return (
    <div className="article-wrapper">
      <article>
        <header>
          <div className="article__cover">
            <img
              src={cover}
              alt="my-cover"
            />
          </div>
        </header>
        <main>
          <Markdown
            options={{
              overrides: {
                Code: {
                  component: Code,
                  props: {
                    isDark,
                    setIsDark
                  }
                }
              }
            }}
          >
            {postContent}
          </Markdown>
        </main>
      </article>
    </div>
  )
}

export default Post