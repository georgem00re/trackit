
import Divider from "./Divider";

interface ColumnProps {
	title: string
}

export default function Column({ title }: ColumnProps) {
	return (
		<div class="column has-background-white m-2 box">
			<h1 class="title is-6">{title}</h1>
			<Divider color="#212121"/>
		</div>
	)
}