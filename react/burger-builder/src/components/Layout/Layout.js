import React from 'react';
/*const layout = (props) => {
    console.log(props.childern);
    return (
    <div>
        <div>toolbar,lottu,losku</div>
        <main>
            {props.childern}
        </main>
    </div>
    )
};*/
class Layout extends React.Component {
    render() {
      return (
       <div>
          <div>toolbar,lottu,losku</div>
          <main>{this.props.children}</main>
       </div>
      )
    }
  }
export default Layout;