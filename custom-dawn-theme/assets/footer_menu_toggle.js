function setupFooterToggle() {
  if (window.innerWidth > 768) return;

  document.querySelectorAll('.footer-block--menu').forEach((block) => {
    const heading = block.querySelector('.footer-block__heading');
    const content = block.querySelector('.footer-block__details-content');

    if (!heading || !content || block.dataset.toggleApplied === 'true') return;
    block.dataset.toggleApplied = 'true';

    // Add icon if not added
    if (!heading.querySelector('.toggle-icon-wrapper')) {
      const iconWrapper = document.createElement('span');
      iconWrapper.classList.add('toggle-icon-wrapper');
      iconWrapper.innerHTML = `
        <svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7" fill="none">
          <path d="M6.00001 1.70762L1.40001 6.30762L0.692261 5.59987L6.00001 0.292117L11.3078 5.59987L10.6 6.30762L6.00001 1.70762Z" fill="currentColor"/>
        </svg>
      `;
      heading.appendChild(iconWrapper);
    }

    heading.addEventListener('click', () => {
      const isOpen = block.classList.contains('is-open');

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px'; // trigger reflow
        requestAnimationFrame(() => {
          content.style.maxHeight = '0px';
        });
        block.classList.remove('is-open');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        block.classList.add('is-open');

        // Optional: reset to auto after transition
        content.addEventListener('transitionend', function handler() {
          if (block.classList.contains('is-open')) {
            content.style.maxHeight = 'none';
          }
          content.removeEventListener('transitionend', handler);
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', setupFooterToggle);

// Reset and re-init on resize
window.addEventListener('resize', () => {
  document.querySelectorAll('.footer-block--menu').forEach((block) => {
    const content = block.querySelector('.footer-block__details-content');
    const icon = block.querySelector('.toggle-icon-wrapper');

    if (window.innerWidth > 768) {
      block.classList.remove('is-open');
      block.dataset.toggleApplied = '';
      if (content) {
        content.style.maxHeight = '';
        content.style.overflow = '';
      }
      if (icon) icon.remove();
    } else {
      setupFooterToggle();
    }
  });
});
