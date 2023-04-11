import React from "react";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
import { PropTypes } from "prop-types";
function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.prototype = {
  item: PropTypes.object,
};
export default FeedbackItem;

// export default class FeedbackItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rating: 7,
//       text: "This is item one",
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({ rating: this.state.rating + 1 });
//   }
//   render() {
//     return (
//       <>
//         <div className='card'>
//           <div className='num-display'>{this.state.rating}</div>
//           <div className='text-display'>{this.state.text}</div>
//           <button onClick={this.handleClick}>Click</button>
//         </div>
//       </>
//     );
//   }
// }
