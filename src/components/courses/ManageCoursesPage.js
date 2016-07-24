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
		this.saveCourse = this.saveCourse.bind(this);
		this.redirect = this.redirect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      // Necessary to populate form when existing course is loaded directly
      this.setState({ course: Object.assign({}, nextProps.course)});
    }
  }

	updateCourseState(event) {
		const field = event.target.name;
		let course = this.state.course;
		course[field] = event.target.value;
		return this.setState({course: course});
	}

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect());
  }
  redirect() {
    this.context.router.push('/courses');
  }

  render() {
		return (
			<div>
				<CourseForm
					allAuthors={this.props.authors}
					onChange={this.updateCourseState}
					onSave={this.saveCourse}
					course={this.state.course}
					errors={this.state.errors}
				/>
			</div>
    );
  }
}

ManageCoursesPage.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

// Pull in react-router's context so router is available on this.context.router
ManageCoursesPage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  return (course.length > 0) ? course[0] : null; // since filter returns an array, we have to grab the first element
}


function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from the path '/course/:id'

  let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  // don't try to populate page until state been updated
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

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
