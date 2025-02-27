import React, { useState } from 'react';

function CodeSnippet({code}) {
    
    
    const [showMore, setShowMore] = useState(false);
    const codeLines = code.split('\n');
    const initialLines = codeLines.slice(0, 10).join('\n');
    const remainingLines = codeLines.slice(10).join('\n');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            alert('Code copied to clipboard!');
        }).catch((err) => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="my-2 bg-[#242424] text-[#48BCFF] rounded-2xl">

            <div className=" px-3 flex justify-between items-center bg-[#454545] rounded-t-2xl py-5">
                <h2 className="text-white font-bold">C Code </h2>
                <button onClick={copyToClipboard} className="hover:cursor-pointer text-white font-bold py-1 px-2 rounded">
                    <span class="material-symbols-outlined">
                        content_copy
                    </span>
                </button>
            </div>
            <pre className="mt-2 overflow-x-auto px-3">
                <code className="language-c">
                    {initialLines}
                    {showMore && '\n' + remainingLines}
                </code>

                {codeLines.length > 10 && (
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="mb-2 mx-3 hover:cursor-pointer text-white font-bold px-2"
                    >
                        {showMore ? 'Show Less' : '....See More'}
                    </button>
                )}

            </pre>

        </div>
    );
}

export default CodeSnippet;
