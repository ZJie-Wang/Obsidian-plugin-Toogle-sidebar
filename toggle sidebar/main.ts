
import { Plugin } from 'obsidian';



	export default class ToggleSidebarPlugin extends Plugin {

	leftRibbon!: HTMLElement;

	rightRibbon!: HTMLElement;

	async onload() {
		this.addRibbonIcon('menu', 'Toggle left sidebar', () => {
			this.app.workspace.leftSplit.toggle();
		});

		this.addRibbonIcon('menu', 'Toggle right sidebar', () => {
			this.app.workspace.rightSplit.toggle();
		});

		// Wait for the workspace to be properly initialized before adding DOM elements
		this.app.workspace.onLayoutReady(() => {
			this.initializeSidebarButtons();
		});
	}

	private initializeSidebarButtons() {
		// Create the toggle sidebar buttons
		this.leftRibbon = createDiv({ cls: 'toggle-sidebar-button' });
		this.rightRibbon = createDiv({ cls: 'toggle-sidebar-button right' });

		// Add to the workspace container
		this.app.workspace.containerEl.appendChild(this.leftRibbon);
		this.app.workspace.containerEl.appendChild(this.rightRibbon);

		// Register click events
		this.registerDomEvent(this.leftRibbon, 'click', () => {
			this.app.workspace.leftSplit.toggle();
		});

		this.registerDomEvent(this.rightRibbon, 'click', () => {
			this.app.workspace.rightSplit.toggle();
		});
	}

	onunload() {
		// Safely remove the elements if they exist
		if (this.leftRibbon && this.leftRibbon.parentNode) {
			this.leftRibbon.detach();
		}
		if (this.rightRibbon && this.rightRibbon.parentNode) {
			this.rightRibbon.detach();
		}
	}
}
