import React from 'react'

class ThemedDecorations extends React.Component {

  render() {

    // {this.props.children}

    // adds the 'theme' prop to each child
    const addClassNameToProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {className: this.props.theme})
    })

    return ( <div>{addClassNameToProp}</div> )
  }
}


module.exports = ThemedDecorations
