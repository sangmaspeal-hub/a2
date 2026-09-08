// Bamboo Knit Reef — Interactive Knitwear Engine
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
    });
  }

  // Interactive Tabs (Collection Matrix)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const target = this.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const targetEl = document.getElementById(target);
        if (targetEl) targetEl.classList.add('active');
      });
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', function() {
      const item = this.parentElement;
      item.classList.toggle('open');
    });
  });
});
