// /**
//  * ThemeProvider
//  *
//  * this component connects teh redux state ui theme to
//  * the ThemeProvider component
//  */

// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
// import { ThemeProvider } from 'styled-components';

// import { makeSelectSetTheme } from './selectors';

// export function SetThemeProvider(props) {
//   console.log(props);
//   return (
//     <ThemeProvider theme={{ theme: props.theme }}>
//       {React.Children.only(props.children)}
//     </ThemeProvider>
//   );
// }

// SetThemeProvider.propTypes = {
//   messages: PropTypes.object,
//   theme: PropTypes.string,
//   children: PropTypes.element.isRequired,
// };

// const mapStateToProps = createSelector(
//   makeSelectSetTheme(),
//   theme => ({
//     theme,
//   }),
// );

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     dispatch,
// //   };
// // }

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps,
// )(SetThemeProvider);
