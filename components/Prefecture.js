// @ts-check
import React from "react";

// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// import styles from "styles/jss/nextjs-material-kit/components/badgeStyle.js";

// const useStyles = makeStyles(styles);

/**
 * @typedef {Object} Props - Prefectureのprops
 * @property {number} [size] - SpecialTypeの文字列プロパティ
 */

/**
 * 県データ
 * @param {Props} props
 * @returns {JSX.Element}
 */
export function Prefecture(props) {

  const [active, setActive] = React.useState();
  const handleChange = (panel) => (event, expanded) => {
    setActive(expanded ? panel : -1);
  };
  return (
    <p></p>
  );
}
