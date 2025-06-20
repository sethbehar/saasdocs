import React from "react"
import { Link } from "react-router-dom";
import Introduction from "./Introduction";
import { useState } from "react";

const Docs = () => {
    const [activeSection, setActiveSection] = useState('introduction')

    const sections = [
        { id: 'introduction', title: 'Introduction', component: <Introduction />, image: "/Tailwind.png" },
        { id: 'setup', title: 'Setup', component: <div>Setup content</div>, image: "/React.png" },
        { id: 'database', title: 'Database', component: <div>Database content</div>, image: "/Postgres.png" },
        { id: 'authentication', title: 'Authentication', component: <div>Authentication content</div>, image: "/Supabase.png" },
        { id: 'stripe', title: 'Stripe', component: <div>Stripe content</div>, image: "/Stripe.png" },
        { id: 'hosting', title: 'Hosting', component: <div>Hosting content</div>, image: "/Vercel.png" },
        { id: 'deployment', title: 'Deployment', component: <div>Deployment content</div>, image: "/Railway.png" },
        { id: 'template', title: 'SaaS Template', component: <div>SaaS Template content</div>, image: "/Template.png" },
    ]

    const currentSection = sections.find(section => section.id === activeSection)

    return (
        <div className="text-black h-screen overflow-hidden">
            <div className="grid grid-cols-12 h-full">
                {/* Fixed Sidebar */}
                <div className="col-span-3 lg:col-span-2 p-6 flex flex-col h-full overflow-y-auto border-r border-gray-200">
                    <Link to='/' className="text-lg font-bold mb-10">Saas Docs</Link>

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

                    <div className="mt-auto pt-10">
                        <Link
                            to="#template"
                            className="text-center block text-gray-700 hover:text-primary-600 transition-colors"
                        >
                            Try our Saas Template
                        </Link>
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
