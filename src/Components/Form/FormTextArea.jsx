import React from 'react';
import FormControl from './FormControl';
import controlStyles from './formControl.scss';

class FormTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cloneRef = React.createRef();
        this.state = {
            styleObj: {}
        }
    }

    handleChange = e => {
        const clone = this.cloneRef.current;
        clone.innerHTML = e.target.value;
        clone.style.visibility = 'hidden';
        clone.style.display = 'block';
        this.setState({
            styleObj: {
                height: `${clone.offsetHeight}px`
            }
        });
        clone.style.visibility = 'visible';
        clone.style.display = 'none';
        this.props.onChange && this.props.onChange(e);
    }

    render() {
        return (
            <>
                <FormControl 
                    {...this.props}
                    onChange={this.handleChange}
                    style={{
                        ...this.props.style,
                        overflow: 'hidden',
                        ...this.state.styleObj
                    }}
                    as='textarea'
                    ref={this.inputRef}
                />
                <div 
                    className={`${controlStyles['form-control']} ${this.props.className}`} 
                    ref={this.cloneRef}
                    style={{
                        height: 'auto',
                        display: 'none',
                        whiteSpace: 'pre-wrap',
                        wordWrap: 'break-word'
                    }}
                />
            </>
        );
    }
}

export default FormTextArea;