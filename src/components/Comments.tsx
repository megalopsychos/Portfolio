'use client'

import Giscus from '@giscus/react'

export default function Comments() {
  return (
    <div className="mt-10 pt-10 border-t">
      <Giscus
        id="comments"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
        repo="megalopsychos/portfolio"
        repoId="R_kgDOOkYzOQ"
        category="General"
        categoryId="DIC_kwDOOkYzOc4Cp1hy"
      />
    </div>
  )
}