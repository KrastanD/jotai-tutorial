import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react";
import Markdown from 'react-markdown';
import { markdown } from './markdown'

function page() {
  return (
    <div>
        <div>
        <Markdown
            children: String={markdown}
          />
        </div>
    </div>
  )
}

export default page