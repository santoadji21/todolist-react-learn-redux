import { setFilter } from "../../actions/index.js";
import { connect } from "react-redux";
import Footer from "../../components/Footer/index.js";

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line no-labels
  filter: (val) => dispatch(setFilter(val)),
});

export default connect(null, mapDispatchToProps)(Footer);
