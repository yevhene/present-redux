import React from 'react'
import {
  restoreActions, resetActions
} from '../../redux/store/middleware/store-actions'

export default class TimeMachine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      frame: 0,
      frames: 0,
      initialState: props.store.getState()
    }
  }

  componentDidMount() {
    this.props.store.subscribe(() => this.onAction())
  }

  onAction() {
    const actions = restoreActions()

    this.setState({
      frames: actions.length,
    }, () => {
      this.setState({
        frame: actions.length,
      })
    })
  }

  onFrameChange() {
    this.setState({
      frame: this.refs.scale.value
    })

    resetActions()

    this.props.store.dispatch({
      type: '@@INIT'
    })
  }

  render() {
    return (
      <div className="time-machine">
        <input type="range"
             min={ 0 } max={ this.state.frames }
             value={ this.state.frame }
             ref="scale"
             onChange={ () => this.onFrameChange() } />
        <strong>{this.state.frame} / {this.state.frames}</strong>
      </div>
    )
  }
}
