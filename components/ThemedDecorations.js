import React from 'react'


class ThemedDecorations extends React.Component {

  render() {


    const makeThemesChildrenOfInvitation = React.Children.map(this.props.children, child => {

      return React.cloneElement(child, {className: this.props.theme})

    }) // end function


    return (
      <div>
        {makeThemesChildrenOfInvitation}
      </div>

    )
  }






}


module.exports = ThemedDecorations
