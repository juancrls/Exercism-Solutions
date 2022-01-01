export class CustomSet {
	constructor(values) {
		this._values = values || [];
	}
	
	get length() {
		return this._values.length;
	}
	
	empty() {
		return this._values.length === 0;
	}
	
	add(value) {
		if (!this.contains(value)) {
			this._values.push(value);
		}
		
		return this;
	}
	
	contains(value) {
		return this._values.includes(value);
	}
	
	subset(newSet) {
		return this._values.every(value => newSet.contains(value));
	}
	
	disjoint(newSet) {
		return !this._values.some(value => newSet.contains(value));
	}
	
	eql(newSet) {
		return (this.length === newSet.length) && (this.subset(newSet));
	}
	
	intersection(newSet) {
		return new CustomSet(this._values.filter(value => newSet.contains(value)));
	}
	
	difference(newSet) {
		return new CustomSet(this._values.filter(value => !newSet.contains(value)));
	}
	
	union(newSet) {
		const unionSet = new CustomSet(this._values);
		newSet._values.forEach(value => unionSet.add(value));
		
		return unionSet;
	}
} 