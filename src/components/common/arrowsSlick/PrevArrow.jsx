import cn from "classnames";
import { MdArrowBackIos } from "react-icons/md";
import styles from "./ArrowStyles.module.scss";

export const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={cn(className, styles.customArrow)}
			style={{
				...style,
				left: "0",
				zIndex: "1",
			}}
			onClick={onClick}
		>
			<MdArrowBackIos />
		</div>
	);
};
