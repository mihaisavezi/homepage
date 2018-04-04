import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/index.js';
import './index.less'

const TemplateWrapper = ({ children }) => (
  <div className="bg-blue-1">
        <div className="mw9 center min-vh-100 flex flex-column">
          <Header/>
          <div className="flex flex-column flex-auto justify-center-l">
            <div className="h-75 center w-100 pa5-l">
              <div className="h-100 w-100 bg-white-80 flex flex-column flex-row-m flex-row-l pa3 pa4-ns ba-l b--blue-2">
                <div className="w-100 w-third-m w-third-l pa0 pa3-ns pa5-l flex flex-column">
                  <div className="h4 w4 h5-l w5-l self-center">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                      <g>
                        <title>Layer 1</title>
                        <g id="svg_1">
                          <g id="svg_2">
                            <polyline filter="url(#svg_4_blur)" id="svg_4" points="4.401000022888184,16.01099967956543 7.440000057220459,18.538000106811523 9.642999649047852,16.48699951171875 12.758000373840332,19.145999908447266 17.011999130249023,16.01099967956543 " strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#8CAEDC" />
                            <polygon id="svg_3" points="10.956999778747559,4.590000152587891 4.651000022888184,15.51099967956543 4.651000022888184,58.40999984741211 17.261999130249023,58.40999984741211 17.261999130249023,15.51099967956543 " strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="#364159" fill="#99a6bf" />
                            <line id="svg_5" y2="52.292" x2="10.143" y1="16.737" x1="10.143" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#8CAEDC" />
                            <polygon id="svg_6" points="15.053999900817871,11.321000099182129 7.859000205993652,11.321000099182129 11.456999778747559,5.090000152587891 " strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#dae2f2" />
                            <rect id="svg_7" height="7.173" width="12.611" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="#364159" fill="#99a6bf" y="51.738" x="4.651" />
                          </g>
                          <rect id="svg_8" height="53.821" width="14.396" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="#364159" fill="#99a6bf" y="5.09" x="24.802" />
                          <line id="svg_9" y2="11.822" x2={32} y1="11.822" x1="24.802" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#5981C1" />
                          <line id="svg_10" y2="18.555" x2="28.942" y1="18.555" x1="24.802" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#5981C1" />
                          <line id="svg_11" y2="25.287" x2={32} y1="25.287" x1="24.802" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#5981C1" />
                          <line id="svg_12" y2="32.02" x2="28.942" y1="32.02" x1="24.802" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#5981C1" />
                          <line id="svg_13" y2="38.753" x2={32} y1="38.753" x1="24.802" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#5981C1" />
                          <line id="svg_14" y2="45.485" x2="28.942" y1="45.485" x1="24.802" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#5981C1" />
                          <line id="svg_15" y2="52.218" x2={32} y1="52.218" x1="24.802" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#5981C1" />
                          <g id="svg_16">
                            <rect id="svg_17" height="19.275" width="12.611" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={3} stroke="#364159" fill="#99a6bf" y="39.635" x="46.738" />
                            <g id="svg_18">
                              <line id="svg_19" y2="43.698" x2="54.771" y1="54.848" x1="54.771" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#62708c" fill="#8CAEDC" />
                              <line id="svg_20" y2="47.213" x2="51.316" y1="54.848" x1="51.316" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#62708c" fill="#8CAEDC" />
                            </g>
                          </g>
                          <rect id="svg_21" height="7.547" width="12.611" strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="#364159" fill="#dae2f2" y="32.088" x="46.738" />
                        </g>
                      </g>
                      <defs>
                        <filter id="svg_4_blur">
                          <feGaussianBlur stdDeviation="1.4" in="SourceGraphic" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="w-100 w-two-thirds-m w-two-thirds-l pa2 pa3-ns pa5-l flex flex-column justify-center items-start">
                  <h2 className="f1 f-headline-l lh-solid blue-6">I build the stuff you see</h2>
                  <p className="lh-title f6 f5-ns pt4 gray-5 dn db-ns">with tried and tested web technologies:<span className="dib ttu ph2 bt-0 bl-0 br-0 bb b--dotted tracked avenir f7 mr2">html5</span>
                    <span className="dib ttu ph2 bt-0 bl-0 br-0 bb b--dotted tracked avenir f7 mr2">css3</span>
                    <span className="dib ttu ph2 bt-0 bl-0 br-0 bb b--dotted tracked avenir f7 mr2">javascript</span>
                  </p>
                  <div className="db dn-ns w-100 gray-5">
                    <p className="lh-title f5 f5-ns pb4 pt2 gray-5">with tried and tested web technologies:</p>
                    <div className="center tc pv2">
                      <span className="ttu bt-0 bl-0 br-0 bb b--dotted tracked avenir f7">html5</span>
                    </div>
                    <div className="center tc pv2">
                      <span className="ttu bt-0 bl-0 br-0 bb b--dotted tracked avenir f7">css3</span>
                    </div>
                    <div className="center tc pv2">
                      <span className="ttu bt-0 bl-0 br-0 bb b--dotted tracked avenir f7">javascript</span>
                    </div>
                  </div>
                  <a
                  href="mailto:contactmihaip@gmail.com?Subject=Let's%20chat"
                  target="_top"
                  className="no-underline bg-blue-6 near-white pa3 ph5-ns tc dib mt5 helvetica fw4 ba b--blue-2 f5 ml-auto mr-auto ml0-ns">Hire me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
