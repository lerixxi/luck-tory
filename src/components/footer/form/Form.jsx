import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import { radioItems } from "@/data/footer";
import { RadioItem } from "./radioItem/RadioItem";

import styles from "./Form.module.scss";

export const Form = () => {
	const {
		register,
		formState: { errors, isSubmitSuccessful, isSubmitting },
		handleSubmit,
		reset,
	} = useForm({
		mode: "all",
	});

	const onSubmit = async (data) => {
		// let message = `<i>Application from the website</i>\n`;
		// message += `<i>Sender's name:</i> <b>${data.name}</b>\n`;
		// message += `<i>Method of Communication:</i> <b>${data.method}</b>\n`;
		// message += `<i>Sender's Idea:</i> <b>${data.describe}</b>`;

		try {
			// await axios.post(
			// 	"https://sheet.best/api/sheets/fa25e0b1-b286-4206-a717-6aae8e6e9049",
			// 	data
			// );
			// await axios.post(
			// 	"https://api.telegram.org/bot6277992489:AAFgm4AvImhQxrkcyGBe5MAeOyd7_1uge8o/sendMessage",
			// 	{
			// 		chat_id: "-1001714004559",
			// 		parse_mode: "html",
			// 		text: message,
			// 	}
			// );

			// console.log(radioItems);
			console.log(data);
			reset();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className={styles.form}>
			<ul className={` ${styles.radioList}`}>
				{radioItems.map((el, index) => (
					<RadioItem key={index} el={el} register={register} />
				))}

				{errors?.rates && (
					<p className={styles.error}>
						{errors?.rates?.message || "Упс! Щось пішло не так"}
					</p>
				)}
			</ul>

			<div className={styles.labelBox}>
				<label>
					Ім&#39;я
					<input
						{...register("name", {
							required: `Поле обов'язкове для заповнення`,
							minLength: {
								value: 3,
								message: `Не менше 3 символів`,
							},
						})}
						type="text"
						aria-label="name"
					/>
					{errors?.name && (
						<p className={styles.error}>
							{errors?.name?.message || "Упс! Щось пішло не так"}
						</p>
					)}
				</label>
				<label>
					Номер
					<input
						{...register("tel", {
							required: `Поле обов'язкове для заповнення`,
						})}
						type="tel"
						aria-label="tel"
					/>
					{errors?.tel && (
						<p className={styles.error}>
							{errors?.tel?.message || "Упс! Щось пішло не так"}
						</p>
					)}
				</label>
			</div>

			{isSubmitting ? (
				<ThreeDots
					height="50"
					width="50"
					radius="9"
					color="#7272B8"
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					wrapperClassName=""
					visible={true}
				/>
			) : (
				<button onClick={handleSubmit(onSubmit)} type="button">
					Надіслати
				</button>
			)}

			{isSubmitSuccessful && (
				<div className={styles.successBox}>
					<p className={styles.successText}>
						Данные успешно отправлены
					</p>
				</div>
			)}
		</form>
	);
};
