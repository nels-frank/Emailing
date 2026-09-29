import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FiArrowRight, FiX, FiMinimize2, FiMaximize2 } from 'react-icons/fi';

import SurveyField from './SurveyField';
import SurveyFormReview from './SurveyFormReview';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    state = {
        minimized: false,
        reviewing: false,
    };

    toggleMinimize = () => {
        this.setState((prevState) => ({
            minimized: !prevState.minimized,
        }));
    };

    handleClose = () => {
        this.props.reset();

        if (this.props.onClose) {
            this.props.onClose();
        }
    };

    handleReview = (values) => {
        this.setState({
            reviewing: true,
        });
    };

    handleBack = () => {
        this.setState({
            reviewing: false,
        });
    };

    handleSubmitSurvey = async (values) => {
    try {
        await this.props.onSurveySubmit(values);

        this.props.reset();

        if (this.props.onClose) {
            this.props.onClose();
        }
    } catch (error) {
        console.error('Failed to send survey:', error);
    }
     };

    renderFields() {
        return _.map(
            formFields,
            ({ label, name, type, placeholder }) => (
                <Field
                    key={name}
                    component={SurveyField}
                    type={type}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                />
            )
        );
    }

    renderCompose() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleReview)}>

                {/* Compose Fields */}
                <div className="max-h-[65vh] overflow-y-auto sm:max-h-[620px]">
                    {this.renderFields()}
                </div>

                {/* Compose Footer */}
                <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3">

                    <div className="flex items-center gap-2">

                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                        >
                            Review
                            <FiArrowRight className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            onClick={this.handleClose}
                            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                            aria-label="Discard"
                        >
                            <FiX className="h-5 w-5" />
                        </button>

                    </div>

                    <span className="text-xs font-medium text-slate-400">
                        Emailing
                    </span>

                </div>
            </form>
        );
    }

    renderReview() {
        return (
            <SurveyFormReview
                onCancel={this.handleBack}
                onSubmit={this.handleSubmitSurvey}
            />
        );
    }

    render() {
        const {
            minimized,
            reviewing,
        } = this.state;

        return (
            <div
                className={`fixed bottom-0 right-3 z-50 w-[calc(100%-1.5rem)] overflow-hidden rounded-t-xl border border-slate-300 bg-white shadow-2xl sm:right-6 sm:w-[560px] ${
                    minimized ? 'h-[52px]' : ''
                }`}
            >

                {/* Gmail Header */}
                <div className="flex h-[52px] items-center justify-between bg-blue-800 px-4 text-white">

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">
                            {reviewing ? 'Review Message' : 'New Message'}
                        </span>
                    </div>

                    <div className="flex items-center gap-1">

                        <button
                            type="button"
                            onClick={this.toggleMinimize}
                            className="rounded p-2 text-slate-300 transition hover:bg-slate-700 hover:text-white"
                            aria-label="Minimize"
                        >
                            {minimized ? (
                                <FiMaximize2 className="h-4 w-4" />
                            ) : (
                                <FiMinimize2 className="h-4 w-4" />
                            )}
                        </button>

                        <button
                            type="button"
                            onClick={this.handleClose}
                            className="rounded p-2 text-slate-300 transition hover:bg-slate-700 hover:text-white"
                            aria-label="Close"
                        >
                            <FiX className="h-5 w-5" />
                        </button>

                    </div>
                </div>

                {/* Compose / Review */}
                {!minimized && (
                    reviewing
                        ? this.renderReview()
                        : this.renderCompose()
                )}

            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = 'Required';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false,
})(SurveyForm);