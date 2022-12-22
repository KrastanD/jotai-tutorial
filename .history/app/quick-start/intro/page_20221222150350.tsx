"use client"

import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react";
import Markdown from 'react-markdown';
import { markdown } from './markdown'
import files from './code';
import setupStyles from './styles';

function page() {
    return (
        <div className='lesson-cont'>
            <div className='mark-cont'>
                <Markdown
                    children={markdown}
                />
            </div>

                <Sandpack
                    template="react"
                      files={{
                        ...files,
                        ...setupStyles
                      }}

                    options={{
                        classes: {
                            "sp-wrapper": "custom-wrapper",
                            "sp-layout": "custom-layout",
                            "sp-tab-button": "custom-tab",
                        },
                    }}
                    customSetup={{
                        dependencies: {
                            "jotai": "^1.12.0",
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default page