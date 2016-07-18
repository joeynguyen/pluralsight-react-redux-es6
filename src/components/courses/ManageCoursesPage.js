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
					allAuthors={this.props.authors}
					course={this.state.course}
					errors={this.state.errors}
				/>
			</div>
    );
  }
}

ManageCoursesPage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired
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

	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});

  return {
		course: course,
		authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
		actions: bindActionCreators(coursesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursesPage);
