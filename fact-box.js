import { createPriceWidget } from './widget.js';

function loadFactBox(containerId) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }
  createPriceWidget(containerId);
}

// Automatically run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  loadFactBox('widget-placeholder');
});
