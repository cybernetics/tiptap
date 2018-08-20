import { Node } from 'vue-mirror/utils'

export default class TextNode extends Node {

	get name() {
		return 'text'
	}

	get schema() {
		return {
			group: 'inline',
		}
	}

}