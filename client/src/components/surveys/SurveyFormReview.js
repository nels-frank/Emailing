import _ from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FiArrowLeft, FiSend, FiLoader } from 'react-icons/fi';
import formFields from './formFields';

const SurveyFormReview = ({
    onCancel,
    formValues = {},
    onSubmit,
}) => {
    const [sending, setSending] = useState(false);

    const handleSend = async () => {
        if (sending) return;

        setSending(true);

        try {
            await onSubmit(formValues);
        } catch (error) {
            console.error('Failed to send survey:', error);
            setSending(false);
        }
    };

    const reviewFields = _.map(
        formFields,
        ({ name, label }) => (
            <div
                key={name}
                className="border-b border-slate-100 px-4 py-3 last:border-b-0"
            >
                <div className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">
                    {label}
                </div>

                <div className="whitespace-pre-wrap break-words text-sm font-medium leading-6 text-slate-800">
                    {formValues[name] || '—'}
                </div>
            </div>
        )
    );

    return (
        <div className="flex max-h-[70vh] flex-col bg-white">
            <div className="border-b border-slate-200 bg-slate-50 px-4 py-4">
                <h2 className="text-sm font-extrabold text-slate-900">
                    Review Message
                </h2>

                <p className="mt-1 text-xs font-medium text-slate-500">
                    Please confirm your entries before sending.
                </p>
            </div>

            <div className="overflow-y-auto">
                {reviewFields}
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3">
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={sending}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <FiArrowLeft className="h-4 w-4" />
                    Back
                </button>

                <button
                    type="button"
                    onClick={handleSend}
                    disabled={sending}
                    className="inline-flex min-w-[125px] items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-80"
                >
                    {sending ? (
                        <>
                            <FiLoader className="h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <FiSend className="h-4 w-4" />
                            Send Survey
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form?.surveyForm?.values || {},
    };
}

export default connect(mapStateToProps)(SurveyFormReview);