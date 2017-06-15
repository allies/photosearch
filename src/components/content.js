import React from 'react';
import AI from '../assets/img/ai-icon.png';
import EPS from '../assets/img/eps-icon.png';
import JPG from '../assets/img/jpg-icon.png';
import PSD from '../assets/img/psd-icon.png';

class Content extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img className="image" src={"/photos/" + this.props.id} alt={this.props.id}/>
                </div>
                <div>
                    <h1>File Name: {this.props.f_name}</h1>
                    <h2><span>Downlaod:</span></h2>
                        <div className="col-xs-3">
                            <center>
                                <h2>
                                    <a href={"/ai/" + this.props.f_name + ".ai"}>
                                    <img className="dlogo" src={AI} alt="Download .ai file"/>
                                    &nbsp;Download .ai file
                                    </a>
                                </h2>
                            </center>
                        </div>
                        <div className="col-xs-3">
                            <center>
                                <h2>
                                    <a href={"/eps/" + this.props.f_name + ".eps"}>
                                        <img className="dlogo" src={EPS} alt="Download .eps file"/>
                                    &nbsp;Download .ai file
                                    </a>
                                </h2>
                            </center>
                        </div>
                        <div className="col-xs-3">
                            <center>
                                <h2>
                                    <a href={"/photo/" + this.props.f_name + ".jpg"}>
                                    <img className="dlogo" src={JPG} alt="Download .jpg file"/>
                                    &nbsp;Download .ai file
                                    </a>
                                </h2>
                            </center>
                        </div>
                        <div className="col-xs-3">
                            <center>
                                <h2>
                                    <a href={"/psd/" + this.props.f_name + ".eps"}>
                                    <img className="dlogo" src={PSD} alt="Downlaod"/>
                                    &nbsp;Download .ai file
                                    </a>
                                </h2>
                            </center>
                        </div>
                    <h3><span>Headline:</span> {this.props.headline}</h3>
                    <h3><span>Description:</span> <li>{this.props.description}</li></h3>
                    <h3><span>Orientation:</span> {this.props.orientation}</h3>
                    <h3><span>Usage Terms:</span> {this.props.usageTerms}</h3>
                    <h3><span>Keywords:</span> <li>{this.props.keywords}</li></h3>
                    <h3><span>Date Created:</span> <li>{this.props.create_date}</li></h3>
                </div>
            </div>
        )
    }
}

export default Content;