/*
 *  Copyright (c) 2015 Cryptonomex, Inc., and contributors.
 *
 *  The MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import React from 'react'
import Translate from "react-translate-component";
import counterpart from "counterpart";
import { connect } from 'react-redux';
import Inspector from "react-json-inspector";


@connect(state => {
    return {
        inputs: state.transactionConfirm.transaction.inputs
        outputs: state.transactionConfirm.transaction.outputs
    };
})
class BlindTransfer extends React.Component {

    render() {
        return (
            <div className="mConf__content">
                <div className="mConf__title"><Translate content="transaction.trxTypes.blind_transfer" /></div>
                <div className="mConf__table">
                    <div className="mConf__tableRow">
                        <div className="mConf__tableLeft"><Translate content="transaction.inputs" /></div>
                        <div className="mConf__tableRight">
                            <span className="mark2">
                                <Inspector data={ this.props.inputs } search={false} />
                            </span>
                        </div>
                    </div>
                    <div className="mConf__tableRow">
                        <div className="mConf__tableLeft"><Translate content="transaction.outputs" /></div>
                        <div className="mConf__tableRight">
                            <span className="mark2">
                                <Inspector data={ this.props.outputs } search={false} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlindTransfer;
