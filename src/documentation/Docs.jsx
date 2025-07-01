import { Link } from "react-router-dom";
import { useState } from "react";
import Introduction from "./Introduction";
import Setup from "./Setup";
import Db from "./Db";
import Authentication from "./Authentication";
import Stripe from "./Stripe";
import Template from "./Template";

const Docs = () => {
    const [activeSection, setActiveSection] = useState('introduction')

    const sections = [
        { id: 'introduction', title: 'Introduction', component: <Introduction />, image: "/tailwind.png" },
        { id: 'setup', title: 'Setup', component: <Setup />, image: "/React.png" },
        { id: 'database', title: 'Database', component: <Db />, image: "/postgres.png" },
        { id: 'authentication', title: 'Auth', component: <Authentication />, image: "/Supabase.png" },
        { id: 'stripe', title: 'Stripe', component: <Stripe />, image: "/Stripe.png" },
        { id: 'hosting', title: 'Hosting', component: <div>Coming soon...</div>, image: "/vercel.png" },
        { id: 'deployment', title: 'Deployment', component: <div>Coming soon...</div>, image: "/railway.png" },
    ]

    const currentSection = sections.find(section => section.id === activeSection)

    return (
        <div className="text-black h-screen overflow-hidden">
            <div className="grid grid-cols-12 h-full">
                {/* Fixed Sidebar */}
                <div className="text-sm md:text-md col-span-3 lg:col-span-2 p-4 flex flex-col h-full overflow-y-auto border-r border-gray-200 overflow-x-hidden">
                    {/* <img src="/logo.png" alt="Logo" className="w-48 h-24 mb-4 mx-auto cursor-pointer" onClick={() => navigate('/')} /> */}
                    <Link to="/" className="text-2xl font-semibold mb-4">SaaS DocS</Link>
                    <nav className="flex-1">
                        <ul className="space-y-2 text-gray-500">
                            {sections.map(section => (
                                <div key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`block w-full text-left p-2 rounded hover:text-black cursor-pointer ${activeSection === section.id ? 'text-black' : ''
                                        }`}
                                >
                                    <div className="flex flex-row">
                                        <img src={section.image} alt={section.title} className="inline-block w-4 h-4 mr-2" />
                                        <span>{section.title}</span>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-auto border-2 py-4 px-1 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                        onClick={() => setActiveSection('template')}
                    >
                        <a
                            href="https://template-saas-docs.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center block text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            Try our SaaS Template
                        </a>
                    </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="col-span-9 lg:col-span-10 h-full overflow-y-auto">
                    <div className="p-6">
                        {currentSection?.component || <Introduction />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Docs
