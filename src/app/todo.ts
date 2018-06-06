export class Todo {
	id: number;
	title: string = '';
	priority: string = '1';
	complete: boolean = false;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}
