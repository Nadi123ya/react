import React, { useState, useEffect } from "react";

const Dimensions = () => {
  const [dimensions, setDimemsions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimemsions({ width: innerWidth, height: innerHeight });
    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimemsions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      // debugger;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

// class Dimensions extends React.Component {
//   state = {
//     width: null,
//     height: null,
//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.onResize);
//     const { innerWidth, innerHeight } = window;
//     this.setDimension(innerWidth, innerHeight);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.onResize);
//   }

//   onResize = (e) => {
//     const { innerWidth, innerHeight } = e.target;
//     this.setDimension(innerWidth, innerHeight);
//   };

//   setDimension = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${innerWidth} x ${innerHeight}`;
//   };

//   render() {
//     return (
//       <div className="dimensions">
//         {`${this.state.width}px - ${this.state.height}px`}
//       </div>
//     );
//   }
// }

export default Dimensions;
