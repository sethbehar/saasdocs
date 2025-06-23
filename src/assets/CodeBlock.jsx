import { useState } from 'react'

const styles = {
  codeBlock:
    'language-bash font-mono whitespace-pre-wrap text-white bg-gray-100 dark:bg-gray-800 p-4 rounded-lg block',
  button:
    'absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center',
  icon: 'w-4 h-4 mr-1',
}

export default function CodeBlock({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative w-full">
      <pre className="overflow-x-hidden">
        <code className={styles.codeBlock}>{text}</code>
      </pre>
      <button onClick={handleCopy} className={styles.button}>
        {copied ? (
          'Copied!'
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2m-4-14h4a2 2 0 012 2v4m-6 10h4a2 2 0 002-2v-4m-10 0h4a2 2 0 002-2V7m-6 0h4a2 2 0 012-2"
              />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  )
}
