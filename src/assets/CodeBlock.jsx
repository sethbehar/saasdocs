import { useState } from 'react'

const styles = {
  codeBlock:
    'language-bash font-mono whitespace-pre text-white bg-gray-100 dark:bg-gray-800 p-4 rounded-lg block',
  button:
    'absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition',
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
      <pre className="overflow-x-auto">
        <code className={styles.codeBlock}>{text}</code>
      </pre>
      <button onClick={handleCopy} className={styles.button}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}
