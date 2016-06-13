import React from 'react';

export default class Speech extends React.Component {
    constructor (props) {
        super(props);
        var _self = this;
        this.state = {msg: ''};
        this.isReconizing = false;
        this.recognition;
        
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
        var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

        if (SpeechRecognition) {
            console.info('SpeechRecognition ok');
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = true; //default = false : recognition ends when user stops talking
            this.recognition.interimResults = true;

            this.recognition.onstart = () => {
                console.log("recognition start...");
                _self.isReconizing = true;
            };
            this.recognition.onresult = (event) => {
                var interim_transcript = '';
                var final_transcript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    } else {
                        interim_transcript += event.results[i][0].transcript;
                    }
                }
                console.log(interim_transcript);
                _self.setState({ msg: interim_transcript });
            };
            this.recognition.onerror = (event) => { 
                console.error(event);
            };
            this.recognition.onend = () => {
                console.log("recognition end");
                _self.isReconizing = false;
                
            };
        }
    }
    toggleSpeach (evt) {
        if (!this.isReconizing) {
            this.recognition.start();
        } else {
            this.recognition.stop();
        }
    }
    render () {
        return (
            <div className="container jumbotron jumbotron-fluid">
                <section className="col-xs-12">
                    <h1>Speech your message</h1>
                    <div className="form-group">
                        <label for="locale">Locale</label>
                        <select className="form-control"></select>
                    </div><div className="form-group">
                        <button type="button" onClick={this.toggleSpeach.bind(this)} className="btn-primary btn btn-speech">
                            <i className="icon-microphone"></i>
                        </button>
                        <textarea className="form-control" value={this.state.msg} readonly="readonly"></textarea>
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = Speech;