/**
 * Breakpoint helper for bootstrap
 * This function needs some css pseudo elements to work
 *
 * @author Marvin Heilemann <marvin.heilemann@googlemail.com>
 * @version 2.0
 *
 * @package https://github.com/maciej-gurban/responsive-bootstrap-toolkit
 */

class Breakpoints {

  constructor() {
    // Breakpoint detection points
    this.breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
  }

  /**
   * Determines whether passed string is a parsable expression
   */
  isAnExpression(str) {
    return (str.charAt(0) == '<' || str.charAt(0) == '>');
  }

  /**
   * Splits the expression in into <|> [=] alias
   */
  splitExpression(str) {

    // Used operator
    const operator = str.charAt(0);
    // Include breakpoint equal to alias?
    const orEqual = (str.charAt(1) == '=') ? true : false;

    /**
     * Index at which breakpoint name starts.
     *
     * For:  >sm, index = 1
     * For: >=sm, index = 2
     */
    const index = 1 + (orEqual ? 1 : 0);

    /**
     * The remaining part of the expression, after the operator, will be treated as the
     * breakpoint name to compare with
     */
    const breakpointName = str.slice(index);

    return {
      operator,
      orEqual,
      breakpointName
    };
  }

  /**
   * Returns true if currently active breakpoint matches the expression
   */
  isAnyActive(breakpoints) {
    const _this = this;
    let found = false;
    $.each(breakpoints, (index, alias) => {
      // Once first breakpoint matches, return true and break out of the loop
      if (_this.current() == alias) {
        found = true;
        return false;
      }
    });
    return found;
  }

  /**
   * Determines whether current breakpoint matches the expression given
   */
  isMatchingExpression(str) {

    const expression = this.splitExpression(str);

    // Get names of all breakpoints
    const breakpointList = this.breakpoints;

    // Get index of sought breakpoint in the list
    let pos = breakpointList.indexOf(expression.breakpointName);

    // Breakpoint found
    if (pos !== -1) {

      let start = 0;
      let end = 0;

      /**
       * Parsing viewport.is('<=md') we interate from smallest breakpoint ('xs') and end
       * at 'md' breakpoint, indicated in the expression,
       * That makes: start = 0, end = 2 (index of 'md' breakpoint)
       *
       * Parsing viewport.is('<md') we start at index 'xs' breakpoint, and end at
       * 'sm' breakpoint, one before 'md'.
       * Which makes: start = 0, end = 1
       */
      if (expression.operator == '<') {
        start = 0;
        end = expression.orEqual ? ++pos : pos;
      }
      /**
       * Parsing viewport.is('>=sm') we interate from breakpoint 'sm' and end at the end
       * of breakpoint list.
       * That makes: start = 1, end = undefined
       *
       * Parsing viewport.is('>sm') we start at breakpoint 'md' and end at the end of
       * breakpoint list.
       * Which makes: start = 2, end = undefined
       */
      if (expression.operator == '>') {
        start = expression.orEqual ? pos : ++pos;
        end = undefined;
      }

      const acceptedBreakpoints = breakpointList.slice(start, end);

      return this.isAnyActive(acceptedBreakpoints);
    }
  }

  /**
   * Returns current breakpoint alias
   */
  current() {
    return window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '') || 'unrecognized';
  }

  /**
   * Returns true if current breakpoint matches passed alias
   */
  is(str) {
    if (this.isAnExpression(str)) {
      return this.isMatchingExpression(str);
    }
    return (this.current() == str) ? true : false;
  }
}
