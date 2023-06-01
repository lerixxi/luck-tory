import styles from "./RadioItem.module.scss";

export const RadioItem = ({ el, register }) => {
	return (
		<li>
			<label className={styles.radioLabel}>
				<input
					{...register("rates", {
						required: {
							value: true,
							message: `messageRequired`,
						},
					})}
					type="radio"
					value={el}
				/>
				{el}
			</label>
		</li>
	);
};
