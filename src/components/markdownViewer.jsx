import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useState, useEffect} from 'react';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import CodeCopyOption from './codeCopyOption';
export default function MarkDownViewer({ src}) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(src)
            .then((response) => response.text())
            .then((text) => setContent(text));
    }, [src]);

    return (
        <article className="prose prose-invert max-w-none text-left text-white">
            <ReactMarkdown 
                rehypePlugins={[rehypeHighlight]}
             components={{
    code({children, className, ...props}) {
        return (
            <code className={className} {...props}>
                {children}
            </code>
        );
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