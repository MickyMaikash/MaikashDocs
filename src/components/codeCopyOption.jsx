import React, { useState } from "react";

export default function CodeCopyOption({ children }) {

    const [copied, setCopied] = useState(false);


function copyToClipboard() {

    function extractText(node) {

        if (typeof node === "string") {
            return node;
        }

        if (Array.isArray(node)) {
            return node.map(extractText).join("");
        }

        if (node?.props?.children) {
            return extractText(node.props.children);
        }

        return "";
    }


    const code = extractText(children).replace(/\n$/, "");


    navigator.clipboard.writeText(code).then(() => {

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);

    });
}

    return (
        <div className="relative">

            <button
                onClick={copyToClipboard}
                className={`
                    absolute right-3 top-3
                    bg-gray-700
                    px-2 py-1
                    rounded
                    hover:bg-[#30333d]
                    hover:text-blue-400
                    text-xs
                     ${copied ? "text-green-400" : "text-white"}
                `}
            >
                {copied ? "✓ Copied" : "Copy"}
            </button>


            <pre
                className="
                    overflow-x-auto
                    rounded-xl
                    border
                    border-gray-800
                    bg-[#0d1117]
                    pt-2
                    m-0
                "
            >
                {children}
            </pre>

        </div>
    );
}