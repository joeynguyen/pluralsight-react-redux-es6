import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as coursesActions from '../../actions/coursesActions';
import CourseForm from './CourseForm';

class ManageCoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

		this.state = {
			course: Object.assign({}, this.props.course),
			errors: {}
		};
  }

  render() {
    return (
			<div>
				<CourseForm
					allAuthors={[]}
					course={this.state.course}
					errors={this.state.errors}
				/>
			</div>
    );
  }
}

ManageCoursesPage.propTypes = {
	course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	let course = {
		id: '',
		watchHref: '',
		title: '',
		authorId: '',
		length: '',
		category: ''
	};
  return {
		course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(coursesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
