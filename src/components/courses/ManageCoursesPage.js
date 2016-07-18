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
		this.updateCourseState = this.updateCourseState.bind(this);
  }

	updateCourseState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({course: course});
	}

  render() {
		return (
			<div>
				<CourseForm
					allAuthors={this.props.authors}
					onChange={this.updateCourseState}
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
