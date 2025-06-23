import CodeBlock from "../assets/CodeBlock"
const Setup = () => {

    return (
        <div className="ml-12 py-12">
            <div className="flex flex-row gap-1 items-center mb-12">
                <h1 className="text-2xl md:text-4xl">Setup</h1>
                <img src="/react.png" alt="React" className="w-12 h-12 mt-1" />
                <img src='vite.png' alt="Vite" className="w-12 h-12 mt-1" />
            </div>

            {/* React + Vite Setup */}
            <div className="mb-4 flex flex-col gap-2">
                <span className="text-2xl text-black ">React + Vite</span>
                <p>
                    First things first, lets create our Vite project. Open an empty folder and the following commands in your terminal:
                </p>
                <div className="space-y-4 text-sm md:text-md">
                    <CodeBlock text="npm create vite@latest ." />
                    <p>This will create our Vite project, using the '.' will populate the project in the current directory.</p>
                    <CodeBlock text="npm install" />
                    <p>Next, install the project dependencies.</p>
                    <CodeBlock text="npm run dev" />
                    <p>Finally, we can start the development server.</p>
                </div>
            </div>

            {/* Tailwind CSS Setup */}
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center mt-12">
                    <span className="text-2xl text-black">Tailwind</span>
                    <img src="/tailwind.png" alt="Tailwind CSS" className="w-8 h-6" />
                </div>
                <p>
                    To setup our styling framework (Tailwind CSS), we can run the following command in our terminal:
                </p>
                <div className="mt-4 space-y-4 text-sm md:text-md">
                    <CodeBlock text="npm install tailwindcss @tailwindcss/vite" />
                    <p>Next, we need to reconfigure our <span className="text-yellow-500 dark:bg-gray-800 p-1 rounded-lg">vite.config.ts</span> file.</p>
                    <p>Add this import and tailwindcss to the plugins array</p>
                    <CodeBlock text={`import tailwindcss from '@tailwindcss/vite'`} />
                    <CodeBlock text={`tailwindcss()`} />
                    <p>Finally, add the import statement to our <span className="text-white dark:bg-gray-800 p-1 rounded-lg">index.css</span> file.</p>
                    <CodeBlock text={`@import "tailwindcss";`} />
                </div>
            </div>

            {/* Routing Setup */}
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center mt-12">
                    <span className="text-2xl text-black">React Router</span>
                    <img src="/react.png" alt="React" className="w-8 h-8" />
                </div>
                <p>
                    To setup our routing library (React Router), we can run the following command in our terminal:
                </p>
                <div className="mt-4 space-y-4 text-sm md:text-md">
                    <CodeBlock text="npm install react-router-dom" />
                    <p>Next, we need to configure our <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">main.jsx</span> file.</p>
                    <p>Add the following code to setup the router:</p>
                    <CodeBlock text={`import { BrowserRouter } from 'react-router-dom';`} />
                    <p>Then, wrap the <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">App</span> component with the <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">BrowserRouter</span>:</p>
                    <CodeBlock text={`<BrowserRouter> <App /> </BrowserRouter>`} />
                    <p>Next, in the <span className="text-blue-300 dark:bg-gray-800 p-1 rounded-lg">App</span> component, we can define our routes:</p>
                    <CodeBlock text={`import { Routes, Route } from 'react-router-dom'`} />
                    <p>Here is an example routing setup:</p>
                    <img src="/routing_example.png" alt="Router Setup" className="w-1/2 h-auto mt-4 rounded-lg shadow-md " />
                </div>
            </div>
        </div>
    )
}


export default Setup