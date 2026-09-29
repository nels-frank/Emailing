import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    FiCalendar,
    FiCheckCircle,
    FiXCircle,
    FiTrash2
} from 'react-icons/fi';
import { deleteSurvey, fetchSurveys } from '../../actions';

class SurveyList extends Component {
    handleDelete = async (surveyId) => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this survey?'
        );

        if (!confirmed) return;

        try {
            await this.props.deleteSurvey(surveyId);
        } catch (error) {
            console.error('Failed to delete survey:', error);
            alert('Failed to delete survey.');
        }
    };

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        const surveys = [...(this.props.surveys || [])].reverse();

        if (!surveys.length) {
            return (
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
                    <h2 className="text-lg font-bold text-slate-900">
                        No surveys yet
                    </h2>

                    <p className="mt-2 text-sm font-medium text-slate-500 sm:text-base">
                        Create your first survey to get started.
                    </p>
                </div>
            );
        }

        return surveys.map((survey) => {
            return (
                <article
                    key={survey._id}
                    className="overflow-hidden rounded-2xl border border-blue-900 bg-blue-800 shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                    {/* Survey Content */}
                    <div className="relative p-5 sm:p-6 lg:p-7">

                        {/* Delete */}
                        <button
                            type="button"
                            onClick={() => this.handleDelete(survey._id)}
                            className="absolute right-3 top-3 rounded-lg p-2 text-blue-200 transition hover:bg-white/10 hover:text-white"
                            aria-label="Delete survey"
                            title="Delete survey"
                        >
                            <FiTrash2 className="h-5 w-5" />
                        </button>

                        {/* Title & Body */}
                        <div className="min-w-0 pr-8">
                            <h2 className="break-words text-xl font-extrabold leading-8 text-white sm:text-xl lg:text-2xl">
                                {survey.title}
                            </h2>

                            <p className="mt-4 break-words text-base font-medium leading-7 text-blue-50 sm:text-base lg:text-lg">
                                {survey.body}
                            </p>
                        </div>
                    </div>

                    {/* Results & Date */}
                    <div className="border-t border-white/10 bg-blue-900/80 px-5 py-4 sm:px-6 sm:py-5">

                        <div className="flex items-end justify-between gap-4">

                            {/* Survey Results */}
                            <div>
                                <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-blue-200">
                                    Survey Results
                                </p>

                                <div className="flex flex-wrap items-center gap-4 sm:gap-6">

                                    <span className="flex items-center gap-2 rounded-lg bg-emerald-500/20 px-3 py-2 text-sm font-bold text-emerald-200">
                                        <FiCheckCircle className="h-5 w-5" />
                                        Yes: {survey.yes}
                                    </span>

                                    <span className="flex items-center gap-2 rounded-lg bg-red-500/20 px-3 py-2 text-sm font-bold text-red-200">
                                        <FiXCircle className="h-5 w-5" />
                                        No: {survey.no}
                                    </span>

                                </div>
                            </div>

                            {/* Date - Bottom Right */}
                            <div className="flex shrink-0 items-center gap-2 text-xs font-semibold text-blue-200 sm:text-sm">
                                <FiCalendar className="h-4 w-4" />

                                <span>
                                    {survey.dateSent
                                        ? new Date(
                                              survey.dateSent
                                          ).toLocaleDateString()
                                        : 'Not sent'}
                                </span>
                            </div>

                        </div>
                    </div>
                </article>
            );
        });
    }

    render() {
        return (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return {
        surveys,
    };
}

export default connect(
    mapStateToProps,
    { fetchSurveys, deleteSurvey }
)(SurveyList);