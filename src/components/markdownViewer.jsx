import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useState, useEffect} from 'react';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import CodeCopyOption from './codeCopyOption';
import remarkGfm from "remark-gfm";
export default function MarkDownViewer({ src}) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(src)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, [src]);

    return (
        <article className="prose prose-invert max-w-none text-left text-white  
        prose-code:before:content-none
        prose-code:after:content-none">
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
             components={{
    code({children, className, ...props}) {

        //This Added to fix Inline Code Rendering Issue
        const isInline = !className;

        if (isInline) {
            return (
                <code
                    className="px-1.5 py-0.5 rounded bg-gray-800 text-sm"
                    {...props}
                >
                    {children}
                </code>
            );
        }

        //this is the earlier code block/large code rendering code
        return (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },

    //added this file for image correct render on site
    img({ src, alt, ...props }) {
    const imageSrc = src?.startsWith("/")
      ? `${import.meta.env.BASE_URL}${src.slice(1)}`
      : src;

    return <img src={imageSrc} alt={alt} {...props} />;
  },

    pre({children}) {
        return (
            <CodeCopyOption>
                {children}
            </CodeCopyOption>
        );
    }
}}
            >{content}</ReactMarkdown>
        </article>
    );
}