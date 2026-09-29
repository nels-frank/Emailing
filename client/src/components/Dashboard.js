import React, { Component } from 'react';
import SurveyList from './surveys/SurveyList';
import SurveyForm from './surveys/SurveyForm';
import { FiPlus } from 'react-icons/fi';
import { connect } from 'react-redux';
import { submitSurvey, fetchSurveys } from '../actions';

class Dashboard extends Component {
    
    state = {
    composeOpen: false,
    sentMessage: false,
};

    openCompose = () => {
        this.setState({ composeOpen: true });
    };

    closeCompose = () => {
    this.setState({ composeOpen: false });
    };

    handleSurveySubmit = async (values) => {
    try {
        await this.props.submitSurvey(values);

        await this.props.fetchSurveys();

        this.setState({
            composeOpen: false,
            sentMessage: true,
        });

        setTimeout(() => {
            this.setState({ sentMessage: false });
        }, 3000);
    } catch (error) {
        console.error('Survey sending failed:', error);
      }
    };

    render() {
    const { composeOpen, sentMessage } = this.state;

    return (
        <main className="min-h-screen bg-slate-50 lg:ml-64">

                    <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
                        <SurveyList />
                    </div>

                    {/* Create Survey Button */}
                    <button
                        type="button"
                        onClick={this.openCompose}
                        aria-label="Create new survey"
                        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg transition hover:bg-blue-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
                    >
                        <FiPlus className="h-7 w-7 sm:h-8 sm:w-8" />
                    </button>

                    {/* Gmail-style Compose Dialog */}
                    {composeOpen && (
                        <SurveyForm
                            onClose={this.closeCompose}
                            onSurveySubmit={this.handleSurveySubmit}
                        />
                    )}

                    {/* Sent Notification */}
                    {sentMessage && (
                        <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-lg bg-blue-800 px-5 py-3 text-sm font-bold text-white shadow-xl">
                            Sent Successfully
                        </div>
                    )}

                </main>
            );
       }
   }
export default connect(
    null,
    { submitSurvey, fetchSurveys }
)(Dashboard);