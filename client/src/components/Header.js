import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiCreditCard, FiLogOut, FiMenu, FiX,  FiMail } from 'react-icons/fi';
import Payments from './Payments';


class Header extends Component {
    state = {
        mobileMenuOpen: false,
    };

    toggleMobileMenu = () => {
        this.setState((prevState) => ({
            mobileMenuOpen: !prevState.mobileMenuOpen,
        }));
    };

    closeMobileMenu = () => {
        this.setState({ mobileMenuOpen: false });
    };

    renderSidebarItems() {
        return (
            <>
                <Link
                    to="/surveys"
                    onClick={this.closeMobileMenu}
                    className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
                >
                    <FiBarChart2 className="h-5 w-5" />
                    <span>Dashboard</span>
                </Link>

                <div className="rounded-xl transition hover:bg-slate-800">

                    <div className="px-4 pb-3">
                        <Payments />
                    </div>
                </div>

                <a
                    href="/api/logout"
                    onClick={this.closeMobileMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                    <FiLogOut className="h-5 w-5" />
                    <span>Logout</span>
                </a>
            </>
        );
    }

    render() {
        const { auth } = this.props;
        const { mobileMenuOpen } = this.state;

        /*
         * Keep the public landing-page header simple.
         */
        if (!auth) {
            return (
                <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
                    <div className="mx-auto flex min-h-[72px] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                        {/* Logo */}
                        <a href="/" className="flex min-w-0 items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md sm:h-11 sm:w-11">
                                <FiMail className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>

                            <div className="min-w-0">
                                <p className="truncate text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                                    Emailing
                                </p>

                                <p className="truncate text-xs font-extrabold text-blue-900 sm:text-sm">
                                    Email & Survey Platform
                                </p>
                            </div>
                        </a>

                        {/* Navigation */}
                        <nav className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-4">
                            <a
                                href="#features"
                                className="hidden rounded-lg bg-white px-3 py-2 text-xs font-bold text-black shadow-sm transition hover:bg-purple-50 sm:inline-flex sm:px-4 sm:py-2.5 sm:text-sm"
                            >
                                Features
                            </a>

                            <a
                                href="#how-it-works"
                                className="hidden rounded-lg bg-white px-3 py-2 text-xs font-bold text-black shadow-sm transition hover:bg-purple-50 sm:inline-flex sm:px-4 sm:py-2.5 sm:text-sm"
                            >
                                How It Works
                            </a>

                            {/* Login */}
                            <a
                                href="/auth/google"
                                className="rounded-lg bg-white px-3 py-2.5 text-xs font-bold text-black transition hover:bg-purple-50 sm:px-5 sm:text-sm"
                            >
                                <span className="sm:hidden">Login With Google</span>
                                <span className="hidden sm:inline">Login With Google</span>
                            </a>
                        </nav>

                    </div>
                </header>
            );
        }

        return (
            <>
                {/* Desktop / Tablet Top Bar */}
                <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm lg:ml-64">
                    <div className="flex h-[72px] items-center justify-between px-5 sm:px-6 lg:px-8">

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            onClick={this.toggleMobileMenu}
                            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                            aria-label="Open dashboard menu"
                        >
                            {mobileMenuOpen ? (
                                <FiX className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>

                        {/* Mobile Logo */}
                        <Link
                            to="/surveys"
                            className="text-xl font-extrabold text-slate-900 lg:hidden"
                        >
                            Emailing
                        </Link>

                        {/* Desktop page label */}
                        <div className="hidden lg:block">
                            <h1 className="text-lg font-extrabold text-slate-900">
                                Dashboard
                            </h1>
                        </div>

                        {/* Credits */}
                        <div className="ml-auto flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
                            <FiCreditCard className="h-4 w-4 text-blue-700" />

                            <span className="text-sm font-bold text-slate-700">
                                Credits:
                            </span>

                            <span className="text-sm font-extrabold text-blue-700">
                                {auth.credits}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Desktop Sidebar */}
                <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col bg-blue-900 lg:flex">
                    <div className="flex h-[72px] items-center border-b border-slate-800 px-6">
                        <Link
                            to="/surveys"
                            className="text-2xl font-extrabold tracking-tight text-white"
                        >
                            Emailing
                        </Link>
                    </div>

                    <div className="flex flex-1 flex-col px-4 py-6">
                        <nav className="space-y-2">
                            {this.renderSidebarItems()}
                        </nav>
                    </div>

                    <div className="border-t border-slate-800 px-5 py-5">
                        <p className="text-l font-bold text-white text-center">
                            Emailing Platform
                        </p>

                        <p className="mt-1 text-l font-bold text-slate-200 text-center">
                            Manage your campaigns
                        </p>
                    </div>
                </aside>

                {/* Mobile Sidebar */}
                {mobileMenuOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
                            onClick={this.closeMobileMenu}
                        />

                        <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 shadow-2xl lg:hidden">
                            <div className="flex h-[72px] items-center justify-between border-b border-slate-800 px-5">
                                <Link
                                    to="/surveys"
                                    onClick={this.closeMobileMenu}
                                    className="text-2xl font-extrabold text-white"
                                >
                                    Emailing
                                </Link>

                                <button
                                    type="button"
                                    onClick={this.closeMobileMenu}
                                    className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                                    aria-label="Close dashboard menu"
                                >
                                    <FiX className="h-6 w-6" />
                                </button>
                            </div>

                            <nav className="space-y-2 px-4 py-6">
                                {this.renderSidebarItems()}
                            </nav>
                        </aside>
                    </>
                )}
            </>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);