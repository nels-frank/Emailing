import React from "react";
import {
    FiArrowRight,
    FiBarChart2,
    FiCheckCircle,
    FiChevronRight,
    FiClipboard,
    FiMail,
    FiMessageSquare,
    FiSend,
    FiStar,
    FiUsers,
} from "react-icons/fi";

const Landing = () => {
    const features = [
        {
            icon: FiMail,
            title: "Email Campaigns",
            description:
                "Create and send professional email campaigns to your audience with ease.",
        },
        {
            icon: FiClipboard,
            title: "Powerful Surveys",
            description:
                "Collect meaningful feedback and understand what your users really think.",
        },
        {
            icon: FiBarChart2,
            title: "Clear Analytics",
            description:
                "Track campaign performance and survey responses from one simple dashboard.",
        },
        {
            icon: FiUsers,
            title: "Manage Contacts",
            description:
                "Organize your contacts and reach the right people with the right message.",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-white">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
                <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-10 lg:grid-cols-2 lg:px-8 lg:py-10">
                    {/* Hero Content */}
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                            <FiStar className="h-4 w-4" />
                            Smarter communication. Better feedback.
                        </div>

                        <h1 className="max-w-3xl text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl sm: text-center lg:text-4xl">
                            Connect with your audience.
                            </h1>
                            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl sm: text-center lg:text-3xl">
                            <span className="block text-blue-700">
                                Learn from their feedback.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg font-extrabold leading-8 text-slate-700 sm:text-xl sm: text-center">
                            Emailing helps you send engaging email campaigns,
                            create powerful surveys, and collect the insights
                            you need to make better decisions.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row items-center justify-center">
                            <a
                                href="/login"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-7 py-4 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
                            >
                                Start Building
                                <FiArrowRight className="h-5 w-5" />
                            </a>

                            <a
                                href="#features"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
                            >
                                Explore Features
                                <FiChevronRight className="h-5 w-5" />
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 items-center justify-center">
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                <FiCheckCircle className="h-5 w-5 text-blue-700" />
                                Simple to use
                            </div>

                            <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                <FiCheckCircle className="h-5 w-5 text-blue-700" />
                                Powerful analytics
                            </div>

                            <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                <FiCheckCircle className="h-5 w-5 text-blue-700" />
                                Built for teams
                            </div>
                        </div>
                    </div>

                    {/* Product Preview */}
                    <div className="relative">
                        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl sm:p-6">
                            {/* Browser Header */}
                            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                                    <div className="h-3 w-3 rounded-full bg-slate-300" />
                                </div>

                                <span className="text-l font-bold text-slate-500">
                                    Emailing Dashboard
                                </span>
                            </div>

                            {/* Dashboard Heading */}
                            <div className="mb-6">
                                <p className="text-l font-bold text-slate-500">
                                    Campaign Overview
                                </p>

                                <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
                                    Good morning 👋
                                </h2>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-blue-50 p-5">
                                    <FiSend className="mb-4 h-6 w-6 text-blue-700" />

                                    <p className="text-sm font-semibold text-slate-500">
                                        Emails Sent
                                    </p>

                                    <p className="mt-1 text-2xl font-extrabold text-slate-950">
                                        12,480
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-blue-700">
                                        +18.4%
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-indigo-50 p-5">
                                    <FiMessageSquare className="mb-4 h-6 w-6 text-indigo-700" />

                                    <p className="text-sm font-semibold text-slate-500">
                                        Responses
                                    </p>

                                    <p className="mt-1 text-2xl font-extrabold text-slate-950">
                                        2,846
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-indigo-700">
                                        +12.7%
                                    </p>
                                </div>
                            </div>

                            {/* Campaign Preview */}
                            <div className="mt-4 rounded-2xl border border-slate-200 p-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-slate-950">
                                            Customer Satisfaction Survey
                                        </p>

                                        <p className="mt-1 text-xs font-bold text-slate-600">
                                            Recent campaign
                                        </p>
                                    </div>

                                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                                        Active
                                    </span>
                                </div>

                                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                                    <div className="h-full w-[76%] rounded-full bg-blue-700" />
                                </div>

                                <div className="mt-2 flex justify-between text-xs font-semibold text-slate-500">
                                    <span>76% response progress</span>
                                    <span>1,824 responses</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl sm:block lg:-left-2">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
                                    <FiBarChart2 className="h-5 w-5" />
                                </div>

                                <div>
                                    <p className="text-xs font-bold text-slate-500">
                                        Engagement
                                    </p>

                                    <p className="text-lg font-extrabold text-slate-950">
                                        84.6%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section
                id="features"
                className="bg-slate-50 py-6 sm:py-6"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-700">
                            Everything you need
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-4xl">
                            Communication 
                            <p className="text-2xl font-bold text-blue-700 md:text-6xl lg:text-6xl">and feedback in one place</p>
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg font-extrabold leading-8 text-slate-600 sm:text-xl">
                            From sending your first campaign to understanding
                            thousands of responses, Emailing keeps the entire
                            process simple.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md transition duration-300 group-hover:scale-105">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-6 text-xl font-extrabold text-slate-950">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-xl font-extrabold leading-7 text-slate-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section
                id="how-it-works"
                className="bg-white py-6 sm:py-6"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-6">
                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="text-l font-extrabold text-center uppercase tracking-[0.2em] text-blue-700">
                                Simple workflow
                            </p>

                            <h2 className="mt-3 text-3xl text-center font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                                From idea to insight in a few simple steps.
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg text-center font-extrabold leading-8 text-slate-600 sm:text-xl">
                                Create your campaign or survey, reach your
                                audience, and use the results to understand
                                what matters.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {[
                                {
                                    number: "01",
                                    title: "Create",
                                    text: "Build an email campaign or survey around your goal.",
                                },
                                {
                                    number: "02",
                                    title: "Reach",
                                    text: "Send your message and connect with your audience.",
                                },
                                {
                                    number: "03",
                                    title: "Understand",
                                    text: "Review responses and campaign analytics.",
                                },
                                {
                                    number: "04",
                                    title: "Improve",
                                    text: "Turn feedback into better decisions and actions.",
                                },
                            ].map((step) => (
                                <div
                                    key={step.number}
                                    className="flex gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-extrabold text-white">
                                        {step.number}
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-950">
                                            {step.title}
                                        </h3>

                                        <p className="mt-1 text-xl font-extrabold leading-6 text-slate-600">
                                            {step.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section
                id="contact"
                className="bg-slate-950 py-6 text-white sm:py-6"
            >
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 shadow-lg">
                        <FiMail className="h-7 w-7" />
                    </div>

                    <h2 className="mt-7 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                        Ready to connect with your audience?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg font-bold leading-8 text-slate-300">
                        Start creating campaigns, collecting feedback, and
                        turning audience responses into useful insights.
                    </p>

                    <div className="mt-8">
                        <a
                            href="/auth/google"
                            className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-7 py-4 text-base font-extrabold text-white shadow-lg transition hover:bg-blue-600 hover:shadow-xl"
                        >
                            Login with Google
                            <FiArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Landing;