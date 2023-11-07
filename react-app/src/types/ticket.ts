
export default interface Ticket {
	id: string
	summary: string,
	description: string,
	status: TicketStatus,
	created: number,
	priority: TicketPriority,
	number: number,
}

export enum TicketStatus {
	BLOCKED = "BLOCKED",
	TODO = "TODO",
	IN_PROGRESS = "IN PROGRESS",
	DONE = "DONE"
}

export enum TicketPriority {
	LOW = "Low",
	MEDIUM = "Medium",
	HIGH = "High",
}