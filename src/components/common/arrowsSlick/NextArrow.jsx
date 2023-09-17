import cn from "classnames";
const { MdOutlineArrowForwardIos } = require("react-icons/md");
import styles from "./ArrowStyles.module.scss";

export const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={cn(className, styles.customArrow)}
			style={{
				...style,
				right: "0",
				zIndex: "1",
			}}
			onClick={onClick}
		>
			<MdOutlineArrowForwardIos />
		</div>
	);
};
