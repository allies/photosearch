import React from 'react';
import AI from '../assets/img/ai-icon.png';
import EPS from '../assets/img/eps-icon.png';
import JPG from '../assets/img/jpg-icon.png';
import PSD from '../assets/img/psd-icon.png';

class Content extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <img className="image" src={"/photos/" + this.props.id} alt={this.props.id}/>
                </div>
                <div className="details">
                    <h1>File Name: {this.props.f_name}</h1>
                    <h2><span>Download:</span></h2>
                            <center>
                                <h2>
                                    <a href={"/ai/" + this.props.f_name + ".ai"}>
                                    <img className="dlogo" src={AI} alt="Download .ai file"/>
                                    </a>
                                </h2>
                            </center>
                            <center>
                                <h2>
                                    <a href={"/eps/" + this.props.f_name + ".eps"}>
                                        <img className="dlogo" src={EPS} alt="Download .eps file"/>
                                    </a>
                                </h2>
                            </center>
                            <center>
                                <h2>
                                    <a href={"/photos/" + this.props.f_name + ".jpg"} download={this.props.f_name + ".jpg"}>
                                    <img className="dlogo" src={JPG} alt="Download .jpg file"/>
                                    </a>
                                </h2>
                            </center>
                            <center>
                                <h2>
                                    <a href={"/psd/" + this.props.f_name + ".psd"}>
                                    <img className="dlogo" src={PSD} alt="Downlaod"/>
                                    </a>
                                </h2>
                            </center>
                    <br />
                    <br />
                    <br />
                    <br />
                    {this.props.headline!==undefined?
                    <div>
                        <h3><span>Headline:</span> {this.props.headline}</h3>
                        <h3><span>Description:</span> <li>{this.props.description}</li></h3>
                        <h3><span>Orientation:</span> {this.props.orientation}</h3>
                        <h3><span>Usage Terms:</span> {this.props.usageTerms}</h3>
                        <h3><span>Keywords:</span> <li>{this.props.keywords}</li></h3>
                        <h3><span>Date Created:</span> <li>{this.props.create_date}</li></h3>
                    </div> : 
                    <div>
                        <h3><span>Please open the vector in same tab in which the application is, to 
                            view the vector details. You can only download the vector files if opened in 
                            another tab.</span></h3>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Content;