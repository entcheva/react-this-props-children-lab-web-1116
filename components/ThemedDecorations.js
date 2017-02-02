import React from 'react'

class ThemedDecorations extends React.Component {

  render() {

    // adds the 'theme' prop to each child
    const makeThemesChildrenOfInvitation = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {className: this.props.theme})
    })

    return ( <div>{makeThemesChildrenOfInvitation}</div> )
  }
}


module.exports = ThemedDecorations
